'use client';

import Image from 'next/image';
import { useState } from 'react';
import ExtendedView from './extended-view/extended-view';

export default function PlatformFeatures() {
  const [showExtended, setShowExtended] = useState(false);

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-8 md:px-20 mb-6 md:mb-15 max-w-full md:max-w-7xl mt-12 md:mt-20 mx-auto rounded-lg border-t-4 border-[#5662F6]"
      style={{
        background: 'linear-gradient(196.25deg, rgba(255, 255, 255, 0.4) 9.13%, rgba(219, 234, 254, 0.28) 92.56%)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        ...(showExtended && {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        })
      }}
    >
       <h1 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne", fontWeight: 700, fontSize: "36px", lineHeight: "45px"}}>
       Deploy AI with a Secure Enterprise  <span className="text-[#5662F6]">AI Agent Platform</span>
        </h1>
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setShowExtended(!showExtended)}
          className="bg-[#5662F6] hover:bg-indigo-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full inline-flex items-center transition-colors whitespace-nowrap"
          style={{ fontFamily: 'Syne', fontWeight: 500, fontSize: 'clamp(16px, 4vw, 18px)' }}
        >
          {showExtended ? 'Normal View' : 'Extended View'}
        </button>
      </div>

      {showExtended ? (
        <ExtendedView />
      ) : (
        <>
          {/* Agents Section */}
          {/* Agents Section */}
          <div
            className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            style={{
              backgroundImage: 'url(/platform/agents-bar.png)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="py-3 md:py-2 px-4 md:px-6 flex items-center justify-center">
              <Image
                src="/platform/agents-icon.svg"
                alt="Agents Icon"
                width={16}
                height={16}
                className="mr-2 w-4 h-4 md:w-5 md:h-5"
              />
              <span
                className="text-white font-medium text-base md:text-xl"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}
              >
                Agents
              </span>
            </div>
            <div className="bg-white p-0 rounded-b-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {[
                  'Reasoning & Decision Marking',
                  'Agent Collaboration & APIs',
                  'Knowledge Access',
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="py-4 md:py-6 px-4 md:px-6 text-center flex flex-col items-center"
                  >
                    <p
                      className="text-[#323E50] font-medium text-sm md:text-base"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '600',
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Search Section */}
          <div
            className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            style={{
              backgroundImage: 'url(/platform/enterprise-search.png)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="py-3 md:py-2 px-4 md:px-6 flex items-center justify-center">
              <Image
                src="/platform/enterprise-search-icon.svg"
                alt="Enterprise Search Icon"
                width={16}
                height={16}
                className="mr-2 w-4 h-4 md:w-5 md:h-5"
              />
              <span
                className="text-white font-medium text-base md:text-xl"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: '600' }}
              >
                Enterprise Search
              </span>
            </div>
            <div className="bg-white p-0 rounded-b-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {[
                  'Query Understanding',
                  'Content Understanding',
                  'Orchestration & Self Learning',
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="p-6 md:p-12 text-center flex flex-col items-center"
                  >
                    <p
                      className="text-[#323E50] font-medium text-base md:text-lg"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '600',
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monitoring & Performance Section */}
          <FeatureBlock
            title="Monitoring & Performance"
            bgImage="/platform/monitoring-bg.png"
            items={[
              { icon: 'observability', label: 'Observability' },
              { icon: 'evaluations', label: 'Evaluations' },
              { icon: 'llm', label: 'LLM Ops' },
            ]}
          />

          {/* Responsible AI Section */}
          <FeatureBlock
            title="Responsible AI"
            bgImage="/platform/responsible-ai-bg.png"
            items={[
              { icon: 'security', label: 'Security' },
              { icon: 'compliance', label: 'Compliance' },
              { icon: 'governance', label: 'Governance' },
            ]}
          />

          {/* Platform Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Integration Section - Full width on mobile, col-span-6 on desktop */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-lg p-4 md:pl-10 md:pr-10 shadow-sm mb-3 md:mb-0">
              <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Integration</p>
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-7 w-full">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-2.svg" alt="SQL Server" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/sap.png" alt="Slack" className="h-5 w-10 mt-1 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-4.svg" alt="Jira" className="h-9 w-9 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-5.svg" alt="Zapier" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-6.svg" alt="Google" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-7.svg" alt="GitHub" className="h-7 w-7 mx-auto" />
                </div>
              </div>
              <div className="flex justify-center w-full mt-3">
                <div className="grid grid-cols-7 w-full">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-7 w-7 mx-auto" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-7 w-7 mx-auto" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-9.svg" alt="Gmail" className="h-7 w-7 mx-auto" />
                  <img src="/platform/ai-agents/integration-icons/icon-10.svg" alt="Microsoft Office" className="h-7 w-7 mx-auto" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-7 w-7 mx-auto" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-5 w-5 mx-auto" />
                </div>
              </div>
            </div>

            {/* Application & Tools Section - Full width on mobile, col-span-3 on desktop */}
            <div className="col-span-1 md:col-span-3 bg-white rounded-lg p-4 shadow-sm mb-3 md:mb-0">
              <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Application & Tools</p>
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-5 gap-2 w-full px-3">
                  <img src="platform/ai-agents/application-and-tools/word.svg" alt="Windows" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/powerpoint.svg" alt="Apple" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/xcel.svg" alt="Android" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/pdf.svg" alt="Chrome" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/bars.svg" alt="Firefox" className="h-8 w-8 mx-auto" />
                </div>
              </div>
              <div className="flex justify-center w-full mt-3">
                <div className="grid grid-cols-5 gap-2 w-full px-3">
                  <img src="platform/ai-agents/application-and-tools/search-folder.svg" alt="VS Code" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/web.svg" alt="HTML5" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/code.svg" alt="CSS3" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/translate.svg" alt="JavaScript" className="h-8 w-8 mx-auto" />
                  <img src="platform/ai-agents/application-and-tools/calculator.svg" alt="Python" className="h-8 w-8 mx-auto" />
                </div>
              </div>
            </div>

            {/* Deployment Section - Full width on mobile, col-span-3 on desktop */}
            <div className="col-span-1 md:col-span-3 bg-white rounded-lg p-4 shadow-sm">
              <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Deployment</p>
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 w-full px-10">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-7 w-9 mx-auto" />
                  <img src="platform/ai-agents/deployment-icons/some-cloud.svg" alt="Azure" className="h-7 w-12 mx-auto" />
                  <img src="platform/ai-agents/deployment-icons/aws.svg" alt="AWS" className="h-7 w-12 mx-auto" />
                </div>
              </div>
              <div className="flex justify-center w-full mt-3">
                <div className="grid grid-cols-3 w-full px-10">
                  <img src="platform/ai-agents/deployment-icons/stack.svg" alt="Docker" className="h-7 w-12 mx-auto" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-7 w-8 mx-auto" />
                  <img src="platform/ai-agents/deployment-icons/vpc.svg" alt="Kubernetes" className="h-6 w-12 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

// FeatureBlock helper component
function FeatureBlock({
  title,
  bgImage,
  items,
}: {
  title: string;
  bgImage: string;
  items: { icon: string; label: string }[];
}) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 mb-4">
      <div
        className="w-full md:col-span-3 md:w-[255px] h-[70px] md:h-[132px] flex flex-col justify-center relative overflow-hidden rounded-lg md:rounded-l-[20px] md:rounded-r-none mb-3 md:mb-0"
        style={{
          background: '#94ADFF',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <p
          className="text-white font-bold text-center relative z-10 text-base md:text-xl"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {title}
        </p>
      </div>

      <div className="grid grid-cols-3 md:contents gap-2 md:gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="md:col-span-3 bg-white h-[70px] md:h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center px-2 md:px-4"
          >
            <div className="mb-2 md:mb-3">
              <Image
                src={`/platform/ai-agents/${item.icon}.svg`}
                alt={item.label}
                width={24}
                height={24}
                className="w-6 h-6 md:w-[56px] md:h-[50px]"
              />
            </div>
            <p
              className="text-[#323E50] font-medium text-xs md:text-xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
