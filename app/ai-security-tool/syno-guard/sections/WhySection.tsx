'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Real-Time Threat Protection",
        description: "Synoptix automatically detects and blocks security risks, harmful content, and compliance violations before they become a problem.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="/images/SVG/zero exposure.svg"
                    alt="AI Platform Overview"
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
        title: 'Seamless Integration',
        description: 'Built to work within your CI/CD pipeline, AI models, and cloud systems, keeping security tight without slowing innovation.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 7.svg"
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
        title: 'Context-aware Security',
        description: 'Say goodbye to misinformation and data leaks. Synoptix keeps your business decisions based on facts, not AI hallucinations.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 12.svg"
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
        title: 'Custom Security Controls',
        description: 'Define how content is filtered, privacy is enforced, and risks are managed—so security works the way your business needs.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/grade control.svg"
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
                    Why Choose SynoGuard?
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