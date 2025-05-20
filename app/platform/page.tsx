'use client'

import Hero from "./sections/hero";
import AiPlatform from "./sections/ai-platform";
import IntegrationSection from "./sections/integration-section";
import DeploymentSection from "./sections/deployment-section";
import TechStack from "./sections/tech-stack";
import BlogSection from "./sections/blog-section";

export default function Platform() {
    return (
        <main className="w-full">
           <Hero/>
           <AiPlatform/>
           <IntegrationSection/>
           <DeploymentSection/>
           <TechStack/>
           <BlogSection/>
        </main>
    );
}