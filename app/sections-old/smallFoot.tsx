'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function SmallFoot({title, buttonOne, buttonTwo}: {title: string, buttonOne: string, buttonTwo: string}) {
    return (
        <div className="bg=[#F7FAFF] relative w-full h-[400px] overflow-hidden">
            {/* Background Image with Diagonal Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EEF5FF]/90 via-[#F7FAFF]/80 to-white/70 transform rotate-[-10deg] scale-110" />
            
            {/* Diagonal Lines */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 transform rotate-[-10deg] scale-110">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#87BEFF]/20 to-transparent" />
                    <div className="absolute top-[25%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#87BEFF]/20 to-transparent" />
                    <div className="absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#87BEFF]/20 to-transparent" />
                    <div className="absolute top-[75%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#87BEFF]/20 to-transparent" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h2 className="text-4xl md:text-[56px] font-bold tracking-tight max-w-4xl mx-auto">
                        {title}
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href="/#contact"
                            variant="primary"
                            size="lg"
                            className="min-w-[200px]"
                        >
                            {buttonOne}
                        </Button>
                        <Button
                            href="/#contact"
                            variant="outline"
                            size="lg"
                            className="min-w-[200px] bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#333333] hover:border-[#333333]"
                        >
                            {buttonTwo}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
