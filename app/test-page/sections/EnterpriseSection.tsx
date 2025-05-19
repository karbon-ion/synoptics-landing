"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type TabKey = "search" | "agents" | "library" | "voice";

export default function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("search");
  const [currentImage, setCurrentImage] = useState<TabKey>("search");
  const [nextImage, setNextImage] = useState<TabKey>("search");
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleTabChange = (tabId: TabKey) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setNextImage(tabId);
    setIsFadingOut(true);
  };

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        setCurrentImage(nextImage);
        setIsFadingOut(false);
      }, 500); // Match fade duration
      return () => clearTimeout(timeout);
    }
  }, [isFadingOut, nextImage]);

  const tabData: {
    id: TabKey;
    title: string;
    icon: string;
    description: string;
    iconWidth?: string;
    iconHeight?: string;
    showLearnMore?: boolean;
  }[] = [
    {
      id: "search",
      title: "Synoptix Search",
      icon: "/test-page/logos/search.svg",
      description: "Your unified brain, connected to everything you work with.Your unified brain, connected to everything you work with.",
      iconWidth: "32px",
      iconHeight: "36px",
      showLearnMore: true,
    },
    {
      id: "agents",
      title: "Synoptix Agents",
      icon: "/test-page/logos/agents.svg",
      description: "Your unified brain, connected to everything you work with.Your unified brain, connected to everything you work with.",
      iconWidth: "45px",
      iconHeight: "45px",
      showLearnMore: true,
    },
    {
      id: "library",
      title: "Synoptix Library",
      icon: "/test-page/logos/library.svg",
      description: "Your unified brain, connected to everything you work with.Your unified brain, connected to everything you work with.",
      iconWidth: "27px",
      iconHeight: "22px",
      showLearnMore: true,
    },
    {
      id: "voice",
      title: "Synoptix Voice Agents",
      icon: "/test-page/logos/voiceagents.svg",
      description: "Your unified brain, connected to everything you work with.Your unified brain, connected to everything you work with.",
      iconWidth: "35px",
      iconHeight: "35px",
      showLearnMore: true,
    },
  ];


  const tabImages: Record<TabKey, { src: string; alt: string; style: React.CSSProperties }> = {
    search: {
      src: "/test-page/enterprise/synoptix search.png",
      alt: "Synoptix Search",
      style: { width: "900px", height: "650px", marginBottom: "15%" },
    },
    agents: {
      src: "/test-page/enterprise/agents.png",
      alt: "Synoptix Agents",
      style: { width: "498px", height: "443px" },
    },
    library: {
      src: "/test-page/enterprise/library.png",
      alt: "Synoptix Library",
      style: { width: "498px", height: "443px" },
    },
    voice: {
      src: "/test-page/enterprise/voice agents.png",
      alt: "Synoptix Voice Agents",
      style: { width: "498px", height: "443px" },
    },
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto mt-20 ">
        <h2
          className="mb-8 md:mb-12 text-center"
          style={{
            fontFamily: "Syne",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "45px",
          }}
        >
          <span className="text-gray-800">Enterprise AI Solution for </span>
          <span className="text-[#5662F6]">
            Improved <br /> Productivity
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          {/* Left column - tabs */}
          <div className="w-full  lg:w-[50%] pl-20 pt-3 pb-10 flex rounded-lg flex-col justify-center h-full">
            
            
            {tabData.map((tab) => (
              <div className=" rounded-lg mb-1 border border-gray-100" key={tab.id}>
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center w-full  px-6 justify-between bg-white rounded-lg ${activeTab === tab.id ? "border-t-[3.7px] border-t-[#5662f6]" : "border-t-transparent"} hover:bg-gray-50 transition-colors`}
                  style={{ height: "100px" }}
                >
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold">
                    <img
                      src={tab.icon}
                      alt={tab.title}
                      style={{
                        width: tab.iconWidth ?? "28px",
                        height: tab.iconHeight ?? "28px",
                      }}
                    />

                    </div>
                    <span
                      style={{
                        fontFamily: "Syne",
                        fontWeight: 700,
                        fontSize: "26px",
                        color: "#323E50",
                      }}
                    >
                      {tab.title}
                    </span>
                    {activeTab === tab.id && (
                      <div className="absolute left-0 top-full mt-2 w-[450px] h-[1px] bg-gray-300" />
                    )}
                  </div>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {activeTab === tab.id ? (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7" 
                      />
                    ) : (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7" 
                      />
                    )}
                  </svg>
                </button>

                {activeTab === tab.id && (
                  <div className="px-6 bg-white border-gray-100 rounded-lg">
                    <div
                      className="text-gray-700 mb-3"
                      style={{
                        fontSize: "14px",
                        lineHeight: "24px",
                      }}
                    >
                      {tab.description}
                    </div>
                    {tab.showLearnMore && (
                      <Link
                        href="#learn-more"
                        className="inline-flex items-center text-[#5662F6] hover:text-blue-800"
                        style={{ fontFamily: "Syne", fontWeight: 700,fontSize: "16px" }}
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right column - image */}
          <div className="w-full lg:w-[55%] flex items-center justify-center h-full">
            <div className="relative w-full h-full">
              <div className="relative w-[619px] h-[520px]  mx-auto">
                {/* Frame Background */}
                <img
                  src="/test-page/frame.png"
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
                />

                {/* Crossfade Images */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {/* Current image */}
                  <img
                    key={`current-${currentImage}`}
                    src={tabImages[currentImage].src}
                    alt={tabImages[currentImage].alt}
                    className={`absolute transition-opacity duration-500 ease-in-out ${
                      isFadingOut ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      objectFit: "contain",
                      ...tabImages[currentImage].style,
                      
                    }}
                  />

                  {/* Next image, only visible during transition */}
                  {isFadingOut && (
                    <img
                      key={`next-${nextImage}`}
                      src={tabImages[nextImage].src}
                      alt={tabImages[nextImage].alt}
                      className="absolute transition-opacity duration-500 ease-in-out opacity-100"
                      style={{
                        objectFit: "contain",
                        ...tabImages[nextImage].style,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
