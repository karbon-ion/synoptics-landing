'use client';

import Link from 'next/link';
import Image from 'next/image';

const ApiSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Ignite Your Enterprise AI with Enterprise RAG 
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        Instantly process information with knowledge retrieval. Enhance AI accuracy, reduce hallucinations, and get precise, context-aware responses—every time. 
        </p>
        
        <Link
          href="/rag-application"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Discover How Enterprise RAG Works
        </Link>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/web-banner.svg"
              alt="Synoptix AI Platform"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ApiSection; 