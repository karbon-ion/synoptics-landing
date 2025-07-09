'use client'

import Hero from "./sections/hero";
import IntegrationSection from "./sections/integration-section";
import DeploymentSection from "./sections/deployment-section";
import TechStack from "./sections/tech-stack";
import BlogSection from "./sections/blog-section";
import SecurityBadges from "@/app/sections/SecurityBadges";
import EnterpriseSecuritySection from "@/app/sections/SecuritySection";
import OWASP from "./sections/owasp";
import AgentTypesSection from "./sections/responsible-ai";


export default function SynoGuard() {
    return (
        <main className="w-full">
           <Hero/>
           <AgentTypesSection/>
           {/* <EnterpriseSecuritySection/> */}
           <OWASP/>
           {/* <TechStack/> */}
           <SecurityBadges/>
           {/* <PlatformFeatures/>
           <IntegrationSection/>
           <DeploymentSection/> */}
           <div className="container mx-auto mt-12 md:mt-16 px-4 md:px-0">
                <h2 className="text-2xl md:text-[36px] leading-tight md:leading-[45px]" style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
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