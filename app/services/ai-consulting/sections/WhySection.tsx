'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const features = [
    {
        title: "Maximised Platform Usage",
        description: "Ensure seamless adoption and utilisation across your organisation, enhancing overall performance.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src="/images/SVG/Precision at scale.svg"
                    alt="AI Platform Overview"
                    width={300}
                    height={300}
                    className="object-cover rounded-3xl shadow-xl border border-blue-100"
                />
            </div>
        )
    },
    {
        title: 'Dedicated Expert Support',
        description: 'Receive personalised, ongoing assistance to resolve complex challenges and optimize workflows.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src="/images/SVG/accelrate task copy 5.svg"
                    alt="AI Platform Overview"
                    width={300}
                    height={300}
                    className="object-cover rounded-3xl shadow-xl border border-blue-100"
                />
            </div>
        )
    },
    {
        title: 'Enhanced Data Quality',
        description: 'Improve the accuracy and relevance of retrieved information for better insights and decision-making.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
            <Image
                src="/images/SVG/Human Guided ai.svg"
                alt="AI Platform Overview"
                width={300}
                height={300}
                className="object-cover rounded-3xl shadow-xl border border-blue-100"
            />
        </div>
        )
    },
    {
        title: 'Proactive Security & Performance Monitoring ',
        description: 'Maintain system integrity with continuous security and performance oversight.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
            <Image
                src="/images/SVG/grade control.svg"
                alt="AI Platform Overview"
                width={300}
                height={300}
                className="object-cover rounded-3xl shadow-xl border border-blue-100"
            />
        </div>
        )
    },
    {
        title: 'AI-Driven Competitive Edge',
        description: 'Stay ahead of the competition with advanced AI strategies tailored to your business needs.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
            <Image
                src="/images/SVG/accelrate task copy 16.svg"
                alt="AI Platform Overview"
                width={300}
                height={300}
                className="object-cover rounded-3xl shadow-xl border border-blue-100"
            />
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