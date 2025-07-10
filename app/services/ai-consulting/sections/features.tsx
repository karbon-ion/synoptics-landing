'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  
  {
    id: 'Custom Agents',
    subtitle: '',
    title: 'Ready AI Agents that engage dynamically and meet business goals ',
    description: "Turn ideas into structured workflows using simple, natural language prompts or our visual builder. Synoptix AI interprets your goals and makes it easy to build, edit, and scale agents — no code required.",
    imageUrl: '/synoptix-agents/features/image-2.png',
    imagePosition: 'left'
  },
  
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16  bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
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
