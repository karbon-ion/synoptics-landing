'use client'

import Hero from './sections/hero'
import Certifications from './sections/certifications'
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
import WhySection from "../sections/WhySection";
import RagStatsSection from "./sections/rag-stats";
import QuantumSection from "../rag-application/sections/quantum";
import FAQ from "./sections/faq";
import TestimonialsSection from "../sections/TestimonialsSection";
import FeaturesSection from "../sections/FeaturesSection";
import Capabilities from "./sections/capabilities";
import OWASP from './sections/owasp';
import SmallFoot from "../sections/smallFoot";
export default function SynoGuard() {
    return (
        <main className="w-full">
            <Hero />
            <Certifications />
            {/* <Features />
            <Capabilities />
            <Ideas />
            <FeaturesSection /> */}
            <Metrics />
            {/* <Security /> */}
            <WhySection />
            <OWASP />
            {/* <RagStatsSection /> */}
            {/* <QuantumSection />
            <FAQ /> */}
            <TestimonialsSection />
            <SmallFoot title="Take Control of Your Platform’s Security" buttonOne="Request a Demo" buttonTwo="Talk to an Expert" />
        </main>
    );
}
 