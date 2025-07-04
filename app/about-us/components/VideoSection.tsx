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
    <div className="relative ml-20 ">
      <div className="container mx-auto">
        {isMobile ? (
          <div className="sm:px-6">
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="relative w-full pt-[56.25%]">
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
          <div className="px-4 sm:px-6">
            <div className="relative mx-auto w-[1200px] h-[750px]">
              <div ref={videoRef} className="relative w-full h-full">
                <iframe
                  src={videoUrl}
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="950"
                  height="590"
                  className="absolute top-[8px] left-[50px] pl-23 pt-28 z-10 rounded-lg"
                  style={{ border: 'none' }}
                />
                <Image
                  src="/test-page/videoFrame.png"
                  alt="Video Frame"
                  width={1100}
                  height={600}
                  className="absolute top-0 left-10 z-20 pointer-events-none"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
