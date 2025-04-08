'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Accelerate Task Execution",
        description: "Reduce downtime and boost efficiency with AI-driven automation, delivering faster, smarter results effortlessly.",
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
        title: 'Flexible Model Selection',
        description: 'Choose the right LLM to fit your needs, ensuring optimal AI performance and seamless business integration.',
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
        title: 'Seamless Data Integration',
        description: 'Easily integrate AI into your existing software ecosystem, enhancing workflows and operational efficiency instantly.',
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
        title: 'Zero Data Retention',
        description: 'Keep your data private with a closed-source AI system, ensuring full confidentiality and compliance.',
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
        title: 'Enterprise-Grade Security',
        description: 'Protect sensitive information with encryption, role-based access, and built-in safety tools for maximum security.',
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
                        Why Synoptix AI?
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