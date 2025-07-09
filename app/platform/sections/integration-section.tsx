import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-30 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/platform/seamless background.svg" 
          alt="Seamless integration background" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority 
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-5">
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 36px)", lineHeight: "clamp(36px, 6vw, 72px)", letterSpacing: "0%" }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#323E50]">
          Seamless <span className="text-[#5662F6]">Integration</span> Across Your Entire Tech Stack
          </h2>
          </span>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14", lineHeight: "24px", letterSpacing: "0%", color: "#4A5565" }}>
          <p className="mt-4 text-[#4A5565]">
          Connect all business applications, such as CRMs, ERPs, and Teams, in one place. Our enterprise AI platform integrates multiple data sources, documents, spreadsheets, presentations, and emails. 
          </p>
          </span>
          <Link
            href="/platform/integrations"
            className="bg-[#5662F6] mt-4 hover:bg-indigo-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full inline-flex items-center transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Syne', fontWeight: 500, fontSize: 'clamp(16px, 4vw, 18px)' }}
          >
           Get to know about Integration  <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-80 w-full">
            {/* Content for the right side if needed */}
          </div>
        </div>


      </div>
    </section>
  );
};

export default IntegrationSection;
