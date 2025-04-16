'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-[#e9fcff] border-t border-b border-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent" />
        <Image
          src="/rag_blob.png"
          alt="Background Blob"
          fill
          className="object-center opacity-50"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
        
        <Button 
          href="/#contact" 
          variant="primary"
          size="lg"
          className="mb-10 sm:mb-16"
        >
          Speak with an AI Expert Today
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;
