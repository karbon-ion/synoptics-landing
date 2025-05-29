'use client';

import Hero from "./sections/hero";
import FeaturesSection from "./sections/features";
import ResponsibleAI from "./sections/responsible-ai";
import IntegrationSection from "../platform/sections/integration-section";
import BlogSection from "../platform/sections/blog-section";

export default function SynoptixSearch() {
    return (
        <main className="w-full">
            <Hero/>
            <FeaturesSection/>
            <ResponsibleAI/>
            <IntegrationSection/>

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