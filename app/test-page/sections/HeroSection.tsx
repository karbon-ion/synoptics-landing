"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const FloatingIcon = ({ src, size = 40, className }: { src: string; size?: number; className: string }) => {
  const randomDuration = Math.floor(Math.random() * 5) + 20;
  
  const generateSemiCirclePath = () => {
    const radius = Math.random() * 40 + 20;
    const startAngle = Math.random() * Math.PI;
    
    const numPoints = 20;
    const forwardPath = [];
    
    for (let i = 0; i < numPoints; i++) {
      const angle = startAngle + (Math.PI * i) / (numPoints - 1);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      forwardPath.push([x, y]);
    }
    
    const returnPath = [...forwardPath].slice(0, -1).reverse();
    
    const fullPath = [...forwardPath, ...returnPath];
    
    return fullPath;
  };
  
  const path = generateSemiCirclePath();
  
  return (
    <motion.div 
      className={`absolute ${className} rounded-full bg-white/90 shadow-lg p-2 flex items-center justify-center z-10`} 
      style={{ width: size, height: size }}
      animate={{ 
        x: path.map(p => p[0]),
        y: path.map(p => p[1]),
        rotate: [0, 3, 0, -3, 0]
      }}
      transition={{ 
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear",
        times: Array.from({ length: path.length }).map((_, i) => i / (path.length - 1))
      }}
    >
      <Image src={src} alt="icon" width={size * 0.6} height={size * 0.6} />
    </motion.div>
  );
};

interface HeroSectionProps {
  videoRef: any;
  isInView: boolean;
}

export default function HeroSection({ videoRef, isInView }: HeroSectionProps) {
  const videoUrl = isInView 
    ? "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&autoplay=1&mute=1&rel=0"
    : "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&rel=0";

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(240, 245, 255)"
            gradientBackgroundEnd="rgb(255, 255, 255)" 
            firstColor="230, 240, 255"
            secondColor="220, 235, 255"
            thirdColor="235, 230, 255"
            fourthColor="210, 230, 255"
            fifthColor="225, 220, 255"
            pointerColor="108, 126, 212"
            size="100%"
            blendingValue="soft-light"
            interactive={true}
            containerClassName="h-screen"
          />
        </div>
        <FloatingIcon 
          src="/images/logos/openai.svg" 
          size={42}
          className="top-[50%] right-[25%]" 
        />
        <FloatingIcon 
          src="/synoptix-icon.svg" 
          size={48}
          className="top-[73%] right-[90%]" 
        />
        <FloatingIcon 
          src="/images/logos/dropbox logo.png" 
          size={45}
          className="top-[73%] right-[5%]" 
        />
        <FloatingIcon 
          src="/images/logos/microsoft.svg" 
          size={46}
          className="top-[13%] left-[25%]" 
        />
        <FloatingIcon 
          src="/images/logos/slack l.png" 
          size={70}
          className="top-[35%] left-[15%]" 
        />
        <FloatingIcon 
          src="/file.svg" 
          size={42}
          className="top-[50%] left-[25%]" 
        />
        <FloatingIcon 
          src="/images/logos/meta.svg" 
          size={70}
          className="top-[35%] right-[15%]" 
        />
        <FloatingIcon 
          src="/globe.svg" 
          size={46}
          className="top-[12%] right-[25%]" 
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-20 mx-auto max-w-6xl px-4 text-center -mt-20">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#ffffff] px-15 py-1.5 flex items-center shadow-sm">
                <span className="text-sm text-gray-800">In Partnership with</span>
                <img src="/images/logos/microsoft.svg" alt="Microsoft" className="ml-2 h-5 w-auto" />
                <span className="text-sm text-gray-800">Microsoft</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '48px', lineHeight: '72px', letterSpacing: '0%', textAlign: 'center' }}>
              <span className="text-gray-900">Let AI Handle Your </span>
              <span className="text-indigo-600">
                <Typewriter
                  words={['Paperwork', 'Routine Tasks', 'Manual Workflows', 'Repetitive Tasks']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <h2 className="mt-4 text-[#323E50] font-medium" style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '48px', letterSpacing: '0%', textAlign: 'center' }}>You Focus on What Matters</h2>
            <Link href="#contact" className="mt-8 rounded-full bg-[#5662F6] px-8 py-3 text-white hover:bg-indigo-700 inline-block">
              Get a Demo
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="relative mx-auto max-w-5xl px-4">
            <div ref={videoRef} className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-white">
              <iframe
                src={videoUrl}
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 bg-white/10 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full h-24 w-24 flex items-center justify-center shadow-lg z-10">
                  <span className="text-3xl font-bold text-indigo-600">AI</span>
                </div>
                <div className="absolute left-[calc(50%-80px)] bottom-[20px] h-2 w-32 bg-indigo-400"></div>
                <div className="absolute left-[calc(50%+50px)] bottom-[40px] h-2 w-32 bg-indigo-400"></div>
                <div className="absolute left-[calc(50%-120px)] bottom-[-80px] h-32 w-8 bg-indigo-500"></div>
                <div className="absolute left-[calc(50%-60px)] bottom-[-60px] h-24 w-8 bg-indigo-500"></div>
                <div className="absolute left-[calc(50%+50px)] bottom-[-100px] h-40 w-8 bg-indigo-500"></div>
                <div className="absolute left-[calc(50%+100px)] bottom-[-40px] h-20 w-8 bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white w-full ">
        <div className="h-[50vh]"></div>
      </div>
    </>
  );
}
