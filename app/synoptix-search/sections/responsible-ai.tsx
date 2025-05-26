'use client';

import Image from 'next/image';

export default function ResponsibleAI() {
    return (
        <section className="bg-[#6B7BF7] py-16 text-white max-w-6xl rounded-xl mx-auto mb-30">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-center text-4xl font-bold mb-4">
                    Why Responsible AI Matters?
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8">
                    AI is only as good as its ethics, transparency, and reliability. Enterprises adopting AI
                    at scale need more than just automation - they need AI that is:
                </p>
                
                <div className="w-full max-w-4xl mx-auto border-t border-white/30 pt-8 mb-12"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                    {/* Safe */}
                    <div className="flex items-start">
                        <div className="bg-[#5662F6]/20 rounded-full p-5 mr-6">
                            <Image 
                                src="/icons/shield-check.svg" 
                                alt="Safe" 
                                width={64} 
                                height={64}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">Safe</h3>
                            <p>
                                No unpredictable decisions, only controlled automation.
                            </p>
                        </div>
                    </div>

                    {/* Explainable */}
                    <div className="flex items-start">
                        <div className="bg-[#5662F6]/20 rounded-full p-5 mr-6">
                            <Image 
                                src="/icons/grid.svg" 
                                alt="Explainable" 
                                width={64} 
                                height={64}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">Explainable</h3>
                            <p>
                                Every AI decision is auditable and transparent.
                            </p>
                        </div>
                    </div>

                    {/* Unbiased */}
                    <div className="flex items-start">
                        <div className="bg-[#5662F6]/20 rounded-full p-5 mr-6">
                            <Image 
                                src="/icons/scale.svg" 
                                alt="Unbiased" 
                                width={64} 
                                height={64}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">Unbiased</h3>
                            <p>
                                No skewed outputs, just fair and accurate AI.
                            </p>
                        </div>
                    </div>

                    {/* Compliant */}
                    <div className="flex items-start">
                        <div className="bg-[#5662F6]/20 rounded-full p-5 mr-6">
                            <Image 
                                src="/icons/document-check.svg" 
                                alt="Compliant" 
                                width={64} 
                                height={64}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">Compliant</h3>
                            <p>
                                Meets global security and governance standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
