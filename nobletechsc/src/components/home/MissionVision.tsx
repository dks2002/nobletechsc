import { COMPANY } from '../../lib/constants';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export function MissionVision() {
  return (
    <section className="section" id="mission-vision">
      <div className="container-site grid gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <AnimatedReveal>
            <span className="eyebrow">Mission</span>
          </AnimatedReveal>
          <AnimatedReveal index={1}>
            <h2 className="text-2xl font-semibold mb-4">Empowering digital transformation</h2>
          </AnimatedReveal>
          <AnimatedReveal index={2}>
            <p className="text-[--color-text-soft] leading-relaxed max-w-prose">{COMPANY.mission}</p>
          </AnimatedReveal>
        </div>
        <div className="space-y-6">
          <AnimatedReveal>
            <span className="eyebrow">Vision</span>
          </AnimatedReveal>
          <AnimatedReveal index={1}>
            <h2 className="text-2xl font-semibold mb-4">Shaping the future of African technology</h2>
          </AnimatedReveal>
          <AnimatedReveal index={2}>
            <p className="text-[--color-text-soft] leading-relaxed max-w-prose">{COMPANY.vision}</p>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
