'use client';

import { useState } from 'react';
import Link from 'next/link';

// Technique button component
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

const TechniquesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Technique definitions with their respective benefits
  const techniqueData = [
    {
      name: "Parameter Fine-Tuning",
      description: "We adjust model parameters to sharpen accuracy, reduce errors, and ensure smooth performance:",
      benefits: [
        "Update weights for better predictions",
        "Optimize layers for faster, more efficient processing",
        "Cut down computational costs without compromising performance"
      ]
    },
    {
      name: "Instruction Fine-Tuning",
      description: "Your AI should understand and follow instructions exactly as intended. We train models to process complex commands with precision.",
      benefits: [
        "Teach model to handle detailed, multi-step instructions",
        "Improve response quality for better user interaction",
        "Make AI models adaptable across different business applications"
      ]
    },
    {
      name: "Transfer Learning",
      description: "Why start from scratch? We take powerful pre-trained models and refine them to fit your needs with minimal effort and data.",
      benefits: [
        "Retain what works; fine-tune what matters",
        "Adapt existing models to new domains quickly",
        "Deliver high performance without heavy resource consumption"
      ]
    },
    {
      name: "Task-Specific Fine-Tuning",
      description: "Generic AI doesn’t cut it. We customize models for specialized industries like finance, healthcare, legal tech, and many more.",
      benefits: [
        "Train AI to handle domain-specific language and data",
        "Ensure compliance with industry specific regulations and standards",
        "Deliver results that match real-world business needs"
      ]
    },
    {
      name: "Multi-Task Learning",
      description: "We build AI that can do more—handling multiple tasks at once without losing accuracy.",
      benefits: [
        "Teach models to learn multiple related tasks",
        "Improve adaptability and efficiency across different use cases",
        "Get AI models that evolves with your business needs"
      ]
    },
    {
      name: "Few-Shot Learning",
      description: "AI should perform well even with limited data. We make that happen with few-shot learning.",
      benefits: [
        "Train AI to generalize from minimal examples",
        "Reduce data dependency while maintaining accuracy",
        "Make AI useful even in data-scarce environments"
      ]
    },
    {
      name: "Reinforcement Learning from Human Feedback (RLHF)",
      description: "We train AI with real human input to make its responses smarter and more reliable over time.",
      benefits: [
        "Use real-world feedback to refine decision-making",
        "Continuously adjust AI behavior to meet user expectations",
        "Ensure the model stays relevant, efficient, and aligned with user’s preferences."
      ]
    },
    {
      name: "Supervised Fine-Tuning",
      description: "We don’t just fine-tune models—we make them work exactly how you need them to.",
      benefits: [
        "Define relevant structured datasets tailored to your business needs",
        "Train models to generate precise, task-specific outputs",
        "Continuously integrate feedback to improve performance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Fine Tuning & Optimisation<br />
            Techniques offered by Synoptix
          </h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            At Synoptix AI, we don't just fine-tune AI—we make it smarter, faster, and tailored 
            exactly to your needs. The practical benefits? More accuracy, lower costs, and quicker results.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#00A3FF] rounded-lg hover:bg-[#0096eb] transition-colors duration-200"
            >
              Read Docs
            </Link>
          </div>
        </div>
        
        {/* Main content area with blue background */}
        <div className="bg-[#e9fcff] rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
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
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
