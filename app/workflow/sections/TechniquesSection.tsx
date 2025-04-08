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
      <div className="flex-1 flex items-center justify-center">
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
      name: "Router Workflow",
      description: "Not every request needs the same answer. The Router Workflow analyses incoming queries, identifies the most relevant expert agent, and routes tasks accordingly. Each request is handled with precision, ensuring accuracy and efficiency—no misrouted queries, no wasted time. ",
      benefits: [
        ""
      ]
    },
    {
      name: "Consolidator Workflow",
      description: "Data without structure slows everything down. The Consolidator Workflow pulls key retrieved information from multiple agents, consolidates it, and delivers a single, refined output. No scattered details, no missing insights—just the complete picture for better decision-making. By unifying responses across agents, the Consolidator ensures higher accuracy, consistency, and context in every output.",
      benefits: [
       ""
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Orchestrated Intelligence at Every Step
          </h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          Route queries to the right expert, consolidate insights across agents, and deliver precise, context-aware outputs—instantly.
          </p>
          
          {/* <div className="flex justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#00A3FF] rounded-lg hover:bg-[#0096eb] transition-colors duration-200"
            >
              Read Docs
            </Link>
          </div> */}
        </div>
        
        {/* Main content area with blue background */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden">
          {/* Desktop view */}
          <div className="hidden lg:flex flex-col lg:flex-row items-stretch">
            {/* Techniques column */}
            <div className="w-full lg:w-[40%] p-8">
              <div className="max-w-[280px]">
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
            
            {/* Benefits column - changes based on selected technique */}
            <div className="w-full lg:w-[60%] p-8 flex items-center">
              <div className="w-full">
                <p className="text-gray-700 text-sm mb-6">
                  {techniqueData[activeIndex].description}
                </p>
                
                <div className="space-y-4">
                  {techniqueData[activeIndex].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-500 text-lg mr-2.5 leading-none">•</span>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile view - Accordion */}
          <div className="lg:hidden p-4 sm:p-6">
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
