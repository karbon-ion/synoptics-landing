'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'universal-knowledge',
    title: 'Universal Knowledge',
    icon: '/synoptix-search/functions/icons/universal-knowledge-icon.svg',
    image: '/synoptix-search/functions/universal-knowledge.png',
    imageAlt: 'Universal Knowledge',
    points: [
      'Bring together all your tools and content into a single search experience',
      'Find anything you need regardless of where it\'s stored or what format it\'s in',
      'Get the right information at the right time without having to switch between apps'
    ],
    imageFirst: true
  },
  {
    id: 'data-insights',
    title: 'Data Insights',
    icon: '/synoptix-search/functions/icons/data-insights-icon.svg',
    image: '/synoptix-search/functions/data-insights.png',
    imageAlt: 'Data Insights',
    points: [
      'Analyze usage patterns to better understand what information your team needs most',
      'Identify knowledge gaps and content that needs updating or archiving',
      'Track search performance and optimize for better results over time'
    ],
    imageFirst: false
  },
  {
    id: 'enterprise-data-search',
    title: 'Enterprise Data Search',
    icon: '/synoptix-search/functions/icons/enterprise-data-search-icon.svg',
    image: '/synoptix-search/functions/enterprise-data-search.png',
    imageAlt: 'Enterprise Data Search',
    points: [
      'Securely search across all your enterprise data sources with proper access controls',
      'Connect to databases, APIs, and internal systems for comprehensive search',
      'Find structured and unstructured data with the same simple interface'
    ],
    imageFirst: true
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning/Industry Specific',
    icon: '/synoptix-search/functions/icons/fine-tuning-icon.svg',
    image: '/synoptix-search/functions/fine-tuning.png',
    imageAlt: 'Fine-Tuning/Industry Specific',
    points: [
      'Customize search for your specific industry terminology and knowledge domains',
      'Train models on your proprietary data to improve relevance and accuracy',
      'Create specialized search experiences for different departments and use cases'
    ],
    imageFirst: false
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 mb-25">
      <div className="container mx-auto max-w-7xl rounded-xl">
        <h2 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne",fontWeight:700,fontSize:"36px",lineHeight:"45px"}}>
          High Level <span className="text-blue-600">Search Functions</span>
        </h2>
        
        <div className=" rounded-xl">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className="rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {feature.imageFirst ? (
                  <>
                    <div className="flex justify-center items-center">
                      <div className="relative w-full h-auto">
                        <Image 
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={400}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="p-15">
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
                            href="#"
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
                  </>
                ) : (
                  <>
                    <div className="p-15">
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
                            href="#"
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
                    
                    <div className="flex justify-center items-center">
                      <div className="relative w-full h-auto">
                        <Image 
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={400}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
