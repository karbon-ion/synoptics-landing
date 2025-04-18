
import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
// import Picture from ''
const features = [
    {
        title: "Accelerate Task Execution",
        description: "Minimise downtime with fast, intelligent automation. Our Enterprise AI Platform enables teams to shift focus from repetitive tasks to strategic initiatives.",
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                <Image
                    src="/images/SVG/Faster Execution .svg"
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
        title: 'Flexible Model Selection',
        description: 'Select the most suitable large language model (LLM) to meet your specific requirements, ensuring optimal AI performance and seamless integration within your business operations.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/test4.jpg"
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
        title: 'Seamless Data Integration',
        description: 'Integrate AI effortlessly into your existing software ecosystem, enhancing workflows and operational efficiency by connecting with various data sources, including ERP systems and databases.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/test1.jpg"
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
        title: 'Zero Data Retention',
        description: 'Ensure complete data confidentiality with an in-memory processing architecture. Synoptix is the AI Platform for Enterprise that respects your privacy and compliance needs.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/test3.jpg"
                        alt="Cloud Infrastructure"
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
        title: 'Enterprise-Grade Security',
        description: 'Safeguard sensitive information through robust security measures, including encryption, role-based access controls, and built-in safety tools, aligning with industry-standard security protocols.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 flex flex-col items-center">
                    <Image
                        src="/images/SVG/test2.jpg"
                        alt="Content Safety"
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