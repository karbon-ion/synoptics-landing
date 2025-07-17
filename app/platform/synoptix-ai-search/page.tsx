import Hero from "./sections/hero";
import FeaturesSection from "./sections/features";
import ResponsibleAI from "./sections/responsible-ai";
import IntegrationSection from "../../platform/sections/integration-section";
import BlogSection from "../../platform/sections/blog-section";
import SchemaOrgAISearch from "./schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Synoptix AI Search - Enterprise AI Search Solution',
  description: 'Enhance information discovery and knowledge management with Synoptix AI Search, an enterprise-grade AI search solution.'
};

export default function SynoptixSearch() {
    return (
        <main className="w-full">
            <SchemaOrgAISearch />
            <Hero/>
            <FeaturesSection/>
            <ResponsibleAI/>
            <IntegrationSection/>

            <div className="container mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
                <h2 style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 5vw, 36px)",
                    lineHeight: "clamp(36px, 5vw, 45px)",
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