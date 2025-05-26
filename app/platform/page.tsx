'use client'

import Hero from "./sections/hero";
import PlatformFeatures from "./sections/platform-features";
import IntegrationSection from "./sections/integration-section";
import DeploymentSection from "./sections/deployment-section";
import TechStack from "./sections/tech-stack";
import BlogSection from "./sections/blog-section";

export default function Platform() {
    return (
        <main className="w-full">
           <Hero/>
           <PlatformFeatures/>
           <IntegrationSection/>
           <DeploymentSection/>
           <TechStack/>
           <BlogSection/>
        </main>
    );
}