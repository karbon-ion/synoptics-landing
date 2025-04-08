'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Instant answers",
        description: "Leverage quantum-powered AI to surface the most relevant insights in seconds—eliminating hours of manual searching.",
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
        title: 'Quantum accuracy ',
        description: 'Make confident decisions with precise answers drawn from verified, up-to-date data sources. ',
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
        title: 'Scalable AI ',
        description: 'RAG95 is built for enterprise scale—delivering instant insights with zero lag, zero downtime, and zero frustration. ',
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
        title: 'Seamless Integration',
        description: 'Integrates with your existing tools and systems, so you can get started with zero disruption. ',
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
    }
];

const WhySection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose Synoptix RAG95 for Enterprise?  
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