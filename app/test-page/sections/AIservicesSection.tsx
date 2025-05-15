import { ArrowRight } from "lucide-react"
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconTerminal2, IconSchool } from "@tabler/icons-react"
import Link from "next/link"

export default function AiServicesSection() {
  return (
    <div className="w-full py-16" style={{
      background: 'linear-gradient(180deg, #EFF5FF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Top row: Main banner and Fine Tuning card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 justify-center">
          {/* Main Banner - takes 2/3 of the width */}
          <div className="md:col-span-2 rounded-xl p-8 flex flex-col justify-center relative overflow-hidden" style={{
            backgroundImage: "url('/ai-services-card-background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '45px',
              color: '#1F2937'
            }}>
              AI Expertise That Gets <br />
              Enterprises from <span className="text-indigo-500">Idea to Impact</span>
            </h2>
            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center mt-9 gap-2 bg-[#5662F6] text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-md"
                style={{ width: '480px', height: '52px',fontSize:'18px',lineHeight:'100%',letterSpacing:'0px' }}
              >
                Optimise Your Business with Synoptix AI
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Fine Tuning Card - takes 1/3 of the width */}
          <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md" style={{ width: '384px', height: '287px' }}>
            <div className="mb-4">
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <IconTerminal2 className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#1F2937'
            }}>
              Fine Tuning &<br />
              Optimisation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Get higher accuracy and efficiency with AI models fine-tuned to your specific requirements and objectives.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 text-indigo-500 text-sm mt-4 font-medium">
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>

        {/* Bottom row: Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* AI Consulting Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md" style={{ width: '384px', height: '287px' }}>
            <div className="mb-4">
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <IconEaseInOut className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#1F2937'
            }}>AI Consulting</h3>
            <p className="mt-2 text-sm text-slate-600">
              Partner with our AI consulting experts to develop and execute strategies that maximize & ensure compliance and optimize your business objectives.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 text-indigo-500 text-sm mt-4 font-medium">
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>

          {/* AI Strategy Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md" style={{ width: '384px', height: '287px' }}>
            <div className="mb-4">
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fa-sharp fa-solid fa-chess-queen text-white text-[20px]"></i>
              </div>
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#1F2937'
            }}>
              AI Strategy<br />
              Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Align AI investments with your business objectives, identify opportunities, and create a roadmap.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 text-indigo-500 text-sm mt-4 font-medium">
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>

          {/* Training & Education Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md" style={{ width: '384px', height: '287px' }}>
            <div className="mb-4">
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <i className="fa-sharp fa-solid fa-graduation-cap text-white text-[20px]"></i>
              </div>
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#1F2937'
            }}>
              Training &<br />
              Education
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Build your workforce AI skills with tailored training programs, learning paths, and leadership workshops.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 text-indigo-500 text-sm mt-4 font-medium">
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
