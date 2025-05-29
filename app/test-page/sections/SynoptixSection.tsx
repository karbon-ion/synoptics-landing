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
      title: "Synoptix is for Every Team",
      features: [
        "Faster Prospecting - Equip sales teams with real-time battle cards, lead insights, and AI-generated follow-up",
        "Document & Email Drafting Generate proposals, reports, follow-ups, and emails in second.",
        "Instant Answers - Use natural language search to find the right file, policy, or client detail—across systems.",
        "Consistent Messaging- Maintain brand and message alignment with centralised, approved content accessible to all teams.",
        "Scheduling & Admin Tasks Automate calendar bookings, reminders, and meeting prep"
      ],
    },
    marketing: {
      title: "Synoptix is for Every Team",
      features: [
        "Ensure brand consistency – Distribute approved content seamlessly across all campaigns and channels",
        "Unlock content performance insights – Use AI to identify and amplify high-impact assets",
        "Automate creative generation – Quickly produce drafts, taglines, and messaging variations with AI",
        "Enhance team collaboration – Centralised content access streamlines workflows and approvals",
        "Enterprise-ready AI for Marketers – Scalable, efficient AI platform for enterprise marketing teams"
      ],
    },
    sales: {
      title: "Synoptix is for Every Team",
      features: [
        "Access insights instantly – Get customer data, battle cards, and documents directly within your sales tools",
        "Personalize every interaction – Use AI-generated messaging based on live context and buyer intent",
        "Automate proposals and follow-ups – Create polished, on-brand content with minimal manual effort",
        "Close faster, convert more – Reduce cycle times with consistent, high-quality communication at scale",
        "Enterprise-grade and sales-ready – Built to empower your team with speed, accuracy, and confidence",
      ],
    },
    it: {
      title: "Synoptix is for Every Team",
      features: [
        "Resolve issues instantly—AI answers for routine IT support questions.",
        "Access quick fixes—Find device setups, system FAQs, and internal docs fast.",
        "Simplify record keeping—Log updates, tickets, and change history automatically.",
        "Standardise troubleshooting—Provide consistent resolutions using AI internal documentation.",
        "Reduce response time—Empower teams to self-serve with support powered by your existing knowledge base.",
        "Optimise IT workflows—Automate password resets, access requests, and repetitive admin tasks—securely.",
      ],
    },
    finance: {
      title: "Synoptix is for Every Team",
      features: [
        "Instant insights extraction—Quickly analyse financial reports, contracts, and compliance docs",
        "Task automation—Streamline repetitive work from data validation to audit prep",
        "Full output traceability – Ensure accuracy and accountability across AI-generated results",
        "Risk reduction – Minimize operational risks while improving reporting speed and quality",
        "Compliant, efficient platform – Engineered for enterprise AI finance leaders focused on governance",
      ],
    },
    hr: {
      title: "Synoptix is for Every Team",
      features: [
        "AI-powered employee support – Answer queries with agents trained on your policies and docs",
        "Automated onboarding – Deliver training materials and policy updates effortlessly",
        "Consistent communication – Maintain aligned messaging across teams and locations",
        "Robust data protection – Secure sensitive employee information with strict access controls",
        "People-first AI platform – Designed for modern HR teams to streamline operations",
      ],
    },
  }

  const currentContent = tabContent[activeTab]

  return (
    <div className="max-w-7xl mx-auto mb-15 mt-[-150px]">
      <div className="bg-white rounded-2xl p-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-slate-800" style={{ fontFamily: "Syne, sans-serif",fontWeight: 700, fontSize: "36px", lineHeight: "45px" }}>
            Synoptix is for <span className="text-indigo-500">Every Team</span>
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
                  width: "165px",
                  height: "48px",
                  whiteSpace: "nowrap"
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