'use client';

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 'azure',
    category: 'Faster Workflows',
    value: '40%',
    label: 'UPTIME',
    description: 'Cut process delays and keep operations moving—clients see results within just 3 months'
  },
  {
    id: 'models',
    category: 'Fewer Errors',
    value: '60%',
    label: '',
    description: 'Reduce human mistakes with AI-powered precision, ensuring smoother execution and higher accuracy..'
  },
  {
    id: 'automation',
    category: 'Faster Approvals',
    value: '70%',
    label: '',
    description: 'Reduce manual workflows with AI-powered agents.'
  }
];

const ResultSection = () => {
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
      <div className="absolute inset-0 bg-white from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        
      <h2 style={{
        fontFamily: 'Syne',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '48px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: '#323E50',
        marginBottom: '24px'
      }}>
          Results You Can Expect 
        </h2>
        
       
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-start">
              <div className="w-full mb-4">
                
                <h3 style={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.7px',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase',
                  color: '#323E50',
                  marginBottom: '8px',
                  textAlign: 'left'
                }}>
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
                <p style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#323E50',
                  marginTop: '8px',
                  textAlign: 'left'
                }}>
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

export default ResultSection; 