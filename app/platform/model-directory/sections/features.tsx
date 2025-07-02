'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'universal-knowledge',
    title: 'Test models safely in a secure enterprise environment',
    subtitle: 'Secure Environment',
    image: '/model-hub/features/image-1.png',
    imageAlt: 'Universal Knowledge',
    description: 'Test and compare new models without compromising data privacy. Your information stays protected, never used for training, and you decide which models are accessible across your organisation.',
    imageFirst: true,
    url: '/resources/blogs/synoptix-universal-knowledge-unifies-enterprise-data-and-real-time-web-internet-data'
  },
  {
    id: 'data-insights',
    title: 'Choose the correct commercial model at every stage of workflow',
    subtitle: 'Commercial Models',
    image: '/model-hub/features/image-2.png',
    imageAlt: 'Data Insights',
    description: "Use models like GPT-4o, Claude 3, Gemini 1.5, and Jurassic-2 where they perform best—whether that’s reasoning, summarisation, or chat-based interaction. Access them through secure, enterprise-grade platforms like Azure OpenAI, Amazon Bedrock, or Google Vertex AI, with built-in compliance and SLA-backed reliability. With minimal setup and no infrastructure to manage, your team can integrate these models directly into business workflows and scale confidently across departments.",
    imageFirst: false,
    url: '/resources/blogs/synoptix-ai-for-data-insights-turning-files-apps-and-databases-into-actionable-insights'
  },
  {
    id: 'enterprise-data-search',
    title: 'One interface to run open-source models',
    subtitle: 'Open Sources Models',
    image: '/model-hub/features/image-3.png',
    imageAlt: 'Enterprise Data Search',
    description: 'Use models like LLaMA 3, Mixtral, Command R+, and Falcon,  where they work best, whether that’s data retrieval, reasoning, or content generation. Fine-tune them on your data, host them securely cloud-native or offline, and integrate them directly into your existing systems. With no vendor lock-in, your team keeps full flexibility to build, optimise, and scale AI on your terms.',
    imageFirst: true,
    url: '/resources/blogs/enterprise-data-search-that-helps-teams-move-faster-with-confidence'
  },
 
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 mb-25">
      <div className="container mx-auto max-w-7xl rounded-xl">
        <h2 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne",fontWeight:700,fontSize:"36px",lineHeight:"45px"}}>
        Access the Latest Language Models in   <span className="text-blue-600">Synoptix Model Directory</span>
        </h2>
        
        <div className=" rounded-xl">
          {featuresData.map((feature, index) => (
            <div key={feature.id} id={feature.id} className="rounded-xl pt-16 -mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Text Content - Always first on mobile */}
                <div className={`p-15 ${feature.imageFirst ? 'lg:order-2' : 'lg:order-1'} order-1`}>
                  <div className="flex flex-col items-start mb-4">
                    <p className="text-xs font-semibold text-blue-600 mb-2">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold" style={{fontFamily: "Syne",fontWeight:700,fontSize:"26px",lineHeight:"45px"}}>
                      {feature.title}
                    </h3>
                  </div>
                  <span style={{fontFamily: "Syne",fontWeight:400,fontSize:"14px",lineHeight:"17px",letterSpacing:"0.4px"}}>
                    <p className="text-sm mb-4">{feature.description}</p>
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
