import Image from "next/image";
import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import FeaturesSection from './sections/FeaturesSection';
import ApiSection from './sections/ApiSection';
import WhySection from './sections/WhySection';
import ModelProvidersSection from './sections/ModelProvidersSection';
import StatsSection from './sections/StatsSection';
import SecuritySection from './sections/SecuritySection';
import PricingSection from './sections/PricingSection';
import BlogsSection from './sections/BlogsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import PngSection from "./sections/PngSection";
import ProvidersMarquee from "./sections/ProvidersMarquee";
export default function Home() {
  return (
    <>
      <Hero />
      <ProvidersMarquee />
      <VideoSection />
      <FeaturesSection />
      <ApiSection />
      <WhySection />
      <StatsSection />
      <SecuritySection />

      <ModelProvidersSection />
      <PricingSection />
      {/* <PngSection /> */}

      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />

    </>
  );
}
