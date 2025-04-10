'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Automated Complex Workflows ",
        description: "Optimize document processing, data extraction, and customer interactions with intelligent, hands-free automation. ",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
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
        title: 'Custom-Tailored Intelligence ',
        description: 'Train your AI agent with your specific business logic, language, and workflows for precise, context-aware performance. ',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
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
        title: '24/7 Operational Efficiency',
        description: 'Ensure continuous productivity with an AI agent that delivers accurate, error-free results—anytime, anywhere. ',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
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
        title: 'Integration & Rapid Deployment',
        description: 'Deploy AI automation effortlessly within your existing infrastructure—minimizing disruption and maximizing ROI. ',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800"
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
                    Why Choose Synoptix AI Agents for Enterprise?
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