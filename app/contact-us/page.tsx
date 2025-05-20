import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactForm() {
  return (
    <div className="container mx-auto py-50 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-white shadow-lg h-[650px] rounded-[12px]">
        {/* Left side - Image */}
        <div className="relative h-[300px] md:h-full min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000"
            alt="Colorful stars background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-transparent"></div>

          {/* Content overlay on the image */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              See <span className="text-[#6366f1]">Synoptix</span> in action
            </h2>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 mt-0.5 rounded-full bg-[#6366f1]"></div>
                <p className="text-sm">Deliver real-time, AI-driven answers directly within your reps' workflows</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 mt-0.5 rounded-full bg-[#6366f1]"></div>
                <p className="text-sm">Surface personalized content based on customer context and rep engagement</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 mt-0.5 rounded-full bg-[#6366f1]"></div>
                <p className="text-sm">Cut down prospecting prep with instant access to current battle cards</p>
              </div>
            </div>

            {/* Product demo visualization */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 gap-1">
                {["Preferred Time", "Current Tools", "Goals", "Teams", "Use Cases"].map((item, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 text-sm rounded-md ${index === 4 ? "bg-[#e0e7ff] shadow-sm" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-gray-100 rounded-md p-4">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#6366f1] flex-shrink-0"></div>
                  <p className="text-xs text-gray-600">Let us know what you're exploring Synoptix for:</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "AI-powered Search",
                    "Knowledge Management",
                    "Compliance Automation",
                    "Workflow Integration",
                    "Other",
                  ].map((item, index) => (
                    <div key={index} className="px-2 py-1 text-xs bg-white rounded border border-gray-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-8 md:p-12">
          <form className="space-y-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#666666', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Work email
              </label>
              <input id="email" type="email" placeholder="" className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name
                </label>
                <input id="firstName" type="text" placeholder="" className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <input id="lastName" type="text" placeholder="" className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input id="company" type="text" placeholder="" className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input id="title" type="text" placeholder="" className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            <div className="pt-4">
            <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#5662F6] text-white px-4  py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 hover:shadow-md"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
