import { COMPANY } from '../../lib/constants';
import { ContactForm } from '../../components/contact/ContactForm';
import { AnimatedReveal } from '../../components/ui/AnimatedReveal';

export const metadata = {
  title: 'Contact | Noble Technology Solution Center',
  description: 'Contact Noble Technology Solution Center in Accra, Ghana for web development, mobile apps, cloud solutions, UI/UX, and IT consulting inquiries.',
  keywords: ['contact noble tech','software company accra contact','hire developers ghana','start project noble technology solution center']
};

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="section">
        <div className="container-site grid gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-8 max-w-xl">
            <AnimatedReveal><span className="eyebrow">Contact</span></AnimatedReveal>
            <AnimatedReveal index={1}><h1 className="text-4xl font-bold leading-tight">Let’s build something together</h1></AnimatedReveal>
            <AnimatedReveal index={2}><p className="text-lg text-[--color-text-soft] leading-relaxed">Tell us about your goals and we’ll help you plan and deliver the right solution.</p></AnimatedReveal>
            <AnimatedReveal index={3}>
              <ul className="text-sm text-[--color-text-subtle] space-y-2">
                <li><strong>Address:</strong> {COMPANY.location}</li>
                <li><strong>Phone:</strong> <a href={`tel:${COMPANY.phone}`} className="hover:text-[--color-primary-600]">{COMPANY.phone}</a></li>
                <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="hover:text-[--color-primary-600]">{COMPANY.email}</a></li>
              </ul>
            </AnimatedReveal>
          </div>
          <AnimatedReveal index={1}>
            <ContactForm />
          </AnimatedReveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container-site text-center space-y-4">
          <AnimatedReveal><h2 className="text-2xl font-semibold">Serving clients across Ghana & beyond</h2></AnimatedReveal>
          <AnimatedReveal index={1}><p className="text-[--color-text-soft] max-w-2xl mx-auto">We partner with startups, SMEs, educational institutions, and enterprises to deliver reliable digital platforms.</p></AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
