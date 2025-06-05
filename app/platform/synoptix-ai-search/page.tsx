'use client';

import Hero from "./sections/hero";
import FeaturesSection from "./sections/features";
import ResponsibleAI from "./sections/responsible-ai";
import IntegrationSection from "../../platform/sections/integration-section";
import BlogSection from "../../platform/sections/blog-section";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synoptix | Enterprise AI Search Platform for Accurate Answers',
  description: 'Surface fast, context-rich answers from internal systems with Synoptix—your enterprise AI search platform for secure, permission-based results.'
};

export default function SynoptixSearch() {
    return (
        <main className="w-full">
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