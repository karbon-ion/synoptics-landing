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
    <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '1.3',
          textAlign: 'left',
          marginBottom: '24px'
        }} className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10">
          All integrations
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-6 md:gap-8 lg:gap-10">
          {/* Left sidebar */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 md:pl-8 flex flex-col gap-3 sm:gap-4 mb-6 md:mb-0">
            <h3 className="font-syne text-lg sm:text-xl md:text-2xl font-medium text-[#323E50] mb-2 sm:mb-4">
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
                <span className="font-poppins text-xs sm:text-sm text-[#666] cursor-pointer">
                {category}
              </span>
              </div>
            ))}
          </div>

          {/* Right content */}
          <div>
            <div className="mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-[90%] lg:w-[980px] h-10 sm:h-12 md:h-[55px] px-4 sm:px-6 border border-[#E4E9F1] rounded-lg sm:rounded-xl md:rounded-2xl font-poppins text-sm sm:text-base outline-none"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-[900px]">
          {allIntegrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 bg-white rounded-lg shadow-sm h-[90px] sm:h-[100px] md:h-[120px] cursor-pointer"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={32}
                height={32}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <p className="font-inter text-xs sm:text-sm md:text-base text-center mt-2 sm:mt-3 text-[#323E50] line-clamp-2">
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
