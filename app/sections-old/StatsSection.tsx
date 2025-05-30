'use client';

import Link from "next/link";
import ContactSection from "./ContactSection";
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
    category: 'AI INTEGRATION',
    value: '72%',
    label: '',
    description: 'of businesses have adopted AI for at least one business function.'
  },
  {
    id: 'automation',
    category: 'AI ADOPTION',
    value: '79%',
    label: '',
    description: 'of leaders agree AI is essential to staying competitive.'
  },
  {
    id: 'cost',
    category: 'AI USAGE',
    value: '78%',
    label: '',
    description: 'of AI users are bringing their own tools into the workplace.'
  }
];

const StatsSection = () => {
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
        <h2 className="text-sm font-medium uppercase mb-4">GLOBAL IMPACT</h2>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
          AI That Powers Enterprise Innovation
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
        AI isn’t just the future—it’s your present advantage. Our Enterprise AI Platform fuels productivity, innovation, and data-driven growth. 
        </p>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className="flex flex-col items-center mt-16 relative z-10">
        <div className="flex flex-col items-center">
          <Link
            href="#contact"
            scroll={true}
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg mb-3"
          >
            Optimise Your Business with Synoptix AI 
          </Link>
          
          <a
            href="https://teams.microsoft.com/l/message/19:22f8201f-64f9-4559-8509-6f1461872305_3670589d-1426-4074-8f3c-4da1bbc17110@unq.gbl.spaces/1744174255896?context=%7B%22contextType%22%3A%22chat%22%7D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
          >
            Source
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default StatsSection; 