'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const features = [
    {
        title: "Maximised Platform Usage",
        description: "Drive seamless adoption across your organisation and unlock full platform potential with expert AI consulting services. Empower every team to get the most value from your AI investments—without the learning curve.",
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
        description: 'Access ongoing, personalised support to resolve technical challenges and continuously optimise performance. Our consultants stay with you post-deployment, ensuring AI success at every step.',
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
        description: 'Boost the accuracy and relevance of AI-generated insights with better-quality data and model alignment—driven. We help you transform raw data into powerful, actionable intelligence.',
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
        description: 'Keep systems secure and optimised with constant monitoring—an essential part of Synoptix’s enterprise-grade AI consulting approach. Identify risks early and maintain high performance without compromising compliance.',
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
        title: 'AI-Driven Competitive Advantage',
        description: 'Stay ahead of the market with advanced AI strategies tailored specifically to your business goals—delivered. Leverage AI not just for automation—but to lead your industry forward.',
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