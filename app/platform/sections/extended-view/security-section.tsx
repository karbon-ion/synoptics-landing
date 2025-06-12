'use client';

import Image from 'next/image';

type Item = {
  title: string;
};

type Section = {
  title: string;
  width: string;
  items: Item[];
};

export default function SecuritySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Integration Section */}
      <div className="col-span-1 md:col-span-6 bg-white rounded-lg p-4 md:pl-10 md:pr-10 shadow-sm mb-3 md:mb-0">
        <p className="text-[#5662F6] font-medium text-center mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '18px' }}>Integration</p>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-7 w-full">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="h-7 w-7 mx-auto" />
            <img src="/platform/ai-agents/integration-icons/icon-2.svg" alt="SQL Server" className="h-7 w-7 mx-auto" />
            <img src="/platform/ai-agents/integration-icons/excel.svg" alt="Slack" className="h-7 w-7 mx-auto" />
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

      {/* Application & Tools Section */}
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

      {/* Deployment Section */}
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
  );
}
