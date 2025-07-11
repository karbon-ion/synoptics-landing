import BlogsSection from '../../sections/BlogsSection';
import Hero from './sections/Hero';
import ProofOfConcept from './sections/ProofOfConcept';
import Training from './sections/Training';
import FeaturesSection from './sections/features';
import ResultsSection from './sections/ResultsSection';

export default function ProofOfConcepts() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ProofOfConcept />
      <Training />
      {/* <FeaturesSection />
      <ResultsSection/> */}
      <div className="container mx-auto mt-8 sm:mt-10 md:mt-16 px-4 sm:px-6 md:px-8">
                <h2 className="text-xl sm:text-2xl md:text-[36px] leading-tight md:leading-[45px]" style={{
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