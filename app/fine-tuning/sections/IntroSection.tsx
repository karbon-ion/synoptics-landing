'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const IntroSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              AI Doesn't Just Work<br />
              It Works for You When Tuned
            </h2>
            
            <p className="text-lg text-gray-600">
              AI is strong—fine-tuned AI is unstoppable. Sharper. Smarter. Fully aligned 
              with your business for flawless performance every time.
            </p>
            
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-800">
                We don't just refine AI. We will make it work for you.
              </p>
              <p className="text-lg font-medium text-gray-800">
                Tune it. Own it. Lead with it.
              </p>
            </div>
            
            <div>
            <Button
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
                Book Your Fine-Tune Session
            </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full h-[500px] max-w-lg mx-auto lg:max-w-none">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-blue-50 flex items-center justify-center border border-gray-200">
              {/* Fallback if Image component doesn't work */}
              <img 
                src="/images/New/Services - Finetuning and Optimisation.png" 
                alt="AI Tuning Visualization"
                className="w-full h-full object-cover"
              />
              
              {/* Fallback content if image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-blue-500 bg-white bg-opacity-75 p-4 rounded-md shadow-md hidden">
                  AI Tuning Visualization
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
