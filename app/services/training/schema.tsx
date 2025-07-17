'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgTraining = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Training Services",
      "serviceType": "Enterprise AI Training",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "description": "Comprehensive AI training programs for enterprises to upskill teams and maximize the value of AI investments.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/services/training#webpage`,
      "url": `${window.location.origin}/services/training`,
      "name": "AI Training Services - Synoptix",
      "description": "Upskill your teams with our comprehensive AI training programs designed to maximize the value of your AI investments.",
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
            "name": "Training",
            "item": `${window.location.origin}/services/training`
          }
        ]
      }
    };
    
    const schemas = [serviceSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgTraining;
