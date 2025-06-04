"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./sections/HeroSection";
import EnterpriseSection from "./sections/EnterpriseSection";

import TrackSection from "./sections/TrackandOptimizeSection";
import SecuritySection from "./sections/SecuritySection";
import BlogsSection from "./sections/BlogsSection";
import Testimonials from "./sections/Testimonials";
import CertificationSection from "./sections/CertificationSection";
import EnterpriseSecuritySection from "./sections/SecuritySection";
import AiServicesSection from "./sections/AIservicesSection";
import SecurityBadges from "./sections/SecurityBadges";
import SynoptixSection from "./sections/SynoptixSection";

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
      <HeroSection videoRef={videoRef} isInView={isInView} />
      <EnterpriseSection />
      <SynoptixSection/>
      <TrackSection/>
      <EnterpriseSecuritySection/>
      <AiServicesSection/>
      <SecurityBadges/>
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
      <BlogsSection/>
      <Testimonials/>
      {/* <CertificationSection/> */}
      
    </div>
  );
}
