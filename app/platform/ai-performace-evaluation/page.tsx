'use client'

import { useEffect, useRef } from "react";
import BlogSection from "../sections/blog-section";
import SecurityBadges from "@/app/sections/SecurityBadges";
import Hero from "./sections/hero";
import FeaturesSection from "./sections/features-section";
import TechniquesSection from "./sections/techniques-section";

const SchemaOrgAIEvaluation = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for AI Performance Evaluation
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix AI Performance Evaluation",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "AI Evaluation Tool",
      "operatingSystem": "All",
      "description": "Advanced AI performance evaluation tool for measuring and optimizing AI model performance",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Model performance metrics, Bias detection, Accuracy evaluation, Benchmark comparison"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/ai-performace-evaluation#webpage`,
      "url": `${window.location.origin}/platform/ai-performace-evaluation`,
      "name": "AI Performance Evaluation - Synoptix",
      "description": "Evaluate and optimize your AI models with Synoptix's comprehensive performance evaluation tools",
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
            "name": "AI Performance Evaluation",
            "item": `${window.location.origin}/platform/ai-performace-evaluation`
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

export default function Evaluation() {
    return (
        <main className="w-full">
           <SchemaOrgAIEvaluation />
           <Hero/>
           <FeaturesSection/>
           <TechniquesSection/>
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