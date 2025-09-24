import { COMPANY, CORE_VALUES } from '../../lib/constants';
import { AnimatedReveal } from '../../components/ui/AnimatedReveal';

export const metadata = {
  title: `About | ${COMPANY.name}`,
  description: `Learn about ${COMPANY.name}, our mission, vision, core values, and innovation culture in Accra, Ghana.`,
  keywords: ['about noble technology solution center','ghana software company','tech company accra','mission and vision noble tech']
};

export default function AboutPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="section">
        <div className="container-site space-y-8 max-w-3xl">
          <AnimatedReveal>
            <span className="eyebrow">About Us</span>
          </AnimatedReveal>
          <AnimatedReveal index={1}>
            <h1 className="text-4xl font-bold leading-tight mb-4">Building impactful technology for Africa and beyond</h1>
          </AnimatedReveal>
          <AnimatedReveal index={2}>
            <p className="text-lg text-[--color-text-soft] leading-relaxed">Based in Accra, Ghana, {COMPANY.name} was established with a passion for innovation and a commitment to helping businesses and institutions thrive in the digital age. We’ve grown into a trusted partner for organizations seeking modern, reliable, and scalable technology solutions.</p>
          </AnimatedReveal>
          <AnimatedReveal index={3}>
            <p className="text-[--color-text-soft] leading-relaxed">We specialize in building web applications, mobile apps (iOS & Android), software systems, and websites tailored to meet the unique needs of our clients. Our focus is on delivering cutting-edge solutions that are functional, user-friendly, secure, and future-ready.</p>
          </AnimatedReveal>
          <AnimatedReveal index={4}>
            <p className="text-[--color-text-soft] leading-relaxed">With a dedicated team of creative developers, designers, and strategists, we continue to bridge the gap between technology and business growth in Ghana and beyond.</p>
          </AnimatedReveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 max-w-prose">
            <AnimatedReveal>
              <span className="eyebrow">Mission</span>
            </AnimatedReveal>
            <AnimatedReveal index={1}>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </AnimatedReveal>
            <AnimatedReveal index={2}><p className="text-[--color-text-soft] leading-relaxed">{COMPANY.mission}</p></AnimatedReveal>
          </div>
          <div className="space-y-6 max-w-prose">
            <AnimatedReveal>
              <span className="eyebrow">Vision</span>
            </AnimatedReveal>
            <AnimatedReveal index={1}>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </AnimatedReveal>
            <AnimatedReveal index={2}><p className="text-[--color-text-soft] leading-relaxed">{COMPANY.vision}</p></AnimatedReveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-site space-y-10">
          <div className="max-w-xl">
            <AnimatedReveal>
              <span className="eyebrow">Core Values</span>
            </AnimatedReveal>
            <AnimatedReveal index={1}><h2 className="text-3xl font-bold">Guiding principles</h2></AnimatedReveal>
          </div>
          <div className="grid-auto-fit">
            {CORE_VALUES.map((v,i) => (
              <AnimatedReveal key={v.title} index={i} className="card">
                <h3 className="font-semibold mb-2">{v.title}</h3> 
                <p className="text-sm text-[--color-text-subtle] leading-relaxed">{v.text}</p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
