'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
      name: "Real-Time Performance Metrics",
      description: "AI performance shouldn't be a black box. Track, measure, and optimise key insights in real time to ensure every response is fast, accurate, and aligned with expectations.",
      benefits: [
        "Query Count: Track the total number of processed requests in real time. Gain visibility into AI workload and system efficiency.",
        "Response Time: Measure how fast AI processes and delivers responses. Identify and eliminate latency issues for seamless performance.",
        "User Feedback: Monitor approval and rejection rates from real users. Understand AI effectiveness and refine outputs for better engagement.",
        "Accuracy Score: Evaluate how well AI-generated responses align with expectations. Ensure precision, relevance, and reliability in every interaction."
      ]
    },
    {
      name: "User Sentiment Insights",
      description: "AI effectiveness goes beyond accuracy—it's about how users interact with it. Track real-time sentiment analysis to refine responses and enhance engagement.",
      benefits: [
        "Positive Responses: Track where AI successfully meets user expectations. Leverage these insights to reinforce accuracy and maintain high engagement.",
        "Negative Responses: Detect where AI-generated outputs fail to meet user needs. Adjust models to improve accuracy, reduce errors, and optimise performance."
      ]
    },
    {
      name: "Hallucination & Latency Tracking ",
      description: "AI should be accurate, reliable, and free from misinformation. Monitor, detect, and correct errors in real time to maintain precision and efficiency.",
      benefits: [
        "Identify Hallucinations: Detect AI-generated responses that are incorrect, misleading, or out of context. Ensure fact-based outputs every time.",
        "Track Latency:  Monitor slow response times and pinpoint inefficiencies. Optimise AI processing speed for seamless interactions.",
        "Eliminate Errors: Proactively address inaccuracies before they disrupt workflows. Keep AI performance sharp, responsive, and trustworthy."

      ]
    },
    {
      name: "Usage & Cost Management ",
      description: "AI processing comes at a cost—ensure every token is used efficiently. Monitor usage in real time to reduce waste and maximise value.",
      benefits: [
        "Incoming Tokens: Track how much input data AI is processing. Optimise requests to avoid unnecessary consumption.",
        "Outgoing Tokens: Measure the size of AI-generated responses. Streamline outputs without sacrificing accuracy.",
        "Caching: Help reduce token consumption by storing and reusing recent response and improved response time."

      ]
    },
    {
      name: "AI Performance Benchmarks",
      description: "AI performance goes beyond speed—it's about precision, consistency, and usability. Synoptix AI evaluates critical metrics to ensure every response meets high-quality standards.",
      benefits: [
        "Groundedness: Ensure AI responses are factually accurate and backed by reliable data. Prevent misinformation and maintain trust in AI-driven decisions.",
        "Relevance: Verify that AI delivers meaningful, useful answers tailored to user needs. Eliminate off-topic or low-value responses.",
        "Fluency: Assess if AI-generated responses are well-structured and natural. Improve readability and clarity for better user interactions.",
        "Similarity: Maintain consistency across responses to avoid contradictions. Ensure AI provides uniform answers across different queries.",
        "F1 Score: Measure overall AI performance with a balanced accuracy benchmark. Optimise AI for precision, recall, and efficiency."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Actionable AI Analytics for Enterprise-Grade Performance
        </h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          Go beyond the black box with real-time visibility into accuracy, speed, sentiment, and cost. Monitor, evaluate, and optimise every aspect of your AI—live.
          </p>
        </div>
        
        {/* Main content area with blue background */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden min-h-[600px] relative">
          {/* Background image */}
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

          {/* Desktop view */}
          <div className="hidden lg:flex flex-col lg:flex-row items-stretch relative z-10">
            {/* Techniques column */}
            <div className="w-full lg:w-[35%] p-10">
              <div className="max-w-[320px]">
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
            
            {/* Benefits column */}
            <div className="w-full lg:w-[65%] p-10 flex items-center">
              <div className="w-full">
                <p className="text-lg text-gray-600 mb-8">
                  {techniqueData[activeIndex].description}
                </p>
                
                <div className="space-y-5">
                  {techniqueData[activeIndex].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 leading-none">•</span>
                      <span className="text-lg text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile view - Accordion */}
          <div className="lg:hidden p-6 relative z-10">
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