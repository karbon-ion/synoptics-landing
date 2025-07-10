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
      <div className="col-span-1 md:col-span-6 bg-white rounded-lg shadow-sm mb-3 md:mb-0">
        <div className="bg-[#F1F5FC] rounded-lg py-2 mb-4 md:mb-6">
          <p className="text-black font-medium text-center text-base md:text-lg" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Integration</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 p-4 md:p-6 gap-4 md:gap-6 w-full">
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 flex flex-col">
            <p className="text-center mb-4 md:mb-8 text-sm md:text-base" style={{ fontFamily: 'Syne', fontWeight: '700' }}>Structured</p>
            <div className="flex gap-3 items-center justify-center mt-auto">
              <img src="platform/ai-agents/application-and-tools/word.svg" alt="Word" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/powerpoint.svg" alt="PowerPoint" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/xcel.svg" alt="Excel" className="h-8 w-8" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 flex flex-col">
            <p className="text-center mb-4 md:mb-8 text-sm md:text-base" style={{ fontFamily: 'Syne', fontWeight: '700' }}>Unstructured</p>
            <div className="flex gap-3 items-center justify-center mt-auto">
              <img src="platform/ai-agents/application-and-tools/pdf.svg" alt="PDF" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/word.svg" alt="Word" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/powerpoint.svg" alt="PowerPoint" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/bars.svg" alt="Image" className="h-8 w-8" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 flex flex-col">
            <p className="text-center mb-4 md:mb-8 text-xs md:text-sm" style={{ fontFamily: 'Syne', fontWeight: '700' }}>Foundational Models</p>
            <div className="flex gap-3 items-center justify-center mt-auto">
              <img src="platform/ai-agents/application-and-tools/search-folder.svg" alt="OpenAI" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/web.svg" alt="Anthropic" className="h-8 w-8" />
              <img src="platform/ai-agents/application-and-tools/code.svg" alt="Google" className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Application & Tools Section */}
      <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-sm mb-3 md:mb-0">
        <div className="bg-[#F1F5FC] rounded-lg py-2 mb-4 md:mb-6">
          <p className="text-black font-medium text-center text-base md:text-lg" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Business Application<br />and Tools</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 flex flex-col">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full">
            <img src="platform/ai-agents/application-and-tools/word.svg" alt="Windows" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/powerpoint.svg" alt="Apple" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/xcel.svg" alt="Android" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/pdf.svg" alt="Chrome" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/bars.svg" alt="Firefox" className="h-8 w-8 mx-auto" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full mt-6 md:mt-8">
            <img src="platform/ai-agents/application-and-tools/search-folder.svg" alt="VS Code" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/web.svg" alt="HTML5" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/code.svg" alt="CSS3" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/translate.svg" alt="JavaScript" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/application-and-tools/calculator.svg" alt="Python" className="h-8 w-8 mx-auto" />
          </div>
        </div>
      </div>

      {/* Deployment Section */}
      <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-sm">
        <div className="bg-[#F1F5FC] rounded-lg py-2 mb-4 md:mb-6">
          <p className="text-black font-medium text-center text-base md:text-lg" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Deployment</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 pt-8 md:pt-12 flex flex-col">
          <div className="grid grid-cols-3 w-full">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/deployment-icons/some-cloud.svg" alt="Azure" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/deployment-icons/aws.svg" alt="AWS" className="h-8 w-8 mx-auto" />
          </div>
          <div className="grid grid-cols-3 w-full mt-8">
            <img src="platform/ai-agents/deployment-icons/stack.svg" alt="Docker" className="h-8 w-8 mx-auto" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="h-8 w-8 mx-auto" />
            <img src="platform/ai-agents/deployment-icons/vpc.svg" alt="Kubernetes" className="h-8 w-8 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
