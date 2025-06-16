
import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
import RagStatsSection from "./sections/rag-stats";
// import QuantumSection from "./sections/quantum";
import FAQ from "./sections/faq";
import SmallFoot from "@/app/sections-old/smallFoot";
import IntroSection from "./sections/IntroSection";
import TechniquesSection from "./sections/TechniquesSection";
import WhySection from "./sections/WhySection";

export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            <IntroSection />
            {/* <Features /> */}
            <Ideas />
            {/* <Metrics /> */}
            <TechniquesSection />
            {/* <Security /> */}
            <WhySection />
            <RagStatsSection />
            {/* <QuantumSection /> */}
            <FAQ />
            <SmallFoot title="Get Started with Smarter AI Evaluations" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
        </main>
    );
}
 