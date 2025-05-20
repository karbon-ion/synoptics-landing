import { ArrowRight, Lock, Brain, Sun, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSecuritySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-34">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] text-center md:text-left text-gray-800" style={{ fontFamily: 'Syne, sans-serif', lineHeight: '45px',fontWeight: 700 }}>
          Secure and Built for <span className="text-indigo-500">Enterprise</span>
        </h2>
        <Link
          href="/ai-security"
          className="bg-[#5662F6] hover:bg-indigo-600 text-white px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full flex items-center transition-colors whitespace-nowrap text-sm sm:text-[18px]"
          style={{ fontFamily: 'Syne', fontWeight: 500 }}
        >
          Discover AI Security <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="relative z-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
          {/* Card 1 */}
          <div className="relative bg-[#5662F6] rounded-xl p-1 text-white min-h-[300px] z-[200] w-full sm:w-64 md:w-76 transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:z-[250]">
            <div className="absolute top-12 sm:top-16 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#626DFF] border border-white flex items-center justify-center z-40">
                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 sm:pr-4">
              <h3 
                className="flex items-center mb-3 ml-4 text-lg sm:text-xl md:text-[22px] leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne', fontWeight: 600,color:'#ffffff' }}
              >
                Content Safety <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs ml-4 pb-5 text-white/80 leading-relaxed">
                Weave evaluations combine a test dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#A095FF] rounded-xl p-6 text-white min-h-[300px] sm:-ml-8 md:-ml-12 z-[150] w-full sm:w-74 md:w-88 transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:z-[175]">
            <div className="absolute top-12 sm:top-16 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#B2A9FF] border border-white flex items-center justify-center z-40">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 md:left-14  sm:pr-4">
              <h3 
                className="flex items-center mb-3 ml-8 text-lg sm:text-xl md:text-[22px] leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne', fontWeight: 600,color:'#ffffff' }}
              >
                Anti Hallucination <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs ml-8 pb-5 text-white/80 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#DADCFF]  text-slate-800 min-h-[300px] sm:-ml-8 md:-ml-12 z-[100] w-full sm:w-74 md:w-88 rounded-xl transition-all duration-300 hover:shadow-lg hover:brightness-105 hover:z-[125]">
            <div className="absolute top-12 sm:top-16 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-400/30"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E7E9FF] border border-[#858491] flex items-center justify-center z-40">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-400/30"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 md:left-14  sm:pr-4">
              <h3 
                className="flex items-center mb-3 ml-6 text-lg sm:text-xl md:text-[22px] leading-tight md:leading-[22px]"
                style={{ fontFamily: 'Syne', fontWeight: 600,color:'#323E50' }}
              >
                Toxicity Detection <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs ml-6 pb-5 text-slate-600 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white p-6 text-slate-800 min-h-[300px] sm:-ml-8 md:-ml-12 z-[50] w-full sm:w-74 md:w-88 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:z-[75]">
            <div className="absolute top-12 sm:top-16 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-300"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F4F4F4] border border-[#979591] flex items-center justify-center z-40">
                <LayoutGrid className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-300"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 md:left-14 right-6 pr-4">
              <h3 
                className="flex items-center mb-3 ml-8 text-lg sm:text-xl md:text-[22px] leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne', fontWeight: 600,color:'#323E50' }}
              >
                PII Extraction <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs ml-8 pb-5 text-slate-600 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}