'use client'

import { useRef, useState, useEffect } from 'react'
import Hero from './sections/Hero'
import ValuesSection from './sections/ValuesSection'
import VideoSection from './components/VideoSection'

export default function About() {
    const videoRef = useRef(null)
    const [isInView, setIsInView] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )
        
        if (videoRef.current) {
            observer.observe(videoRef.current)
        }
        
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [videoRef])
    
    return (
        <main className="w-full overflow-x-hidden">
            <Hero />
            <ValuesSection />
            <div className="px-4 sm:px-6 md:px-8">
              <h2 style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '1.3',
                textAlign: 'center',
                marginBottom: '16px',
                marginTop: '24px'
              }} className="text-3xl sm:text-4xl md:text-5xl">
                Who We Are
              </h2>
              <p style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.6',
                letterSpacing: '2%',
                textAlign: 'center',
                maxWidth: '60rem',
                margin: '0 auto 2rem',
                paddingLeft: '8px',
                paddingRight: '8px'
              }} className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">
             Synoptix AI was founded on the belief that trust is the foundation of enterprise AI adoption. Our mission is to deliver AI not just for performance, but for transparency, accountability, and control. We are a Microsoft partner, and our platform is fully aligned with Microsoft's security, compliance, and governance standards. Our platform is purpose-built for compliance-driven environments, enabling enterprises to scale AI securely and productively.  
              </p>
            </div>
            <VideoSection videoRef={videoRef} isInView={isInView} />
        </main>
    )
}
