'use client'

import { useEffect, useRef } from 'react'
import FeaturesSection from './sections/features'
import Hero from './sections/hero'
import Points from './sections/points'
import Featured from './sections/featured'

const SchemaOrgModelDirectory = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for Model Directory
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix Model Directory",
      "applicationCategory": "AIApplication",
      "applicationSubCategory": "Model Repository",
      "operatingSystem": "All",
      "description": "Centralized directory of AI models for enterprise applications with performance metrics and deployment options",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Model discovery, Performance comparison, Version tracking, Deployment integration"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/model-directory#webpage`,
      "url": `${window.location.origin}/platform/model-directory`,
      "name": "Model Directory - Synoptix",
      "description": "Explore and deploy AI models from Synoptix's comprehensive model directory",
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
            "name": "Model Directory",
            "item": `${window.location.origin}/platform/model-directory`
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

export default function ModelHub() {
  return (
    <main>
      <SchemaOrgModelDirectory />
      <Hero />
      <Featured />
      <Points />
      <FeaturesSection />
    </main>
  )
}