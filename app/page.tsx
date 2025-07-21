"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./sections/HeroSection";
import EnterpriseSection from "./sections/EnterpriseSection";
import Script from "next/script";
import TrackSection from "./sections/TrackandOptimizeSection";
import SecuritySection from "./sections/SecuritySection";
import BlogsSection from "./sections/BlogsSection";
import Testimonials from "./sections/Testimonials";
import CertificationSection from "./sections/CertificationSection";
import EnterpriseSecuritySection from "./sections/SecuritySection";
import AiServicesSection from "./sections/AIservicesSection";
import SecurityBadges from "./sections/SecurityBadges";
import SynoptixSection from "./sections/SynoptixSection";

const SchemaOrgWebsite = () => {
  const jsonLdRef = useRef<HTMLScriptElement>(null);
  
  useEffect(() => {
    if (!jsonLdRef.current) return;
    
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Synoptix",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Synoptix provides enterprise AI solutions for workflow automation, security, and business optimization.",
      "sameAs": [
        "https://www.linkedin.com/company/synoptix",
        "https://twitter.com/synoptix"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "contact@synoptix.ai",
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales@synoptix.ai",
          "availableLanguage": ["English"]
        }
      ],
      "foundingDate": "2020",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      }
    };
    
    // WebSite schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Synoptix",
      "url": window.location.origin,
      "description": "Enterprise AI solutions for workflow automation, security, and business optimization",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
    
    // WebPage schema for homepage
    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${window.location.origin}/#webpage`,
      "url": window.location.origin,
      "name": "Synoptix - Enterprise AI Solutions",
      "description": "Synoptix provides enterprise AI solutions for workflow automation, security, and business optimization.",
      "isPartOf": {
        "@id": `${window.location.origin}/#website`
      },
      "about": {
        "@id": `${window.location.origin}/#organization`
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/hero-image.png`
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": window.location.origin
          }
        ]
      }
    };
    
    // Combine all schemas
    const schemas = [organizationSchema, websiteSchema, webpageSchema];
    
    jsonLdRef.current.textContent = JSON.stringify(schemas);
  }, []);
  
  return <script type="application/ld+json" ref={jsonLdRef} />;
};

export default function TestPage() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (mounted) {
      setIsInView(true);
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      <SchemaOrgWebsite />
      <HeroSection videoRef={videoRef} isInView={isInView} />
      <EnterpriseSection />
      <SynoptixSection />
      <TrackSection />
      <EnterpriseSecuritySection />
      <AiServicesSection />
      <SecurityBadges />
      <div className="container mx-auto mt-12 md:mt-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-[36px] leading-tight md:leading-[45px]" style={{
          fontFamily: "Syne",
          fontWeight: 700,
          letterSpacing: "0%",
          textAlign: "center"
        }}>
          Other Resources
        </h2>
      </div>
      <BlogsSection />
      <Testimonials />
      
      {/* RB2B Script */}
      <Script id="rb2b-snippet" strategy="afterInteractive">
        {`!function () {
          var reb2b = window.reb2b = window.reb2b || [];
          if (reb2b.invoked) return;
          reb2b.invoked = true;
          reb2b.methods = ["identify", "collect"];
          reb2b.factory = function (method) {
            return function () {
              var args = Array.prototype.slice.call(arguments);
              args.unshift(method);
              reb2b.push(args);
              return reb2b;
            };
          };
          for (var i = 0; i < reb2b.methods.length; i++) {
            var key = reb2b.methods[i];
            reb2b[key] = reb2b.factory(key);
          }
          reb2b.load = function (key) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/LNKLDHPD53OJ.js.gz";
            var first = document.getElementsByTagName("script")[0];
            first.parentNode.insertBefore(script, first);
          };
          reb2b.SNIPPET_VERSION = "1.0.1";
          reb2b.load("LNKLDHPD53OJ");
        }();`}
      </Script>
    </div>
  );
}
