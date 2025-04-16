'use client';

import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-[#e9fcff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="mb-8">
            <p className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
              "AI is no longer an experimental subject for us. Everyone is now AI ready, and that's real game changer for us. "
            </p>
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="text-right">
              <div className="font-semibold text-gray-900">Romain Dutot</div>
              <div className="text-gray-600 text-sm">IT Innovation Leader</div>
              <div className="text-gray-600 text-sm">Bouygues Telecom</div>
            </div>
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Romain Dutot"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
