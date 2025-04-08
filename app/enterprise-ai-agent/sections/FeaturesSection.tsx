'use client';

import Image from 'next/image';
import Link from 'next/link';
import agentGif from '@/public/gifs/agent.gif';
import evaluationsGif from '@/public/gifs/evaluations.gif';
import prebuiltAgentsGif from '@/public/gifs/prebuiltAgents.gif';
import workflowGif from '@/public/gifs/workflow.gif';


const features = [
  {
    title: "Smarter Code. Faster Development",
    subtitle: "Code Gen agents",
    description: "Eliminate redundant tasks and empower developers to focus on innovation. Synoptix Code Gen Agents generate clean, efficient code and optimize logic in real time—reducing development cycles and minimizing human error across your engineering workflows.",
    image: agentGif,

    ctaText: "Learn More",
    ctaLink: "/enterprise-ai-agent"
  },
  {
    title: "On-Demand Creation for Enterprise Agility",
    subtitle: "Generative agents",
    description: "From content generation to complex creative outputs, Synoptix Generative Agents convert ideas into actionable deliverables. Generate text, visuals, and code at scale—adapting instantly to your needs and enhancing productivity across teams.",
    image: evaluationsGif,

    ctaText: "Learn More",
    ctaLink: "/workflow"
  },
  {
    title: "Built-In Compliance, Consistency, and Quality Control",
    subtitle: "Assurance agents",
    description: "Maintain operational excellence with Synoptix Assurance Agents. These AI agents proactively monitor for inconsistencies, enforce enterprise standards, and ensure every output aligns with regulatory and organizational benchmarks. ",
    image: prebuiltAgentsGif,
    ctaText: "Learn More",
    ctaLink: "/enterprise-rag"
  },
  {
    title: "Transform Enterprise Data into Strategic Action",
    subtitle: "Decision Support & Analytical Agents ",
    description: "Empower your teams with real-time insights. Synoptix Analytical Agents analyze complex datasets, identify trends, and deliver actionable recommendations—enabling smarter, faster decision-making across the enterprise. ",
    image: workflowGif,
    ctaText: "Learn More",
    ctaLink: "/enterprise-ai-agent"
  },
  {
    title: "Proactive Risk Management at Scale",
    subtitle: "Anomalies Detection Agents  ",
    description: "Synoptix Anomaly Detection Agents provide continuous monitoring to detect irregularities and potential threats before they impact your business. Ensure operational integrity and security with real-time intelligence that preempts disruptions.",
    image: workflowGif,
    ctaText: "Learn More",
    ctaLink: "/enterprise-ai-agent"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">


        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          Discover the AI Agents Designed for Enterprise Impact 
          </h2>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-24 last:mb-0`}
          >
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-xl bg-[#f8fafc]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl scale-105"
                  style={{ margin: '-2px' }}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="max-w-xl">
                <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
                  {feature.subtitle}
                </span>
                <h3 className="mt-2 text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <Link
                  href={feature.ctaLink}
                  className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {feature.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;