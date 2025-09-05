import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { Values } from '../components/home/Values';
import { MissionVision } from '../components/home/MissionVision';
import { CTA } from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Values />
      <MissionVision />
      <CTA />
    </>
  );
}
