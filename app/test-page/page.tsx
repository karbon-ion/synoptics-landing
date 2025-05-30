"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "../sections/HeroSection";
import EnterpriseSection from "../sections/EnterpriseSection";
import SynoptixComponent from "../sections/SynoptixSection";
import TrackSection from "../sections/TrackandOptimizeSection";
import SecuritySection from "../sections-old/SecuritySection";
import BlogsSection from "../sections/BlogsSection";
import Testimonials from "../sections/Testimonials";
import CertificationSection from "../sections/CertificationSection";
import EnterpriseSecuritySection from "../sections/SecuritySection";
import AiServicesSection from "../sections/AIservicesSection";

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
      <SynoptixComponent/>
      <TrackSection/>
      <EnterpriseSecuritySection/>
      <AiServicesSection/>
      <BlogsSection/>
      <Testimonials/>
      <CertificationSection/>
      
    </div>
  );
}
