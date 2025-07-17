'use client';

import { useEffect, useRef } from 'react';

const SchemaOrgEvents = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    const eventListingSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Event",
            "name": "iAwards Ceremony",
            "startDate": "2025-06-24T18:00:00-07:00",
            "location": {
              "@type": "Place",
              "name": "San Francisco Convention Center",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Synoptix",
              "url": window.location.origin
            },
            "description": "Annual iAwards ceremony recognizing innovation in enterprise AI solutions.",
            "image": `${window.location.origin}/events/recently.png`,
            "url": `${window.location.origin}/events`
          }
        }
      ]
    };
    
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/events#webpage`,
      "url": `${window.location.origin}/events`,
      "name": "Synoptix AI Events - Conferences, Webinars & Meetups",
      "description": "Stay updated on Synoptix AI events including conferences, webinars, and meetups focused on enterprise AI solutions.",
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
            "name": "Events",
            "item": `${window.location.origin}/events`
          }
        ]
      }
    };
    
    const schemas = [eventListingSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default SchemaOrgEvents;
