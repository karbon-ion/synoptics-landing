'use client'

import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
// import WhySection from "../sections/WhySection";
import RagStatsSection from "./sections/rag-stats";
import QuantumSection from "../rag-application/sections/quantum";
import FAQ from "./sections/faq";
import TestimonialsSection from "../sections/TestimonialsSection";
// import FeaturesSection from "../sections/FeaturesSection";
import Capabilities from "./sections/capabilities";
import SmallFoot from "../sections/smallFoot";
import ResultSection from "./sections/results";
import TechniquesSection from "./sections/TechniqueSection";
import WhySection from "./sections/WhySection";
import FeaturesSection from "./sections/FeaturesSection";
import IntroSection from "./sections/IntroSection";

export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            {/* <Features />
             */}
            <IntroSection />
            <Ideas />
            <Capabilities />
            {/* <FeaturesSection /> */}
            {/* <Metrics /> */}
            {/* <Security /> */}
            <WhySection />
            {/* <RagStatsSection /> */}
            <ResultSection/>
            <TechniquesSection/>
            {/* <QuantumSection /> */}
            <FAQ />
            {/* <TestimonialsSection /> */}
            <SmallFoot title="Explore Enterprise AI Agent" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
        </main>
    );
}
 