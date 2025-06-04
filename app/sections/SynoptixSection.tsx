"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

type TabType = "all" | "marketing" | "sales" | "it" | "finance" | "hr"

interface FeatureText {
  bold: string
  regular: string
}

interface TabContent {
  title: string
  features: FeatureText[]
  learnMoreLink: string
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
        { bold: "Faster Prospecting", regular: " - Equip sales teams with real-time battle cards, lead insights, and AI-generated follow-up" },
        { bold: "Document & Email Drafting", regular: " Generate proposals, reports, follow-ups, and emails in second." },
        { bold: "Instant Answers", regular: " - Use natural language search to find the right file, policy, or client detail—across systems." },
        { bold: "Consistent Messaging", regular: "- Maintain brand and message alignment with centralised, approved content accessible to all teams." },
        { bold: "Scheduling & Admin Tasks", regular: " Automate calendar bookings, reminders, and meeting prep" }
      ],
      learnMoreLink: "/blog/ai-platform-for-all-teams-smarter-faster-enterprise-work"
    },
    marketing: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Ensure brand consistency", regular: " – Distribute approved content seamlessly across all campaigns and channels" },
        { bold: "Unlock content performance insights", regular: " – Use AI to identify and amplify high-impact assets" },
        { bold: "Automate creative generation", regular: " – Quickly produce drafts, taglines, and messaging variations with AI" },
        { bold: "Enhance team collaboration", regular: " – Centralised content access streamlines workflows and approvals" },
        { bold: "Enterprise-ready AI for Marketers", regular: " – Scalable, efficient AI platform for enterprise marketing teams" }
      ],
      learnMoreLink: "/blog/ai-marketing-platform-for-faster-smarter-campaigns"
    },
    sales: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Access insights instantly", regular: " – Get customer data, battle cards, and documents directly within your sales tools" },
        { bold: "Personalize every interaction", regular: " – Use AI-generated messaging based on live context and buyer intent" },
        { bold: "Automate proposals and follow-ups", regular: " – Create polished, on-brand content with minimal manual effort" },
        { bold: "Close faster, convert more", regular: " – Reduce cycle times with consistent, high-quality communication at scale" },
        { bold: "Enterprise-grade and sales-ready", regular: " – Built to empower your team with speed, accuracy, and confidence" },
      ],
      learnMoreLink: "/blog/empower-sales-teams-with-synoptix-ai-for-faster-deal-cycles"
    },
    it: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Resolve issues instantly", regular: "—AI answers for routine IT support questions." },
        { bold: "Access quick fixes", regular: "—Find device setups, system FAQs, and internal docs fast." },
        { bold: "Simplify record keeping", regular: "—Log updates, tickets, and change history automatically." },
        { bold: "Standardise troubleshooting", regular: "—Provide consistent resolutions using AI internal documentation." },
        { bold: "Reduce response time", regular: "—Empower teams to self-serve with support powered by your existing knowledge base." },
        { bold: "Optimise IT workflows", regular: "—Automate password resets, access requests, and repetitive admin tasks—securely." },
      ],
      learnMoreLink: "/blog/ai-for-it-operations-faster-support-smart-automation"
    },
    finance: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Instant insights extraction", regular: "—Quickly analyse financial reports, contracts, and compliance docs" },
        { bold: "Task automation", regular: "—Streamline repetitive work from data validation to audit prep" },
        { bold: "Full output traceability", regular: " – Ensure accuracy and accountability across AI-generated results" },
        { bold: "Risk reduction", regular: " – Minimize operational risks while improving reporting speed and quality" },
        { bold: "Compliant, efficient platform", regular: " – Engineered for enterprise AI finance leaders focused on governance" },
      ],
      learnMoreLink: "/blog/ai-for-finance-teams-real-time-insights-and-automation"
    },
    hr: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "AI-powered employee support", regular: " – Answer queries with agents trained on your policies and docs" },
        { bold: "Automated onboarding", regular: " – Deliver training materials and policy updates effortlessly" },
        { bold: "Consistent communication", regular: " – Maintain aligned messaging across teams and locations" },
        { bold: "Robust data protection", regular: " – Secure sensitive employee information with strict access controls" },
        { bold: "People-first AI platform", regular: " – Designed for modern HR teams to streamline operations" },
      ],
      learnMoreLink: "/blog/modern-hr-automation-platform-for-smarter-employee-support"
    },
  }

  const currentContent = tabContent[activeTab]

  return (
    <div className="max-w-7xl mx-auto mb-15 mt-[-150px] px-4 sm:px-6">
      <div className="bg-white rounded-2xl p-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl text-slate-800" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px" }}>
            Synoptix is for <span className="text-indigo-500">Every Team</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 w-full">
            {(["all", "marketing", "sales", "it", "finance", "hr"] as TabType[]).map((tab) => (
              <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-3 text-center cursor-pointer border-b-2 transition-colors duration-200 ${
                activeTab === tab
                  ? "text-[#232F30] border-indigo-600"
                  : "text-[#ACB6BE] border-transparent hover:text-gray-700"
              }`}
            >            
                <span
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "center"
                  }}
                >
                  {tab === "all" && "All Teams"}
                  {tab === "marketing" && "I drive Marketing"}
                  {tab === "sales" && "I drive Sales"}
                  {tab === "it" && "I drive IT"}
                  {tab === "finance" && "I drive Finance"}
                  {tab === "hr" && "I drive HR"}
                </span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 sm:p-6">
            {/* Left - Image */}
            <div className="flex-1">
              <Image
                src={getImageForTab(activeTab)}
                alt={`Synoptix for ${activeTab} teams`}
                width={500}
                height={450}
                className="w-full max-w-[640px] h-auto md:h-[400px] object-contain mx-auto"
              />
            </div>

            {/* Right - Features */}
            <div className="flex-1 md:mr-10 flex flex-col justify-center">
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
                    <p className="text-[14px] text-[#000000] flex-grow mt-0.3 pr-15" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '17px' }}>
                      <span style={{ fontWeight: 700 }}>{feature.bold}</span>
                      {feature.regular}
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
                  href={tabContent[activeTab].learnMoreLink}
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
