'use client'

import { useEffect, useRef } from 'react';
import Hero from './sections/hero';
import EnterpriseSection from './sections/enterprise-solution';
import PromptLibrarySection from './sections/prompt-library';

const SchemaOrgLibrary = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Product schema for Synoptix Library
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix Library",
      "applicationCategory": "AIApplication",
      "applicationSubCategory": "AI Resource Library",
      "operatingSystem": "All",
      "description": "Comprehensive library of AI resources including prompts, agents, and templates for enterprise use",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Prompt templates, Agent configurations, Enterprise solutions, AI resources"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/synoptix-library#webpage`,
      "url": `${window.location.origin}/platform/synoptix-library`,
      "name": "Synoptix Library - AI Resource Collection",
      "description": "Access a comprehensive library of AI resources including prompts, agents, and templates for enterprise use",
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
            "name": "Synoptix Library",
            "item": `${window.location.origin}/platform/synoptix-library`
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

export default function SynoptixLibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SchemaOrgLibrary />
      <Hero />
      <EnterpriseSection />
      <PromptLibrarySection />
    </main>
  );
}