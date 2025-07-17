'use client'

import { useEffect, useRef } from "react";
import Hero from "./sections/hero";
import IntegrationSection from "./sections/integration-section";
import DeploymentSection from "./sections/deployment-section";
import TechStack from "./sections/tech-stack";
import BlogSection from "./sections/blog-section";
import SecurityBadges from "@/app/sections/SecurityBadges";
import EnterpriseSecuritySection from "@/app/sections/SecuritySection";
import OWASP from "./sections/owasp";
import AgentTypesSection from "./sections/responsible-ai";

const SchemaOrgSynoGuard = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for Syno-Guard
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Syno-Guard AI Security Tool",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "All",
      "description": "Enterprise-grade AI security tool for protecting AI systems from vulnerabilities and attacks",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "AI vulnerability scanning, Prompt injection protection, Model security analysis, OWASP compliance"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/ai-security-tool/syno-guard#webpage`,
      "url": `${window.location.origin}/platform/ai-security-tool/syno-guard`,
      "name": "Syno-Guard AI Security Tool - Synoptix",
      "description": "Protect your AI systems with Syno-Guard, an enterprise-grade security solution for AI applications",
      "isPartOf": {
        "@id": `${window.location.origin}/#website`
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": window.location.origin
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Platform",
            "item": `${window.location.origin}/platform`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Security Tool",
            "item": `${window.location.origin}/platform/ai-security-tool`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Syno-Guard",
            "item": `${window.location.origin}/platform/ai-security-tool/syno-guard`
          }
        ]
      }
    };
    
    // Combine schemas
    const schemas = [productSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default function SynoGuard() {
    return (
        <main className="w-full">
           <SchemaOrgSynoGuard />
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