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
    <main className="relative overflow-x-hidden">
      {/* Hero Section with Title and Description Only */}
      <section className="relative pt-24 md:pt-32 pb-48 md:pb-64">
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
            color: '#323E50',
            textAlign: 'center',
            marginBottom: '1rem'
          }} className="text-3xl md:text-[48px] leading-tight md:leading-[72px]">
            Prompt Library
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            letterSpacing: '2%',
            textAlign: 'center',
            margin: '0 auto'
          }} className="text-sm md:text-[16px] leading-relaxed md:leading-[30px] max-w-xs md:max-w-2xl lg:max-w-[50rem]">
            Discover optimised prompts designed to streamline a wide range of enterprise tasks.
          </p>
        </div>
      </section>

      {/* Content Section - Starting within the hero */}
      <div className="container mx-auto px-4 relative" style={{ marginTop: 'clamp(-180px, -20vw, -240px)' }}>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 lg:gap-[40px] items-start">
            {/* Left sidebar - Categories */}
            <div className="border border-gray-200 rounded-lg pt-4 pb-4 pl-4 md:pl-8 bg-white flex flex-col gap-4 md:gap-[16px] shadow-sm mb-6 md:mb-0" style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontFamily: 'Syne',
                fontWeight: 500,
                verticalAlign: 'middle',
                color: '#323E50'
              }} className="text-lg md:text-[22px] leading-tight md:leading-[32px] mb-3 md:mb-[16px]">
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
              <div className="mb-4 md:mb-6">
                <input
                  type="text"
                  placeholder="Looking for a prompt?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 md:h-[55px] px-4 md:px-6 border border-[#E4E9F1] rounded-xl md:rounded-[20px] font-['Poppins'] text-sm md:text-base outline-none bg-white shadow-sm"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                />
              </div>
              
              {/* Prompt Cards Grid - immediately under search bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 md:mb-20">
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
