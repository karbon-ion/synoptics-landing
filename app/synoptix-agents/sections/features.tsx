'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'create-agents',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: 'https://dummyimage.com/615x444/e6e7ff/6B7BF7.png',
    imagePosition: 'left'
  },
  {
    id: 'customize-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=615&h=444&auto=format&fit=crop',
    imagePosition: 'right'
  },
  {
    id: 'deploy-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: 'https://dummyimage.com/615x444/6B7BF7/ffffff',
    imagePosition: 'left'
  },
  {
    id: 'manage-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=615&h=444&auto=format&fit=crop',
    imagePosition: 'right'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div 
            key={feature.id}
            className={`flex flex-col ${index !== featuresData.length - 1 ? 'mb-20' : ''} ${
              feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center`}
          >
            {/* Text Content */}
            <div className={`lg:w-2/5 ${feature.imagePosition === 'left' ? 'lg: mb-6 lg:mb-0' : 'mb-6 lg:mb-0'}`}>

              <div className="max-w-4xl">
                <h2 
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "45px",
                    letterSpacing: "0%"
                  }}
                  className="mb-4 text-gray-900"
                >
                  {feature.title}
                </h2>
                <p 
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "27px",
                    letterSpacing: "0.4px",
                    verticalAlign: "middle"
                  }}
                  className="text-gray-600 mb-6"
                >
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#6B7BF7]"
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "100%",
                  }}
                >
                  Learn more about {feature.id.split('-').join(' ')}
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-3/5">
              <div className={`relative ${feature.imagePosition === 'left' ? 'lg:-ml-6' : 'lg:ml-12'}`}>
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={615}
                  height={444}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
