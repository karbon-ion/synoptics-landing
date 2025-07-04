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
        <main className="w-full">
            <Hero />
            <ValuesSection />
            <VideoSection videoRef={videoRef} isInView={isInView} />
        </main>
    )
}
