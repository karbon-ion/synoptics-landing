
import Image from 'next/image';
import Link from 'next/link';
import agentGif from '@/public/gifs/agent.gif';
import evaluationsGif from '@/public/gifs/evaluations.gif';
import prebuiltAgentsGif from '@/public/gifs/prebuiltAgents.gif';
import workflowGif from '@/public/gifs/workflow.gif';


const features = [
  {
    title: "Design & Deploy Intelligent AI Agents",
    subtitle: "AI AGENTS",
    description: "No-code AI agents—from simple queries to complex operations. Synoptix’s AI Platform for Enterprise lets you design, deploy, and scale intelligent agents that work exactly the way your business needs.",
    image: agentGif,

    ctaText: "Learn More",
    ctaLink: "/platform/enterprise-ai-agents"
  },
  {
    title: "Orchestrate Tasks with Precision",
    subtitle: "Workflows",
    description: "Run multiple AI agents in sync, automate cross-functional tasks, and eliminate manual follow-ups. Our Enterprise AI Platform helps your teams move faster—with smarter workflows and seamless execution.",
    image: workflowGif,

    ctaText: "Learn More",
    ctaLink: "/platform/agentic-workflows"
  },
  {
    title: "Precision Analytics for Improvement",
    subtitle: "Evaluations",
    description: "Gain real-time insights into AI performance, efficiency, and accuracy with Synoptix AI. Track usage, measure impact, and continuously refine AI agents to maximise productivity and business value.",
    image: evaluationsGif,
    ctaText: "Learn More",
    ctaLink: "/platform/enterprise-rag-application"
  },
  {
    title: "Pre-configured Agents for Instant Deployment",
    subtitle: "Quick Start AI",
    description: "Access prebuilt AI agents designed for various business tasks. Customise prompts, upload documents, and configure AI agents to get fast, precise, and context-aware results—hassle-free in seconds.",
    image: prebuiltAgentsGif,
    ctaText: "Learn More",
    ctaLink: "/platform/enterprise-ai-agents"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 max-w-7xl mx-auto leading-tight">Enterprise AI Solution for Improved Productivity</h2></div>{features.map((feature, index) => (
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