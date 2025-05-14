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
        <h2 className="mb-8 md:mb-12 text-center" style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '36px', lineHeight: '45px' }}>
          <span className="text-gray-800">Enterprise AI Solution for </span>
          <span className="text-[#5662F6]">Improved <br/> Productivity</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left column - tabs */}
          <div className="w-full lg:w-[45%]">
            {tabData.map((tab) => (
              <div className="mb-2" key={tab.id}>
                <button 
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center w-full py-4 px-6 justify-between bg-white rounded-lg ${
                    activeTab === tab.id ? "border-t-[3.7px] border-t-[#5662f6]" : "border-t border-gray-100"
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
                  <div className="py-3 px-6 bg-white border-x border-b border-gray-100 shadow-sm rounded-b-lg">
                    <div className="text-gray-700 mb-3" style={{ 
                      fontSize: '16px', 
                      lineHeight: '24px'
                    }}>
                      {tab.description}
                    </div>
                    {tab.showLearnMore && (
                      <Link href="#learn-more" className="inline-flex items-center text-[#5662F6] hover:text-blue-800">
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
          <div className="w-full lg:w-[55%] flex items-start justify-center">
            <div className="relative w-full" style={{ maxWidth: '650px' }}>
              {activeTab === "search" && (
                <div className="relative">
                  <img 
                    src="/test-page/enterprise/synoptix search.png" 
                    alt="Synoptix Search" 
                    className="w-full h-auto mt-[-70px]"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              )}
              {activeTab === "agents" && (
                <div className="relative">
                  <img 
                    src="/test-page/enterprise/synoptix agent.png" 
                    alt="Synoptix Agents" 
                    className="w-full h-auto mt-[-15px]"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              )}
              {activeTab === "library" && (
                <div className="relative">
                  <img 
                    src="/test-page/enterprise/synoptix library.png" 
                    alt="Synoptix Library" 
                    className="w-full h-auto"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              )}
              {activeTab === "voice" && (
                <div className="relative">
                  <img 
                    src="/test-page/enterprise/synoptix voice agents.png" 
                    alt="Synoptix Voice Agents" 
                    className="w-full h-auto"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}