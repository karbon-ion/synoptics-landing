'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-70 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/synoptix-agents/background.png"
          alt="Synoptix Agents Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-[#323E50] mb-6"
            style={{
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "72px",
              letterSpacing: "0%",
              textAlign: "center"
            }}
          >
            Build, Launch and Manage Enterprise AI agents in a Few Seconds
          </h1>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/contact-us"
              className="bg-[#6B7BF7] text-white px-8 py-3 rounded-full transition-all hover:bg-[#5662F6]"
              style={{
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: "16px"
              }}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
