'use client'

import Hero from './sections/Hero'
import ValuesSection from './sections/ValuesSection'
import CeoLetterSection from './sections/CeoLetterSection'

export default function About() {
    return (
        <main className="w-full">
            <Hero />
            <ValuesSection />
            <CeoLetterSection />
        </main>
    )
}
