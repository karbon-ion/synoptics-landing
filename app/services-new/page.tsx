import BlogsSection from '../sections/BlogsSection';
import Hero from './sections/Hero';
import ProofOfConcept from './sections/ProofOfConcept';
import Training from './sections/Training';
import FeaturesSection from './sections/features';
import ResultsSection from './sections/ResultsSection';

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ProofOfConcept />
      <Training />
      <FeaturesSection />
      <ResultsSection/>
      <div className="container mx-auto mt-12 md:mt-16 px-4 md:px-0">
                <h2 className="text-2xl md:text-[36px] leading-tight md:leading-[45px]" style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    letterSpacing: "0%",
                    textAlign: "center"
                }}>
                    Other Resources
                </h2>
            </div>
      <BlogsSection />
    </main>
  );
}