import HeroSection from './sections/hero';
import FeaturesSection from './sections/features';
import AgentTypesSection from './sections/AgentTypesSection';
import BlogSection from "../../platform/sections/blog-section";

export default function SynoptixAgentsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AgentTypesSection />
      <div className="container mx-auto mt-16">
                <h2 style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "45px",
                    letterSpacing: "0%",
                    textAlign: "center"
                }}>
                    Other Resources
                </h2>
            </div>
      <BlogSection/>
    </main>
  );
}