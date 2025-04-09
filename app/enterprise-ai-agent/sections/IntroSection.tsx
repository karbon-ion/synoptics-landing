'use client';

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
            Think Bigger. Achieve More.
            </h2>
            
            <p className="text-lg text-gray-600">
            Your team wasn’t built for busy work—so why let it steal their focus?  <br/><br/>

Synoptix AI Agents can handle the repetitive, executing with precision—on demand or autonomously—so your people can focus on strategy, creativity, and growth.
Work smarter. Scale faster. Dominate effortlessly. With automation that evolves with your business, you’re not just keeping up—you’re setting the pace. <br/><br/>

The future won’t wait—with Synoptix AI, you won’t have to.

            </p>
            
            <div className="space-y-2">
              {/* <p className="text-lg font-medium text-gray-800">
                We don't just refine AI. We will make it work for you.
              </p>
              <p className="text-lg font-medium text-gray-800">
                Tune it. Own it. Lead with it.
              </p> */}
            </div>
            
            <div>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-[#00CCEB] to-[#3A49FF] rounded-lg hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Start a free trial
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full h-[500px] max-w-lg mx-auto lg:max-w-none">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-blue-50 flex items-center justify-center border border-gray-200">
              {/* Fallback if Image component doesn't work */}
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" 
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
