'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const featuresData = [
  {
    id: 'universal-knowledge',
    title: 'Large Language Model ',
    subtitle: 'Secure Environment',
    image: '/model-hub/features/image-1.png',
    imageAlt: 'Universal Knowledge',
    description: 'Ideal for customer-facing interactions. Use this when the model needs to be good at creating conversations and should have attributes like conversational abilities, contextual awareness, and adaptability. ',
    imageFirst: true,
    url: '/resources/blogs/synoptix-universal-knowledge-unifies-enterprise-data-and-real-time-web-internet-data'
  },
  {
    id: 'data-insights',
    title: 'Reasoning Models',
    subtitle: 'Commercial Models',
    image: '/model-hub/features/image-2.png',
    imageAlt: 'Data Insights',
    description: "Best for backend processes that involve multiple tool calling. Use this when your AI must reason, plan, and make decisions to execute complex workflows. ",
    imageFirst: false,
    url: '/resources/blogs/synoptix-ai-for-data-insights-turning-files-apps-and-databases-into-actionable-insights'
  },
  {
    id: 'enterprise-data-search',
    title: 'Small Language Model ',
    subtitle: 'Open Sources Models',
    image: '/model-hub/features/image-3.png',
    imageAlt: 'Enterprise Data Search',
    description: 'Choose this model when solving a specific use case with limited scope, such as form filling or basic classification. ',
    imageFirst: true,
    url: '/resources/blogs/enterprise-data-search-that-helps-teams-move-faster-with-confidence'
  },
 
];

export default function FeaturesSection() {
  const [windowWidth, setWindowWidth] = useState(1024);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 mb-10 sm:mb-16 md:mb-25">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 rounded-xl">
        <h2 style={{
          textAlign: 'center',
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: windowWidth < 640 ? '24px' : windowWidth < 768 ? '30px' : '36px',
          lineHeight: '1.2',
          marginBottom: windowWidth < 640 ? '24px' : windowWidth < 768 ? '32px' : '40px',
          color: '#323E50'
        }}>
          AI Models That Adapt to <span style={{ color: '#2563EB' }}>Your Business</span>
        </h2>
        
        <div className="rounded-xl space-y-16 sm:space-y-20 md:space-y-24">
          {featuresData.map((feature, index) => (
            <div key={feature.id} id={feature.id} className="rounded-xl pt-16 -mt-16 first:pt-0 first:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {/* Text Content - Always first on mobile */}
                <div className={`p-4 sm:p-6 md:p-8 ${feature.imageFirst ? 'lg:order-2' : 'lg:order-1'} order-1`}>
                  <div className="flex flex-col items-start mb-3 sm:mb-4">
                    {/* <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-1 sm:mb-2">
                      {feature.subtitle}
                    </p> */}
                    <h3 style={{
                      fontFamily: 'Syne',
                      fontWeight: 700,
                      fontSize: windowWidth < 640 ? '20px' : windowWidth < 768 ? '24px' : '30px',
                      lineHeight: '1.2',
                      marginBottom: windowWidth < 640 ? '8px' : '12px'
                    }}>
                      {feature.title}
                    </h3>
                  </div>
                  <div style={{
                    fontFamily: 'Syne',
                    fontWeight: 400,
                    fontSize: windowWidth < 640 ? '14px' : windowWidth < 768 ? '16px' : '18px',
                    lineHeight: '1.6',
                    letterSpacing: '0.025em'
                  }}>
                    <p style={{ marginBottom: windowWidth < 640 ? '16px' : '24px' }}>{feature.description}</p>
                    <div style={{ marginTop: windowWidth < 640 ? '16px' : '24px' }}>
                      <Link
                        href={feature.url}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: '#6366F1',
                          fontFamily: 'Syne',
                          fontWeight: 700,
                          fontSize: windowWidth < 640 ? '14px' : '16px',
                          transition: 'color 0.2s'
                        }}
                      >
                        Read Our Blog
                        <ArrowRight style={{ height: '12px', width: '12px', marginLeft: '4px' }} />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Image - Second on mobile, but can be first on desktop */}
                <div className={`flex justify-center items-center ${feature.imageFirst ? 'lg:order-1' : 'lg:order-2'} order-2 px-4 lg:px-0`}>
                  <div className="relative w-full h-auto max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-full mx-auto">
                    <Image 
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 75vw, (max-width: 1024px) 65vw, 400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
