import { ArrowRight, Lock, Brain, Sun, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSecuritySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-center md:text-left text-gray-800" style={{ fontFamily: 'Syne, sans-serif', lineHeight: '45px' }}>
          Secure and Built for <span className="text-indigo-500">Enterprise</span>
        </h2>
        <Link
          href="/ai-security"
          className="bg-[#5662F6] font-bold hover:bg-indigo-600 text-white px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full flex items-center transition-colors whitespace-nowrap text-sm sm:text-[18px]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Discover AI Security <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="relative z-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
          {/* Card 1 */}
          <div className="relative bg-[#5662F6] rounded-xl p-6 text-white min-h-[250px] sm:h-[326px] z-[40] w-full sm:w-64 md:w-72 transition-all duration-300 hover:shadow-lg hover:brightness-110">
            <div className="absolute top-16 sm:top-20 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#626DFF] border border-white flex items-center justify-center z-40">
                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:pr-4">
              <h3 
                className="flex items-center mb-3 text-lg sm:text-xl md:text-[22px] font-bold leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Content Safety <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Weave evaluations combine a test dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#A095FF] rounded-xl p-6 text-white min-h-[250px] sm:h-[326px] sm:-ml-4 md:-ml-8 z-[30] w-full sm:w-72 md:w-80 transition-all duration-300 hover:shadow-lg hover:brightness-110">
            <div className="absolute top-16 sm:top-20 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#B2A9FF] border border-white flex items-center justify-center z-40">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 md:left-14 right-6 sm:pr-4">
              <h3 
                className="flex items-center mb-3 text-lg sm:text-xl md:text-[22px] font-bold leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Anti Hallucination <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#DADCFF] p-6 text-slate-800 min-h-[250px] sm:h-[326px] sm:-ml-4 md:-ml-8 z-[20] w-full sm:w-76 md:w-84 rounded-xl transition-all duration-300 hover:shadow-lg hover:brightness-105">
            <div className="absolute top-16 sm:top-20 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-400/30"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E7E9FF] border border-[#858491] flex items-center justify-center z-40">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-400/30"></div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 md:left-14 right-6 sm:pr-4">
              <h3 
                className="flex items-center mb-3 text-lg sm:text-xl md:text-[22px] font-bold leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Toxicity Detection <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white p-6 text-slate-800 min-h-[250px] sm:h-[326px] sm:-ml-4 md:-ml-8 z-[10] w-full sm:w-76 md:w-84 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-indigo-200">
            <div className="absolute top-16 sm:top-20 left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-300"></div>
              <div className="absolute right-[40px] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F4F4F4] border border-[#979591] flex items-center justify-center z-40">
                <LayoutGrid className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-300"></div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 md:left-14 right-6 pr-4">
              <h3 
                className="flex items-center mb-3 text-lg sm:text-xl md:text-[22px] font-bold leading-tight md:leading-[28px]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                PII Extraction <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}