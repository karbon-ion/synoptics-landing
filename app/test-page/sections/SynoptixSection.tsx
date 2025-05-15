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
      all: "image.png",
      marketing: "image-2.png",
      sales: "image-3.png",
      it: "image-4.png",
      finance: "image-1.png", // Using image-1 as fallback for finance
      hr: "image-2.png", // Using image-2 as fallback for hr
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
    <div className="max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-slate-800" style={{ fontFamily: "Syne, sans-serif" }}>
          Synoptix is for <span className="text-indigo-500">every team</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center ">
  <button
    onClick={() => setActiveTab("all")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "all" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    All Teams
  </button>
  <button
    onClick={() => setActiveTab("marketing")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "marketing" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    I drive Marketing
  </button>
  <button
    onClick={() => setActiveTab("sales")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "sales" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    I drive Sales
  </button>
  <button
    onClick={() => setActiveTab("it")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "it" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    I drive IT
  </button>
  <button
    onClick={() => setActiveTab("finance")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "finance" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    I drive Finance
  </button>
  <button
    onClick={() => setActiveTab("hr")}
    style={{
      fontFamily: 'Syne',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0px',
      textAlign: 'center',
    }}
    className={`px-6 py-3 ${activeTab === "hr" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
  >
    I drive HR
  </button>
</div>


      {/* Content */}
      <div className="grid md:grid-cols-2 items-center">
        {/* Left side - Product image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-7xl">
            <Image
              src={`/test-page/synoptix/${getImageForTab(activeTab)}`}
              alt={`Synoptix for ${activeTab} teams`}
              width={500}
              height={380}
              className="w-[640px] h-[423px]"
            />
          </div>
        </div>

        {/* Right side - Feature list */}
        <div className="space-y-4 pr-15 pt-15 pb-15">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="pt-0.5">
                <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-[#333333] font-normal">
                  {feature}
                  {index === 0 && " your reps' workflows"}
                  {index === 1 && " and rep engagement"}
                  {index === 2 && " cards"}
                  {index === 4 && " materials"}
                  {index === 5 && " support"}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center text-[#5662F6] text-lg font-medium hover:text-indigo-700"
            >
              Learn More <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
