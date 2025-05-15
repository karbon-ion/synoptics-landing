import { ArrowRight, Lock, Brain, Sun, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSecuritySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
      <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '45px',
            letterSpacing: '0%',
            textAlign: 'center',
            marginTop: '0.5rem', // corresponds to mt-2
            color: '#1F2937' // text-gray-800
            }}>
          Secure and Built for <span className="text-indigo-500">Enterprise</span>
        </h2>
        <Link
          href="/ai-security"
          className="mt-4 md:mt-0 bg-[#5662F6] font-bold hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full flex items-center transition-colors"
          style={{
            fontFamily: 'Syne, sans-serif',
            // fontWeight: 700,
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0px',
          }}
        >
          Discover AI Security <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

      </div>

      <div className="relative z-0">
        <div className="relative flex gap-0">
          {/* Card 1 */}
          <div className="relative bg-[#5662F6] rounded-xl p-6 text-white h-[326.15px] z-[40] w-72 transition-all duration-300 hover:shadow-lg hover:brightness-110">
            <div className="absolute top-[80px] left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-16 h-16 rounded-full bg-[#626DFF] border border-white flex items-center justify-center z-40">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-8 left-6  pr-4">
            <h3
  className="flex items-center mb-3"
  style={{
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '28px',
    letterSpacing: '0px',
  }}
>
  Content Safety <ArrowRight className="ml-2 h-4 w-4" />
</h3>

              <p className="text-xs text-white/80 leading-relaxed">
                Weave evaluations combine a test dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#A095FF] rounded-xl p-6 text-white h-[326.15px] -ml-8 z-[30] w-84 transition-all duration-300 hover:shadow-lg hover:brightness-110">
            <div className="absolute top-[80px] left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-white/40"></div>
              <div className="absolute right-[40px] w-16 h-16 rounded-full bg-[#B2A9FF] border border-white flex items-center justify-center z-40">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-8 left-14 pr-4">
              <h3
                className="flex items-center mb-3"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                }}
              >
                Anti Hallucination <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#DADCFF] p-6 text-slate-800 h-[326.15px] -ml-8 z-[20] w-86 rounded-xl transition-all duration-300 hover:shadow-lg hover:brightness-105">
            <div className="absolute top-[80px] left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-400/30"></div>
              <div className="absolute right-[40px] w-16 h-16 rounded-full bg-[#E7E9FF] border border-[#858491] flex items-center justify-center z-40">
                <Sun className="h-6 w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-400/30"></div>
            </div>
            <div className="absolute bottom-8 left-14 pr-4">
            <h3
                className="flex items-center mb-3"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                }}
              >
                Toxicity Detection <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weave evaluations combine a dataset with a set of scorers
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white p-6 text-slate-800 h-[326.15px] -ml-8 z-[10] w-86 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-indigo-200">
            <div className="absolute top-[80px] left-0 right-0 flex items-center">
              <div className="absolute left-0 w-[calc(100%-56px-16px/2)] h-[1px] bg-slate-300"></div>
              <div className="absolute right-[40px] w-16 h-16 rounded-full bg-[#F4F4F4] border border-[#979591] flex items-center justify-center z-40">
                <LayoutGrid className="h-6 w-6 text-slate-600" />
              </div>
              <div className="absolute right-0 w-[40px] h-[1px] bg-slate-300"></div>
            </div>
            <div className="absolute bottom-8 left-14 right-2 pr-4">
            <h3
                className="flex items-center mb-3"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                }}
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
