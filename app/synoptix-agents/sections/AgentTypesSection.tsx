'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const agentTypesData = [
  {
    id: 'code-gen',
    title: 'Code Gen agents',
    heading: 'Eliminate redundant tasks and empower developers to focus on innovation.',
    description: [
      'Synoptix AI Code Gen Agents generate clean, efficient code and optimize logic',
      'in real time—reducing development cycles and minimising human error across',
      'your engineering workflows.'
    ]
  },
  {
    id: 'generative',
    title: 'Generative agents',
    heading: 'Transform ideas into production-ready solutions with AI assistance.',
    description: [
      'Synoptix Generative Agents help you create complex systems from simple prompts,',
      'accelerating development and enabling rapid prototyping while maintaining',
      'high quality standards across your projects.'
    ]
  },
  {
    id: 'assurance',
    title: 'Assurance agents',
    heading: 'Ensure code quality and security at every stage of development.',
    description: [
      'Synoptix Assurance Agents continuously monitor your codebase for vulnerabilities,',
      'performance issues, and compliance concerns, providing real-time feedback',
      'to maintain enterprise-grade standards.'
    ]
  },
  {
    id: 'decision-support',
    title: 'Decision Support & Analytical Agents',
    heading: 'Make data-driven decisions with AI-powered insights.',
    description: [
      'Our Decision Support Agents analyze complex datasets and provide actionable',
      'recommendations, helping your team make informed choices quickly and',
      'confidently across all business operations.'
    ]
  },
  {
    id: 'anomalies',
    title: 'Anomalies Detection Agents',
    heading: 'Identify and address issues before they impact your business.',
    description: [
      'Synoptix Anomaly Detection Agents continuously monitor systems and data',
      'for unusual patterns, automatically alerting teams to potential problems',
      'and suggesting remediation strategies.'
    ]
  }
];

export default function AgentTypesSection() {
  const [activeAgentId, setActiveAgentId] = useState('code-gen');
  
  const activeAgent = agentTypesData.find(agent => agent.id === activeAgentId) || agentTypesData[0];
  
  return (
    <section className="py-16 md:py-24 w-full max-w-8xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
          style={{
            fontFamily: "Syne",
            fontWeight: 700
          }}
        >
          Discover the AI Agents Designed for <span className="text-indigo-500">Enterprise</span>
        </h2>
        
        <div className="relative overflow-hidden rounded-xl w-full">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/synoptix-agents/features/background.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 lg:p-20">
            {/* Left side - Agent types */}
            <div className="lg:w-1/3 ">
              <div className="space-y-3">
                {agentTypesData.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setActiveAgentId(type.id)}
                    className={`flex items-center justify-between rounded-full py-3 px-6 ${type.id === activeAgentId ? 'bg-indigo-500' : 'bg-white/80'} cursor-pointer transition-colors`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-2 text-lg ${type.id === activeAgentId ? 'text-white' : 'text-indigo-500'}`}>•</span>
                      <span 
                        className={`${type.id === activeAgentId ? 'text-white' : 'text-gray-700'} font-medium`}
                        style={{
                          fontFamily: "Poppins"
                        }}
                      >
                        {type.title}
                      </span>
                    </div>
                    <ArrowRight className={`h-4 w-4 ${type.id === activeAgentId ? 'text-white' : 'text-indigo-500'}`} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="lg:w-2/3 mt-10">
              <div className="max-w-xl">
                <h3 
                  className="text-xl font-semibold mb-4 text-gray-800"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600
                  }}
                >
                  {activeAgent.heading}
                </h3>
                
                {activeAgent.description.map((paragraph, index) => (
                  <p 
                    key={index}
                    className={`text-gray-700 ${index < activeAgent.description.length - 1 ? 'mb-2' : ''}`}
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: 1.6
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-48 h-48 relative">
                  {/* <Image
                    src="/synoptix-agents/features/layers-icon.svg"
                    alt="Layers Icon"
                    width={200}
                    height={200}
                    className="object-contain"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
