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