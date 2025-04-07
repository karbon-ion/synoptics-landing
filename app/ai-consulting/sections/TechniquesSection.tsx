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
      description: "We adapt pre-trained models to your specific domain:",
      benefits: [
        "Leverage existing knowledge for specialized tasks",
        "Drastically reduce training data requirements",
        "Accelerate time-to-production for new applications"
      ]
    },
    {
      name: "Task-Specific Fine-Tuning",
      description: "We optimize models for your particular business need:",
      benefits: [
        "Customize AI behavior for your exact use case",
        "Improve performance on niche industry tasks",
        "Focus computational resources where they matter most"
      ]
    },
    {
      name: "Multi-Task Learning",
      description: "We enable your model to handle multiple related tasks effectively:",
      benefits: [
        "Create versatile AI solutions that solve diverse problems",
        "Improve generalization across related domains",
        "Reduce the need for multiple specialized models"
      ]
    },
    {
      name: "Few-Shot Learning",
      description: "We train your model to learn from minimal examples:",
      benefits: [
        "Adapt quickly to new tasks with limited training data",
        "Reduce annotation costs and data gathering burden",
        "Enable rapid prototyping and experimentation"
      ]
    },
    {
      name: "RLHF",
      description: "We implement Reinforcement Learning from Human Feedback:",
      benefits: [
        "Align model outputs with human preferences",
        "Reduce harmful, biased, or undesired outputs",
        "Continuously improve based on real user interactions"
      ]
    },
    {
      name: "Supervised Fine-Tuning",
      description: "We enhance models with carefully labeled training data:",
      benefits: [
        "Increase accuracy on specific domains and terminology",
        "Teach models proper handling of edge cases",
        "Ensure outputs meet quality standards consistently"
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
