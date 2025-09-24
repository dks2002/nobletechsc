import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { Values } from '../components/home/Values';
import { MissionVision } from '../components/home/MissionVision';
import { CTA } from '../components/home/CTA';

export default function Home() {
  return (
    <div className="pt-[calc(var(--nav-height)+0.5rem)] md:pt-[var(--nav-height)]">
      <Hero />
      <ServicesPreview />
      <Values />
      <MissionVision />
      <CTA />
    </div>
  );
}
