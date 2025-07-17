'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgGlossary = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const glossarySchema = {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "name": "AI and Enterprise Technology Glossary",
      "description": "Comprehensive glossary of AI, machine learning, and enterprise technology terms and definitions.",
      "publisher": {
        "@type": "Organization",
        "name": "Synoptix",
        "url": window.location.origin
      }
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/resources/glossary#webpage`,
      "url": `${window.location.origin}/resources/glossary`,
      "name": "AI Glossary - Enterprise Technology Terms and Definitions",
      "description": "Explore our comprehensive glossary of AI, machine learning, and enterprise technology terms and definitions.",
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
            "name": "Resources",
            "item": `${window.location.origin}/resources`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Glossary",
            "item": `${window.location.origin}/resources/glossary`
          }
        ]
      }
    };
    
    const schemas = [glossarySchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgGlossary;
