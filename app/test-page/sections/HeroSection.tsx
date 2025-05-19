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
          width: '60%',
          height: '60%',
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
        {!isMobile && (

        <FloatingIcon 
          src="/images/logos/openai.svg" 
          size={42}
          className="hidden md:block top-[50%] right-[25%]" 
        />
        )}
        {!isMobile && (

        <FloatingIcon 
          src="/synoptix-icon.svg" 
          size={48}
          className="hidden md:block top-[73%] right-[90%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/dropbox logo.png" 
          size={45}
          className="hidden md:block top-[73%] right-[5%]" 
        />
        )}
        {!isMobile && (
        <FloatingIcon 
          src="/images/logos/microsoft.svg" 
          size={46}
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
          size={42}
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
          size={46}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 font-bold" style={{ fontFamily: 'Syne', lineHeight: '1.2' }}>
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
            </h1>
            <span className="mt-2 sm:mt-4 text-[#323E50] text-center font-medium" style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '48px', letterSpacing: '0%' }}>You Focus on What Matters</span> <br/>
            <Link
              href="#contact"
              className="mt-4 sm:mt-6 md:mt-8 rounded-full bg-[#5662F6] px-4 sm:px-8 py-2 sm:py-3 text-white hover:bg-indigo-700 inline-block text-base sm:text-lg md:text-xl leading-6 sm:leading-7"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 500,
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              Get a Demo
            </Link>

          </div>
        </div>

        {isMobile ? (
  <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6">

    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 ratio */}
        <iframe
          src={videoUrl}
          title="Demo Video Mobile"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg z-10 pt-7 pl-6.5 pr-9 pb-9"
          style={{ border: 'none' }}
        />
        <Image
          src="/test-page/videoFrame.png"
          alt="Mobile Video Frame"
          fill
          className="absolute top-0 left-0 z-20 pointer-events-none rounded-lg"
          priority
        />
      </div>
    </div>
  </div>
) : (
  <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6">
    <div className="relative mx-auto w-[758.62px] h-[477.28px]">
      <div ref={videoRef} className="relative w-full h-full">
        <iframe
          src={videoUrl}
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="720"
          height="450"
          className="absolute top-[14px] left-[19px] pr-18 pl-12 pt-17.5 pb-13.5 z-10 rounded-lg"
          style={{ border: 'none' }}
        />
        <Image
          src="/test-page/videoFrame.png"
          alt="Video Frame"
          width={758.62}
          height={477.28}
          className="absolute top-0 left-0 z-20 pointer-events-none"
          priority
        />
      </div>
    </div>
  </div>
)}



      </div>
      
      <div className=" w-full bg-[#F9FBFF]">
        <div className="h-[20vh]"></div>
      </div>
    </>
  );
}
