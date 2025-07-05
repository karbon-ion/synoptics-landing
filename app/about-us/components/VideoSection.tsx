'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

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

interface VideoSectionProps {
  videoRef: any;
  isInView: boolean;
}

export default function VideoSection({ videoRef, isInView }: VideoSectionProps) {
  const isMobile = useIsMobile();
  if (isMobile === undefined) {
    return null;
  }
  
  const videoUrl = isInView 
    ? "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&autoplay=1&mute=1&rel=0"
    : "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&rel=0";

  return (
    <div className="relative mb-10">
      <div className="container mx-auto">
        {isMobile ? (
          <div className="px-4 sm:px-6">
            <div className="relative mx-auto w-[80%] max-w-[280px]">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: '#F5F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <div className="h-[30px] bg-white border-b border-gray-200 flex items-center mb-5 px-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                  </div>
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
          <div className="px-4 sm:px-6">
            <div className="relative mx-auto w-[70%] max-w-[840px]">
              <div ref={videoRef} className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: '#F5F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <div className="h-[40px] bg-white border-b border-gray-200 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
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
    </div>
  );
}
