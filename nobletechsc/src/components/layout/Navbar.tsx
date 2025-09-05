"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_LINKS, COMPANY } from '../../lib/constants';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[--color-border]/70 bg-[--color-bg]/70 backdrop-blur">
      <div className="container-site flex items-center h-[var(--nav-height)] gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Image src="/ntsc_logo.png" alt={COMPANY.shortName} width={42} height={42} className="rounded" />
          <span className="hidden sm:inline">{COMPANY.shortName}</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-2 lg:gap-4 text-sm">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-md hover:bg-[--color-primary-50] hover:text-[--color-primary-700] dark:hover:bg-[--color-primary-700]/25 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn text-sm">Get in touch</Link>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)} className="md:hidden ml-auto btn-outline btn w-11 h-11 p-0">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[--color-border] bg-[--color-bg]">
          <div className="container-site flex flex-col py-4 gap-2">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-[--color-primary-50] dark:hover:bg-[--color-primary-700]/30 transition-colors font-medium">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn mt-2">Get in touch</Link>
          </div>
        </div>
      )}
    </header>
  );
}
