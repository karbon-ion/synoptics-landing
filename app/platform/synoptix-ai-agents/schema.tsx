'use client'

import { useEffect, useRef } from 'react'

const SchemaOrgAIAgents = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for AI Agents
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix AI Agents",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "AI Agent Platform",
      "operatingSystem": "All",
      "description": "Enterprise AI agent platform for creating, deploying, and managing intelligent agents without code",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "No-code agent creation, Enterprise compliance, Scalable automation, Agent management"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/synoptix-ai-agents#webpage`,
      "url": `${window.location.origin}/platform/synoptix-ai-agents`,
      "name": "Synoptix AI Agents - Enterprise AI Agent Platform",
      "description": "Create, deploy, and manage intelligent agents without code. Synoptix is the enterprise AI agent platform built for automation, compliance, and scale.",
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
            "name": "AI Agents",
            "item": `${window.location.origin}/platform/synoptix-ai-agents`
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

export default SchemaOrgAIAgents;
