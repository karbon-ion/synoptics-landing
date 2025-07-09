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
        { bold: "Document & Email Drafting:", regular: " Generate proposals, reports, follow-ups, and emails in seconds using an enterprise AI platform.  " },
        { bold: "Instant Answers:", regular: " Use natural language search to find the right file, policy, or client detail across systems.  " },
        { bold: "Consistent Messaging:", regular: " Maintain brand and message alignment with centralised, approved content accessible to all teams.  " },
        { bold: "Scheduling & Admin Tasks:", regular: " Automate calendar bookings, reminders, and meeting preparation.  " },
        { bold: "Meeting Preparation:", regular: " Get insights and prior history about the person or topic ahead of the meeting. " },
      ],
      learnMoreLink: "/resources/blogs/ai-platform-for-all-teams-smarter-faster-enterprise-work"
    },
    marketing: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Ensure brand consistency:", regular: " Distribute approved content seamlessly across all campaigns and channels to maintain a consistent brand presence.  " },
        { bold: "Hyper-personalised content generation:", regular: " Use customer data and content repositories to generate targeted marketing emails, landing pages, or campaigns. " },
        { bold: "Automate creative generation:", regular: " Create marketing posts, blogs, and outreach emails with no-code agents powered by an AI platform for enterprise. " },
        { bold: "Customer insights from unstructured data:", regular: " Analyse unstructured data to surface key themes, pain points, and sentiment trends. " },
        { bold: "Campaign Review:", regular: " Scan marketing materials against regulatory guidelines, brand tone, and approved language. " }
      ],
      learnMoreLink: "/resources/blogs/ai-marketing-platform-for-faster-smarter-campaigns"
    },
    sales: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Access insights instantly:", regular: " Get customer data, battle cards, and document proposals in seconds. " },
        { bold: "Personalise every interaction:", regular: " Human-like generated messaging based on context and buyer intent.  " },
        { bold: "Cut down proposal writing time:", regular: " Write proposals by scanning database for previous precedents for similar requirements. " },
        { bold: "Summarise contracts instantly:", regular: " Pull key deal terms from lengthy sales contracts to enable faster decisions. " },
        { bold: "Close faster, convert more:", regular: " Qualify leads instantly and shorten sales cycles through consistent and high-quality communication. " },
      ],
      learnMoreLink: "/resources/blogs/empower-sales-teams-with-synoptix-ai-for-faster-deal-cycles"
    },
    it: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Instant Troubleshooting:", regular: " Investigate root causes and provide instant answers to routine IT support questions.  " },
        { bold: "IT Policy Assistant:", regular: " Conversational assistant retrieves and summarises the most relevant parts of IT policies and security procedures. " },
        { bold: "Faster mean time to resolution:", regular: " Ingest logs, incident reports, and system documentation to diagnose symptoms and recommend fixes. " },
        { bold: "Change impact assessment:", regular: " Map dependencies using internal documentation, system diagrams, and historical data to provide impact analysis. " },
        { bold: "Security & compliance document auditing:", regular: " Scan documents for gaps in policy, missing control definitions, or non-compliant language with support from an AI platform for enterprise.  " },
      ],
      learnMoreLink: "/resources/blogs/ai-for-it-operations-faster-support-smart-automation"
    },
    finance: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "Instant insights extraction:", regular: " Quickly analyse financial reports, invoices, contracts, and compliance docs.  " },
        { bold: "Contract & Invoice Intelligence:", regular: " Extract payment terms, escalation clauses, and obligations from contracts and flag inconsistencies using an enterprise AI platform. " },
        { bold: "Improve forecasting accuracy:", regular: " Use historical trends to inform accurate and predictive financial insights. " },
        { bold: "Financial report automation:", regular: " Extract key metrics from ERP systems, excel files, and previous reports to generate financial summaries, forecasts, and variance analysis. " },
        { bold: "Audit readiness and document search:", regular: " Provide instant access to audit-relevant records, retrieve historical compliance data and flag any gaps through an AI platform for enterprise.  " },
      ],
      learnMoreLink: "/resources/blogs/ai-for-finance-teams-real-time-insights-and-automation"
    },
    hr: {
      title: "Synoptix is for Every Team",
      features: [
        { bold: "HR Policy Assistant:", regular: " A Conversational assistant retrieves relevant sections from HR handbooks, contracts, and policy documents instantly. " },
        { bold: "Automated Role and JD alignment:", regular: " Generate and update role descriptions based on internal benchmarks, skill metrics, and market standards. " },
        { bold: "Performance Review Support:", regular: " Ensures employee performance data, peer feedback, and goal tracking are summarized into a structured review. " },
        { bold: "Employees sentiment analysis:", regular: " Analyse employees surveys, feedback forms, and exit interviews to surface sentiment trends. " },
        { bold: "Compliance & Policy Risk Monitoring:", regular: " Scan HR documents to identify non-compliant language or inconsistencies. " },
      ],
      learnMoreLink: "/resources/blogs/modern-hr-automation-platform-for-smarter-employee-support"
    },
  }

  const currentContent = tabContent[activeTab]

  return (
    <div className="max-w-7xl mx-auto mb-15 mt-[-150px] px-4 sm:px-6">
      <div className="bg-white rounded-2xl p-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl text-slate-800" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px" }}>
            Synoptix is for <span className="text-indigo-500">Every Team</span> in the Enterprise
          </h2>
        </div>

        {/* Tabs */}
        <div className="shadow-lg border-t-4 border-[#5662F6] rounded-lg" style={{
          background: 'linear-gradient(196.25deg, rgba(255, 255, 255, 0.4) 9.13%, rgba(219, 234, 254, 0.28) 92.56%)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
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
                  {tab === "marketing" && "I lead Marketing"}
                  {tab === "sales" && "I drive Sales"}
                  {tab === "it" && "I manage IT"}
                  {tab === "finance" && "I optimise Finance"}
                  {tab === "hr" && "I transform HR"}
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
                      {/* {index === 0 && " your reps' workflows"}
                      {index === 1 && " and rep engagement"}
                      {index === 2 && " cards"}
                      {index === 4 && " materials"}
                      {index === 5 && " support"} */}
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
                  Read Our Blog <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
