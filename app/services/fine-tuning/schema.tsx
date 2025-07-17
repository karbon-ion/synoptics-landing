'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgFineTuning = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Model Fine-Tuning Services",
      "serviceType": "Enterprise AI Model Customization",
      "provider": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      },
      "description": "Specialized AI model fine-tuning services to customize and optimize large language models for your specific business needs and use cases.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/services/fine-tuning#webpage`,
      "url": `${window.location.origin}/services/fine-tuning`,
      "name": "AI Model Fine-Tuning Services - Synoptix",
      "description": "Customize and optimize large language models for your specific business needs with our expert fine-tuning services.",
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
            "name": "Fine-Tuning",
            "item": `${window.location.origin}/services/fine-tuning`
          }
        ]
      }
    };
    
    const schemas = [serviceSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgFineTuning;
