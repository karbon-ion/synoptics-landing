'use client'

import { useEffect, useRef } from "react";
import Hero from "./sections/hero";
import PlatformFeatures from "./sections/platform-features";
import IntegrationSection from "./sections/integration-section";
import DeploymentSection from "./sections/deployment-section";
import TechStack from "./sections/tech-stack";
import BlogSection from "./sections/blog-section";

const SchemaOrgPlatform = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for the platform
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix AI Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly",
        "priceValidUntil": "2026-12-31"
      },
      "description": "Enterprise AI platform for workflow automation, security, and business optimization",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "125"
      },
      "featureList": "AI-powered workflow automation, Security monitoring, Business intelligence"
    };
    
    // WebPage schema for the platform page
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform#webpage`,
      "url": `${window.location.origin}/platform`,
      "name": "Synoptix AI Platform - Enterprise AI Solutions",
      "description": "The Synoptix AI Platform provides enterprise-grade AI solutions for workflow automation, security, and business optimization.",
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

export default function Platform() {
    return (
        <main className="w-full">
           <SchemaOrgPlatform />
           <Hero/>
           <PlatformFeatures/>
           <IntegrationSection/>
           <DeploymentSection/>
           <TechStack/>
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