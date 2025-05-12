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
        "Deliver real-time, AI-driven answers directly within your reps' workflows",
        "Surface personalized content based on customer context and rep engagement",
        "Cut down prospecting prep with instant access to current battle cards",
        "Use AI to quickly generate and share sales documentation at scale",
        "Maintain consistent messaging with centralized, approved materials",
        "Accelerate onboarding and ramp-up with streamlined, AI-powered support"
      ]
    },
    marketing: {
      title: "Synoptix for Marketing teams",
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
      title: "Synoptix for Sales teams",
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
      title: "Synoptix for IT teams",
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
      title: "Synoptix for Finance teams",
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
      title: "Synoptix for HR teams",
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
        <h2 className="text-3xl font-semibold text-slate-800">
          {activeTab === "all" ? (
            <>{currentContent.title.split(" for ")[0]} is for <span className="text-indigo-500">every team</span></>
          ) : (
            <>{currentContent.title.split(" for ")[0]} for <span className="text-indigo-500">{currentContent.title.split(" for ")[1]}</span></>
          )}
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-12">
        <button 
          onClick={() => setActiveTab("all")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "all" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          All Teams
        </button>
        <button 
          onClick={() => setActiveTab("marketing")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "marketing" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Marketing
        </button>
        <button 
          onClick={() => setActiveTab("sales")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "sales" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Sales
        </button>
        <button 
          onClick={() => setActiveTab("it")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "it" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive IT
        </button>
        <button 
          onClick={() => setActiveTab("finance")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "finance" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive Finance
        </button>
        <button 
          onClick={() => setActiveTab("hr")} 
          className={`px-4 py-3 font-bold text-sm leading-5 tracking-normal text-center ${activeTab === "hr" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700 border-b-0"}`}
          style={{ fontFamily: 'Syne' }}
        >
          I drive HR
        </button>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Product image */}
        <div className="bg-indigo-100 rounded-lg p-4 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-full w-full">
                {/* Mock UI */}
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-300 overflow-hidden flex-shrink-0">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Profile" width={40} height={40} />
                    </div>
                    <div className="ml-4 flex-1"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs">S</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="bg-indigo-600 rounded-lg p-3 relative">
                      <div className="absolute right-3 top-3 flex space-x-1">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-xs">i</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-xs">+</span>
                        </div>
                      </div>
                      <div className="bg-white rounded p-2 mt-2 text-xs text-gray-600">
                        <p>Can you provide some guidance on increasing conversion rates?</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                        <span className="text-white text-xs">S</span>
                      </div>
                      <span className="text-xs text-gray-600">Suggested Answer for you</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white text-xs">
                      SF
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs">
                      G
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Feature list */}
        <div className="space-y-6">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white">
                <span className="text-xs">{index + 1}</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  {feature}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <Link href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
