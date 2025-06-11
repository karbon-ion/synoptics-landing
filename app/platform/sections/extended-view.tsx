'use client';

import Image from 'next/image';

interface ExtendedViewProps {
  onClose?: () => void;
}

export default function ExtendedView({ onClose }: ExtendedViewProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-auto flex flex-col animate-fadeIn">
      {onClose && (
        <div className="w-full flex justify-end p-4 sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-10">
          <button
            onClick={onClose}
            className="px-4 py-1 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto px-4 pb-20 space-y-6">

        {(() => {
          const agentsItems = ['Custom Agent','Agent Tools','Database Searching','Agent APIs','Reasoning','Semantic Understanding','Chain of Thoughts','No-code builders','Model Contract Protocol Integration','Agent Library','Agent & Agent Protocols','LLM Choice','Code Interpreter','Image Generation'];
          return (
            <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ backgroundImage: 'url(/platform/agents-bar.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
              <div className="py-3 md:py-2 px-4 md:px-6 flex items-center justify-center">
                <Image src="/platform/agents-icon.svg" alt="Agents Icon" width={16} height={16} className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-white font-medium text-base md:text-xl" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Agents</span>
              </div>
              <div className="bg-white p-0 rounded-b-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 divide-x divide-y sm:divide-y-0 divide-gray-100">
                  {agentsItems.map((t,i)=>(
                    <div key={i} className="py-3 px-2 text-center flex items-center justify-center"><p className="text-[#323E50] font-medium text-xs md:text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>{t}</p></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {(() => {
          const searchItems = ['Prompt Library','Query Understanding','Data Enrichment','Doc-Phr Parsing & Indexing','Hybrid Search','Web Search','Retrieval Orchestration','Self-learning','Noise/Drift Detection & Correction','Employee/Customer Knowledge Graph','ETKs','Tool Gating','Customization','Vector Search','Contextual Enrichment','Inline AI','Vision AI'];
          return (
            <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ backgroundImage: 'url(/platform/enterprise-search.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
              <div className="py-3 md:py-2 px-4 md:px-6 flex items-center justify-center">
                <Image src="/platform/enterprise-search-icon.svg" alt="Enterprise Search Icon" width={16} height={16} className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-white font-medium text-base md:text-xl" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Enterprise Search</span>
              </div>
              <div className="bg-white p-0 rounded-b-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 divide-x divide-y sm:divide-y-0 divide-gray-100">
                  {searchItems.map((t,i)=>(
                    <div key={i} className="py-3 px-2 text-center flex items-center justify-center"><p className="text-[#323E50] font-medium text-xs md:text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>{t}</p></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
          <div className="w-full md:col-span-3 h-24 md:h-[132px] flex flex-col justify-center relative overflow-hidden rounded-lg md:rounded-l-[20px] md:rounded-r-none" style={{ background: '#94ADFF', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div className="absolute top-0 right-0 w-full h-full" style={{ backgroundImage: 'url(/platform/monitoring-bg.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}></div>
            <p className="text-white font-bold text-center relative z-10 text-base md:text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Monitoring & Performance</p>
          </div>
          <div className="grid grid-cols-3 md:col-span-9 gap-2 md:gap-4">
            {['Observability','Evaluations','LLM Ops'].map((t,i)=>(<div key={i} className="bg-white h-24 md:h-[132px] rounded-lg shadow-sm flex items-center justify-center"><p className="text-[#323E50] font-medium text-xs md:text-xl" style={{ fontFamily:'Poppins, sans-serif', fontWeight:'600' }}>{t}</p></div>))}
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
          <div className="w-full md:col-span-3 h-24 md:h-[132px] flex flex-col justify-center relative overflow-hidden rounded-lg md:rounded-l-[20px] md:rounded-r-none" style={{ background: '#94ADFF', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div className="absolute top-0 right-0 w-full h-full" style={{ backgroundImage: 'url(/platform/responsible-ai-bg.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}></div>
            <p className="text-white font-bold text-center relative z-10 text-base md:text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Responsible AI</p>
          </div>
          <div className="grid grid-cols-3 md:col-span-9 gap-2 md:gap-4">
            {['Security','Compliance','Governance'].map((t,i)=>(<div key={i} className="bg-white h-24 md:h-[132px] rounded-lg shadow-sm flex items-center justify-center"><p className="text-[#323E50] font-medium text-xs md:text-xl" style={{ fontFamily:'Poppins, sans-serif', fontWeight:'600' }}>{t}</p></div>))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-6 bg-white rounded-lg p-4 md:pl-10 md:pr-10 shadow-sm">
            <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Integration</p>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-7 gap-2 w-full">
                {Array.from({length:14}).map((_,i)=>(<div key={i} className="h-7 w-7 bg-gray-100 rounded"/>))}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 bg-white rounded-lg p-4 shadow-sm">
            <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Business Application & Tools</p>
            <div className="grid grid-cols-5 gap-2 w-full px-3">
              {Array.from({length:10}).map((_,i)=>(<div key={i} className="h-8 w-8 bg-gray-100 rounded"/>))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 bg-white rounded-lg p-4 shadow-sm">
            <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Deployment</p>
            <div className="grid grid-cols-3 gap-2 w-full px-10">
              {Array.from({length:6}).map((_,i)=>(<div key={i} className="h-8 w-12 bg-gray-100 rounded"/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
