'use client';

import { useState } from 'react';
import Image from 'next/image';

const features = [
    {
        id: "synptics",
        title: "Why Choose Synoptix AI?",
        description: "Synoptix isn't just another AI platform—it's the AI platform. Built for security, scalability, and real-world impact, it gives businesses full control over AI that actually delivers."
    },
    {
        id: 'zero-data',
        title: 'Zero Data Exposure',
        description: 'Your data never leaves your environment. Our platform ensures complete data privacy and security with zero exposure to external systems.'
    },
    {
        id: 'enterprise-control',
        title: 'Enterprise-Grade Control',
        description: 'Gain complete control over AI operations with enterprise-grade governance, monitoring, and compliance tools built for scale.'
    },
    {
        id: 'flexible-infrastructure',
        title: 'Flexible AI Infrastructure',
        description: 'Deploy on-premises, in your cloud, or use our managed service. Our flexible architecture adapts to your existing infrastructure.'
    },
    {
        id: 'content-safety',
        title: 'Content Safety',
        description: 'Built-in content moderation and safety guardrails ensure AI outputs meet your organization\'s standards and compliance requirements.'
    }
];

const WhySection = () => {
    const [activeFeature, setActiveFeature] = useState('synptics');

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left side - Image with overlays */}
                    <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden border border-blue-100 bg-gradient-to-br from-blue-50/50 to-white">
                        <div className=" relative">
                            <Image
                                src="/why.png"
                                alt="AI workspace"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay buttons */}
                            <div className="absolute top-1/4 left-[10%] transform -translate-y-1/2">
                                <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium">
                                    AI for work
                                </div>
                            </div>

                            <div className="absolute top-1/3 right-[10%] transform -translate-y-1/2">
                                <div className="bg-gray-700/80 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm">
                                    AI for process
                                </div>
                            </div>

                            <div className="absolute top-2/3 left-1/3 transform -translate-y-1/2">
                                <div className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium">
                                    AI for services
                                </div>
                            </div>
                        </div>

                        {/* Gradient border */}
                        {/* <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent bg-clip-padding [background:linear-gradient(to_right,#00c6ff,#0072ff)_padding-box,linear-gradient(to_right,#00c6ff,#0072ff)_border-box]" /> */}
                    </div>

                    {/* Right side - Text content */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Why Synoptics.AI?
                            </h2>

                            <div className="w-16 h-1 bg-blue-500 mb-8"></div>

                            {/* <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Synoptix AI?
                </h3>
                
                <p className="text-lg text-gray-600">
                  Synoptix isn't just another AI platform—it's the AI platform. Built for security, scalability, and real-world impact, it gives businesses full control over AI that actually delivers.
                </p>
              </div> */}
                        </div>

                        {/* Feature toggles */}
                        <div className="space-y-1">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature.id)}
                                >
                                    <div
                                        className={`border-l-4 py-4 px-5 cursor-pointer transition-all duration-200 ${activeFeature === feature.id
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            {feature.title}
                                        </h4>
                                    </div>

                                    {activeFeature === feature.id && (
                                        <div className="py-4 px-5 bg-blue-50 border-l-4 border-blue-500 animate-fadeIn">
                                            <p className="text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySection; 