import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as nodemailer from 'nodemailer';

// Basic runtime validation (lightweight; full validation done client-side with zod)
interface ContactPayload { name?: string; email?: string; phone?: string; message?: string; }

function isValidEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();
    if (!data.name || !data.email || !data.message || !isValidEmail(data.email)) {
      return NextResponse.json({ success: false, error: 'Validation failed' }, { status: 422 });
    }

    const toAddress = process.env.CONTACT_TO_EMAIL || 'ndsolutionsgh@gmail.com';
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD; // App password (not regular password)

    if (!user || !pass) {
      console.warn('Gmail credentials not set. Skipping email send.');
      console.log('Contact submission (no email sent)', data);
      return NextResponse.json({ success: true, note: 'Email not sent (server not configured)' });
    }

    const allowInsecure = process.env.MAIL_ALLOW_INSECURE_TLS === 'true';
    const useAlt = process.env.MAIL_GMAIL_ALT_PORT === 'true';
    const debug = process.env.MAIL_DEBUG === 'true';
    const host = 'smtp.gmail.com';
    const port = useAlt ? 587 : 465; // 465 = SSL, 587 = STARTTLS
    const secure = port === 465 && !allowInsecure; // use SSL for 465 unless insecure override

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: allowInsecure ? { rejectUnauthorized: false } : undefined,
      logger: debug,
      debug
    });

    if (debug) {
      console.log('Mail debug config', { host, port, secure, allowInsecure });
    }

    // Skip verify if insecure to avoid TLS chain rejection in intercepted environments
    if (!allowInsecure) {
      try {
        await transporter.verify();
      } catch (verifyErr: any) {
        console.error('Mail transporter verify failed', verifyErr);
        return NextResponse.json({ success: false, error: 'Email transport configuration failed', code: verifyErr?.code || 'VERIFY_FAIL' }, { status: 500 });
      }
    }

    const html = `<div style="font-family:system-ui,Arial,sans-serif;line-height:1.5;font-size:14px">\n<h2 style="margin:0 0 12px">New Contact Form Submission</h2>\n<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>\n<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>\n${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}\n<p style="white-space:pre-wrap"><strong>Message:</strong><br>${escapeHtml(data.message!)}</p>\n<hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0"/>\n<p style="font-size:12px;color:#64748b">This email was generated from the website contact form.</p>\n</div>`;

    await transporter.sendMail({
      from: `Website Contact <${user}>`,
      replyTo: data.email,
      to: toAddress,
      subject: `New Inquiry from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n${data.phone ? `Phone: ${data.phone}\n` : ''}Message:\n${data.message}`,
      html
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error('Contact form error', e);
    const code = e?.code;
    // Provide slightly more descriptive errors for common nodemailer issues
    if (code === 'EAUTH') {
      return NextResponse.json({ success: false, error: 'Authentication with Gmail failed', code }, { status: 500 });
    }
    if (code === 'ESOCKET') {
      return NextResponse.json({ success: false, error: 'Network/TLS connection issue to mail server', code }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: 'Server error', code: code || 'UNKNOWN' }, { status: 500 });
  }
}

function escapeHtml(str?: string) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
