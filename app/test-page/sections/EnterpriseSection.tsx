"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState("search");

  const tabData = [
    {
      id: "search",
      title: "Synoptix Search",
      icon: "/test-page/logos/search.svg",
      description: "Your unified brain, connected to everything you work with.",
      showLearnMore: true
    },
    {
      id: "agents",
      title: "Synoptix Agents",
      icon: "/test-page/logos/agents.svg",
      description: "AI agents that automate your workflows."
    },
    {
      id: "library",
      title: "Synoptix Library",
      icon: "/test-page/logos/library.svg",
      description: "Access to a vast library of resources."
    },
    {
      id: "voice",
      title: "Synoptix Voice Agents",
      icon: "/test-page/logos/voiceagents.svg",
      description: "Voice-activated AI assistants."
    }
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="mb-8 md:mb-12 text-center" style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '26px', lineHeight: '45px' }}>
          <span className="text-gray-800">Enterprise AI Solution for </span>
          <span className="text-indigo-600">Improved Productivity</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-2">
          {/* Left column - tabs */}
          <div className="w-full lg:w-[48%]">
            {tabData.map((tab) => (
              <div className="mb-2" key={tab.id}>
                <button 
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center w-full py-4 px-6 justify-between bg-white rounded-lg ${
                    activeTab === tab.id ? "border-t-2 border-t-[#5662f6]" : "border-t border-gray-100"
                  } hover:bg-gray-50 transition-colors`}
                  style={{ minHeight: '80px' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <img src={tab.icon} alt={tab.title} className="w-7 h-7" />
                    </div>
                    <span style={{ 
                      fontFamily: 'Syne', 
                      fontWeight: 600, 
                      fontSize: '20px',
                      textAlign: 'left'
                    }}>
                      {tab.title}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${activeTab === tab.id ? "transform rotate-180" : ""}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {activeTab === tab.id && (
                  <div className="py-4 px-6 bg-white border-x border-b border-gray-100 shadow-sm rounded-b-lg">
                    <div className="text-gray-700 mb-3" style={{ 
                      fontSize: '16px', 
                      lineHeight: '24px',
                      minHeight: '72px' // 3 lines * 24px line height
                    }}>
                      {tab.description}
                    </div>
                    {tab.showLearnMore && (
                      <Link href="#learn-more" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
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
          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] h-full">
              <Image 
                src="/test-page/image.png" 
                alt="Synoptix Enterprise Dashboard" 
                width={600} 
                height={500}
                className="rounded-lg shadow-xl w-full h-full object-cover"
                style={{ minHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}