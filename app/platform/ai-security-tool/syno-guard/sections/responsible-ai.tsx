'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const agentTypesData = [
  {
    id: 'code-gen',
    title: 'Content Safety',
    heading: '',
    description: [
      { text: 'Bad actors use prompt injection and jailbreaks to exploit vulnerabilities, bypass security, and access sensitive data. Content safety detects and blocks these threats before they become a problem, keeping your business protected, compliant, and in control with an AI security tool you can trust.' },
      { bold: 'Prompt Injection:', text: 'Prompt injection happens when users include hidden or misleading instructions in their input to manipulate the AI behavior bypassing rules. SynoGuard carefully analyses every prompt before it reaches the model and blocks anything suspicious to ensure the AI stays safe and aligned with compliance standards.' },
      { bold: 'Jailbreaks:', text: 'A jailbreak is an advanced prompt attack where someone tries to strip away all the AI built-in safeguards. SynoGuard detects these attempts in real time and stops them in their tracks, so your AI does not produce anything risky or unauthorized.' }
    ]
  },
  {
    id: 'generative',
    title: 'Toxicity Detection',
    heading: '',
    description: [
      { text: 'With SynoGuard, your platform stays secure and respectful without disrupting the user experience. Our AI-powered system detects harmful content instantly, detecting threats before they become a problem.' },
      { bold: 'Violent Content:', text: 'Flag and control violent language, threats, or references to weapons and extremism to maintain a secure environment.' },
      { bold: 'Hate Content:', text: 'Detect and mitigate discriminatory or harmful language targeting identity groups to ensure respectful, inclusive AI outputs.' },
      { bold: 'Sexual Content:', text: 'Safeguard your systems against explicit, exploitative, or abusive sexual content, including child safety violations.' },
      { bold: 'Self-Harm Content:', text: 'Identify and block content related to self-injury, suicidal ideation, or eating disorders to promote user well-being.' }
    ]
  },
  {
    id: 'assurance',
    title: 'Data Privacy',
    heading: '',
    description: [
      { text: 'SynoGuard protects sensitive information, prevents data leaks, and ensures compliance, all without slowing you down.' },
      { text: 'Automatically detect and redact sensitive information before it is exposed.' },
      { text: 'Meet regulatory requirements with real-time privacy enforcement.' },
      { text: 'Zero-trust security, end-to-end encryption, and integration into your existing systems.' }
    ]
  },
  {
    id: 'decision-support',
    title: 'PII Extraction',
    heading: '',
    description: [
      { text: 'Automatically identify and redact personally identifiable information such as names, addresses, contact details, and government IDs to ensure data privacy and regulatory compliance across your AI workflows. A reliable AI security tool ensures your systems stay compliant without sacrificing performance.' }
    ]
  },
  {
    id: 'anomalies',
    title: 'Anti Hallucination',
    heading: '',
    description: [
      { text: 'AI hallucinations are not just mistakes; they are risks. Misinformation can mislead customers and damage credibility. SynoGuard Ensure the accuracy and reliability of AI-generated content by detecting and correcting hallucinations through groundedness detection, aligning outputs with trusted data sources.' }
    ]
  }
];

interface ContentItem {
  text: string;
  bold?: string;
}

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
  description: ContentItem[];
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
                <p key={i} className="text-gray-700 text-sm mb-2">
                  {item.bold && <strong className="text-gray-900">{item.bold} </strong>}
                  {item.text}
                </p>
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
          SynoptixAI: Responsible AI Built for <span className="text-indigo-500"> Enterprise </span>
        </h2>
        
        <div className="relative overflow-hidden rounded-xl w-full hidden lg:block">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/synoptix-agents/features/background.png"
              alt="Background"
              fill
              priority
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 lg:p-20 h-[700px] overflow-hidden">
            {/* Left side - Agent types */}
            <div className="lg:w-1/3 mt-15 ">
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
            <div className="lg:w-2/3 mt-10 flex flex-col" style={{ height: '100%' }}>
              <div className={`max-w-xl ${activeAgent.id === 'decision-support' || activeAgent.id === 'anomalies' ? 'my-auto' : ''}`}>
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
                    {paragraph.bold && <strong className="text-gray-900">{paragraph.bold} </strong>}
                    {paragraph.text}
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
