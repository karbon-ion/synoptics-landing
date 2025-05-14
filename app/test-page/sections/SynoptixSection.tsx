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
  const tabContent: Record<TabType, TabContent> = {
    all: {
      title: "Synoptix is for every team",
      features: [
        "Deliver real-time, AI-driven answers directly within ",
        "Surface personalized content based on customer context ",
        "Cut down prospecting prep with instant access to current battle",
        "Use AI to quickly generate and share sales documentation at scale",
        "Maintain consistent messaging with centralized, approved ",
        "Accelerate onboarding and ramp-up with streamlined, AI-powered "
      ]
    },
    marketing: {
      title: "Synoptix is for every team",
      features: [
        "Create and distribute marketing content with AI assistance",
        "Track campaign performance with real-time analytics",
        "Personalize customer communications at scale",
        "Streamline approval workflows for marketing assets",
        "Integrate with existing marketing technology stack",
        "Generate SEO-optimized content with AI suggestions"
      ]
    },
    sales: {
      title: "Synoptix is for every team",
      features: [
        "Access customer insights during live sales conversations",
        "Generate personalized proposals in seconds",
        "Track deal progress with intelligent forecasting",
        "Automate follow-ups with AI-powered scheduling",
        "Analyze call recordings for coaching opportunities",
        "Synchronize data across CRM and sales tools"
      ]
    },
    it: {
      title: "Synoptix is for every team",
      features: [
        "Automate ticket routing and prioritization",
        "Generate technical documentation with AI assistance",
        "Monitor system performance with predictive analytics",
        "Streamline onboarding and access management",
        "Detect and respond to security threats faster",
        "Integrate with existing IT infrastructure tools"
      ]
    },
    finance: {
      title: "Synoptix is for every team",
      features: [
        "Automate financial reporting and analysis",
        "Streamline approval workflows for expenses",
        "Generate forecasts with AI-powered modeling",
        "Detect anomalies in financial transactions",
        "Simplify compliance and audit preparation",
        "Integrate with existing accounting systems"
      ]
    },
    hr: {
      title: "Synoptix is for every team",
      features: [
        "Streamline candidate screening and hiring",
        "Automate employee onboarding processes",
        "Generate personalized training materials",
        "Track employee engagement with analytics",
        "Simplify performance review management",
        "Create and manage HR documentation efficiently"
      ]
    }
  }

  const currentContent = tabContent[activeTab]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
          {activeTab === "all" ? (
            <>{currentContent.title.split(" for ")[0]} for <span className="text-indigo-500">every team</span></>
          ) : (
            <>{currentContent.title.split(" for ")[0]} for <span className="text-indigo-500">{currentContent.title.split(" for ")[1]}</span></>
          )}
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-12">
        <button 
          onClick={() => setActiveTab("all")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "all" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          All Teams
        </button>
        <button 
          onClick={() => setActiveTab("marketing")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "marketing" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Marketing
        </button>
        <button 
          onClick={() => setActiveTab("sales")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "sales" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Sales
        </button>
        <button 
          onClick={() => setActiveTab("it")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "it" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive IT
        </button>
        <button 
          onClick={() => setActiveTab("finance")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "finance" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Finance
        </button>
        <button 
          onClick={() => setActiveTab("hr")} 
          className={`px-10 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "hr" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive HR
        </button>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Product image */}
        <div className="bg-indigo-100 rounded-lg p-4 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <Image 
              src="/test-page/synoptix/all teams.svg" 
              alt="Synoptix for all teams" 
              width={640} 
              height={423} 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Feature list */}
        <div className="space-y-6">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="pt-1">
                <Image 
                  src="/test-page/synoptix/star.png" 
                  alt="Star" 
                  width={24} 
                  height={24} 
                  className="flex-shrink-0"
                />
              </div>
              <div>
                <p className="font-normal font-size-[14px] text-[#000000] font-poppins">
                  {feature}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <Link 
              href="#" 
              className="inline-flex items-center text-[#5662F6] text-[18px] font-bold hover:text-indigo-700"
              style={{ 
                width: '144px', 
                height: '24px', 
                position: 'relative', 
                gap: '6px',
                fontFamily: 'Syne, sans-serif'
              }}
            >
              Learn More <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
