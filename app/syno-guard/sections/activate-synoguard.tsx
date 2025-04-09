'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Technique button component for desktop view
const TechniqueButton = ({ 
  name, 
  isActive = false,
  onClick
}: { 
  name: string; 
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className={`group w-full ${isActive ? 'bg-gradient-to-r from-[#3A49FF] to-[#00CCEB] text-white' : 'bg-white text-gray-800'} rounded-full py-3 px-6 mb-3 flex items-center justify-between transition-all duration-200 border border-blue-100`}
    >
      <div className="flex-1 flex items-center justify-start"> {/* Changed justify-center to justify-start */}
        <span className={`inline-block w-1.5 h-1.5 ${isActive ? 'bg-white' : 'bg-blue-500'} rounded-full mr-2 flex-shrink-0`}></span>
        <span className="text-xs font-medium">{name}</span>
      </div>
      <svg 
        width="14" 
        height="14" 
        viewBox="0 0 16 16" 
        className={`${isActive ? 'text-white' : 'text-blue-500'} group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0 ml-2`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" 
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

// Accordion item component for mobile view
const AccordionItem = ({
  name,
  description,
  benefits,
  isOpen,
  toggleAccordion,
  index
}: {
  name: string;
  description: string;
  benefits: string[];
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  index: number;
}) => {
  return (
    <div className="border border-blue-100 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => toggleAccordion(index)}
        className={`w-full px-4 py-3 flex items-center justify-between ${isOpen ? 'bg-gradient-to-r from-[#3A49FF] to-[#00CCEB] text-white' : 'bg-white text-gray-800'}`}
      >
        <span className="font-medium text-sm">{name}</span>
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
            stroke={isOpen ? 'white' : '#3A49FF'}
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
              <p className="text-gray-700 text-sm mb-4">{description}</p>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-blue-500 text-lg mr-2 leading-none">•</span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TechniquesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Technique definitions with their respective benefits
  const techniqueData = [
    {
      name: "Content Safety",
      description:
        "Your business runs on trust—including the technology that powers it. Synoptix ensures every interaction is secure, compliant, and risk-free, so you can focus on growth with confidence.\n\nBad actors use prompt injection and jailbreaks to exploit vulnerabilities, bypass security, and access sensitive data. Synoptix stops these threats before they become a problem, keeping your business protected, compliant, and in control.",
      benefits: [
        "Prompt Injection: Don’t let bad actors manipulate your systems. SynoGuard ensures every response is secure, accurate, and compliant, preventing data leaks and breaches.",
        "Jailbreaks: Hackers look for loopholes—SynoGuard makes sure they don’t find any. Our built-in safeguards ensure compliance, uphold ethical standards, and keep your business data secure."
      ]
    },
    {
      name: "Toxicity Detection",
      description:
        "A single harmful message can damage trust, but with SynoGuard, your platform stays secure, respectful, and compliant—without disrupting the user experience. Our AI-powered system scans content instantly, filtering out threats before they become a problem.",
      benefits: [
        "Violent Content: Block harmful content before it escalates. Synoptix detects and blocks threats, graphic violence, and incitement—protecting your users and your business.",
        "Hate Content: Toxic content damages trust. Our AI-powered filters stop slurs, harmful biases, and offensive language—ensuring an inclusive and compliant platform.",
        "Sexual Content: Explicit and exploitative content can ruin credibility. Synoptix automatically scans and blocks inappropriate material, keeping your platform aligned with content policies.",
        "Self-Harm Content: Early detection saves lives. Our system flags suicide or self-injury in real time, allowing businesses to act responsibly and prevent harmful messaging."
      ]
    },
    {
      name: "Data Privacy",
      description:
        "Your business runs on data—keeping it secure isn’t optional. Synoptix Guard protects sensitive information, prevents data leaks, and ensures compliance, all without slowing you down.",
      benefits: [
        "Automatically detect and redact sensitive information before it’s exposed.",
        "Meet regulatory requirements effortlessly with real-time privacy enforcement.",
        "Zero-trust security, end-to-end encryption, and integration into your existing systems."
      ]
    },
    {
      name: "PII Extraction",
      description:
        "Your business handles sensitive information daily—keeping it secure is non-negotiable. Synoptix Guard automates PII detection and redaction, ensuring names, addresses, financial data, and proprietary information stay protected.",
      benefits: [
        "Custom PII filters: Not all data is the same, and neither are your security needs. Synoptix Guard lets you customize what gets masked, redacted, or restricted, giving you full control over sensitive information."
      ]
    },
    {
      name: "Anti Hallucination",
      description:
        "AI hallucinations aren’t just mistakes—they’re risks. Misinformation can mislead customers, damage credibility, and create compliance issues. SynoGuard keeps your AI honest by detecting and eliminating false or misleading outputs before they reach your users.",
      benefits: [
        "Real-Time Hallucination Detection: Instantly flag and correct AI-generated misinformation to ensure accuracy.",
        "Customisable AI Fine-Tuning: Train your models to minimize inaccuracies and align with verified data.",
        "Continuous Model Evaluation: Identify Knowledge Gaps and stop AI drift by securing lexical analysis, field mapping, and data enrichment before inconsistencies disrupt your business."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed from max-w-6xl to max-w-7xl */}
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Enterprise Deserves Better Intelligence—Discover RAG95 
          </h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          Get the right information at the right time, every time. Synoptix ensures speed, security, and precision—at enterprise scale 
          </p>
        </div>
        
        {/* Main content area with blue background - Increased size here */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden min-h-[400px]"> {/* Added min-height */}
          {/* Desktop view */}
          <div className="hidden lg:flex flex-col lg:flex-row items-stretch"> {/* Added h-full */}
            {/* Techniques column - made wider */}
            <div className="w-full lg:w-[35%] p-10"> {/* Increased from 40% to 35% and p-8 to p-10 */}
              <div className="max-w-[320px]"> {/* Increased from 280px */}
                {techniqueData.map((technique, index) => (
                  <TechniqueButton 
                    key={index} 
                    name={technique.name} 
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Benefits column - changes based on selected technique - made wider */}
            <div className="w-full lg:w-[65%] p-10 flex items-center"> {/* Increased from 60% to 65% and p-8 to p-10 */}
              <div className="w-full">
              <p className="text-lg text-gray-600 mb-8"> {/* Updated to match WhySection styling */}
                  {techniqueData[activeIndex].description}
                </p>
                
                <div className="space-y-5"> {/* Increased space-y-4 to space-y-5 */}
                  {techniqueData[activeIndex].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 leading-none">•</span> {/* Increased mr-2.5 to mr-3 */}
                      <span className="text-lg text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile view - Accordion */}
          <div className="lg:hidden p-6"> {/* Increased from p-4 sm:p-6 to p-6 */}
            {techniqueData.map((technique, index) => (
              <AccordionItem
                key={index}
                name={technique.name}
                description={technique.description}
                benefits={technique.benefits}
                isOpen={openAccordion === index}
                toggleAccordion={toggleAccordion}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;