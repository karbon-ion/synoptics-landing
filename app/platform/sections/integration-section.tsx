import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="relative py-30 px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/platform/seamless background.svg" 
          alt="Seamless integration background" 
          fill 
          style={{ objectFit: 'contain' }} 
          priority 
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Side */}
        <div className="md:w-1/2 text- mb-5 md:text-left">
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "72px", letterSpacing: "0%" }}>
          <h2 className="text-3xl md:text-4xl text-[#323E50]">
            Seamless <span className="text-[#5662F6]">integrations</span> with your entire tech stack
          </h2>
          </span>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14", lineHeight: "24px", letterSpacing: "0%", color: "#4A5565" }}>
          <p className="mt-4 text-[#4A5565]">
            Your unified brain, connected to everything you work with. Your unified brain, connected to everything you work with.
          </p>
          </span>
          <Link
            href="#contact"
            className="bg-[#5662F6] mt-4 hover:bg-indigo-600 text-white py-3 px-8 rounded-full inline-flex items-center transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Syne', fontWeight: 500, fontSize: '18px' }}
          >
            Get started <ArrowRight className="ml-2 h-4 w-4" />
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
