'use client'

import Image from 'next/image'
import { useState } from 'react'

const AllIntegrations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All'])
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

  // Base set of integrations that we'll repeat
  const integrationsList = [
    { name: 'Salesforce', src: '/integrations/all-integrations/icons/salesforce.png', category: 'Sales' },
    { name: 'GitHub', src: '/integrations/all-integrations/icons/github.png', category: 'Developers' },
    { name: 'Gmail', src: '/integrations/all-integrations/icons/gmail.png', category: 'SaaS' },
    { name: 'Notion', src: '/integrations/all-integrations/icons/notion.png', category: 'Productivity' },
    { name: 'OneDrive', src: '/integrations/all-integrations/icons/onedrive.png', category: 'SaaS' },
    { name: 'SharePoint', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Productivity' },
    { name: 'Slack', src: '/integrations/all-integrations/icons/slack.png', category: 'Productivity' },
    { name: 'Microsoft Teams', src: '/integrations/all-integrations/icons/teams.png', category: 'SaaS' },
    { name: 'Zendesk', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'IT Operations' },
    { name: 'Asana', src: '/integrations/all-integrations/icons/asana.png', category: 'Project Management' },
    { name: 'AWS', src: '/integrations/all-integrations/icons/aws.png', category: 'Developers' },
    { name: 'Azure', src: '/integrations/all-integrations/icons/azure.png', category: 'Developers' },
    { name: 'Azure Active Directory', src: '/integrations/all-integrations/icons/azure-active-directory.png', category: 'Security' },
    { name: 'Azure DevOps', src: '/integrations/all-integrations/icons/azure-devops.png', category: 'Developers' },
    { name: 'BambooHR', src: '/integrations/all-integrations/icons/bamboo-hr.png', category: 'HR' },
    { name: 'Box', src: '/integrations/all-integrations/icons/box.png', category: 'SaaS' },
    { name: 'ClickUp', src: '/integrations/all-integrations/icons/clickup.png', category: 'Project Management' },
    { name: 'Discord', src: '/integrations/all-integrations/icons/discord.png', category: 'Productivity' },
    { name: 'Dropbox', src: '/integrations/all-integrations/icons/dropbox.png', category: 'SaaS' },
    { name: 'GitLab', src: '/integrations/all-integrations/icons/gitlab.png', category: 'Developers' },
    { name: 'Google Cloud Platform', src: '/integrations/all-integrations/icons/google-cloud-platform.png', category: 'Developers' },
    { name: 'Google Drive', src: '/integrations/all-integrations/icons/google-drive.png', category: 'SaaS' },
    { name: 'Outlook', src: '/integrations/all-integrations/icons/outlook.png', category: 'Productivity' },
    { name: 'Trello', src: '/integrations/all-integrations/icons/trello.png', category: 'Project Management' },
    { name: 'HubSpot', src: '/integrations/all-integrations/icons/blue.png', category: 'Marketing' }
  ]

  // Extract unique categories from integrationsList and add 'All' at the beginning
  const categories = [
    'All',
    ...Array.from(new Set(integrationsList.map(integration => integration.category))).sort()
  ]

  const allIntegrations = integrationsList
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategories.includes('All') || selectedCategories.includes(integration.category)
      return matchesSearch && matchesCategory
    })

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '72px',
          textAlign: 'left',
          marginBottom: '40px'
        }}>
          All integrations
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Left sidebar */}
          <div className="border border-gray-200 rounded-lg pt-2 pb-2 pl-8" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
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
            {categories.map((category, index) => (
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
                  padding: ' 0',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  verticalAlign: 'middle'
                }}
              >
                {category}
              </span>
              </div>
            ))}
          </div>

          {/* Right content */}
          <div>
            <div style={{
              marginBottom: '32px'
            }}>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '980px',
                  height: '55px',
                  padding: '0 24px',
                  border: '1px solid #E4E9F1',
                  borderRadius: '20px',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              maxWidth: '900px'
            }}>
          {allIntegrations.map((integration, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                background: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                height: '120px'
              }}
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <p style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '26px',
                textAlign: 'center',
                verticalAlign: 'middle',
                marginTop: '12px',
                color: '#323E50'
              }}>
                {integration.name}
              </p>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllIntegrations
