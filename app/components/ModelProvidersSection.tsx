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
    title: 'Increase Efficiency',
    description: 'Automate repetitive tasks, streamline workflows, and optimize resources—enhancing productivity while reducing operational overhead.'
  },
  {
    id: 'domain',
    title: 'Domain-Specific Agent',
    description: 'Leverage domain-specific automation that adapts in real time, drives informed decision-making, and scales without added costs.'
  },
  {
    id: 'customer',
    title: 'Customer-Centric Automation',
    description: 'Deliver precise, context-aware responses that improve customer satisfaction, drive retention, and enhance brand loyalty.'
  },
  {
    id: 'employees',
    title: 'Employees Engagement',
    description: 'Eliminate bottlenecks, enhance service delivery, and create a high-performance work environment that fosters innovation and growth.'
  }
];

const ModelProvidersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              ENTERPRISE ADVANTAGE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
            Why Choose Synoptix.ai<br />Quantum RAG for Enterprise?
          </h2>
          
          <div className="flex justify-center mb-16">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a demo
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <div 
              key={advantage.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 flex-grow">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelProvidersSection; 