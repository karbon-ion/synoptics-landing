'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
   <div className="flex-1 flex items-center justify-start"> 
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
  image,
  isOpen,
  toggleAccordion,
  index
}: {
  name: string;
  description: string;
  benefits: string[];
  image: string;
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
              <div className="relative w-full h-60 my-4 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
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
      name: "AI Readiness Assessment",
      description: "Before implementing AI, we work with your team to ensure they understand the technology and its impact. We assess your data, IT infrastructure, and AI readiness—providing support for a smooth, compliant transition.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "AI Governance Consulting",
      description: "Develop a responsible and transparent AI framework with automated governance tools to ensure long-term success.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "AI Envisioning Workshop",
      description: "Identify high-value AI use cases, explore generative AI opportunities, and define a roadmap for innovation.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "Custom AI Implementation",
      description: "Deploy AI solutions tailored to your unique business needs—optimizing workflows, enhancing automation, and solving most complicated challenges .",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "AI Strategy Development",
      description: "Align AI investments with measurable business outcomes, uncover opportunities, and build a roadmap for scalable AI success.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "AI Training & Capacity Building",
      description: "Empower your workforce with AI expertise through customized training, learning paths, and leadership workshops.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "Data & Analytics Consulting",
      description: "Transform enterprise data into actionable insights with AI-driven models that enhance decision-making and automate workflows.",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "Automation Consulting",
      description: "Streamline operations with AI-powered automation, eliminating inefficiencies and enabling a smarter, hybrid workforce.",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "Proof of Concept (PoC)",
      description: "Validate AI solutions with rapid prototyping and real-world testing—minimizing risk and maximizing feasibility before full-scale implementation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    },
    {
      name: "Synoptix AI Platform",
      description: "At the core of our AI solutions, Synoptix AI drives generative AI adoption, optimises workflows, automates processes, and enhances decision-making—securely and at scale.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [

      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed from max-w-6xl to max-w-7xl */}
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI Consulting Services
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            AI Solutions That Drive Real Business Value
          </p>
        </div>

        {/* Main content area with blue background - Increased size here */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden min-h-[400px]"> {/* Added min-height */}
          {/* Desktop view */}
          <div className="hidden lg:flex flex-col lg:flex-row items-stretch"> {/* Added h-full */}
            {/* Techniques column - made wider */}
            <div className="w-full  lg:w-[40%] p-10"> {/* Increased from 40% to 35% and p-8 to p-10 */}
              <div className="max-w-[500px] "> {/* Increased from 280px */}     {techniqueData.map((technique, index) => (
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
            <div className="w-full lg:w-[65%] p-10 "> {/* Increased from 60% to 65% and p-8 to p-10 */}
              <div className="w-full">
                <p className="text-lg text-gray-800 mb-6">
                  {techniqueData[activeIndex].description}
                </p>

                <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent z-10" />
                  <Image
                    src={techniqueData[activeIndex].image}
                    alt={techniqueData[activeIndex].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

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
          <div className="lg:hidden p-6"> {/* Increased from p-4 sm:p-6 to p-6 */}
            {techniqueData.map((technique, index) => (
              <AccordionItem
                key={index}
                name={technique.name}
                description={technique.description}
                benefits={technique.benefits}
                image={technique.image}
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
