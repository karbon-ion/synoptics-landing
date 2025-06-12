'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FloatingIcon = ({ src, alt, size = 300, className }: { src: string; alt: string; size?: number; className: string }) => {
  const randomDuration = Math.floor(Math.random() * 7) + 5;
  
  const generateSemiCirclePath = () => {
    const radius = Math.random() * 40 + 20;
    const startAngle = Math.random() * Math.PI;
    
    return {
      x: Math.cos(startAngle) * radius,
      y: Math.sin(startAngle) * radius
    };
  };
  
  const { x, y } = generateSemiCirclePath();
  
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, x, 0],
        y: [0, y, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative py-70 flex items-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/synoptix-agents/floating-background.png"
          alt="Synoptix Agents Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10">
        {/* Code Debugger - Top Left */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/code-debugger.svg"
          alt="Code Debugger"
          size={300}
          className="absolute left-[15%] top-[15%]"
        />

        {/* Blog Generator - Top Right */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/blog-generator.svg"
          alt="Blog Generator"
          size={300}
          className="absolute right-[15%] top-[15%]"
        />

        {/* Social Media Assistant - Left */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/social-media-advisor.svg"
          alt="Social Media Assistant"
          size={300}
          className="absolute left-[10%] top-[50%]"
        />

        {/* Knowledge Base Agent - Right */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/knowledge-base-agent.svg"
          alt="Knowledge Base Agent"
          size={300}
          className="absolute right-[10%] top-[50%]"
        />

        {/* Process Map Generator - Bottom Left */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/process-map-generator.svg"
          alt="Process Map Generator"
          size={300}
          className="absolute left-[20%] bottom-[20%]"
        />

        {/* Spreadsheet Assistant - Bottom Right */}
        <FloatingIcon
          src="/synoptix-agents/floating-icons/spread-sheet-assistant.svg"
          alt="Spreadsheet Assistant"
          size={300}
          className="absolute right-[20%] bottom-[20%]"
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
            Build, Launch and Manage Enterprise AI agents in Few Seconds
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
