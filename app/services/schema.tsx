'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgServices = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Synoptix AI Services",
      "serviceType": "Enterprise AI Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "description": "Comprehensive enterprise AI services including consulting, SaaS solutions, training, and fine-tuning.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/services#webpage`,
      "url": `${window.location.origin}/services`,
      "name": "Synoptix AI Services - Enterprise AI Solutions",
      "description": "Explore our comprehensive AI services for enterprises including consulting, SaaS solutions, training, and more.",
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
          }
        ]
      }
    };
    
    const schemas = [servicesSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgServices;
