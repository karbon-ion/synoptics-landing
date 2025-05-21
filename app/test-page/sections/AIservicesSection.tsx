import { ArrowRight } from "lucide-react";
import {
  IconTerminal2,
  IconEaseInOut,
} from "@tabler/icons-react";
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
        <div className="grid grid-cols-1 md:grid-cols-3  mb-6">
          {/* Main Banner */}
          <div
            className="md:col-span-2 flex flex-col justify-center relative overflow-hidden"
            style={{
              width: '800px',
              height: '280px',
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
            <div className="mt-4 pl-10 md:mt-6">
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
                Optimise Your Business with Synoptix AI
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Fine Tuning Card */}
          <div className="bg-white rounded-xl  pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-[385px]">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <IconTerminal2 className="h-5 w-5 text-white" />
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
                Our enterprise AI platform fine- tunes large language models using your business-specific datasets to boost accuracy, efficiency, and relevance across every use case.
              </p>
            </div>
            <Link
              href="#"
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
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* AI Consulting Card */}
          <div className="bg-white rounded-xl  pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-[385px]">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <IconTerminal2 className="h-5 w-5 text-white" />
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
                Our enterprise AI consultants' partner with your teams to design, implement, and scale AI strategies that align with your goals, ensure compliance, and deliver measurable ROI.
              </p>
            </div>
            <Link
              href="#"
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
          <div className="bg-white rounded-xl  pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-[385px]">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <IconTerminal2 className="h-5 w-5 text-white" />
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
                AI Strategy Development
              </h3>
              <p
                className="mt-2 pb-2 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                Our enterprise AI platform helps you identify the highest-impact AI opportunities, align initiatives with your business roadmap, and create a sustainable strategy to scale intelligently.
              </p>
            </div>
            <Link
              href="#"
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
          <div className="bg-white rounded-xl  pl-8 pt-7 pr-5 pb-10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[280px] w-[385px]">
            <div>
              <div className="bg-[#5662F6] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <IconTerminal2 className="h-5 w-5 text-white" />
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
                className="mt-2 pb-14 text-slate-600 text-sm leading-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                From custom learning paths to leadership workshops, we train your teams on how to use, manage, and scale AI responsibly — no technical background required.
              </p>
            </div>
            <Link
              href="#"
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
