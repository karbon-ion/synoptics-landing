'use client'
import Image from 'next/image';

export default function Security() {
    return (
        <section className="relative w-full min-h-[600px] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF] overflow-hidden">
            {/* Background Blob */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/rag-blob-2.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto relative z-10 py-16 px-4">
                {/* Header Section */}
                <div className="text-center space-y-3 mb-20">
                    <h2 className="text-4xl md:text-[56px] font-bold tracking-tight">
                        Your Data is Yours—Always Secure
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        All data is stored within your own Enterprise ensuring privacy and compliance.
                    </p>
                </div>

                {/* Circles and Lines - Hidden on mobile */}
                <div className="hidden md:block relative h-[200px]">
                    {/* Connecting Lines with Plus */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full max-w-4xl mx-auto">
                            <div className="w-full h-[2px] bg-gradient-to-r from-[#E2F2FF] via-[#87BEFF] to-[#E2F2FF] border-dashed border-t border-[#87BEFF]" />
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#87BEFF] text-2xl">
                                +
                            </div>
                        </div>
                    </div>

                    {/* Left Circle - Security */}
                    <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-[120px] h-[120px] bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center">
                            <Image
                                src="/circle1.png"
                                alt="Security Icon"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                            <h3 className="font-semibold text-lg mb-0.5">Connect & Unify</h3>
                            <p className="text-gray-500 text-sm">All Your Data</p>
                        </div>
                    </div>

                    {/* Right Circle - AI */}
                    <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-[120px] h-[120px] bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center">
                            <Image
                                src="/circle2.png"
                                alt="AI Icon"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                            <h3 className="font-semibold text-lg mb-0.5">Secure Access</h3>
                            <p className="text-gray-500 text-sm">Enterprise Ready</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Alternative */}
                <div className="md:hidden space-y-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-[120px] h-[120px] bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center mb-3">
                            <Image
                                src="/circle1.png"
                                alt="Security Icon"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="font-semibold text-lg mb-0.5">Connect & Unify</h3>
                        <p className="text-gray-500 text-sm">All Your Data</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-[120px] h-[120px] bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center mb-3">
                            <Image
                                src="/circle2.png"
                                alt="AI Icon"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="font-semibold text-lg mb-0.5">Secure Access</h3>
                        <p className="text-gray-500 text-sm">Enterprise Ready</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 