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
      <div className="flex-1 flex items-start justify-start"> {/* Using items-start to ensure text is top-aligned when wrapping */}
        <span className={`inline-block w-1.5 h-1.5 ${isActive ? 'bg-white' : 'bg-blue-500'} rounded-full mr-2 flex-shrink-0 mt-1.5`}></span>
        <span className="text-sm font-medium text-left">{name}</span>
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
      name: "Connect & Unify All Your Data",
      description: "Gather knowledge from every corner of your business on one centralised platform. Synoptix AI ensures that all your data—whether structured or unstructured—is integrated, indexed, and instantly retrievable.",
      benefits: [
        "Unstructured Data – Documents, emails, reports, PDFs, and raw text.",
        "Structured Data – Databases, spreadsheets, and enterprise records.",
        "Application APIs – Integrate third-party apps and internal systems effortlessly.",
        "Social Media Platforms – LinkedIn, YouTube, X, Facebook and more."
      ]
    },
    {
      name: "Secure Data Ingestion",
      description: "Not all data is useful—or safe. Synoptix AI ensures that only clean, structured, and relevant data is accessible by applying advanced filtering, pre-processing, and strict security controls. This prevents outdated, irrelevant, or sensitive data from entering your workflows. ",
      benefits: [
        "Role-Based Access Control (RBAC) – Restrict data access to only authorised users.",
        "Automated Filtering & Pre-Processing – Remove redundant or low-quality content.  ",
        "Compliance & Security Measures – Ensure all data meets enterprise security standards. "
      ]
    },
    {
      name: "Smarter Search & Instant Retrieval ",
      description: "Stop searching—start finding. Synoptix AI refines queries, ranks information intelligently, and retrieves only the most relevant and actionable insights. Unlike traditional search, it leverages context-aware ranking, multi-retriever models, and privacy-first protocols to ensure that every answer is timely and accurate. ",
      benefits: [
        "AI-Enhanced Ranking – Surfaces the most relevant insights instantly. ",
        "Privacy-First Retrieval – Ensures sensitive data is not stored post-search."
      ]
    },
    {
      name: "Responses with Built-In Validation ",
      description: "Decisions should be based on facts. Synoptix AI ensures the accuracy, safety, and reliability of every response through hallucination detection, PII filtering, and real-time monitoring. Built-in learning continuously refines results, ensuring enterprises receive high-confidence, fact-checked insights. ",
      benefits: [
        "Misinformation Prevention – Detects and eliminates false or misleading data.",
        "Continuous Learning & Monitoring – Improves response quality over time. "
      ]
    },
    {
      name: "Scalability & Security ",
      description: "Technology should fit your business, not disrupt it. Synoptix AI integrates effortlessly into existing IT ecosystems, scaling as your business grows while maintaining the highest security and compliance standards. ",
      benefits: [
        "Seamless IT Integration – Works within your current enterprise systems. ",
        "Enterprise-Grade Security – Protects sensitive data with robust security controls. "
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed from max-w-6xl to max-w-7xl */}
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Enterprise Deserves Better Intelligence—Discover RAG95</h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          Get the right information at the right time, every time. Synoptix ensures speed, security, and precision—at enterprise scale 
          </p>
        </div>
        
        {/* Main content area with blue background - Increased size here */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden min-h-[450px]"> {/* Added min-height */}
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