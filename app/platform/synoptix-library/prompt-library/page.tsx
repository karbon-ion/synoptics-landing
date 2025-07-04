'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { PromptCard } from './components/PromptCard'

// Platform icons
import slackIcon from '@/public/integrations/all-integrations/icons/slack.png'
import githubIcon from '@/public/integrations/all-integrations/icons/github.png'
import notionIcon from '@/public/integrations/all-integrations/icons/notion.png'

// Import JSON data
import promptsJson from './cosmos-prompts-simplified.json'

interface Prompt {
  id: string
  name: string
  category: string
  descriptions: string
  user_prompt: string
}

export default function PromptLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All'])
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [uniqueCategories, setUniqueCategories] = useState<string[]>(['All'])

  useEffect(() => {
    // Load prompts from JSON
    const loadedPrompts = promptsJson as Prompt[]
    setPrompts(loadedPrompts)
    
    // Extract unique categories
    const categories = ['All', ...new Set(loadedPrompts.map(prompt => prompt.category))]
    setUniqueCategories(categories)
  }, [])

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      setSelectedCategories(['All'])
    } else {
      const newCategories = selectedCategories.filter(c => c !== 'All')
      if (selectedCategories.includes(category)) {
        setSelectedCategories(newCategories.filter(c => c !== category))
      } else {
        setSelectedCategories([...newCategories, category])
      }
    }
  }

  // Map JSON data to the format expected by PromptCard
  const promptsData = prompts.map(prompt => ({
    title: prompt.name,
    description: prompt.descriptions,
    tags: [prompt.category],
    icons: [slackIcon, notionIcon, githubIcon], // Default icons for all prompts
    prompt: {
      role: "system",
      content: prompt.user_prompt
    }
  }))

  const filteredPrompts = promptsData.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.includes('All') || 
                           prompt.tags.some(tag => selectedCategories.includes(tag))
    return matchesSearch && matchesCategory
  })

  return (
    <main className="relative">
      {/* Hero Section with Title and Description Only */}
      <section className="relative pt-40 pb-96">
        <Image
          src="/prompt-library/hero-background.png"
          alt="Background"
          fill
          className="object-cover z-0"
          quality={100}
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '72px',
            color: '#323E50',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Prompt Library
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '2%',
            textAlign: 'center',
            maxWidth: '40rem',
            margin: '0 auto'
          }}>
            Explore optimized prompts for a breadth of business and personal tasks.
          </p>
        </div>
      </section>

      {/* Content Section - Starting within the hero */}
      <div className="container mx-auto px-4 relative" style={{ marginTop: '-320px' }}>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main grid layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Left sidebar - Categories */}
            <div className="border border-gray-200 rounded-lg pt-4 pb-4 pl-8 bg-white" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontFamily: 'Syne',
                fontSize: '22px',
                fontWeight: 500,
                lineHeight: '32px',
                verticalAlign: 'middle',
                color: '#323E50',
                marginBottom: '16px'
              }}>
                Categories
              </h3>
              {uniqueCategories.map((category: string, index: number) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoryToggle(category)}
                >
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '1px solid #E4E9F1',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: selectedCategories.includes(category) ? '#0066FF' : 'white'
                  }}>
                    {selectedCategories.includes(category) && (
                      <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '22.5px',
                    color: '#666',
                    textAlign: 'left',
                    padding: '0',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    verticalAlign: 'middle'
                  }}>
                    {category}
                  </span>
                </div>
              ))}
            </div>

            {/* Right side - Search Bar and Prompt Cards */}
            <div>
              {/* Search Bar */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="text"
                  placeholder="Looking for a prompt?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    height: '55px',
                    padding: '0 24px',
                    border: '1px solid #E4E9F1',
                    borderRadius: '20px',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    outline: 'none',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                />
              </div>
              
              {/* Prompt Cards Grid - immediately under search bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '80px'
              }}>
                {filteredPrompts.map((prompt, index) => (
                  <PromptCard
                    key={index}
                    title={prompt.title}
                    description={prompt.description}
                    tags={prompt.tags}
                    icons={prompt.icons}
                    prompt={prompt.prompt}
                    onRun={() => console.log(`Running prompt: ${prompt.title}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
  
}
