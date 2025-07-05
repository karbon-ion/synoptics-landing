import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AiServicesSection() {
  return (
    <div
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(0deg, #EFF5FF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row: Main banner and Fine Tuning card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Main Banner */}
          <div
            className="md:col-span-2 flex flex-col justify-center relative overflow-hidden h-[280px] w-full"
            style={{
              borderRadius: '22px',
              border: '10px solid white',
              backgroundImage: "url('/ai-services-card-background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: '32px'
            }}
          >
            <Image 
              src="/test-page/lines.svg" 
              alt="Decorative lines"
              width={30}
              height={30}
              className="absolute left-10 top-8"
            />
            <h2
              className="text-2xl sm:text-3xl pl-10 pt-3 md:text-[36px] leading-tight md:leading-[45px] text-gray-800"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              AI Services That Gets <br className="hidden sm:block" />
              Enterprises from <span className="text-indigo-500">Idea to Impact</span>
            </h2>
            <div className="mt-4 md:mt-6 flex justify-center md:justify-start md:pl-10 px-4 md:px-0">
              <Link
                href="/services/ai-consulting"
                className="inline-flex items-center whitespace-nowrap justify-center gap-3 bg-[#5662F6] text-white px-8 py-3 rounded-full text-[13px] sm:text-sm md:text-base font-bold transition-all duration-300 hover:shadow-md"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  lineHeight: "100%",
                }}
              >
                <span className="truncate">Optimise Your Business with Synoptix AI</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 ml-1" />
              </Link>
            </div>
          </div>

          {/* Fine Tuning Card */}
          <div className="bg-white rounded-xl pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-full">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <Image 
                  src="/test-page/ai-services-section/fine tuning.svg" 
                  alt="Fine Tuning"
                  width={30}
                  height={30}
                  className="h-30 w-30"
                />
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "28px",
                  color: "#323E50",
                }}
              >
                Fine Tuning &<br />
                Optimisation
              </h3>
              <p
                className="mt-2 pb-5 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                Fine-tunes large language models using your business-specific datasets to boost accuracy, efficiency, and relevance on a particular task or domain. 
              </p>
            </div>
            <Link
              href="/services/ai-consulting#techniques"
              className="inline-flex items-center gap-1 text-indigo-500"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
              }}
            >
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>

        {/* Bottom row: Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Consulting Card */}
          <div className="bg-white rounded-xl pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-full">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <Image 
                  src="/test-page/ai-services-section/ai consulting.svg" 
                  alt="AI Consulting"
                  width={25}
                  height={22}
                  className="h-22 w-25"
                />
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "28px",
                  color: "#323E50",
                }}
              >
                AI Consulting
              </h3>
              <p
                className="mt-2 pb-9 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
               We help you unlock AI’s potential where strategy meets technology. Embedding intelligence across your operations to turn promise into measurable performance. 
              </p>
            </div>
            <Link
              href="/services/ai-consulting#techniques"
              className="inline-flex items-center gap-1 text-indigo-500"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
              }}
            >
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        

          {/* AI Strategy Card */}
          <div className="bg-white rounded-xl pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-full">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <Image 
                  src="/test-page/ai-services-section/ai strategy.svg" 
                  alt="AI Strategy"
                  width={30}
                  height={30}
                  className="h-30 w-30"
                />
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "28px",
                  color: "#323E50",
                }}
              >
                Proof of Concepts (PoC) 
              </h3>
              <p
                className="mt-2 pb-7 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
               Prototype AI solutions to validate performance, usability, and ROI before full-scale implementation. Our PoC helps de-risk innovation and builds confidence. 
              </p>
            </div>
            <Link
              href="/services/ai-consulting#techniques"
              className="inline-flex items-center gap-1 text-indigo-500"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
              }}
            >
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        

          {/* Training & Education Card */}
          <div className="bg-white rounded-xl pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-full">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <Image 
                  src="/test-page/ai-services-section/training logo.svg" 
                  alt="Training & Education"
                  width={33}
                  height={33}
                  className="h-33 w-33"
                />
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "28px",
                  color: "#323E50",
                }}
              >
                Training & Education
              </h3>
              <p
                className="mt-2 pb-9 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
               Equip your teams with the knowledge and skills to adopt and govern AI responsibly. From executive briefings to hands-on technical workshops with enterprise AI platform. 
              </p>
            </div>
            <Link
              href="/services/ai-consulting#techniques"
              className="inline-flex items-center gap-1 text-indigo-500"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
              }}
            >
              Learn More
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
