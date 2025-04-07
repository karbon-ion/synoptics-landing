'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <div className="min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden relative bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Artificial Intelligence <br className="sm:hidden" />Consulting Services
        </h1>
        
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Boost efficiency, automate workflows, and accelerate success with customized AI integration.
          </p>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Let's transform the way you work.
          </p>
        </div>
        
        <Link 
          href="/contact"
          className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Book a meeting
        </Link>
      </div>
    </div>
  );
};

export default Hero;
