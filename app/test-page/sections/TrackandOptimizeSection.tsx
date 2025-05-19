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
      <div className="w-full max-w-7xl mx-auto sm:px-6 py-12 md:py-16 relative flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
        <div className="w-full mt-20 space-y-4 sm:space-y-6 flex-shrink-0 max-w-[600px]">
          <h1 
            className="text-3xl sm:text-4xl md:text-[36px] leading-tight sm:leading-[45px]"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
            }}
          >
            <span className="text-[#5662F6] ">Track and Optimize</span> AI app and agent outcomes
          </h1>

          <p 
            className="text-sm sm:text-base leading-relaxed pr-20"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#000000'
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
            className="bg-[#5662F6] hover:bg-indigo-600 text-white py-3 px-8 rounded-full inline-flex items-center transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Syne', fontWeight: 500, fontSize: '18px' }}
          >
            Get started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
        </div>
        <div className="relative w-full flex justify-center items-start overflow-visible">
            <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-[780px] h-[600px] ">
              <Image
                src="/test-page/Evaluation.png"
                alt="AI Analytics Dashboard"
                fill
                className="rounded-lg object-contain m-20"
                priority
              />
            </div>
          </div>


      </div>
    </div>
  );
};

export default TrackSection;
