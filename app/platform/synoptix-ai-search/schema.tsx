'use client';

import { useEffect, useRef } from "react";

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
      "applicationSubCategory": "AI Search Solution",
      "operatingSystem": "All",
      "description": "Enterprise AI search solution that enhances information discovery and knowledge management",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Semantic search, Multi-source integration, Enterprise security, Customizable UI"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/synoptix-ai-search#webpage`,
      "url": `${window.location.origin}/platform/synoptix-ai-search`,
      "name": "Synoptix AI Search - Enterprise AI Search Solution",
      "description": "Enhance information discovery and knowledge management with Synoptix AI Search, an enterprise-grade AI search solution.",
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
    
    const schemas = [productSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgAISearch;
