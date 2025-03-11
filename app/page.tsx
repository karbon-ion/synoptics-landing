import Image from "next/image";
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import FeaturesSection from './components/FeaturesSection';
import ApiSection from './components/ApiSection';
import WhySection from './components/WhySection';
import ModelProvidersSection from './components/ModelProvidersSection';
import StatsSection from './components/StatsSection';
import SecuritySection from './components/SecuritySection';

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <FeaturesSection />
      <ApiSection />
      <WhySection />
      <StatsSection />
      <SecuritySection />
      <ModelProvidersSection />
      {/* Add more sections here as needed */}
    </>
  );
}
