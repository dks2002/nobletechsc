import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[--color-border] bg-[--color-bg-alt] text-sm">
      <div className="container-site py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3 max-w-xs">
          <h3 className="font-semibold text-base">{COMPANY.name}</h3>
          <p className="text-[--color-text-subtle] text-sm leading-relaxed">We build modern web, mobile, and software solutions enabling digital transformation.</p>
          <p className="text-[--color-text-subtle] text-xs">© {new Date().getFullYear()} {COMPANY.shortName}. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(l => (
              <li key={l.href}><Link href={l.href} className="hover:text-[--color-primary-600] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-[--color-text-subtle]">
            <li>{COMPANY.location}</li>
            <li><a href={`tel:${COMPANY.phone}`} className="hover:text-[--color-primary-600]">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-[--color-primary-600]">{COMPANY.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Mission</h4>
          <p className="text-[--color-text-subtle] text-sm leading-relaxed">{COMPANY.mission}</p>
        </div>
      </div>
    </footer>
  );
}
