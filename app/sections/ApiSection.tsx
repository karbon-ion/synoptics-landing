'use client';

import Link from 'next/link';
import Image from 'next/image';

const ApiSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Activate and Control<br />
          Your AI Agents
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Connect & automate with Synoptix's enterprise-grade API. Easily integrate AI
          capabilities into your existing systems—without disruption.
        </p>
        
        <Link
          href="/docs"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Read Docs
        </Link>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://via.placeholder.com/1200x600.png"
              alt="API Documentation Preview"
              width={1200}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Our comprehensive API documentation makes integration simple
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApiSection; 