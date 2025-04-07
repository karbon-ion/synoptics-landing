'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const features = [
    {
        title: "Why Choose Synoptix AI?",
        description: "Synoptix isn't just another AI platform—it's the AI platform. Built for security, scalability, and real-world impact, it gives businesses full control over AI that actually delivers.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
                    alt="AI Platform Overview"
                    width={600}
                    height={600}
                    className="object-cover rounded-lg shadow-lg"
                    unoptimized
                />
                </div>
            </div>
        )
    },
    {
        title: 'Zero Data Exposure',
        description: 'Your data never leaves your environment. Our platform ensures complete data privacy and security with zero exposure to external systems.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
                        alt="Data Security"
                        width={400}
                        height={300}
                        className="object-cover rounded-lg shadow-lg"
                        unoptimized
                    />
                </div>
            </div>
        )
    },
    {
        title: 'Enterprise-Grade Control',
        description: 'Gain complete control over AI operations with enterprise-grade governance, monitoring, and compliance tools built for scale.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                        alt="Enterprise Controls"
                        width={400}
                        height={300}
                        className="object-cover rounded-lg shadow-lg"
                        unoptimized
                    />
                </div>
            </div>
        )
    },
    {
        title: 'Flexible AI Infrastructure',
        description: 'Deploy on-premises, in your cloud, or use our managed service. Our flexible architecture adapts to your existing infrastructure.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800"
                        alt="Cloud Infrastructure"
                        width={400}
                        height={300}
                        className="object-cover rounded-lg shadow-lg"
                        unoptimized
                    />
                </div>
            </div>
        )
    },
    {
        title: 'Content Safety',
        description: 'Built-in content moderation and safety guardrails ensure AI outputs meet your organization\'s standards and compliance requirements.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800"
                        alt="Content Safety"
                        width={400}
                        height={300}
                        className="object-cover rounded-lg shadow-lg"
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
                        Why Synoptics.AI?
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