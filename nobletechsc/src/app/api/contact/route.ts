export const runtime = 'edge';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, phone, message } = data;

  await resend.emails.send({
    from: 'Website Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong><br>${message}</p>
    `
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200
  });
}
