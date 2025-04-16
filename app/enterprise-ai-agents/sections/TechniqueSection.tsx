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
        <span className="text-md font-medium text-left">{name}</span>
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
                    <span className="text-gray-700 text-lg">{benefit}</span>
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
      name: "Code Gen agents",
      description: "Eliminate redundant tasks and empower developers to focus on innovation. Synoptix Code Gen Agents generate clean, efficient code and optimise logic in real time—reducing development cycles and minimizing human error across your engineering workflows.",
      benefits: [

      ]
    },
    {
      name: "Generative agents",
      description: " From content generation to complex creative outputs, Synoptix Generative Agents convert ideas into actionable deliverables. Generate text, visuals, and code at scale—adapting instantly to your needs and enhancing productivity across teams.",
      benefits: [

      ]
    },
    {
      name: "Assurance agents",
      description: "Maintain operational excellence with Synoptix Assurance Agents. These AI agents proactively monitor for inconsistencies, enforce enterprise standards, and ensure every output aligns with regulatory and organizational benchmarks.",
      benefits: [

      ]
    },
    {
      name: "Decision Support & Analytical Agents",
      description: "Empower your teams with real-time insights. Synoptix Analytical Agents analyse complex datasets, identify trends, and deliver actionable recommendations—enabling smarter, faster decision-making across the enterprise.",
      benefits: [

      ]
    },
    {
      name: "Anomalies Detection Agents",
      description: "Synoptix Anomaly Detection Agents provide continuous monitoring to detect irregularities and potential threats before they impact your business. Ensure operational integrity and security with real-time intelligence that pre-empts disruptions.",
      benefits: [

      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Discover the AI Agents Designed for Enterprise
        </h2>
        </div>

        {/* Main content area with blue background */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden min-h-[400px] relative">
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
            <div className="w-full lg:w-[40%] p-10"> {/* Increased from 40% to 35% and p-8 to p-10 */}
              <div className="max-w-[500px]"> {/* Increased from 280px */}
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
                <p className="text-lg text-gray-800 mb-8">
                  {techniqueData[activeIndex].description}
                </p>

                <div className="space-y-5">
                  {techniqueData[activeIndex].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-500 text-lg mr-3 leading-none">•</span>
                      <span className="text-lg text-gray-800">{benefit}</span>
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