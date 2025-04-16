'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const features = [
    {
        title: 'Strategic Alignment',
        description: 'We fine-tune your AI to sync perfectly with your business goals—constantly refining for peak performance.',
        content: (
             <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src="/images/SVG/Automated Complex Workflows.svg"
                            alt="AI Platform Overview"
                            width={300}
                            height={300}
                            className="object-cover rounded-3xl shadow-xl border border-blue-100"
                        />
                    </div>
        )
    },
    {
        title: 'Reliable, High-Speed Performance',
        description: 'Get improved accuracy, minimal downtime, and accelerated deployments—delivering measurable ROI.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
            <Image
                src="/images/SVG/accelrate task copy 15.svg"
                alt="AI Platform Overview"
                width={300}
                height={300}
                className="object-cover rounded-3xl shadow-xl border border-blue-100"
            />
        </div>
        )
    },
    {
        title: 'Enterprise-Grade Security',
        description: 'Detect and remove biases, ensure full compliance, and safeguard your AI assets with robust security protocols.',
        content: (
            <div className="w-full h-full flex items-center justify-center">
                       <Image
                           src="/images/SVG/zero exposure.svg"
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
                    Why choose Synoptix AI for Fine Tuning and Optimisation Services?
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