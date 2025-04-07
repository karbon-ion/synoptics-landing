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

const ActivateSynoGuard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Shield Your AI Now—Activate SYNOGUARD
          </h2>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          Adaptive Security. Uncompromised AI Protection.
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

export default ActivateSynoGuard;
