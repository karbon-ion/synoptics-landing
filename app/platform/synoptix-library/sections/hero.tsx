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
              fontSize: "48px",
              lineHeight: "56px",
              color: "#1E293B"
            }}>
              Deploy AI Agents Without Starting from Scratch

            </h1>
            
            <p className="mt-6 text-gray-600" style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px"
            }}>
              Explore the agent library to automate the workflows. Deploy and share them across teams like HR, Finance, Marketing, Sales, and IT to streamline across enterprises.
            </p>
            
            <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 mt-5 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
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
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
