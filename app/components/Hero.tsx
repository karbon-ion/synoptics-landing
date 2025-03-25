'use client';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated blob background */}
      <div className="container">
        <div className="blob"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
          Let AI Handle the Paperwork—You Focus on What Matters
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
          Automate not just workflows but entire job functions. Safe AI and responsible AI
          guardrails integrated natively into the core agent architecture.
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Book a demo
        </Link>
      </div>
    </div>
  );
};

export default Hero; 