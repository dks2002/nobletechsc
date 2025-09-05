import Link from 'next/link';
import { Button } from '../ui/Button';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export function CTA() {
  return (
    <section className="section" id="cta">
      <div className="container-site">
        <div className="card relative overflow-hidden p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary-500]/15 via-transparent to-[--color-accent]/20 pointer-events-none" />
          <AnimatedReveal className="space-y-6 relative">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to build something impactful?</h2>
            <p className="text-[--color-text-soft] max-w-xl mx-auto">Let’s collaborate to design and build digital products that accelerate your growth.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild><Link href="/contact">Start Your Project</Link></Button>
              <Button variant="outline" asChild><Link href="/services">Explore Services</Link></Button>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
