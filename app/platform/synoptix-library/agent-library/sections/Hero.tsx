'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Syne' }}>
              Supercharge Growth with Pre-built AI Agents
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            Unlock smarter workflows with AI-powered agents that streamline operations and accelerate your team’s daily tasks. 
            </p>
            <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
            Get a Demo
          </Link>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/agent-library/hero-right.png"
                alt="Agent Library Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
