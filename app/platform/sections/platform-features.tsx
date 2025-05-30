'use client';

import Image from 'next/image';

export default function PlatformFeatures() {
  return (
    <section className="py-16 px-20 mb-15 max-w-7xl mt-15 mx-auto rounded-lg" style={{ boxShadow: '0 -1px  rgba(0, 0, 0, 0.1), 0 1px 5px rgba(0, 0, 0, 0.1)' }}>
      <div className="bg-[#5662F6] bg-opacity-80 rounded-lg  mb-4 overflow-hidden">
        <div className="py-2 px-6 flex items-center justify-center">
          <span className="text-white mr-2">👤</span>
          <span className="text-white font-medium" style={{ fontFamily: 'Syne, sans-serif',fontWeight: '700',fontSize: '20px',lineHeight:'' }}>Agents</span>
        </div>
        <div className="bg-white p-0 rounded-b-lg">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            <div className="p-6 text-center flex flex-col items-center">
              
              <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Reasoning & Decision Marking</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              
              <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Agent Collaboration & APIs</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              
              <p className="text-[#323E50]" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Knowledge Access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#6A99FF] bg-opacity-80 rounded-lg mb-4 overflow-hidden">
        <div className="py-2 px-6 flex items-center justify-center">
          <span className="text-white mr-2">🔍</span>
          <span className="text-white font-medium" style={{ fontFamily: 'Syne, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'' }}>Enterprise Search</span>
        </div>
        <div className="bg-white p-0 rounded-b-lg">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            <div className="p-6 text-center flex flex-col items-center">
              
              <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Query Understanding</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              
              <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Content Understanding</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '16px',lineHeight:'' }}>Orchestration & Self Learning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
  {/* Title Block */}
  <div className="col-span-3 h-[132px] w-[255px] flex flex-col justify-center relative overflow-hidden rounded-l-[20px]" 
    style={{ 
      background: '#94ADFF',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
    <div className="absolute top-0 right-0 w-full h-full" 
      style={{
        background: 'linear-gradient(125.97deg, transparent 30%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0.1) 100%)'
      }}>
    </div>
    <p className="text-white font-bold text-center relative z-10 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
      Monitoring & Performance
    </p>
  </div>

  {/* Observability */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/observability.svg" alt="Observability" width={56} height={50} />
    </div>
    <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>Observability</p>
  </div>

  {/* Evaluations */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/evaluations.svg" alt="Evaluations" width={56} height={50} />
    </div>
    <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>Evaluations</p>
  </div>

  {/* LLM Ops */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/llm.svg" alt="LLM Ops" width={56} height={50} />
    </div>
    <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>LLM Ops</p>
  </div>
</div>


<div className="grid grid-cols-12 gap-4 mb-4">
  {/* Title Block */}
  <div className="col-span-3 h-[132px] w-[255px] flex flex-col justify-center relative overflow-hidden rounded-l-[20px]" 
    style={{ 
      background: '#94ADFF',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
    <div className="absolute top-0 right-0 w-full h-full" 
      style={{
        background: '#8DC2FF'
      }}>
    </div>
    <p className="text-white font-bold text-center relative z-10 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
      Responsible AI
    </p>
  </div>

  {/* Observability */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/observability.svg" alt="Observability" width={56} height={50} />
    </div>
    <p className="text-[#323E50]" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>Observability</p>
  </div>

  {/* Evaluations */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/evaluations.svg" alt="Evaluations" width={56} height={50} />
    </div>
    <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>Evaluations</p>
  </div>

  {/* LLM Ops */}
  <div className="col-span-3 bg-white h-[132px] rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="mb-3">
      <Image src="/platform/ai-agents/llm.svg" alt="LLM Ops" width={56} height={50} />
    </div>
    <p className="text-[#323E50] font-medium" style={{ fontFamily: 'Poppins, sans-serif',fontWeight: '600',fontSize: '20px',lineHeight:'45px' }}>LLM Ops</p>
  </div>
</div>


      <div className="grid grid-cols-12 gap-4 ">
        {/* Integration Section - Spans from Responsible AI to Security (col-span-6) */}
        <div className="col-span-6 bg-white rounded-lg p-4 pl-10 pr-10 shadow-sm">
          <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif',fontWeight: '700',fontSize: '18px',lineHeight:'' }}>Integration</p>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-7 w-full">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zapier/zapier-original.svg" alt="Zapier" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-7 w-7 mx-auto" />
            </div>
          </div>
          <div className="flex justify-center w-full mt-3">
            <div className="grid grid-cols-7 w-full">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gmail/gmail-original.svg" alt="Gmail" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftoffice/microsoftoffice-plain.svg" alt="Microsoft Office" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-7 w-7 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-5 w-5 mx-auto" />
            </div>
          </div>
        </div>
        
        {/* Application & Tools Section - Same width as Compliance (col-span-3) */}
        <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
          <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif',fontWeight: '700',fontSize: '18px',lineHeight:'' }}>Application & Tools</p>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-5 gap-2 w-full px-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" className="h-5 w-5 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" className="h-5 w-5 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" className="h-5 w-5 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" alt="Chrome" className="h-5 w-5 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" alt="Firefox" className="h-5 w-5 mx-auto" />
            </div>
          </div>
          <div className="flex justify-center w-full mt-3">
            <div className="grid grid-cols-5 gap-2 w-full px-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="h-8 w-8 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-8 w-8 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-8 w-8 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-8 w-8 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-8 mx-auto" />
            </div>
          </div>
        </div>
        
        {/* Deployment Section - Same width as Governance (col-span-3) */}
        <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
          <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif',fontWeight: '700',fontSize: '18px',lineHeight:'' }}>Deployment</p>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-3 w-full px-10">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-6 w-6 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-6 w-6 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-6 w-6 mx-auto" />
            </div>
          </div>
          <div className="flex justify-center w-full mt-3">
            <div className="grid grid-cols-3 w-full px-10">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-6 w-6 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-8 w-8 mx-auto" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-8 w-8 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
