'use client';

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 'azure',
    category: 'AI PRODUCTIVITY BOOST',
    value: '64%',
    label: '',
    description: 'of businesses expect AI to increase overall productivity.'
  },
  {
    id: 'models',
    category: 'AI & CUSTOMER ENGAGEMENT',
    value: '60%',
    label: '',
    description: 'of business owners believe AI will improve customer relationships.'
  },
  {
    id: 'automation',
    category: 'AI RELUCTANCE',
    value: '52%',
    label: '',
    description: 'of people who use AI at work are reluctant to admit using it for their most important tasks.'
  },
  {
    id: 'automation2',
    category: 'AI TRUST GAP',
    value: '52%',
    label: '',
    description: 'of professionals using AI still hesitate to acknowledge its role in key tasks—despite its growing impact.'
  }
];

const RagStatsSection = () => {
  const [animated, setAnimated] = useState(false);
  const [percentages, setPercentages] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          animatePercentages();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  const animatePercentages = () => {
    stats.forEach((stat, index) => {
      const targetValue = parseInt(stat.value.replace('%', ''));
      let startValue = 0;
      const duration = 1500; // Animation duration in milliseconds
      const increment = Math.ceil(targetValue / (duration / 16)); // Approximately 60fps
      
      const timer = setInterval(() => {
        startValue = Math.min(startValue + increment, targetValue);
        setPercentages(prev => {
          const newPercentages = [...prev];
          newPercentages[index] = startValue;
          return newPercentages;
        });
        
        if (startValue >= targetValue) {
          clearInterval(timer);
        }
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          {/* <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            GLOBAL IMPACT
          </span> */}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
        Results You Can Expect
        </h2>
        
        {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
          Synoptix makes enterprise automation easy. Built on Azure, our AI-powered platform 
          delivers secure data processing, intelligent automation, and 250+ integrations—
          helping businesses improve operations and stay ahead.
        </p> */}
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-start">
              <div className="w-full mb-4">
                
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-2 text-left">
                  {stat.category}
                </h3>
                <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
              </div>
              
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {animated ? `${percentages[index]}%` : '0%'}
                  </span>
                  {stat.label && (
                    <span className="ml-2 text-xs font-semibold uppercase text-gray-500">
                      {stat.label}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-600 text-left">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RagStatsSection; 