'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/synoptix-library/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container max-w-7xl relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 style={{
              fontFamily: "Syne",
              fontWeight: 700,
              color: "#1E293B"
            }} className="text-3xl md:text-[48px] leading-tight md:leading-[56px]">
              Pre-Built AI Agents Designed for Real-Time Enterprise Needs
            </h1>
            
            <p style={{
              fontFamily: "Poppins",
              fontWeight: 400
            }} className="mt-4 md:mt-6 text-gray-600 text-sm md:text-[16px] leading-relaxed md:leading-[28px]">
              Streamline daily operations with pre-built agents designed for enterprise. Easily deploy and share them across departments like HR, Finance, Marketing, Sales, and IT to accelerate routine tasks. 
            </p>
            
            <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-2.5 md:py-3 px-5 md:px-6 mt-4 md:mt-5 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center text-sm md:text-base">
              Get a Demo
            </Link>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <Image
                src="/synoptix-library/right-hero.png"
                alt="Synoptix Library"
                width={600}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
