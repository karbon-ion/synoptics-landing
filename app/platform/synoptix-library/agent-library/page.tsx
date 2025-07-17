'use client'

import { useEffect, useRef } from 'react'
import { Hero } from './sections/Hero'
import FeaturesSection from './sections/features'
import { AgentLibrarySection } from './sections/AgentLibrarySection'

const SchemaOrgAgentLibrary = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Synoptix Agent Library",
      "applicationCategory": "AIApplication",
      "applicationSubCategory": "AI Agent Library",
      "operatingSystem": "All",
      "description": "Collection of pre-built AI agents for various enterprise use cases and workflows",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": "Pre-built agents, Customizable templates, Enterprise workflows, Domain-specific solutions"
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/synoptix-library/agent-library#webpage`,
      "url": `${window.location.origin}/platform/synoptix-library/agent-library`,
      "name": "Agent Library - Synoptix",
      "description": "Browse and deploy pre-built AI agents for your enterprise needs",
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
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Agent Library",
            "item": `${window.location.origin}/platform/synoptix-library/agent-library`
          }
        ]
      }
    };
    
    const schemas = [productSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default function AgentLibrary() {
  return (
    <main className="overflow-x-hidden">
      <SchemaOrgAgentLibrary />
      <Hero />
      <FeaturesSection />
      <AgentLibrarySection />
    </main>
  )
}
