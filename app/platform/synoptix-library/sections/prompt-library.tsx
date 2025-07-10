'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function PromptLibrarySection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/synoptix-library/prompt-library-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container max-w-7xl relative z-10 mx-auto px-4">
        <div className="text-center mb-8">
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            letterSpacing: '0%',
            textAlign: 'center'
          }} className="text-2xl md:text-[36px] leading-tight md:leading-[45px] mb-4 md:mb-6 px-2">
            Explore Our Prompt Library
          </h2>
          
          <Link href="/platform/synoptix-library/prompt-library" className="bg-[#5662F6] text-white font-medium py-2.5 md:py-3 px-5 md:px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center text-sm md:text-base">
            View Prompt Library
          </Link>
        </div>
        
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="relative w-full px-2 md:px-0">
            <Image
              src="/synoptix-library/prompts.png"
              alt="Prompt Library"
              width={1800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
