'use client'
import Image from 'next/image';

export default function Certifications() {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#EEF5FF] to-[#F7FAFF] py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <div className="text-[#0066FF] font-medium text-sm tracking-wider uppercase">
                        CERTIFICATIONS
                    </div>
                    <h2 className="text-4xl md:text-[56px] font-bold tracking-tight">
                        Stay One Step Ahead SynoGuard
                    </h2>
                    <h3 className="text-4xl md:text-[40px] font-bold tracking-tight">
                        Security & Compliance at Work
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Your data is protected by the most comprehensive enterprise compliance and security control.
                    </p>
                </div>

                {/* Certification Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {/* HIPAA */}
                    <div className="relative aspect-square p-6 bg-white rounded-3xl border border-[#E2E8F0] flex items-center justify-center group hover:border-[#87BEFF] transition-colors">
                        <Image
                            src="/hipaa.png"
                            alt="HIPAA Compliant"
                            width={120}
                            height={120}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* ISO */}
                    <div className="relative aspect-square p-6 bg-white rounded-3xl border border-[#E2E8F0] flex items-center justify-center group hover:border-[#87BEFF] transition-colors">
                        <Image
                            src="/iso.png"
                            alt="ISO Certified"
                            width={120}
                            height={120}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* STAR */}
                    <div className="relative aspect-square p-6 bg-white rounded-3xl border border-[#E2E8F0] flex items-center justify-center group hover:border-[#87BEFF] transition-colors">
                        <Image
                            src="/star_cert.png"
                            alt="STAR Certified"
                            width={120}
                            height={120}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* SOC 2 */}
                    <div className="relative aspect-square p-6 bg-white rounded-3xl border border-[#E2E8F0] flex items-center justify-center group hover:border-[#87BEFF] transition-colors">
                        <Image
                            src="/aicpa.png"
                            alt="SOC 2 Certified"
                            width={120}
                            height={120}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 