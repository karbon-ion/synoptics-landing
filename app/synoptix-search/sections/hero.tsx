'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SearchHero() {
    return (
        <section className="relative">
            {/* Hero Section */}
            <div className="bg-[#E6EEFF] pt-20 pb-60 relative z-10">
                <div className="container mx-auto mt-20 px-4 text-center">
                    <h1 style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '48px',
                        lineHeight: '72px',
                        textAlign: 'center'
                    }}>
                        <span className="text-[#5662F6]">Unified AI Search for the</span> Modern Enterprise.
                    </h1>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '30px',
                        letterSpacing: '2%',
                        textAlign: 'center'
                    }} className="text-gray-600 max-w-2xl mx-auto my-6">
                        AI-powered enterprise search platform that connects your tools, files, and messages—so teams can ask questions and get accurate answers instantly. 
                    </p>
                    <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
                        Get a Demo
                    </Link>
                </div>
            </div>

            {/* Overlapping Image */}
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-7xl px-4 mt-20">
                <Image 
                    src="/synoptix-search/forhero.png"  // Update if needed to actual path or use uploaded file
                    alt="Synoptix AI Search Interface"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* Section below the image */}
            <div className="bg-white pt-[300px] pb-32 mb-20"> {/* Push down to allow image overlap */}
                <div className="container mx-auto">
                    {/* Additional content can go here */}
                </div>
            </div>
        </section>
    );
}
