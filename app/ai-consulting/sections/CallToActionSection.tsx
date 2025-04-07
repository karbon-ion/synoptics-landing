'use client';

import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-[#e9fcff] relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      
      {/* Content container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[40px] font-bold text-gray-900 mb-5 tracking-tight whitespace-nowrap leading-tight">
          Transform the Way You Work Starting Now
        </h2>
        
        <p className="text-[#4B5563] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Smarter systems. Faster decisions. Real results. Let’s build your AI-powered future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#00CCEB] to-[#3A49FF] rounded-lg hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md min-w-[140px] justify-center"
          >
            Get in touch
          </Link>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-8 py-3.5 text-[15px] font-semibold text-white bg-[#0F162E] border border-[#00A3FF] rounded-lg hover:bg-blue-50 transition-all duration-200 min-w-[140px] justify-center"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
