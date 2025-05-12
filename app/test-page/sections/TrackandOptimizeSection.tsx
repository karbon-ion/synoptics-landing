import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TrackSection = () => {
  return (
    <div className="w-full p-50 relative overflow-hidden" 
         style={{
           background: 'linear-gradient(180deg, #EFF5FF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)'
         }}>
      <div className="container mx-auto  px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
        <h1 
  className="text-[36px] leading-[45px] tracking-normal"
  style={{
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
  }}
>
  <span style={{ color: '#5662F6' }}>Track and Optimize</span> AI app and agent outcomes
</h1>

          <p 
            className="text-[14px] leading-[25px] tracking-[0.4px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
            }}
          >
            Metrics and analytics combine in a tool crafted with a set of sources, 
            allowing team leads to work with them. Monitor your AI app performance 
            and agent outcomes with a comprehensive dashboard that's easy to use.
          </p>
          <Link href="#" passHref>
            <button 
              className="px-6 py-3 text-white rounded-full"
              style={{
                background: '#5662F6',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
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
