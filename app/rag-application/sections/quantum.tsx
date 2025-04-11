'use client';

import Link from 'next/link';
import Image from 'next/image';

// Define the model providers
const modelProviders = [
  { id: 'openai1', name: 'OpenAI', logo: '/images/logos/openai.svg' },
  { id: 'meta', name: 'Meta', logo: '/images/logos/meta.svg' },
  { id: 'cohere', name: 'Cohere', logo: '/images/logos/cohere.svg' },
  { id: 'deepseek', name: 'DeepSeek', logo: '/images/logos/deepseek.svg' },
  { id: 'microsoft', name: 'Microsoft', logo: '/images/logos/microsoft.svg' },
  { id: 'openai2', name: 'OpenAI', logo: '/images/logos/openai.svg' },
  { id: 'nvidia', name: 'NVIDIA', logo: '/images/logos/nvidia.svg' },
  { id: 'anthropic', name: 'Anthropic', logo: '/images/logos/anthropic.svg' },
  { id: 'qwen', name: 'Qwen', logo: '/images/logos/qwen.svg' },
];

// Define the enterprise advantages
const advantages = [
  {
    id: 'efficiency',
    title: 'Access Foundational Language Models',
    description: 'Harness a vast selection of large language models to power a wide range of business use cases—from automation to customer support and beyond.'
  },
  {
    id: 'domain',
    title: 'Microsoft Integration',
    description: 'Full compatibility with Microsoft technologies, including Microsoft 365 and SharePoint, ensures smooth enterprise adoption.'
  },
  {
    id: 'customer',
    title: 'System Integrations ',
    description: 'Connect with your existing business tools, platforms, and workflows. Synoptix.AI adapts to your ecosystem, not the other way around.'
  },
  {
    id: 'employees',
    title: 'Enterprise-Grade Security & Compliance',
    description: 'Enjoy robust role-based access controls, advanced encryption, and full alignment with Microsoft compliance standards.'
  }
];

const QuantumSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-blue-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent" />
        <Image
          src="/rag_blob.png"
          alt="Background Blob"
          fill
          className="object-center opacity-50"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              Integrations
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
          Onboard Synoptix AI with Your Tech Stack
          </h2>
          
          <div className="flex justify-center mb-16">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
             Get Started with Synoptix AI
            </Link>
          </div>
        </div>
        
        {/* Model provider logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-4 w-full">
            {modelProviders.slice(0, 6).map((provider) => (
              <div 
                key={provider.id}
                className="bg-white rounded-xl border border-blue-100 px-6 py-3 flex items-center justify-center h-16 w-36"
              >
                <div className="relative h-8 w-full">
                  <Image
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 w-full">
            {modelProviders.slice(6).map((provider) => (
              <div 
                key={provider.id}
                className="bg-white rounded-xl border border-blue-100 px-6 py-3 flex items-center justify-center h-16 w-36"
              >
                <div className="relative h-8 w-full">
                  <Image
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enterprise advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div 
              key={advantage.id}
              className="relative bg-white rounded-[32px] p-8 overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              {/* Gradient border using pseudo-element */}
              <div className="absolute inset-0 rounded-[32px] border border-[rgba(66,153,225,0.2)] bg-gradient-to-b from-[rgba(66,153,225,0.1)] to-transparent transition-opacity duration-300 group-hover:from-[rgba(66,153,225,0.2)] group-hover:border-[rgba(66,153,225,0.3)]" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[20px] font-medium text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-[15px] leading-[1.6] text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumSection; 