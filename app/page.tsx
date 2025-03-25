import Image from "next/image";
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import FeaturesSection from './components/FeaturesSection';
import ApiSection from './components/ApiSection';
import WhySection from './components/WhySection';
import ModelProvidersSection from './components/ModelProvidersSection';
import StatsSection from './components/StatsSection';
import SecuritySection from './components/SecuritySection';
import PricingSection from './components/PricingSection';
import BlogsSection from './components/BlogsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import PngSection from "./components/PngSection";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <ProvidersMarquee /> */}
      <VideoSection />
      <FeaturesSection />
      <ApiSection />
      <WhySection />
      <StatsSection />
      <SecuritySection />

      <ModelProvidersSection />
      <PricingSection />
      <PngSection />

      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />

    </>
  );
}
