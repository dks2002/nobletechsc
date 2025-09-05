import { CORE_VALUES } from '../../lib/constants';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export function Values() {
  return (
    <section className="section section-alt" id="values">
      <div className="container-site space-y-12">
        <div className="max-w-xl">
          <AnimatedReveal>
            <span className="eyebrow">Core Values</span>
          </AnimatedReveal>
          <AnimatedReveal index={1} className="space-y-4">
            <h2 className="text-3xl font-bold">Principles that shape our culture</h2>
            <p className="text-[--color-text-soft]">We build with integrity, excellence, and collaboration to ensure sustainable impact.</p>
          </AnimatedReveal>
        </div>
        <div className="grid-auto-fit">
          {CORE_VALUES.map((v,i) => (
            <AnimatedReveal key={v.title} index={i} className="card">
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed text-[--color-text-subtle]">{v.text}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
