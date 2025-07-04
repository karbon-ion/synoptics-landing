'use client'

import { Hero } from './sections/Hero'
import FeaturesSection from './sections/features'
import { AgentLibrarySection } from './sections/AgentLibrarySection'

export default function AgentLibrary() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <AgentLibrarySection />
    </main>
  )
}
