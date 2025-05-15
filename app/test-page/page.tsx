"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./sections/HeroSection";
import EnterpriseSection from "./sections/EnterpriseSection";
import SynoptixComponent from "./sections/SynoptixSection";
import TrackSection from "./sections/TrackandOptimizeSection";
import SecuritySection from "../sections/SecuritySection";
import BlogsSection from "./sections/BlogsSection";
import Testimonials from "./sections/Testimonials";
import CertificationSection from "./sections/CertificationSection";
import EnterpriseSecuritySection from "./sections/SecuritySection";

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
      { threshold: 0.5 }
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

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      <HeroSection videoRef={videoRef} isInView={isInView} />
      <EnterpriseSection />
      <SynoptixComponent/>
      <TrackSection/>
      <EnterpriseSecuritySection/>
      <BlogsSection/>
      <Testimonials/>
      <CertificationSection/>
      
    </div>
  );
}
