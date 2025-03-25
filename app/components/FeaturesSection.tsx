'use client';

import Image from 'next/image';
import Link from 'next/link';
import f1 from '@/public/features1.png';
import f2 from '@/public/features2.png';
import f3 from '@/public/features3.png';
import f4 from '@/public/features4.png';
import f_blob1 from '@/public/f_blob1.png';
import f_blob2 from '@/public/f_blob2.png';

const features = [
  {
    title: "Design & Deploy Intelligent AI Agents",
    subtitle: "CUSTOM AI AGENT",
    description: "From simple to advanced tasks, Synoptix's AI platform lets you design, deploy, and scale intelligent agents. Build custom AI agents that work exactly the way you need—without complex coding.",
    image: f1,
    ctaText: "Learn More",
    ctaLink: "/platform"
  },
  {
    title: "Automate Document Processing",
    subtitle: "INTELLIGENT DOCUMENT PROCESSING",
    description: "Extract, analyze, and process information from any document type. Our AI understands context, identifies key data points, and integrates with your existing workflows.",
    image: f2,
    ctaText: "Learn More",
    ctaLink: "/document-processing"
  },
  {
    title: "Enhance Customer Support",
    subtitle: "AI CUSTOMER SERVICE",
    description: "Deploy AI agents that understand customer inquiries, access knowledge bases, and provide accurate responses. Scale your support operations without increasing headcount.",
    image: f3,
    ctaText: "Learn More",
    ctaLink: "/customer-support"
  },
  {
    title: "Streamline Operations",
    subtitle: "WORKFLOW AUTOMATION",
    description: "Connect systems, automate repetitive tasks, and optimize business processes. Our AI agents work across departments to eliminate bottlenecks and improve efficiency.",
    image: f4,
    ctaText: "Learn More",
    ctaLink: "/operations"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">


        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Synoptix AI That Reads, Thinks, and Answers—So You Don't Have To
          </h2>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-24 last:mb-0`}
          >
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  unoptimized
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
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {feature.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}

{/* <div className="absolute inset-0 transform translate-x-32 -translate-y-24 ">
          <Image
            src={f_blob1}
            alt="Background"
            width={950}
            priority
            className="object-center w-full h-full"
            quality={100}
          />
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;