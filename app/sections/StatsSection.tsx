'use client';

import Link from "next/link";
import ContactSection from "./ContactSection";

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
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            GLOBAL IMPACT
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
          AI That Powers Enterprise Innovation
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
        AI isn’t the future—it’s the now. Igniting efficiency, sustaining innovation, and turning insights into strategic business growth. 
        </p>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
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
                    {stat.value}
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
      <div className="flex justify-center mt-16 relative z-10">
        <Link
          href="#contact"
          scroll={true}
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Optimize Your Business with Synoptix AI 
        </Link>
      </div>
    </section>
  );
};

export default StatsSection; 