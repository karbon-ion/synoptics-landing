'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgAIConsulting = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Consulting Services",
      "serviceType": "Enterprise AI Consulting",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "description": "Expert AI consulting services to help enterprises implement, optimize, and scale AI solutions for business transformation.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/services/ai-consulting#webpage`,
      "url": `${window.location.origin}/services/ai-consulting`,
      "name": "AI Consulting Services - Synoptix",
      "description": "Expert AI consulting services to help enterprises implement, optimize, and scale AI solutions for business transformation.",
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
            "name": "Services",
            "item": `${window.location.origin}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Consulting",
            "item": `${window.location.origin}/services/ai-consulting`
          }
        ]
      }
    };
    
    const schemas = [serviceSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgAIConsulting;
