'use client';

import Image from 'next/image';

type Item = {
  title: string;
};

type TopRowSection = {
  main?: Item[];
  items?: Item[];
  center?: Item;
};

export default function EnterpriseSearchSection() {
  const topRow: TopRowSection[] = [
    {
      main: [
        { title: 'Prompt Library' },
        { title: 'Tool Calling' },
      ],
      center: { title: 'Query\nOptimisation' }
    },
    {
      items: [
        { title: 'Data Enrichment' },
        { title: 'Data Pre-\nProcessing' },
        { title: 'Hybrid Search' },
        { title: 'Web Search' },
        { title: 'ReRanker' },
        { title: 'Self Learning' },
        { title: 'Name Entity\nRecognition' },
        { title: 'Knowledge\nGraph' },
        { title: 'SDKs' },
        { title: 'Vision AI' },
      ],
      center: { title: 'Content\nUnderstanding' }
    },
    {
      items: [
        { title: 'Citation\nDocument' },
        { title: 'Data\nLabelling' },
        { title: 'Vector Search' },
        { title: 'Caching' },
        { title: 'Orchestration' },
        { title: 'Quantization' },
      ]
    }
  ];

  const sections = [
    {
      title: 'Observability',
      width: 'w-[20%]',
      items: [
        { title: 'Tracing' },
        { title: 'Real-time\nMonitoring' },
        { title: 'Hallucination\nDetection' },
        { title: 'Insights and\nAnalytics' },
      ]
    },
    {
      title: 'Evaluations',
      width: 'w-[30%]',
      items: [
        { title: 'Fluency\nScore' },
        { title: 'Similarity\nScore' },
        { title: 'Relevance\nScore' },
        { title: 'Evaluation\nPipelines' },
        { title: 'Custom\nFine-Tuning' },
      ]
    },
    {
      title: 'LLM Ops',
      width: 'w-[50%]',
      items: [
        { title: 'Dataset\nVersioning' },
        { title: 'Model Version\nManagement' },
        { title: 'Performance\nMonitoring' },
        { title: 'Training\nPipeline' },
        { title: 'Model\nRegistry' },
        { title: 'Adapter Tuning/\nLoRA/PEFT' },
        { title: 'User Sentiment\nAnalysis' },
        { title: 'Groundedness\nScore' },
      ]
    }
  ];

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <div className="py-3 px-6 flex items-center justify-center" style={{ backgroundImage: 'url(/platform/enterprise-search.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
        <Image src="/platform/enterprise-search-icon.svg" alt="Enterprise Search Icon" width={20} height={20} className="mr-2" />
        <span className="text-white font-medium text-xl" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>Enterprise Search</span>
      </div>
      <div className="bg-white p-6 rounded-b-lg">
        <div className="space-y-12">
          {/* Top Row */}
          <div className="space-y-4">
            <div className="flex items-stretch justify-between">
              <div className="flex items-stretch">
              <div className="flex gap-3">
                <div className="flex flex-col space-y-4">
                  {topRow[0]?.main?.map((item, idx) => (
                    <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg text-center">
                      <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="bg-[#EEF3FB] p-3 rounded-lg text-center">
                    <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                      {topRow[0]?.center?.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-px bg-gray-200 mx-4"></div>
            </div>

              <div className="flex items-stretch">
              <div className="flex gap-3">
                <div className="grid grid-cols-5 gap-3">
                  {topRow[1]?.items?.slice(0, 10).map((item, idx) => (
                    <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center">
                      <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center">
                    <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                      {topRow[1]?.center?.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-px bg-gray-200 mx-4"></div>
            </div>

              <div className="grid grid-cols-3 gap-3">
              {topRow[2]?.items?.map((item, idx) => (
                <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center">
                  <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Sections */}
          <div className="flex items-stretch justify-between">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className={`${section.width} mx-2 first:ml-0 last:mr-0`}>
                <div className="bg-[#EEF3FB] p-3 rounded-lg mb-4 text-center w-full" style={{
                  background: 'linear-gradient(180deg, #EEF3FB 0%, rgba(238, 243, 251, 0.7) 100%)'
                }}>
                  <p className="text-[#323E50] font-medium text-lg" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>
                    {section.title}
                  </p>
                </div>
                {section.title === 'Evaluations' ? (
                  <div className="flex gap-3">
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      {section.items.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center min-h-[64px]">
                          <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center w-[25%]">
                      <div className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center min-h-[64px] w-full">
                        <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                          {section.items[4].title}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : section.title === 'LLM Ops' ? (
                  <div className="grid grid-cols-4 gap-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center min-h-[64px]">
                        <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-[#EEF3FB] p-3 rounded-lg flex items-center justify-center min-h-[64px]">
                        <p className="text-[#323E50] font-medium text-xs leading-tight text-center whitespace-pre-line" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
