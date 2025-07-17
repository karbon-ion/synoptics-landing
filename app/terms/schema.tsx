'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgTerms = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const termsSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/terms#webpage`,
      "url": `${window.location.origin}/terms`,
      "name": "Terms & Conditions - Synoptix AI",
      "description": "Terms and conditions for using Synoptix AI platform and services.",
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
            "name": "Terms & Conditions",
            "item": `${window.location.origin}/terms`
          }
        ]
      },
      "mainEntity": {
        "@type": "DigitalDocument",
        "name": "Synoptix AI Terms & Conditions",
        "datePublished": "2025-02-28",
        "publisher": {
          "@type": "Organization",
          "name": "Synoptix AI",
          "url": window.location.origin
        }
      }
    };
    
    jsonLdRef.current.textContent = JSON.stringify(termsSchema);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgTerms;
