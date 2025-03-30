'use client'

import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
import WhySection from "../sections/WhySection";
import RagStatsSection from "./sections/rag-stats";
// import QuantumSection from "./sections/quantum";
import FAQ from "./sections/faq";
import TestimonialsSection from "../sections/TestimonialsSection";
import SmallFoot from "../sections/smallFoot";
export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            <Features />
            <Ideas />
            <Metrics />
            {/* <Security /> */}
            <WhySection />
            <RagStatsSection />
            {/* <QuantumSection /> */}
            <FAQ />
            <TestimonialsSection />
            <SmallFoot title="Start Your Journey to Smarter Workflows" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
        </main>
    );
}
 