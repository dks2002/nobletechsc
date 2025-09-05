import { SERVICES } from '../../lib/constants';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import Link from 'next/link';

export function ServicesPreview() {
  return (
    <section className="section" id="services">
      <div className="container-site space-y-10">
        <div className="max-w-xl">
          <AnimatedReveal>
            <span className="eyebrow">What We Do</span>
          </AnimatedReveal>
          <AnimatedReveal index={1} className="space-y-4">
            <h2 className="text-3xl font-bold">Delivering end-to-end technology solutions</h2>
            <p className="text-[--color-text-soft]">From strategy to deployment, we help you build, launch, and scale digital products that matter.</p>
          </AnimatedReveal>
        </div>
        <div className="grid-auto-fit">
          {SERVICES.slice(0,6).map((s, i) => (
            <AnimatedReveal key={s.key} index={i} className="card">
              <h3 className="font-semibold mb-2">{s.name}</h3>
              <p className="text-sm text-[--color-text-subtle] mb-3 leading-relaxed">{s.description}</p>
              <ul className="text-xs space-y-1 text-[--color-text-subtle] mb-4">
                {s.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
              <Link href="/services" className="text-[--color-primary-600] text-sm font-medium hover:underline">Learn more →</Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
