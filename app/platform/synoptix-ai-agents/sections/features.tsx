'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'Custom-Agent',
    title: 'Custom Agents',
    description: "Synoptix AI allows enterprises to create and launch custom agents that follow natural language instructions and execute business-specific tasks without coding. Choose the data sources, connect data sources, and define how each agent should behave.",
    imageUrl: '/synoptix-agents/features/image-1.png',
    imagePosition: 'left',
    learnMoreText: 'Learn more about Custom Agent'
  },
  {
    id: 'Reasoning-Agent',
    title: 'Reasoning Agent',
    description: "Reasoning agents follow instructions in natural language and adjust actions as needed to deliver context-aware results. Ideal for managing detailed workflows, team processes, and everyday decisions across the organisation.",
    imageUrl: '/synoptix-agents/features/image-2.png',
    imagePosition: 'right',
    learnMoreText: 'Learn more about Reasoning Agent'
  },
  {
    id: 'Knowledge-Access',
    title: 'Knowledge Access',
    description: "Synoptix AI connects agents to the tools, files, and systems your teams use every day. They can search emails, documents, databases, and internal portals in real time to find the most relevant information.",
    imageUrl: '/synoptix-agents/features/image-3.png',
    imagePosition: 'left',
    learnMoreText: 'Learn more about Knowledge Access'
  },
  {
    id: 'Agent-Library',
    title: 'Agent Library',
    description: "Synoptix AI offers pre-configured agents for common business needs across departments like HR, Finance, Marketing, Sales, and IT to streamline and automate day-to-day routine tasks.",
    imageUrl: '/synoptix-agents/features/image-4.png',
    imagePosition: 'right',
    learnMoreText: 'Check out our Agent Library'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            id={feature.id}
            className={`relative flex flex-col lg:flex-row ${
              feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center justify-between ${index !== featuresData.length - 1 ? 'mb-48' : ''} ${index > 0 ? '-mt-32' : ''} pt-16 -mt-16`}
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
                  href={feature.id === 'Agent-Library' ? '/platform/synoptix-library/agent-library' : '#'}
                  className="inline-flex items-center text-[#6B7BF7] hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '100%'
                  }}
                >
                  {feature.learnMoreText}
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`w-full lg:w-[65%] px-4 sm:px-6 lg:pr-10 ${feature.imagePosition === 'right' ? 'lg:-mr-14 lg:pl-20' : 'lg:-ml-14 lg:pr-15'}`}>
              <div className="relative rounded-lg overflow-hidden shadow-lg mx-auto max-w-[400px] lg:max-w-none">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={900}
                  height={650}
                  className="w-full h-[300px] sm:h-[400px] lg:h-auto object-cover"
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
