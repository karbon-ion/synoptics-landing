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
            fontSize: '36px',
            lineHeight: '45px',
            letterSpacing: '0%',
            textAlign: 'center'
          }} className="mb-6">
            Explore Prompt Library
          </h2>
          
          <Link href="/platform/synoptix-library/prompt-library" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
                        View Library
                    </Link>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full ">
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
