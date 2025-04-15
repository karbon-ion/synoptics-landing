import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://synoptix.ai'
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/ai-consulting',
    '/enterprise-ai-agent',
    '/enterprise-rag',
    '/fine-tuning',
    '/privacy-policy',
    '/rag-application',
    '/services',
    '/syno-guard',
    '/terms',
    '/workflow',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Add blog routes with slightly lower priority
  const blogRoutes = [
    '/blogs',
    // Add specific blog posts here if needed
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Add tutorial routes
  const tutorialRoutes = [
    '/tutorials',
    // Add specific tutorial pages here if needed
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes, ...tutorialRoutes]
}
