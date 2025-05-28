import HeroSection from './sections/hero';
import FeaturesSection from './sections/features';
import AgentTypesSection from './sections/AgentTypesSection';
import BlogSection from "../platform/sections/blog-section";

export default function SynoptixAgentsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AgentTypesSection />
      <BlogSection/>
    </main>
  );
}