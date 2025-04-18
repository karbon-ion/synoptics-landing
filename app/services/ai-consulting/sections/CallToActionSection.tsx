'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-[#e9fcff] relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      
      {/* Content container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
      Transform the Way You Work  
      </h2>
        
        <p className="text-[#4B5563] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Smarter systems. Faster decisions. Tangible results. Let’s build your AI-powered future with expert AI consulting services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <Button
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
            Get in Touch
          </Button>
          <Button 
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
