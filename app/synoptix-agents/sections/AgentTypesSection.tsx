'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const agentTypesData = [
  {
    id: 'code-gen',
    title: 'Code Gen agents',
    heading: 'Accelerate development with enterprise-grade automation ',
    description: [
      'Generate clean, efficient code with Enterprise AI Agents ',
      'Eliminate repetitive coding tasks and reduce manual errors ',
      'Optimise business logic in real time across applications ',
      'Speed up release cycles with AI-driven development support ',
      'Improve consistency across engineering workflows ',
      'Built for developers on the Synoptix AI Platform for Enterprise '
    ]
  },
  {
    id: 'generative',
    title: 'Generative agents',
    heading: 'Scale content and creativity across your organisation ',
    description: [
      'Create high-quality text, visuals, and code using Enterprise AI Agents ',
      'Respond to creative needs on-demand—no wait, no bottlenecks  ',
      'Support marketing, product, and operations with consistent outputs  ',
      'Adapt content dynamically to your brand voice and format  ',
      'Enable team-wide creative productivity at scale  ',
      'Built into the Synoptix AI Platform for Enterprise teams  '
    ]
  },
  {
    id: 'assurance',
    title: 'Assurance agents',
    heading: 'Enforce quality, governance, and compliance—automatically ',
    description: [
      'Monitor outputs for errors, drift, or non-compliance  ',
      'Validate responses against internal rules and external regulations   ',
      'Keep every workflow aligned with enterprise standards  ',
      'Flag inconsistencies in real time using AI-driven checks   ',
      'Reduce the burden on QA and compliance teams  ',
      'Powered by the Synoptix AI Platform for Enterprise assurance   '
    ]
  },
  {
    id: 'decision-support',
    title: 'Analytical Agents ',
    heading: 'Unlock insights with intelligent data analysis ',
    description: [
     'Analyse structured and unstructured data with Enterprise AI Agents  ',
      'Identify patterns, correlations, and emerging trends    ',
      'Deliver real-time dashboards and actionable summaries   ',
      'Enable proactive decision-making across business functions    ',
      'Reduce reliance on manual reporting or ad-hoc analysis  ',
      'Integrated into the Synoptix AI Platform for Enterprise insights   '
    ]
  },
  {
    id: 'anomalies',
    title: 'Anomaly Detection Agents ',
    heading: 'Protect operations with intelligent, real-time monitoring ',
    description: [
      'Detect irregularities before they disrupt business operations   ',
      'Monitor systems continuously for security and performance gaps     ',
      'Send real-time alerts based on behavioural anomalies   ',
      'Improve operational stability with self-learning detection    ',
      'Reduce manual checks while increasing responsiveness  ',
      'Fully embedded in the Synoptix AI Platform for Enterprise resilience   '
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
