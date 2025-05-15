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
  const [hasMounted, setHasMounted] = useState(false);

  const handleTabChange = (tabId: TabKey) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setNextImage(tabId);
    setIsFadingOut(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasMounted(true);
    }, 50); // Small delay to allow the initial render before starting transitions
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        setCurrentImage(nextImage);
        setIsFadingOut(false);
      }, 300); // Match with the fade-out duration
      return () => clearTimeout(timeout);
    }
  }, [isFadingOut, nextImage]);

  const tabData: { id: TabKey; title: string; icon: string; description: string; showLearnMore?: boolean }[] = [
    {
      id: "search",
      title: "Synoptix Search",
      icon: "/test-page/logos/search.svg",
      description: "Your unified brain, connected to everything you work with.",
      showLearnMore: true,
    },
    {
      id: "agents",
      title: "Synoptix Agents",
      icon: "/test-page/logos/agents.svg",
      description: "AI agents that automate your workflows.",
    },
    {
      id: "library",
      title: "Synoptix Library",
      icon: "/test-page/logos/library.svg",
      description: "Access to a vast library of resources.",
    },
    {
      id: "voice",
      title: "Synoptix Voice Agents",
      icon: "/test-page/logos/voiceagents.svg",
      description: "Voice-activated AI assistants.",
    },
  ];

  const tabImages: Record<TabKey, { src: string; alt: string; style: React.CSSProperties }> = {
    search: {
      src: "/test-page/enterprise/synoptix search.png",
      alt: "Synoptix Search",
      style: { width: "598.44px", height: "490px", marginBottom: "20%" },
    },
    agents: {
      src: "/test-page/enterprise/agents.png",
      alt: "Synoptix Agents",
      style: { width: "498.44px", height: "443px", marginTop: "3%" },
    },
    library: {
      src: "/test-page/enterprise/library.png",
      alt: "Synoptix Library",
      style: { width: "498.44px", height: "443px", marginBottom: "%" },
    },
    voice: {
      src: "/test-page/enterprise/voice agents.png",
      alt: "Synoptix Voice Agents",
      style: { width: "498.44px", height: "443px", marginTop: "5%" },
    },
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2
          className="mb-8 md:mb-12 text-center"
          style={{
            fontFamily: "Syne",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
          }}
        >
          <span className="text-gray-800">Enterprise AI Solution for </span>
          <span className="text-[#5662F6]">
            Improved <br /> Productivity
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left column - tabs */}
          <div className="w-full lg:w-[45%]">
            {tabData.map((tab) => (
              <div className="mb-2" key={tab.id}>
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center w-full py-4 px-6 justify-between bg-white rounded-lg ${
                    activeTab === tab.id
                      ? "border-t-[3.7px] border-t-[#5662f6]"
                      : "border-t border-gray-100"
                  } hover:bg-gray-50 transition-colors`}
                  style={{ minHeight: "80px" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <img src={tab.icon} alt={tab.title} className="w-7 h-7" />
                    </div>
                    <span
                      style={{
                        fontFamily: "Syne",
                        fontWeight: 600,
                        fontSize: "20px",
                        textAlign: "left",
                      }}
                    >
                      {tab.title}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                      activeTab === tab.id ? "transform rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {activeTab === tab.id && (
                  <div className="py-3 px-6 bg-white border-x border-b border-gray-100 shadow-sm rounded-b-lg">
                    <div
                      className="text-gray-700 mb-3"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      {tab.description}
                    </div>
                    {tab.showLearnMore && (
                      <Link
                        href="#learn-more"
                        className="inline-flex items-center text-[#5662F6] hover:text-blue-800"
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
          <div className="w-full lg:w-[55%] flex items-start justify-center">
            <div className="relative w-full" style={{ maxWidth: "650px" }}>
              <div className="relative mt-[-80px] w-[600px] h-[600px] mx-auto">
                {/* Frame Background */}
                <img
                  src="/test-page/frame.png"
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
                />

                {/* Foreground Image with fade */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={tabImages[currentImage].src}
                    alt={tabImages[currentImage].alt}
                    className={`transition-opacity duration-300 ease-in-out ${
                      !hasMounted
                        ? "opacity-0"
                        : isFadingOut
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    style={{
                      objectFit: "contain",
                      ...tabImages[currentImage].style,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
