'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const agentTypesData = [
  {
    id: 'code-gen',
    title: 'Content Safety  ',
    heading: ' ',
    description: [
      'Your business runs on trust—including the technology that powers it. Synoptix AI.AI ensures every interaction is secure, compliant, and risk-free, so you can focus on growth with confidence.Bad actors use prompt injection and jailbreaks to exploit vulnerabilities, bypass security, and access sensitive data. Synoptix AI.AI stops these threats before they become a problem, keeping your business protected, compliant, and in control.   ',
      'Prompt Injection: Don’t let bad actors manipulate your systems. SynoGuard ensures every response is secure, accurate, and compliant, preventing data leaks and breaches.  ',
      'Jailbreaks:Hackers look for loopholes—SynoGuard makes sure they don’t find any. Our built-in safeguards ensure compliance, uphold ethical standards, and keep your business data secure.  ',
      
    ]
  },
  {
    id: 'generative',
    title: 'Toxicity Detection  ',
    heading: ' ',
    description: [
      'A single harmful message can damage trust, but with SynoGuard, your platform stays secure, respectful, and compliant—without disrupting the user experience. Our AI-powered system scans content instantly, filtering out threats before they become a problem.   ',
      'Violent Content: Block harmful content before it escalates. Synoptix AI detects and blocks threats, graphic violence, and incitement—protecting your users and your business.  ',
      'Hate Content: Toxic content damages trust. Our AI-powered filters stop slurs, harmful biases, and offensive language—ensuring an inclusive and compliant platform.  ',
      'Sexual Content: Explicit and exploitative content can ruin credibility. Synoptix AI automatically scans and blocks inappropriate material, keeping your platform aligned with content policies.    ',
      'Self-Harm Content: Early detection saves lives. Our system flags suicide or self-injury in real time, allowing businesses to act responsibly and prevent harmful messaging.    ',
      'Built into the Synoptix AI Platform for Enterprise teams  '
    ]
  },
  {
    id: 'assurance',
    title: 'Data Privacy  ',
    heading: '',
    description: [
      'Your business runs on data—keeping it secure isn’t optional. Synoptix AI Guard protects sensitive information, prevents data leaks, and ensures compliance, all without slowing you down.  ',
      'Automatically detect and redact sensitive information before it’s exposed.     ',
      'Meet regulatory requirements with real-time privacy enforcement.   ',
      'Zero-trust security, end-to-end encryption, and integration into your existing systems.     ',
      
    ]
  },
  {
    id: 'decision-support',
    title: 'PII Extraction   ',
    heading: ' ',
    description: [
     'Your business handles sensitive information daily—keeping it secure is non-negotiable. Synoptix AI Guard automates PII detection and redaction, ensuring names, addresses, financial data, and proprietary information stay protected.    ',
      'Custom PII filters: Not all data is the same, and neither are your security needs. Synoptix AI Guard lets you customize what gets masked, redacted, or restricted, giving you full control over sensitive information.      ',
     
    ]
  },
  {
    id: 'anomalies',
    title: 'Anti Hallucination    ',
    heading: ' ',
    description: [
      'AI hallucinations aren’t just mistakes—they’re risks. Misinformation can mislead customers, damage credibility, and create compliance issues. SynoGuard keeps your AI honest by detecting and eliminating false or misleading outputs before they reach your users.     ',
      'Real-Time Hallucination Detection: Instantly flag and correct AI-generated misinformation to ensure accuracy.     ',
      'Customisable AI Fine-Tuning: Train your models to minimize inaccuracies and align with verified data.   ',
      'Continuous Model Evaluation: Identify Knowledge Gaps and stop AI drift by securing lexical analysis, field mapping, and data enrichment before inconsistencies disrupt your business.    ',
      
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
          Responsible AI Built for <span className="text-indigo-500"> Enterprise </span>
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
