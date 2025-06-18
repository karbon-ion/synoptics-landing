import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

function formatSlug(filename: string): string {
  return filename
    .replace('.json', '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Function to recursively get all page routes from the app directory
function getPageRoutes(dir: string, basePath: string = '', routes: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(basePath, entry.name)
    
    // Skip API routes, components, utils, and other non-page directories
    if (entry.isDirectory() && 
        !['api', 'components', 'utils', 'sections'].includes(entry.name) && 
        !entry.name.startsWith('_') && 
        !entry.name.startsWith('.')) {
      // Check if this directory has a page.tsx or page.js file
      const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) || 
                      fs.existsSync(path.join(fullPath, 'page.js'))
      
      if (hasPage) {
        routes.push('/' + relativePath.replace(/\\/g, '/')) // Convert Windows backslashes to forward slashes
      }
      
      // Recursively scan subdirectories
      getPageRoutes(fullPath, relativePath, routes)
    }
  }
  
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://synoptix.ai'
  const appDirectory = path.join(process.cwd(), 'app')
  
  // Get all page routes dynamically
  const allRoutes = ['', ...getPageRoutes(appDirectory)]
  
  // Get blog routes from metadata files
  const metadataDir = path.join(process.cwd(), 'app/resources/blogs/metadata')
  const blogFiles = fs.readdirSync(metadataDir)
  const blogRoutes = blogFiles.map(file => {
    try {
      const metadataContent = fs.readFileSync(path.join(metadataDir, file), 'utf8')
      const metadata = JSON.parse(metadataContent)
      const slug = metadata.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      return `/blog/${slug}`
    } catch (error) {
      console.error(`Error processing blog metadata ${file}:`, error)
      return ''
    }
  }).filter(route => route !== '')
  
  // Combine all routes
  const combinedRoutes = [...allRoutes, ...blogRoutes]
  
  // Define priority levels based on route depth
  const getPriority = (route: string): number => {
    if (route === '') return 1.0 // Homepage has highest priority
    const segments = route.split('/').filter(Boolean).length
    return Math.max(0.5, 0.9 - (segments * 0.1)) // Deeper routes get lower priority
  }
  
  // Map routes to sitemap entries
  const sitemapEntries = combinedRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: getPriority(route),
  }))
  
  return sitemapEntries
}
