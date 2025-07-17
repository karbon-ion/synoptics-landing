'use client'

import { useEffect, useRef } from 'react'
import Hero from './sections/hero'
import Featured from './sections/featured'
import AllIntegrations from './sections/all-integrations'
import RequestIntegration from './sections/request-integration'

const SchemaOrgIntegrations = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Service schema for Integrations
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Synoptix Platform Integrations",
      "serviceType": "Software Integration",
      "description": "Connect Synoptix AI platform with your existing tools and services through our extensive integration library",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "areaServed": "Worldwide"
    };
    
    // WebPage schema
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/platform/integrations#webpage`,
      "url": `${window.location.origin}/platform/integrations`,
      "name": "Platform Integrations - Synoptix",
      "description": "Explore Synoptix platform integrations with popular tools and services",
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
            "name": "Integrations",
            "item": `${window.location.origin}/platform/integrations`
          }
        ]
      }
    };
    
    // Combine schemas
    const schemas = [serviceSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default function Integrations() {
  return (
    <main className="overflow-x-hidden">
      <SchemaOrgIntegrations />
      <Hero />
      <Featured />
      <RequestIntegration />
      <AllIntegrations />
    </main>
  )
}
