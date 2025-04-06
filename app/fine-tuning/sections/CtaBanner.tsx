'use client';

import Link from 'next/link';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-[#e9fcff] border-t border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Claim Your Free AI Strategy Session
        </h2>
        
        <p className="text-gray-600 text-lg mb-4">
          From standard to standout—discover how expert fine-tuning can level up your business operations.
        </p>
        
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Expert Guidance</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700 font-medium">Tailored Advice</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700 font-medium">Real Impact</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-6">
          Limited Spots Available. Reserve Yours Now!
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#00A3FF] rounded-lg hover:bg-[#0096eb] transition-colors duration-200 shadow-sm"
        >
          Speak with an AI Expert Today
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
