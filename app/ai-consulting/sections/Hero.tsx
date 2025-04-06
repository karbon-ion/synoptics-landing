'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center overflow-hidden relative bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-6 whitespace-nowrap">
          Artificial Intelligence Consulting Services
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-600">
            Boost efficiency, automate workflows, and accelerate success with customized AI integration.
          </p>
          <p className="text-lg text-gray-600">
            Let's transform the way you work.
          </p>
        </div>
        
        <Link 
          href="/contact"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Book a meeting
        </Link>
      </div>
    </div>
  );
};

export default Hero;
