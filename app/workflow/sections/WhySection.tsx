'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Precision at Scale",
        description: "Complex tasks demand accuracy. Our multi-agent model ensures every step is executed with intelligence—no missed details, no inefficiencies. ",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="/images/SVG/Precision at scale.svg"
                    alt="AI Platform Overview"
                    width={600}
                    height={600}
                    className="object-cover rounded-3xl shadow-xl border border-blue-100"
                    unoptimized
                />
                </div>
            </div>
        )
    },
    {
        title: 'Seamless Coordination',
        description: 'Tasks don’t sit idle. AI-driven workflows dynamically route, consolidate, and refine information, keeping processes in motion without delays. ',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 16.svg"
                        alt="Data Security"
                        width={400}
                        height={300}
                        className="object-cover rounded-3xl shadow-xl border border-blue-100"
                        unoptimized
                    />
                </div>
            </div>
        )
    },
    {
        title: 'Human-Guided AI',
        description: 'Automation with oversight—AI handles execution, while your team stays in control, making final decisions where it matters.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/Human Guided ai.svg"
                        alt="Enterprise Controls"
                        width={400}
                        height={300}
                        className="object-cover rounded-3xl shadow-xl border border-blue-100"
                        unoptimized
                    />
                </div>
            </div>
        )
    },
    {
        title: 'Enterprise-Ready Efficiency',
        description: 'From approvals to data processing, Synoptix AI adapts to your operations, optimizing workflows for speed, accuracy, and business impact. ',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 6.svg"
                        alt="Cloud Infrastructure"
                        width={400}
                        height={300}
                        className="object-cover rounded-3xl shadow-xl border border-blue-100"
                        unoptimized
                    />
                </div>
            </div>
        )
    }
];

const WhySection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose Synoptix AI for Workflows?
                    </h2>
                    <div className="w-16 h-1 bg-blue-500"></div>

                </div>
                
                <StickyScroll 
                    content={features}
                    contentClassName="bg-gradient-to-br"
                />
            </div>
        </section>
    );
};

export default WhySection; 