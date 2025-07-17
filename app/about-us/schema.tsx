'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgAboutUs = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Synoptix",
      "url": `${window.location.origin}`,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Synoptix is an enterprise AI solutions company specializing in AI integration, automation, and optimization for businesses.",
      "foundingDate": "2022",
      "sameAs": [
        "https://www.linkedin.com/company/synoptix-ai/",
        "https://twitter.com/synoptix_ai"
      ]
    };
    
    const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${window.location.origin}/about-us#webpage`,
      "url": `${window.location.origin}/about-us`,
      "name": "About Synoptix - Enterprise AI Solutions",
      "description": "Learn about Synoptix, our mission, values, and how we're helping enterprises leverage AI for business transformation.",
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
            "name": "About Us",
            "item": `${window.location.origin}/about-us`
          }
        ]
      }
    };
    
    const schemas = [organizationSchema, aboutPageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgAboutUs;
