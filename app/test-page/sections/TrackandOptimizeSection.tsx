import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const TrackSection = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[500px] md:min-h-[600px]" 
         style={{
           backgroundImage: 'url("/test-page/backgorund.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
          <h1 
            className="text-3xl sm:text-4xl md:text-[36px] leading-tight sm:leading-[45px]"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
            }}
          >
            <span className="text-[#5662F6]">Track and Optimize</span> AI app and agent outcomes
          </h1>

          <p 
            className="text-sm sm:text-base leading-relaxed"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
            }}
          >
            Maintain consistent messaging with centralized, approved 
            materials. Maintain consistent messaging with centralized, approved 
            materials. Maintain consistent messaging with centralized, approved 
            materials. Maintain consistent messaging with centralized, approved 
            materials
          </p>
          <Link
            href="#contact"
            className="bg-[#5662F6] hover:bg-indigo-600 text-white py-2.5 px-6 rounded-full inline-flex items-center transition-colors whitespace-nowrap text-sm sm:text-[18px]"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
              alt="AI Analytics Dashboard"
              width={600}
              height={450}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
