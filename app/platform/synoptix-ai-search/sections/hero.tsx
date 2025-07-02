'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SearchHero() {
    return (
        <section className="relative">
            {/* Hero Section */}
            <div className="relative pt-20 pb-60 z-10" style={{ backgroundImage: 'url(/synoptix-search/hero-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container mx-auto mt-20 px-4 text-center">
                    <h1 style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        lineHeight: 'clamp(40px, 7vw, 72px)',
                        textAlign: 'center'
                    }}>
                        <span className="text-[#5662F6]">Unified AI Search for </span> Modern Enterprise.
                    </h1>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '30px',
                        letterSpacing: '2%',
                        textAlign: 'center'
                    }} className="text-gray-600 max-w-2xl mx-auto my-6">
                        Empower your team to find accurate information across all company data sources, documents, spreadsheets, and presentations by asking questions in simple language.    
                    </p>
                    <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
                        Get a Demo
                    </Link>
                </div>
            </div>

            {/* Overlapping Image */}
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-7xl px-4 mt-20">
                <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-full mx-auto">
                    <Image 
                        src="/synoptix-search/forhero.png"
                        alt="Synoptix AI Search Interface"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 90vw, 1200px"
                        priority
                    />
                </div>
            </div>

            {/* Section below the image */}
            <div className="bg-white pt-[200px] sm:pt-[250px] md:pt-[300px] pb-16 sm:pb-24 md:pb-32 mb-10 sm:mb-15 md:mb-20"> {/* Responsive padding to allow image overlap */}
                <div className="container mx-auto">
                    {/* Additional content can go here */}
                </div>
            </div>
        </section>
    );
}
