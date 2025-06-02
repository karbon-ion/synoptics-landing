    import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const TrackSection = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[800px] md:min-h-[600px]" 
        style={{
          backgroundImage: 'url("/test-page/backgorund.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
        <div className="w-full mt-8 md:mt-20 space-y-4 sm:space-y-6 flex-shrink-0 max-w-[600px] px-4 sm:px-0">
          <h1 
            className="text-2xl sm:text-4xl md:text-[36px] leading-tight sm:leading-[45px] text-center md:text-left"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
            }}
          >
            <span className="text-[#5662F6] ">Track and Optimise</span> Performance at Scale
          </h1>

          <p 
            className="text-sm sm:text-base leading-relaxed md:pr-20 text-center md:text-left"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#000000'
            }}
          >
            Monitor usage, efficiency, and accuracy in real time with enterprise-grade analytics. 
            Measure impact across teams, identify optimisation opportunities, and continuously refine your AI agents to maximise productivity, ROI, and business outcomes with enterprise AI platform.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/platform/ai-performace-evaluation"
              className="bg-[#5662F6] hover:bg-indigo-600 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full inline-flex items-center justify-center transition-colors whitespace-nowrap max-w-[200px] sm:max-w-none"
              style={{ fontFamily: 'Syne', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
            >
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
        </div>
        <div className="relative w-full flex justify-center items-start overflow-visible">
            <div className="relative md:absolute  md:top-[60%] md:-translate-y-1/2 w-full md:w-[700px] h-[400px] md:h-[500px] md:mr-16">
              <Image
                src="/test-page/evaluation-gif.gif"
                alt="AI Analytics Dashboard"
                fill
                className="rounded-lg object-contain md:mt-24 md:mr-0"
                priority
              />
            </div>
          </div>


      </div>
    </div>
  );
};

export default TrackSection;
