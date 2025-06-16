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

  const categories = [
    'All',
    'Compliance',
    'Developers',
    'Finance',
    'HR',
    'Image Generator',
    'IT Operations',
    'Marketing',
    'Product Development',
    'Productivity',
    'Project Management',
    'Recruitment',
    'SaaS',
    'Sales',
    'Security',
    'SEO'
  ]
  // Base set of integrations that we'll repeat
  const integrationsList = [
    { name: 'Salesforce', src: '/integrations/all-integrations/icons/salesforce.png', category: 'Sales' },
    { name: 'HubSpot', src: '/integrations/all-integrations/icons/blue.png', category: 'Marketing' },
    { name: 'QuickBooks', src: '/integrations/all-integrations/icons/github.png', category: 'Finance' },
    { name: 'Workday', src: '/integrations/all-integrations/icons/gmail.png', category: 'HR' },
    { name: 'ServiceNow', src: '/integrations/all-integrations/icons/notion.png', category: 'IT Operations' },
    { name: 'Jira', src: '/integrations/all-integrations/icons/slack.png', category: 'Product Development' },
    { name: 'CrowdStrike', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Security' },
    { name: 'OneTrust', src: '/integrations/all-integrations/icons/one-drive.png', category: 'Compliance' },
    { name: 'DALL-E', src: '/integrations/all-integrations/icons/teams.png', category: 'Image Generator' },
    { name: 'Greenhouse', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Recruitment' },
    { name: 'GitHub', src: '/integrations/all-integrations/icons/github.png', category: 'Developers' },
    { name: 'Notion', src: '/integrations/all-integrations/icons/notion.png', category: 'Productivity' },
    { name: 'Asana', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Project Management' },
    { name: 'Zoom', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'SaaS' },
    { name: 'Semrush', src: '/integrations/all-integrations/icons/blue.png', category: 'SEO' },
    { name: 'Pipedrive', src: '/integrations/all-integrations/icons/teams.png', category: 'Sales' },
    { name: 'Mailchimp', src: '/integrations/all-integrations/icons/gmail.png', category: 'Marketing' },
    { name: 'Xero', src: '/integrations/all-integrations/icons/blue.png', category: 'Finance' },
    { name: 'BambooHR', src: '/integrations/all-integrations/icons/one-drive.png', category: 'HR' },
    { name: 'Datadog', src: '/integrations/all-integrations/icons/github.png', category: 'IT Operations' },
    { name: 'Confluence', src: '/integrations/all-integrations/icons/blue.png', category: 'Product Development' },
    { name: 'Okta', src: '/integrations/all-integrations/icons/slack.png', category: 'Security' },
    { name: 'Qualys', src: '/integrations/all-integrations/icons/teams.png', category: 'Compliance' },
    { name: 'Midjourney', src: '/integrations/all-integrations/icons/notion.png', category: 'Image Generator' },
    { name: 'Lever', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Recruitment' },
    { name: 'GitLab', src: '/integrations/all-integrations/icons/github.png', category: 'Developers' },
    { name: 'Slack', src: '/integrations/all-integrations/icons/slack.png', category: 'Productivity' },
    { name: 'Monday.com', src: '/integrations/all-integrations/icons/notion.png', category: 'Project Management' },
    { name: 'Microsoft Teams', src: '/integrations/all-integrations/icons/teams.png', category: 'SaaS' },
    { name: 'Ahrefs', src: '/integrations/all-integrations/icons/blue.png', category: 'SEO' },
    { name: 'Close', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Sales' },
    { name: 'Marketo', src: '/integrations/all-integrations/icons/gmail.png', category: 'Marketing' },
    { name: 'NetSuite', src: '/integrations/all-integrations/icons/notion.png', category: 'Finance' },
    { name: 'Lattice', src: '/integrations/all-integrations/icons/one-drive.png', category: 'HR' },
    { name: 'PagerDuty', src: '/integrations/all-integrations/icons/blue.png', category: 'IT Operations' },
    { name: 'Linear', src: '/integrations/all-integrations/icons/blue.png', category: 'Product Development' },
    { name: 'Auth0', src: '/integrations/all-integrations/icons/slack.png', category: 'Security' },
    { name: 'Vanta', src: '/integrations/all-integrations/icons/teams.png', category: 'Compliance' },
    { name: 'Stable Diffusion', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Image Generator' },
    { name: 'Workday Recruiting', src: '/integrations/all-integrations/icons/notion.png', category: 'Recruitment' },
    { name: 'Bitbucket', src: '/integrations/all-integrations/icons/blue.png', category: 'Developers' },
    { name: 'Trello', src: '/integrations/all-integrations/icons/teams.png', category: 'Productivity' },
    { name: 'ClickUp', src: '/integrations/all-integrations/icons/slack.png', category: 'Project Management' },
    { name: 'Google Workspace', src: '/integrations/all-integrations/icons/gmail.png', category: 'SaaS' },
    { name: 'Moz', src: '/integrations/all-integrations/icons/blue.png', category: 'SEO' },
    { name: 'Outreach', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Sales' },
    { name: 'Pardot', src: '/integrations/all-integrations/icons/github.png', category: 'Marketing' },
    { name: 'Sage', src: '/integrations/all-integrations/icons/notion.png', category: 'Finance' },
    { name: 'Culture Amp', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'HR' },
    { name: 'Splunk', src: '/integrations/all-integrations/icons/blue.png', category: 'IT Operations' },
    { name: 'Figma', src: '/integrations/all-integrations/icons/teams.png', category: 'Product Development' },
    { name: 'Cloudflare', src: '/integrations/all-integrations/icons/blue.png', category: 'Security' },
    { name: 'Drata', src: '/integrations/all-integrations/icons/slack.png', category: 'Compliance' },
    { name: 'Adobe Firefly', src: '/integrations/all-integrations/icons/github.png', category: 'Image Generator' },
    { name: 'iCIMS', src: '/integrations/all-integrations/icons/notion.png', category: 'Recruitment' },
    { name: 'Azure DevOps', src: '/integrations/all-integrations/icons/salesforce.png', category: 'Developers' },
    { name: 'Evernote', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Productivity' },
    { name: 'Smartsheet', src: '/integrations/all-integrations/icons/gmail.png', category: 'Project Management' },
    { name: 'Dropbox', src: '/integrations/all-integrations/icons/blue.png', category: 'SaaS' },
    { name: 'Majestic', src: '/integrations/all-integrations/icons/teams.png', category: 'SEO' },
    { name: 'ZoomInfo', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Sales' },
    { name: 'Constant Contact', src: '/integrations/all-integrations/icons/blue.png', category: 'Marketing' },
    { name: 'Bill.com', src: '/integrations/all-integrations/icons/github.png', category: 'Finance' },
    { name: 'Gusto', src: '/integrations/all-integrations/icons/gmail.png', category: 'HR' },
    { name: 'New Relic', src: '/integrations/all-integrations/icons/notion.png', category: 'IT Operations' },
    { name: 'InVision', src: '/integrations/all-integrations/icons/sharepoint.png', category: 'Product Development' },
    { name: 'SentinelOne', src: '/integrations/all-integrations/icons/slack.png', category: 'Security' },
    { name: 'Secureframe', src: '/integrations/all-integrations/icons/teams.png', category: 'Compliance' },
    { name: 'Canva', src: '/integrations/all-integrations/icons/zen-desk.png', category: 'Image Generator' }
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
                  gap: 'px',
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
