import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import mammoth from 'mammoth'

const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads')

async function getFirstHeading(docxPath: string): Promise<string> {
  try {
    const buffer = fs.readFileSync(docxPath)
    const result = await mammoth.convertToHtml({ buffer })
    const html = result.value

    // Extract the first heading (h1 or h2)
    const headingMatch = html.match(/<h[12][^>]*>([^<]+)<\/h[12]>/i)
    if (headingMatch) {
      return headingMatch[1].trim()
    }

    // If no heading found, return empty string
    return ''
  } catch (error) {
    console.error(`Error extracting heading from ${docxPath}:`, error)
    return ''
  }
}

function generateBlogSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // Replace all non-alphanumeric with hyphens
    .replace(/^-|-$/g, '')         // Remove leading/trailing hyphens
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://synoptix.ai'
  const appDirectory = path.join(process.cwd(), 'app')
  
  // Get all static page routes dynamically
  const staticRoutes = ['', ...getPageRoutes(appDirectory)]

  // Get blog routes from DOCX files
  const files = fs.readdirSync(UPLOADS_DIR)
  const docxFiles = files.filter(file => file.endsWith('.docx'))
  
  // Convert to async operations
  const blogRoutePromises = docxFiles.map(async file => {
    try {
      const docxPath = path.join(UPLOADS_DIR, file)
      const heading = await getFirstHeading(docxPath)
      
      if (!heading) {
        console.error(`No heading found in ${file}`)
        return ''
      }
      
      // Generate the slug using the same logic as the blog pages
      const slug = generateBlogSlug(heading)
      return `/blog/${slug}`
    } catch (error) {
      console.error(`Error processing file ${file}:`, error)
      return ''
    }
  })
  
  // Wait for all blog routes to be processed
  const blogRoutes = (await Promise.all(blogRoutePromises))
    .filter(route => route !== '')

  // Combine all routes
  const routes = [...staticRoutes, ...blogRoutes]
  
  // Define priority levels based on route depth
  const getPriority = (route: string): number => {
    if (route === '') return 1.0 // Homepage has highest priority
    const segments = route.split('/').filter(Boolean).length
    return Math.max(0.5, 0.9 - (segments * 0.1)) // Deeper routes get lower priority
  }
  
  // Map routes to sitemap entries
  const sitemapEntries = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: getPriority(route),
  }))
  
  return sitemapEntries
}
