'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Process card component for reusability and consistent styling
const ProcessCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[rgba(66,153,225,0.2)] hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="flex items-center">
        <svg 
          width="20" 
          height="8" 
          viewBox="0 0 20 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
        >
          <path 
            d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

const ServiceProcessSection = () => {
  // Define our process steps
  const processSteps = [
    {
      title: "Custom Model Selection",
      description: "We fine-tune the perfect AI model for your lexical analysis—sharper insights, faster results with minimal computational overhead."
    },
    {
      title: "Data Labeling & Annotation",
      description: "Get accurate results with precisely labeled data. We prepare your datasets to reflect your industry's unique language and standards."
    },
    {
      title: "Model Adjustments",
      description: "No two businesses are the same; your AI shouldn't be either. We fine-tune settings and optimize performance for smooth, efficient operation."
    },
    {
      title: "Model Evaluation & Iteration",
      description: "Your AI should stay sharp. We rigorously test it in real-world conditions, adjusting continuously to keep it aligned with your business objectives."
    }
  ];

  return (
    <section className="py-24 bg-[#e9fcff] relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Synoptix AI Fine-Tuning & Optimisation Services<br />
            <span className="text-3xl md:text-4xl">From Good to Unstoppable</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Standard AI works—tuned AI outperforms. Our Fine-Tuning & Optimization services
            transform standard models into high-performance machines—built exclusively for your business.
          </p>
          
          <Button
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
            Consult for Fine-Tuning Session
          </Button>
        </div>
        
        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
