import { COMPANY } from '../../lib/constants';
import { Button } from '../ui/Button';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="section bg-fade pt-[calc(var(--nav-height)+2rem)]" id="hero">
      <div className="container-site grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <AnimatedReveal>
            <span className="eyebrow">Innovate. Build. Transform.</span>
          </AnimatedReveal>
          <AnimatedReveal index={1} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl"><span className="gradient-text">Technology solutions</span> that drive growth & digital transformation.</h1>
            <p className="text-lg text-[--color-text-soft] max-w-xl">{COMPANY.name} builds modern web, mobile, and custom software that empowers organizations across Ghana & Africa.</p>
          </AnimatedReveal>
          <AnimatedReveal index={2}>
            <div className="flex gap-4 flex-wrap">
              <Button asChild><Link href="/contact">Start a Project</Link></Button>
              <Button variant="outline" asChild><Link href="/services">Our Services</Link></Button>
            </div>
          </AnimatedReveal>
          <AnimatedReveal index={3}>
            <ul className="flex flex-wrap gap-6 text-sm text-[--color-text-subtle]">
              <li>Web Apps</li>
              <li>Mobile Apps</li>
              <li>Cloud & DevOps</li>
              <li>Consulting</li>
            </ul>
          </AnimatedReveal>
        </div>
        <AnimatedReveal index={2} className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden border border-[--color-border] bg-[--color-bg-alt] flex-center">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[--color-primary-500]/40 via-transparent to-[--color-accent]/40" />
          <div className="relative text-center p-10">
            <p className="text-sm uppercase tracking-wider font-semibold text-[--color-primary-600] mb-3">Noble Technology Solution Center <br/>(NTSC)</p>
            <p className="text-2xl font-semibold max-w-xs leading-snug">Crafting reliable & scalable digital products.</p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
