'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const agentTypesData = [
  {
    id: 'code-gen',
    title: 'Code Gen Agents',
    heading: 'Accelerate development without compromising quality.',
    description: [
      'Generate clean, production-ready code across multiple languages to speed up delivery while reducing errors.',
      'Eliminate repetitive tasks so developers can focus on solving complex, high-value problems.',
      'Optimise business logic in real time, agents evolve with your requirements and maintain consistency across your codebase.'
    ]
  },
  {
    id: 'generative',
    title: 'Generative Agents',
    heading: 'Scale content creation across the enterprise.',
    description: [
      'Enterprise AI Agents produce high-quality text, visuals, and code instantly—without waiting for specialist input.',
      'Support marketing, product, and operations with content that is aligned to your brand voice, tone, and structure.',
      'Break through creative bottlenecks and deliver faster across teams.',
      'Empower everyone to create, not just content specialists.'
    ]
  },
  {
    id: 'assurance',
    title: 'Assurance Agents',
    heading: 'Automate compliance, governance, and quality control',
    description: [
      'Monitor decisions and outputs for accuracy, policy alignment, and regulatory risk all in real time.',
      'These AI Agents for enterprise conduct background checks silently, ensuring issues are caught early.',
      'Validate AI responses against your internal policies and external regulations.',
      'Reduce QA overhead and build trust in automation with agents that flag drift and inconsistencies before they escalate.'
    ]
  },
  {
    id: 'decision-support',
    title: 'Analytical Agents',
    heading: 'Turn data into enterprise-wide intelligence.',
    description: [
      'Analyse structured and unstructured data across systems without requiring a data science team.',
      'Identify trends, patterns, and outliers with speed and precision.',
      'Deliver real-time dashboards and insights that keep teams aligned and decision-makers informed.',
      'Eliminate manual reporting and reduce time spent in spreadsheets.'
    ]
  },
  {
    id: 'anomalies',
    title: 'Anomaly Detection Agents',
    heading: 'Protect critical operations with intelligent monitoring.',
    description: [
      'Detect deviations and risks before they become problems.',
      'These agents monitor systems continuously, flagging issues early to reduce downtime and exposure.',
      'Send smart, actionable alerts when anomalies arise.',
      'With self-learning capabilities, accuracy improves over time, reducing the need for manual checks or static thresholds.'
    ]
  }
];

const AccordionItem = ({
  title,
  heading,
  description,
  isOpen,
  toggleAccordion,
  index
}: {
  title: string;
  heading: string;
  description: string[];
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  index: number;
}) => {
  return (
    <div className="border border-indigo-100 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => toggleAccordion(index)}
        className={`w-full px-4 py-3 flex items-center justify-between ${isOpen ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800'}`}
      >
        <span className="font-medium text-sm">{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M7 10L12 15L17 10"
            stroke={isOpen ? 'white' : '#6366F1'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{heading}</h3>
              {description.map((item, i) => (
                <p key={i} className="text-gray-700 text-sm mb-2">{item}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AgentTypesSection() {
  const [activeAgentId, setActiveAgentId] = useState('code-gen');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  
  const activeAgent = agentTypesData.find(agent => agent.id === activeAgentId) || agentTypesData[0];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  return (
    <section className="py-16 w-full mx-auto">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-800  text-center"
          style={{
            fontFamily: "Syne",
            fontWeight: 700
          }}
        >
          Discover the AI Agents Built for <span className="text-indigo-500">Enterprise Performance</span>
        </h2>
        
        <div className="relative overflow-hidden rounded-xl pt-20 w-full hidden lg:block">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/synoptix-agents/features/background.png"
              alt="Background"
              fill
              priority
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 mt-10 lg:gap-16 p-8 lg:p-20">
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
                  className={`text-xl font-semibold mb-4 text-gray-800${activeAgent.id === 'code-gen' || activeAgent.id === 'assurance' ? ' whitespace-nowrap' : ''}`}
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
              
              <div className=" flex justify-end">
                <div className="w-48 h-70 relative">
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

          {/* Mobile view - Accordion */}
          <div className="lg:hidden mt-10 px-4">
            {agentTypesData.map((agent, index) => (
              <AccordionItem
                key={agent.id}
                title={agent.title}
                heading={agent.heading}
                description={agent.description}
                isOpen={openAccordion === index}
                toggleAccordion={toggleAccordion}
                index={index}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
