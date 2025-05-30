'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'Custom-Agent',
    subtitle: 'CUSTOM AGENT',
    title: 'Design and Deploy Intelligent AI Agents ',
    description: "Create no-code Enterprise AI Agents that handle everything from quick answers to complex operations. With the Synoptix AI Platform for Enterprise, you can build, launch, and manage agents that align with your workflows, adapt to your data, and scale across your organisation. ",
    imageUrl: '/synoptix-agents/features/image-1.png',
    imagePosition: 'left'
  },
  {
    id: 'Reasoning-Agent',
    subtitle: 'REASONING AGENT',
    title: 'Enterprise AI agents that plan and act with purpose ',
    description: "Backed by Synoptix’s reasoning engine and enterprise data access, agents understand what needs to be done, find the right information, and carry out tasks with accuracy. Perfect for handling multi-step workflows, cross-team processes, and dynamic decision-making in fast-paced enterprise environments. ",
    imageUrl: '/synoptix-agents/features/image-2.png',
    imagePosition: 'right'
  },
  {
    id: 'Knowledge-Access',
    subtitle: 'KNOWLEDGE ACCESS',
    title: 'Give your Enterprise AI Agents access to what your business knows ',
    description: "Synoptix connects agents to internal documents, emails, chats, and databases—so every response is grounded in accurate, real-time information from your trusted sources. Whether it’s policy enforcement, regulatory reporting, or internal support, agents operate with full context to drive consistent, compliant outcomes. ",
    imageUrl: '/synoptix-agents/features/image-3.png',
    imagePosition: 'left'
  },
  {
    id: 'Agent-Library',
    subtitle: 'AGENT LIBRARY',
    title: 'Explore and share AI agents across your organisation ',
    description: "Start with pre-built agent templates or design your own. The Synoptix AI Platform for Enterprise makes it easy to launch quickly, improve continuously, and scale agent-powered automation across every team. Reusable agents help standardise operations, reduce duplicated effort, and accelerate enterprise-wide adoption of intelligent workflows. ",
    imageUrl: '/synoptix-agents/features/image-4.png',
    imagePosition: 'right'
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
                <p className="text-[#323E50] mb-2" style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  lineHeight: '1',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}>
                  {feature.subtitle}
                </p>
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
            <div className={`w-full lg:w-[65%] pr-10 ${feature.imagePosition === 'right' ? 'lg:-mr-14 pl-20' : 'lg:-ml-14 pr-15'}`}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={900}
                  height={650}
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
