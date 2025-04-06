'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const features = [
    {
        title: "Why Partner with Synoptix AI Consulting Services?",
        description: "Synoptix isn't just another AI platform—it's the AI platform. Built for security, scalability, and real-world impact, it gives businesses full control over AI that actually delivers.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src="/why.png"
                    alt="AI Platform Overview"
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                />
            </div>
        )
    },
    {
        title: 'Zero Data Exposure',
        description: 'Your data never leaves your environment. Our platform ensures complete data privacy and security with zero exposure to external systems.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-4 text-white text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <div className="font-semibold">Secure Data Environment</div>
                </div>
            </div>
        )
    },
    {
        title: 'Enterprise-Grade Control',
        description: 'Gain complete control over AI operations with enterprise-grade governance, monitoring, and compliance tools built for scale.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-4 text-white text-center">
                    <div className="text-4xl mb-4">⚙️</div>
                    <div className="font-semibold">Advanced Controls</div>
                </div>
            </div>
        )
    },
    {
        title: 'Flexible AI Infrastructure',
        description: 'Deploy on-premises, in your cloud, or use our managed service. Our flexible architecture adapts to your existing infrastructure.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-4 text-white text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <div className="font-semibold">Flexible Deployment</div>
                </div>
            </div>
        )
    },
    {
        title: 'Content Safety',
        description: 'Built-in content moderation and safety guardrails ensure AI outputs meet your organization\'s standards and compliance requirements.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-4 text-white text-center">
                    <div className="text-4xl mb-4">🛡️</div>
                    <div className="font-semibold">Safety First</div>
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
                    Why Partner with Synoptix AI Consulting Services?
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