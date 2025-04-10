'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-24 bg-[#e9fcff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        Launch Your Enterprise AI Agent in Few Clicks
        </h1>
        
        <div className="space-y-5 max-w-3xl mx-auto mb-10">
          <p className="text-gray-600 text-lg">
          Launch Your Enterprise AI Agent in Few Clicks
          </p>
          <p className="text-gray-700 text-lg font-medium">
          The future of AI isn’t coming—it’s here. 
          </p>
        </div>
        
        <div className="flex justify-center">
        <Button
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
