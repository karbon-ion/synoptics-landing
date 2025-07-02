'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'universal-knowledge',
    title: 'External Intelligence ',
    icon: '/synoptix-search/functions/icons/universal-knowledge-icon.svg',
    image: '/synoptix-search/functions/universal-knowledge.png',
    imageAlt: 'Universal Knowledge',
    points: [
      'Search across public web content, industry databases, and LLM-trained knowledge sources. ',
      'Explore competitor moves, market signals, global best practices, and emerging trends.  ',
      'Answers are backed by citations, making it easy to verify sources and follow up with confidence. '
    ],
    imageFirst: true,
    url: '/resources/blogs/synoptix-universal-knowledge-unifies-enterprise-data-and-real-time-web-internet-data'
  },
  {
    id: 'data-insights',
    title: 'Unified Enterprise Data Search ',
    icon: '/synoptix-search/functions/icons/data-insights-icon.svg',
    image: '/synoptix-search/functions/data-insights.png',
    imageAlt: 'Data Insights',
    points: [
      'Understands natural language queries and retrieves precise, contextually relevant results.',
      'Synoptix AI recognises user roles, intent, and historical interactions for personalised responses.',
      'Maintains strict access controls and compliance through permission-aware retrieval and clear source citations.'
    ],
    imageFirst: false,
    url: '/resources/blogs/synoptix-ai-for-data-insights-turning-files-apps-and-databases-into-actionable-insights'
  },
  {
    id: 'enterprise-data-search',
    title: 'Real-Time Insights  ',
    icon: '/synoptix-search/functions/icons/enterprise-data-search-icon.svg',
    image: '/synoptix-search/functions/enterprise-data-search.png',
    imageAlt: 'Enterprise Data Search',
    points: [
      'Delivers consolidated insights across formats and systems in a single enterprise AI search environment.',
      'Enhances productivity by automating knowledge retrieval and reducing time-to-insight.',
      'Supports strategic, operational, and customer-facing decisions with contextual understanding.'
    ],
    imageFirst: true,
    url: '/resources/blogs/enterprise-data-search-that-helps-teams-move-faster-with-confidence'
  },
  {
    id: 'fine-tuning',
    title: 'Model Alignment ',
    icon: '/synoptix-search/functions/icons/fine-tuning-icon.svg',
    image: '/synoptix-search/functions/fine-tuning.png',
    imageAlt: 'Fine-Tuning/Industry Specific',
    points: [
      'Adapts to internal terminology, processes, and compliance requirements.',
      'Improves search accuracy, response quality, and automation over time with usage.',
      'Ensures outputs reflect how your organisation truly works, not generic AI assumptions.'
    ],
    imageFirst: false,
    url: '/resources/blogs/train-enterprise-with-ai-that-speaks-your-language-with-synoptix-llm-fine-tuning-services'
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 mb-25">
      <div className="container mx-auto max-w-7xl rounded-xl">
        <h2 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne",fontWeight:700,fontSize:"36px",lineHeight:"45px"}}>
        Enterprise AI Search Solutions for <span className="text-blue-600">Modern Workflows</span>
        </h2>
        
        <div className=" rounded-xl">
          {featuresData.map((feature, index) => (
            <div key={feature.id} id={feature.id} className="rounded-xl pt-16 -mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Text Content - Always first on mobile */}
                <div className={`p-15 ${feature.imageFirst ? 'lg:order-2' : 'lg:order-1'} order-1`}>
                  <div className="flex flex-col items-start mb-4">
                    <Image src={feature.icon} alt={`${feature.title} Icon`} width={44} height={44} className="mb-2" />
                    <h3 className="text-xl font-semibold" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                      {feature.title}
                    </h3>
                  </div>
                  <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
                    <ul className="space-y-4">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="min-w-5 mt-1 mr-2">
                            <Image src="/test-page/synoptix/star.png" alt="Star bullet" width={16} height={16} />
                          </div>
                          <p className="text-sm">{point}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={feature.url}
                        className="inline-flex items-center gap-1 text-indigo-500"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "14px",
                          lineHeight: "100%",
                        }}
                      >
                        Learn More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </span>
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
