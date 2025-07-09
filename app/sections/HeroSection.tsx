"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}



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
      style={{ 
        width: size, 
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
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
      <Image 
        src={src} 
        alt="icon" 
        width={size * 0.6} 
        height={size * 0.6} 
        style={{
          width: '80%',
          height: '80%',
          objectFit: 'contain'
        }}
      />
    </motion.div>
  );
};


interface HeroSectionProps {
  videoRef: any;
  isInView: boolean;
}

export default function HeroSection({ videoRef, isInView }: HeroSectionProps) {
  const isMobile = useIsMobile();
  if (isMobile === undefined) {
    return null; // Or a loader/spinner
  }
  const videoUrl = isInView 
    ? "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1"
    : "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1";

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
        {!isMobile && (

        <FloatingIcon 
          src="/images/logos/openai.svg" 
          size={60}
          className="hidden md:block top-[50%] right-[25%]" 
        />
        )}
        {!isMobile && (

        <FloatingIcon 
          src="/synoptix-icon.svg" 
          size={60}
          className="hidden md:block top-[73%] right-[90%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/dropbox logo.png" 
          size={60}
          className="hidden md:block top-[73%] right-[5%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/microsoft.svg" 
          size={60}
          className="hidden md:block top-[13%] left-[25%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/slack l.png" 
          size={70}
          className="hidden md:block top-[35%] left-[15%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/file.svg" 
          size={60}
          className="hidden md:block top-[50%] left-[25%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/meta.svg" 
          size={70}
          className="hidden md:block top-[35%] right-[15%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/globe.svg" 
          size={60}
          className="hidden md:block top-[12%] right-[25%]" 
        />
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 text-center -mt-10 sm:-mt-20">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="rounded-full bg-transparent px-4 sm:px-6 py-1 flex sm:py-1.5 items-center shadow-sm">
                <span className="text-xs sm:text-sm text-gray-800">In Partnership with</span>
                <img src="/images/logos/microsoft.svg" alt="Microsoft" className="ml-2 h-4 sm:h-5 w-auto" />
                <span className="text-xs sm:text-sm text-gray-800 ml-1">Microsoft</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 font-bold" style={{ fontFamily: 'Syne', lineHeight: '1.2' }}>
              <span className="text-[#323E50]">Let AI Handle Your </span>
              <span className="text-[#5662F6]">
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
            </h2>
            <span className="mt-2 sm:mt-4 text-[#323E50] text-center font-medium" style={{ fontFamily: 'Poppins', fontSize: '26px', lineHeight: '48px', letterSpacing: '0%' }}>You Focus on What Matters</span> <br/>
            <Link
              href="contact-us"
              className="mt-4 mb-4 sm:mt-6 md:mt-8 rounded-full bg-[#5662F6] px-3 sm:px-8 py-2 sm:py-3 text-white hover:bg-indigo-700 inline-block text-base sm:text-lg md:text-xl leading-6 sm:leading-7"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 500,
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              Request a Demo
            </Link>

          </div>
        </div>

        {isMobile ? (
  <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6">

    <div className="relative mx-auto w-[80%] max-w-[280px]">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: '#F5F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          {/* Browser header */}
          <div className="h-[30px] bg-white border-b border-gray-200 flex items-center mb-5 px-2">
            {/* Window controls */}
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          {/* Video content */}
          <div className="w-full h-[calc(100%-30px)] bg-black flex items-center justify-center overflow-hidden">
            <iframe
              src={videoUrl}
              title="Demo Video Mobile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0', top: '0' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6">
   <div className="relative mx-auto w-[70%] max-w-[840px]">
  <div ref={videoRef} className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: '#F5F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
      {/* Browser header */}
      <div className="h-[40px] bg-white border-b border-gray-200 flex items-center px-4">
        {/* Window controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      {/* Video content */}
      <div className="w-full h-[calc(100%-40px)] bg-black flex items-center justify-center overflow-hidden">
        <iframe
          src={videoUrl}
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0', top: '0' }}
        />
      </div>
    </div>
  </div>
</div>


  </div>
)}



      </div>
      
      <div className=" w-full bg-[#F9FBFF]">
        <div className="h-[40vh]"></div>
      </div>
    </>
  );
}
