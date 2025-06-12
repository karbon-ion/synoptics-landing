'use client';

import Image from 'next/image';

export default function AgentsSection() {
  const agentItems = [
    { title: 'Custom Agent' },
    { title: 'Agent Tools' },
    { title: 'Database Searching' },
    { title: 'Agent APIs' },
    { title: 'Reasoning' },
    { title: 'Semantic Understanding' },
    { title: 'Chain of Thoughts' },
    { title: 'No-code builders' },
    { title: 'Model Context Protocol Integration' },
    { title: 'Agent Library' },
    { title: 'Agent 2 Agent Protocol' },
    { title: 'LLM Choice' },
    { title: 'Code Interpreter' },
    { title: 'Image Generation' }
  ];

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <div className="py-3 px-6 flex items-center justify-center" style={{ backgroundImage: 'url(/platform/agents-bar.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
        <Image src="/platform/agents-icon.svg" alt="Agents Icon" width={20} height={20} className="mr-2" />
        <span className="text-white font-medium text-xl" style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700' }}>Agents</span>
      </div>
      <div className="bg-white p-6 rounded-b-lg">
        <div className="grid grid-cols-7 gap-4">
          {agentItems.map((item, index) => (
            <div key={index} className="p-4 text-center bg-[#EEF3FB] rounded-lg flex flex-col items-center justify-center min-h-[80px]">
              <p className="text-[#323E50] font-medium text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
