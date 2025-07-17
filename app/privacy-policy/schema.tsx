'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgPrivacyPolicy = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const privacySchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/privacy-policy#webpage`,
      "url": `${window.location.origin}/privacy-policy`,
      "name": "Privacy Policy - Synoptix AI",
      "description": "Privacy policy for Synoptix AI platform and services, detailing how we collect, use, and protect your data.",
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
            "name": "Privacy Policy",
            "item": `${window.location.origin}/privacy-policy`
          }
        ]
      },
      "mainEntity": {
        "@type": "DigitalDocument",
        "name": "SYNOPTIX.AI Privacy Policy",
        "version": "1.1",
        "datePublished": "2025-02-28",
        "publisher": {
          "@type": "Organization",
          "name": "Synoptix AI",
          "url": window.location.origin
        }
      }
    };
    
    jsonLdRef.current.textContent = JSON.stringify(privacySchema);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgPrivacyPolicy;
