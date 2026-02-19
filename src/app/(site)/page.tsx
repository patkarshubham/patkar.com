import BenefitsGrid from '@/components/sections/benefits-grid';
import TestimonialsSection from '@/components/sections/client-testimonial';
import FaqAccordion from '@/components/sections/faq-accordion';
import HeroSection from '@/components/sections/hero-section';
import ToolsTab from '@/components/sections/tools-tab';
import { CoreFeatures } from '@/components/sections/core-features';
import PricingSection from '@/components/sections/pricing';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CoreFeatures />
      <ToolsTab />
      <BenefitsGrid />
      <TestimonialsSection />
      <PricingSection />
      <FaqAccordion />
    </>
  );
}
