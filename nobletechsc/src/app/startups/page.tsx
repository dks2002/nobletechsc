import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Startup Programs & Deals',
  description: 'Flexible IT packages tailored for startups — discounted bundles, free consultation, and dedicated support to help you launch and scale with confidence.',
  keywords: ['startup IT packages', 'discount IT deals', 'startup support Ghana', 'flexible IT contracts', 'free IT consultation'],
};

function Card({ title, bullets, badge, cta }: { title: string; bullets: string[]; badge?: string; cta?: { label: string; href: string } }) {
  return (
    <div className="card p-6 flex flex-col">
      {badge && <span className="self-start text-xs font-semibold text-[--color-primary-700] bg-[--color-primary-50] dark:bg-[--color-primary-700]/20 px-2 py-1 rounded mb-3">{badge}</span>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-[--muted]">
        {bullets.map((b) => (<li key={b} className="flex gap-2">•<span>{b}</span></li>))}
      </ul>
      <div className="mt-6">
        <Link href={cta?.href || '/contact'} className="btn w-full">{cta?.label || 'Get started'}</Link>
      </div>
    </div>
  );
}

export default function StartupsPage() {
  return (
    <main className="min-h-screen pt-[calc(var(--nav-height)+0.5rem)] md:pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="section py-20">
        <div className="container-site grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Startup Programs by {COMPANY.shortName}</h1>
            <p className="mt-4 text-[--muted] text-lg">Launch faster with enterprise-grade expertise. We designed flexible packages, bundles, and contracts that match a startup’s reality — lean budgets, tight timelines, and the need for a reliable technical partner.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#packages" className="btn">Explore Packages</Link>
              <Link href="/contact" className="btn-outline">Free 30‑min Consultation</Link>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[--color-primary-600] to-[--color-primary-400] p-[1px]">
            <div className="rounded-xl bg-[--color-surface] p-6">
              <p className="text-sm text-[--muted]">What you get</p>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <li className="card p-3">Priority support</li>
                <li className="card p-3">Founder-friendly pricing</li>
                <li className="card p-3">Scalable architecture</li>
                <li className="card p-3">Launch readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section py-8">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-bold">Startup Packages</h2>
          <p className="mt-2 text-[--muted]">Pick a plan that fits where you are today — and upgrade seamlessly as you grow.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Launch Lite"
              bullets={[
                '1–3 page website (responsive, SEO‑ready)',
                'Domain & hosting setup',
                'Basic brand styling',
                'Email & WhatsApp contact integration',
                '6 months of updates & support',
              ]}
              badge="Best for idea-stage"
            />
            <Card
              title="Launch Pro"
              bullets={[
                '5–10 page website or MVP landing + blog',
                'Performance & security hardening',
                'Basic analytics + SEO setup',
                '2 integrations (payments, forms, CRM, etc.)',
                '9 months of updates & support',
              ]}
              badge="Popular"
            />
            <Card
              title="MVP Build"
              bullets={[
                'Custom MVP (web/app) scoped to goals',
                'Agile delivery (sprints, demos)',
                'Cloud hosting & CI/CD setup',
                'QA + UAT, launch checklist',
                '12 months of support & optimization',
              ]}
              badge="For funded teams"
            />
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="section py-8">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-bold">Bundle Deals — Save More</h2>
          <p className="mt-2 text-[--muted]">Combine essentials at startup-friendly rates.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Brand + Website Starter"
              bullets={[
                'Logo + brand kit (colors, typography)',
                '5-page responsive website',
                'SEO basics + Google Business Profile',
                'Support up to 12 months',
              ]}
              cta={{ label: 'Claim this bundle', href: '/contact' }}
            />
            <Card
              title="E‑commerce Kickoff"
              bullets={[
                'Storefront + payments integration',
                'Product management & email receipts',
                'Analytics + conversion setup',
                'Support up to 18 months',
              ]}
              cta={{ label: 'Launch my store', href: '/contact' }}
            />
            <Card
              title="App MVP Essentials"
              bullets={[
                'Clickable prototype + user testing',
                'MVP (core features) + API',
                'Deploy to TestFlight/Play Internal',
                'Support up to 24 months',
              ]}
              cta={{ label: 'Build my MVP', href: '/contact' }}
            />
          </div>
        </div>
      </section>

      {/* Flexible Contracts */}
      <section className="section py-8">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-bold">Flexible Contracts — Exclusive Startup Advantage</h2>
          <p className="mt-2 text-[--muted]">Work with us exclusively for 12–24 months on your IT needs and unlock deeper savings.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="font-semibold">12‑Month Partner</h3>
              <ul className="mt-3 text-sm text-[--muted] space-y-2">
                <li>• 10% discount on projects</li>
                <li>• Priority queue and faster SLAs</li>
                <li>• Free technical support (business hours)</li>
                <li>• Quarterly strategy sessions</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">24‑Month Partner</h3>
              <ul className="mt-3 text-sm text-[--muted] space-y-2">
                <li>• 15% discount on projects</li>
                <li>• Dedicated success manager</li>
                <li>• Free priority technical support</li>
                <li>• Bi‑monthly roadmap reviews</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Startup Elite (Invite‑only)</h3>
              <ul className="mt-3 text-sm text-[--muted] space-y-2">
                <li>• Up to 20% discount + revenue‑share options</li>
                <li>• Embedded product/tech team</li>
                <li>• On‑call senior architects</li>
                <li>• Investor‑ready reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section py-8">
        <div className="container-site card p-8 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold">Free Consultation for Startups</h3>
            <p className="mt-2 text-[--muted]">Get a 30‑minute session to assess your idea, stack, and go‑to‑market. We’ll recommend the fastest path to launch and where to save costs.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link href="/contact" className="btn">Book now</Link>
            <Link href="/services" className="btn-outline">See all services</Link>
          </div>
        </div>
      </section>

      {/* What we can do for you (from Services) */}
      <section className="section py-8">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-bold">What we can do for your startup</h2>
          <p className="mt-2 text-[--muted]">Beyond packages, we tailor solutions using our full services stack to meet your current stage and roadmap.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card p-5">
              <h4 className="font-semibold">Branding & Design</h4>
              <p className="mt-2 text-sm text-[--muted]">Logo, brand kits, pitch decks, and design systems that make your product look and feel investor‑ready.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">SEO & Growth</h4>
              <p className="mt-2 text-sm text-[--muted]">SEO audits, performance tuning, content strategy, analytics and conversion optimization to drive acquisition.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Web & App Development</h4>
              <p className="mt-2 text-sm text-[--muted]">Modern web apps and mobile apps with secure, scalable architecture and rapid delivery cycles.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Cloud & DevOps</h4>
              <p className="mt-2 text-sm text-[--muted]">Cloud setup, CI/CD, monitoring, and cost optimization from day one so you can scale confidently.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Security & Compliance</h4>
              <p className="mt-2 text-sm text-[--muted]">Best‑practice security, backup & recovery, and compliance guidance suitable for early‑stage teams.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Training & Support</h4>
              <p className="mt-2 text-sm text-[--muted]">Hands‑on onboarding, documentation, and workshops for founders and teams.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/services" className="btn">Explore all services</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-8">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-bold">FAQs for Startups</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="card p-5">
              <h4 className="font-semibold">Can we start small and scale?</h4>
              <p className="mt-2 text-sm text-[--muted]">Yes — our packages are modular. Begin with a landing page or prototype and upgrade as you gain traction.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Do you offer payment plans?</h4>
              <p className="mt-2 text-sm text-[--muted]">For most packages we split payments by milestones or months to ease cashflow.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Will you support fundraising?</h4>
              <p className="mt-2 text-sm text-[--muted]">We can prepare product demos, metrics, and technical docs that help your investor conversations.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">What if we already have a dev?</h4>
              <p className="mt-2 text-sm text-[--muted]">We collaborate well with existing teams — audits, architecture reviews, or specific feature builds.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">How fast can we launch?</h4>
              <p className="mt-2 text-sm text-[--muted]">Landing pages can launch in 1–2 weeks; MVPs typically 4–10 weeks depending on scope. We work in sprints with clear demos.</p>
            </div>
            <div className="card p-5">
              <h4 className="font-semibold">Do you help after launch?</h4>
              <p className="mt-2 text-sm text-[--muted]">Yes — every package includes at least 6 months of updates and support; larger builds include up to 12 months. Bundles provide up to 24 months.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
