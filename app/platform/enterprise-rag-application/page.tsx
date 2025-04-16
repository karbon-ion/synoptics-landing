'use client'

import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
// import WhySection from "../sections/WhySection";
// import RagStatsSection from "./sections/rag-stats";
import QuantumSection from "./sections/quantum";
import FAQ from "./sections/faq";
import SmallFoot from "@/app/sections/smallFoot";
import TechniquesSection from "./sections/TechniquesSection";
import WhySection from "./sections/WhySection";
export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            <Features />
            <Ideas />
            <TechniquesSection/>
            {/* <Metrics /> */}
            {/* <Security /> */}
            <WhySection />
            {/* <RagStatsSection /> */}
            <QuantumSection />
            <FAQ />
            <SmallFoot title="Explore Enterprise RAG" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
        </main>
    );
}
 