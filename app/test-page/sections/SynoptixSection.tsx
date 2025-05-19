"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

type TabType = "all" | "marketing" | "sales" | "it" | "finance" | "hr"

interface TabContent {
  title: string
  features: string[]
}

export default function SynoptixComponent() {
  const [activeTab, setActiveTab] = useState<TabType>("all")

  const getImageForTab = (tab: TabType): string => {
    const imageMap = {
      all: "/test-page/synoptix/Image.png",
      marketing: "/test-page/synoptix/Image-6.png",
      sales: "/test-page/synoptix/Image-2.png",
      it: "/test-page/synoptix/Image-3.png",
      finance: "/test-page/synoptix/Image-4.png",
      hr: "/test-page/synoptix/Image-1.png",
    }
    return imageMap[tab]
  }

  const tabContent: Record<TabType, TabContent> = {
    all: {
      title: "Synoptix is for every team",
      features: [
        "Deliver real-time, AI-driven answers directly within",
        "Surface personalized content based on customer context",
        "Cut down prospecting prep with instant access to current battle",
        "Use AI to quickly generate and share sales documentation at scale",
        "Maintain consistent messaging with centralized, approved",
        "Accelerate onboarding and ramp-up with streamlined, AI-powered",
      ],
    },
    marketing: {
      title: "Synoptix is for every team",
      features: [
        "Create and distribute marketing content with AI assistance",
        "Track campaign performance with real-time analytics",
        "Personalize customer communications at scale",
        "Streamline approval workflows for marketing assets",
        "Integrate with existing marketing technology stack",
        "Generate SEO-optimized content with AI suggestions",
      ],
    },
    sales: {
      title: "Synoptix is for every team",
      features: [
        "Access customer insights during live sales conversations",
        "Generate personalized proposals in seconds",
        "Track deal progress with intelligent forecasting",
        "Automate follow-ups with AI-powered scheduling",
        "Analyze call recordings for coaching opportunities",
        "Synchronize data across CRM and sales tools",
      ],
    },
    it: {
      title: "Synoptix is for every team",
      features: [
        "Automate ticket routing and prioritization",
        "Generate technical documentation with AI assistance",
        "Monitor system performance with predictive analytics",
        "Streamline onboarding and access management",
        "Detect and respond to security threats faster",
        "Integrate with existing IT infrastructure tools",
      ],
    },
    finance: {
      title: "Synoptix is for every team",
      features: [
        "Automate financial reporting and analysis",
        "Streamline approval workflows for expenses",
        "Generate forecasts with AI-powered modeling",
        "Detect anomalies in financial transactions",
        "Simplify compliance and audit preparation",
        "Integrate with existing accounting systems",
      ],
    },
    hr: {
      title: "Synoptix is for every team",
      features: [
        "Streamline candidate screening and hiring",
        "Automate employee onboarding processes",
        "Generate personalized training materials",
        "Track employee engagement with analytics",
        "Simplify performance review management",
        "Create and manage HR documentation efficiently",
      ],
    },
  }

  const currentContent = tabContent[activeTab]

  return (
    <div className="max-w-7xl mx-auto mb-15 ">
      <div className="bg-white rounded-2xl p-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-slate-800" style={{ fontFamily: "Syne, sans-serif",fontWeight: 700, fontSize: "36px", lineHeight: "45px" }}>
            Synoptix is for <span className="text-indigo-500">every team</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="shadow-lg">
          <div className="flex flex-wrap justify-center">
            {(["all", "marketing", "sales", "it", "finance", "hr"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "Syne",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  textAlign: "center",
                }}
                className={`px-6 py-3 ${
                  activeTab === tab
                    ? "text-[#232F30] border-b-2 border-indigo-600"
                    : "text-[#ACB6BE] hover:text-gray-700"
                }`}
              >
                {tab === "all" && "All Teams"}
                {tab === "marketing" && "I drive Marketing"}
                {tab === "sales" && "I drive Sales"}
                {tab === "it" && "I drive IT"}
                {tab === "finance" && "I drive Finance"}
                {tab === "hr" && "I drive HR"}
              </button>
            ))}
          </div>
        
          {/* Content - Flex container */}
          <div className="flex flex-col md:flex-row">
            {/* Left - Image */}
            <div className="flex-1">
              <Image
                src={getImageForTab(activeTab)}
                alt={`Synoptix for ${activeTab} teams`}
                width={500}
                height={380}
                className="min-w-[640px] h-[423px] object-contain"
              />
            </div>

            {/* Right - Features */}
            <div className="flex-1 mt-10 mr-10">
              <div className="space-y-4">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Image
                      src="/test-page/synoptix/star.png"
                      alt="star icon"
                      width={19}
                      height={19}
                      className="flex-shrink-0 mr-2"
                    />
                    <p className="text-[14px] text-[#000000] flex-grow mt-0.3 pr-15" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17px', letterSpacing: '0%', color: '#000000'}}>
                      {feature}
                      {index === 0 && " your reps' workflows"}
                      {index === 1 && " and rep engagement"}
                      {index === 2 && " cards"}
                      {index === 4 && " materials"}
                      {index === 5 && " support"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center text-[#5662F6] hover:text-indigo-700"
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "100%",
                  }}
                >
                  Learn More <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}