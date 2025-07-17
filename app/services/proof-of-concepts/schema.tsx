'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgProofOfConcepts = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Proof of Concepts",
      "serviceType": "Enterprise AI Prototyping",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "description": "Rapid AI proof of concept development services to validate AI solutions for your business before full-scale implementation.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/services/proof-of-concepts#webpage`,
      "url": `${window.location.origin}/services/proof-of-concepts`,
      "name": "AI Proof of Concepts - Synoptix",
      "description": "Validate AI solutions for your business with our rapid proof of concept development services before committing to full-scale implementation.",
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
            "name": "Proof of Concepts",
            "item": `${window.location.origin}/services/proof-of-concepts`
          }
        ]
      }
    };
    
    const schemas = [serviceSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgProofOfConcepts;
