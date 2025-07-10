'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          letterSpacing: '0%',
          textAlign: 'center'
        }} className="text-2xl md:text-[36px] leading-tight md:leading-[45px] mb-4 md:mb-6 px-2">
          Explore Pre-Built AI Agents for <span className="text-[#5662F6]">Instant Deployment</span>
        </h2>
        <Link href="/platform/synoptix-library/agent-library" className="bg-[#5662F6] text-white font-medium py-2.5 md:py-3 px-5 md:px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center text-sm md:text-base">
          View Agent Library
        </Link>
        </div>
        
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="relative w-full max-w-full md:max-w-5xl px-2 md:px-0">
            <Image
              src="/synoptix-library/discover-ai-agents.png"
              alt="Discover AI Agents"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
