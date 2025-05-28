'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'create-agents',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: '/synoptix-agents/features/image-1.png',
    imagePosition: 'left'
  },
  {
    id: 'customize-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: '/synoptix-agents/features/image-2.png',
    imagePosition: 'right'
  },
  {
    id: 'deploy-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: '/synoptix-agents/features/image-3.png',
    imagePosition: 'left'
  },
  {
    id: 'manage-agent',
    title: 'Create AI agents effortlessly with natural language',
    description: "Turn ideas into structured workflows using simple natural language prompts. Our intuitive interface helps you specify your agent's purpose and makes it easy to build with your data right away.",
    imageUrl: '/synoptix-agents/features/image-4.png',
    imagePosition: 'right'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`relative flex flex-col lg:flex-row ${
              feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center justify-between ${index !== featuresData.length - 1 ? 'mb-48' : ''} ${index > 0 ? '-mt-32' : ''}`}
          >
            {/* Text Content */}
            <div className="w-full lg:w-2/5 z-10">
              <div className="max-w-lg">
                <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900" style={{
                  fontFamily: 'Syne',
                  lineHeight: '1.2',
                  letterSpacing: '0%'
                }}>
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg" style={{
                  fontFamily: 'Poppins',
                  lineHeight: '1.7',
                  letterSpacing: '0.4px'
                }}>
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#6B7BF7] hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '100%'
                  }}
                >
                  Learn more about {feature.id.split('-').join(' ')}
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`w-full lg:w-3/5 pr-10  ${feature.imagePosition === 'right' ? 'lg:-mr-12 pl-20' : 'lg:-ml-12 pr-15  '}`}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={800}
                  height={579}
                  className="w-full h-auto object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
