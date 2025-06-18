import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import mammoth from 'mammoth'

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

async function getBlogSlugs(): Promise<string[]> {
  const uploadsDir = path.join(process.cwd(), 'app/resources/blogs/uploads')
  const files = fs.readdirSync(uploadsDir)
  const docxFiles = files.filter(file => file.endsWith('.docx'))
  
  const slugs: string[] = []
  
  for (const file of docxFiles) {
    const filePath = path.join(uploadsDir, file)
    const buffer = fs.readFileSync(filePath)
    
    try {
      // Convert DOCX to HTML
      const result = await mammoth.convertToHtml({ buffer })
      const html = result.value
      
      // Extract first heading (h1)
      const headingMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i)
      if (headingMatch) {
        // Clean up any HTML tags from the heading
        let heading = headingMatch[1].replace(/<[^>]+>/g, '')
        // Decode HTML entities
        heading = heading.replace(/&amp;/g, '&')
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'")
        
        // Convert heading to slug
        const slug = heading.toLowerCase()
          .replace(/[^a-z0-9\s-]+/g, '')  // Remove all non-alphanumeric except spaces and hyphens
          .replace(/\s+/g, '-')           // Replace spaces with hyphens
          .replace(/--+/g, '-')           // Replace multiple hyphens with single
          .replace(/^-|-$/g, '')          // Remove leading/trailing hyphens
        
        slugs.push(slug)
      } else {
        // If no h1, try h2
        const h2Match = html.match(/<h2[^>]*>(.*?)<\/h2>/i)
        if (h2Match) {
          let heading = h2Match[1].replace(/<[^>]+>/g, '')
          heading = heading.replace(/&amp;/g, '&')
                          .replace(/&lt;/g, '<')
                          .replace(/&gt;/g, '>')
                          .replace(/&quot;/g, '"')
                          .replace(/&#39;/g, "'")
          
          const slug = heading.toLowerCase()
            .replace(/[^a-z0-9\s-]+/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .replace(/^-|-$/g, '')
          
          slugs.push(slug)
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }
  
  return slugs
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://synoptix.ai'
  const appDirectory = path.join(process.cwd(), 'app')
  
  // Get all page routes dynamically
  const allRoutes = ['', ...getPageRoutes(appDirectory)]
  
  // Get blog slugs and create blog routes
  const blogSlugs = await getBlogSlugs()
  const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`)
  
  // Combine all routes
  const combinedRoutes = [...allRoutes, ...blogRoutes]
  
  // Define priority levels based on route depth
  const getPriority = (route: string): number => {
    if (route === '') return 1.0 // Homepage has highest priority
    if (route.startsWith('/blog/')) return 0.8 // Blog posts get high priority
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
