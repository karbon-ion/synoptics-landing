'use client';

import Image from 'next/image';

export default function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '36px',
          lineHeight: '45px',
          letterSpacing: '0%',
          textAlign: 'center'
        }} className="mb-6">
          Explore Pre-Built AI Agents for <span className="text-[#5662F6]">Instant Deployment</span>
        </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
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
