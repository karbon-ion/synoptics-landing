'use client';

import { useEffect, useRef } from "react";
import Hero from "./sections/hero";
import FeaturesSection from "./sections/features";
import ResponsibleAI from "./sections/responsible-ai";
import IntegrationSection from "../../platform/sections/integration-section";
import BlogSection from "../../platform/sections/blog-section";

const SchemaOrgAISearch = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for AI Search
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix AI Search",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "AI Search Engine",
      "operatingSystem": "All",
      "description": "Advanced AI-powered search solution for enterprises to find and retrieve information across systems",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Semantic search, Natural language understanding, Cross-system integration, Document retrieval"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/synoptix-ai-search#webpage`,
      "url": `${window.location.origin}/platform/synoptix-ai-search`,
      "name": "Synoptix AI Search - Intelligent Enterprise Search",
      "description": "Powerful AI-driven search solution for enterprises to find information across all systems using natural language",
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
            "name": "AI Search",
            "item": `${window.location.origin}/platform/synoptix-ai-search`
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