import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactForm() {
  return (
    <div className="container mx-auto py-50 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-white shadow-lg h-[650px] rounded-[12px]">
        {/* Left side - SVG Background */}
        <div className="relative h-[500px] md:h-full min-h-[500px]">
          <Image
            src="/contact-us/contact-us.svg"
            alt="Contact us background"
            fill
            className="object-cover"
          />
          
          {/* Content overlay on the image */}
          <div className="absolute inset-0 flex flex-col ml-3">
            <div className="md:pt-12 md:px-12 mb-4">
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px", letterSpacing: "0%" }}>
              <h2 className="text-3xl tracking-tight">
                See <span className="text-[#6366f1]">Synoptix</span> in action
              </h2>
              </span>
            </div>

            <div className="px-8 md:px-12 space-y-4 ">
              <div className="flex items-start gap-3">
                
                <Image src="/test-page/synoptix/star.png" alt="Star bullet point" width={20} height={20} className="mt-0.5" />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", letterSpacing: "0.4%", color: "#000000" }}>
                <p className="text-sm">Deliver real-time, AI-driven answers directly within your reps' workflows</p>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image src="/test-page/synoptix/star.png" alt="Star bullet point" width={20} height={20} className="mt-0.5" />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", letterSpacing: "0.4%", color: "#000000" }}>
                <p className="text-sm">Surface personalized content based on customer context and rep engagement</p>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image src="/test-page/synoptix/star.png" alt="Star bullet point" width={20} height={20} className="mt-0.5" />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", letterSpacing: "0.4%", color: "#000000" }}>
                <p className="text-sm">Cut down prospecting prep with instant access to current battle cards</p>
                </span>
              </div>
            </div>

           
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-8 md:p-12 mt-20">
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
