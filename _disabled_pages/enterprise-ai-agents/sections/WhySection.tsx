'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Automated Complex Workflows ",
        description: "Optimise document processing, data extraction, and customer interactions with intelligent, hands-free automation using an Enterprise AI Agent. Free up valuable human hours while ensuring speed, consistency, and accuracy across operations.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="/images/SVG/accelrate task copy 16.svg"
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
        description: 'Train your AI Agent for Enterprise with specific business logic, language, and workflows for precise, context-aware performance. Deliver AI experiences that feel bespoke, aligned with how your business actually works.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 3.svg"
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
        description: 'Ensure continuous productivity with an Enterprise AI Agent that delivers accurate, error-free results—anytime, anywhere. Run processes overnight, during peak hours, or across time zones without breaking a sweat.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy.svg"
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
        description: 'Deploy AI automation effortlessly within your existing infrastructure, minimizing disruption and maximizing ROI through your AI Agents for Enterprise. Go from idea to execution in days, not months, with plug-and-play flexibility.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/accelrate task copy 9.svg"
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