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
            <BlogSection/>
        </main>
    );
}