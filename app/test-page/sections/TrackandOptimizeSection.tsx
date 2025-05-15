import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TrackSection = () => {
  return (
    <div className="w-full p-50 relative overflow-hidden" 
         style={{
           backgroundImage: 'url("/test-page/backgorund.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-58">
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
            Maintain consistent messaging with centralized, approved 
            materials .Maintain consistent messaging with centralized, approved 
            materials. Maintain consistent messaging with centralized, approved 
            materials .Maintain consistent messaging with centralized, approved 
            materials
          </p>
          <Link href="#" passHref>
            <button 
              className="px-10 py-3 text-white rounded-full"
              style={{
                background: '#5662F6',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Get Started {'->'}
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
