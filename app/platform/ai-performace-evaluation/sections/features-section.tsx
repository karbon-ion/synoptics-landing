'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 'Custom-Agent',
    title: 'Flexible AI Model Serving',
    description: "Choose the right AI model for every task. Synoptix AI supports external models, Microsoft-hosted models, and thoroughly custom AI agents from scratch. The platform makes it easy to deploy and test AI models, with full control over how they run across the enterprise.",
    imageUrl: '/evaluations/features-section/know-your-model.png',
    imagePosition: 'left',
    learnMoreText: 'Learn more about model serving'
  },
  {
    id: 'Reasoning-Agent',
    title: 'AI Performance and Efficiency',
    description: "Monitor key metrics like latency, token usage, and system behavior to understand AI model performance. Get real-time visibility into incoming and outgoing tokens, detect issues early, and optimise AI outputs for reliable performance.",
    imageUrl: '/evaluations/features-section/ship-with-confidence.png',
    imagePosition: 'right',
    learnMoreText: 'Learn more about performance metrics'
  },
  {
    id: 'Knowledge-Access',
    title: 'User Feedback and Interactions',
    description: "Monitor how the AI model performs and how users respond to it. From response speed to user behavior and feedback, get a clear view of what is working and where improvements are needed.",
    imageUrl: '/evaluations/features-section/get-live-insights.png',
    imagePosition: 'left',
    learnMoreText: 'Learn more about user feedback'
  },
  {
    id: 'Agent-Library',
    title: 'Find and Fix Issues Faster',
    description: "Monitor the quality of AI's responses using key metrics to check if answers are accurate, relevant, and aligned with the user's data. Stay ahead of issues like hallucinations by keeping a close eye on groundedness and similarity scores.",
    imageUrl: '/evaluations/features-section/continues-evaluation.png',
    imagePosition: 'right',
    learnMoreText: 'Learn more about issue resolution'
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
                {/* <Link
                  href="#"
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
                </Link> */}
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
