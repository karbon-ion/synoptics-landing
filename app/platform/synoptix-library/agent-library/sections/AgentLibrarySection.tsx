'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AgentCard } from '../components/AgentCard'

// Platform icons
import slackIcon from '@/public/integrations/all-integrations/icons/slack.png'
import githubIcon from '@/public/integrations/all-integrations/icons/github.png'
import notionIcon from '@/public/integrations/all-integrations/icons/notion.png'

// Import JSON data
import agentsJson from '../agents.json'

interface Agent {
  title: string
  description: string
  category: string
}

export function AgentLibrarySection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All'])
  const [agents, setAgents] = useState<Agent[]>([])
  const [uniqueCategories, setUniqueCategories] = useState<string[]>(['All'])

  useEffect(() => {
    // Load agents from JSON
    const loadedAgents = agentsJson.agents as Agent[]
    setAgents(loadedAgents)
    
    // Get unique categories from the agents
    const extractedCategories = loadedAgents.map(agent => agent.category).filter(category => category !== 'All')
    const categories = ['All', ...new Set(extractedCategories)]
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

  // Map JSON data to the format expected by AgentCard
  const agentsCardData = agents.map(agent => {
    return {
      title: agent.title,
      description: agent.description,
      tags: [agent.category],
      icons: [slackIcon, notionIcon, githubIcon], // Default icons for all agents
    }
  })

  const filteredAgents = agentsCardData.filter(agent => {
    const matchesSearch = agent.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.includes('All') || 
                           agent.tags.some(tag => selectedCategories.includes(tag))
    return matchesSearch && matchesCategory
  })

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '60px',
          color: '#323E50',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Agent Library
        </h2>
        <div className="relative z-10 max-w-7xl mx-auto">
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

            {/* Right side - Search Bar and Agent Cards */}
            <div>
              {/* Search Bar */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="text"
                  placeholder="Looking for an agent?"
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
              
              {/* Agent Cards Grid - immediately under search bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '80px'
              }}>
                {filteredAgents.map((agent, index) => (
                  <AgentCard
                    key={index}
                    title={agent.title}
                    description={agent.description}
                    tags={agent.tags}
                    icons={agent.icons}
                    onConfigure={() => console.log(`Configuring agent: ${agent.title}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
