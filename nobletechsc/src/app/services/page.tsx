import { SERVICES } from '../../lib/constants';
import { AnimatedReveal } from '../../components/ui/AnimatedReveal';

export const metadata = {
  title: 'Services | Noble Technology Solution Center',
  description: 'Explore web development, mobile app development, custom software, cloud & hosting, UI/UX design, digital marketing & SEO, and IT consulting services in Ghana.',
  keywords: ['web development ghana','mobile app development accra','custom software ghana','cloud hosting solutions','ui ux design ghana','digital marketing seo ghana','it consulting support ghana']
};

export default function ServicesPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="section">
        <div className="container-site space-y-8 max-w-3xl">
          <AnimatedReveal><span className="eyebrow">Services</span></AnimatedReveal>
          <AnimatedReveal index={1}><h1 className="text-4xl font-bold">Comprehensive technology solutions</h1></AnimatedReveal>
          <AnimatedReveal index={2}><p className="text-lg text-[--color-text-soft]">We deliver strategy, design, development, deployment, and long-term support across platforms and technologies.</p></AnimatedReveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container-site space-y-12">
          <div className="grid-auto-fit">
            {SERVICES.map((s,i) => (
              <AnimatedReveal key={s.key} index={i} className="card">
                <h3 className="font-semibold mb-2 text-lg">{s.name}</h3>
                <p className="text-sm text-[--color-text-subtle] leading-relaxed mb-4">{s.description}</p>
                <ul className="text-xs space-y-1 text-[--color-text-subtle] mb-4">
                  {s.bullets.map(b => <li key={b}>• {b}</li>)}
                </ul>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
