import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import mammoth from 'mammoth';
import { processSharePointImages, processImageUrl } from '../../utils/azureStorage';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import { Metadata } from 'next';

// Constants for file paths
const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');
const METADATA_DIR = path.join(process.cwd(), 'app/resources/blogs/metadata');
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000';

/**
 * Get blog post by slug
 */
async function getBlogPostBySlug(slug) {
  try {
    // Get list of all blog posts
    const allPosts = await getAllBlogPosts();
    
    if (!allPosts || allPosts.length === 0) {
      console.log('No blog posts found');
      return null;
    }
    
    // Find the post with a matching slug
    const normalizedSlug = slug.toLowerCase().trim();
    
    // Create an array of all posts with their slugs for debugging
    const postsWithSlugs = allPosts.map(post => {
      // Normalize the title to create a slug
      const postSlug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return { ...post, slug: postSlug };
    });
    
    console.log('Searching for slug:', normalizedSlug);
    console.log('Available posts with slugs:', postsWithSlugs.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
    
    // 1. Try exact match first
    const exactMatch = postsWithSlugs.find(p => p.slug === normalizedSlug);
    if (exactMatch) {
      console.log('Found exact matching post:', exactMatch);
      return exactMatch;
    }
    
    // 2. Try matching by keywords (more flexible approach)
    // Extract keywords from the slug (words that are likely meaningful)
    const slugKeywords = normalizedSlug.split('-').filter(word => 
      word.length > 3 && !['what', 'will', 'with', 'this', 'that', 'your', 'from', 'have', 'been'].includes(word)
    );
    
    console.log('Looking for keywords:', slugKeywords);
    
    // Find posts that match most keywords
    let bestMatch = null;
    let highestMatchScore = 0;
    
    postsWithSlugs.forEach(post => {
      // Count how many keywords match
      let matchScore = 0;
      slugKeywords.forEach(keyword => {
        if (post.slug.includes(keyword)) {
          matchScore++;
        }
      });
      
      // If this post matches more keywords than our current best match, update best match
      if (matchScore > highestMatchScore) {
        highestMatchScore = matchScore;
        bestMatch = post;
      }
    });
    
    // If we found a post that matches at least 2 keywords, use it
    if (bestMatch && highestMatchScore >= 2) {
      console.log(`Found best match with ${highestMatchScore} keyword matches:`, bestMatch);
      return bestMatch;
    }
    
    // 3. Try matching by similarity (if no good keyword match)
    const closeMatch = postsWithSlugs.find(p => {
      // Check if either slug contains a significant portion of the other
      return normalizedSlug.includes(p.slug.substring(0, Math.floor(p.slug.length * 0.6))) || 
             p.slug.includes(normalizedSlug.substring(0, Math.floor(normalizedSlug.length * 0.6)));
    });
    
    if (closeMatch) {
      console.log('Found close match by similarity:', closeMatch);
      return closeMatch;
    }
    
    console.log('No matching post found after all attempts');
    return null;
  } catch (error) {
    console.error('Error finding blog post by slug:', error);
    return null;
  }
}

/**
 * Get blog post metadata from JSON file or generate default metadata
 */
async function getBlogPost(id) {
  try {
    // Get list of blog files
    const files = await fs.readdir(UPLOADS_DIR);
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    
    // Get the file at the specified index
    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= docxFiles.length) {
      return null;
    }
    
    const file = docxFiles[index];
    const metadataFileName = file.replace('.docx', '.json');
    const metadataFilePath = path.join(METADATA_DIR, metadataFileName);
    
    // Try to read metadata file
    let metadata = null;
    try {
      const metadataContent = await fs.readFile(metadataFilePath, 'utf8');
      metadata = JSON.parse(metadataContent);
    } catch (error) {
      // We'll create default metadata if none exists
      console.log('No metadata file found, will create default:', error.message);
      
      // Get content to extract title and description
      const contentData = await getBlogContent(id);
      if (!contentData) {
        return null;
      }
      
      const processedHtml = contentData.content;
      
      // Extract title from first h1
      let metaTitle = '';
      const titleMatch = processedHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
      if (titleMatch) {
        metaTitle = titleMatch[1].trim();
      } else {
        // Fallback to filename
        metaTitle = file.replace('.docx', '').split(' - ')[1] || file.replace('.docx', '');
      }
      
      // Extract description from first paragraph
      let metaDescription = '';
      const descMatch = processedHtml.match(/<p[^>]*>(.*?)<\/p>/i);
      if (descMatch) {
        metaDescription = descMatch[1].trim();
        // Remove any italic text which might be metadata
        metaDescription = metaDescription.replace(/<em>.*?<\/em>/gi, '');
        if (metaDescription.length > 150) {
          metaDescription = metaDescription.substring(0, 150) + '...';
        }
      } else {
        metaDescription = `Read our blog post about ${metaTitle}`;
      }
      
      // Create a new metadata file (for SEO only)
      metadata = {
        title: metaTitle,
        description: metaDescription,
        image: DEFAULT_IMAGE,
        category: 'Technology',
        date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
      };
      
      // Write the metadata file
      try {
        await fs.writeFile(metadataFilePath, JSON.stringify(metadata, null, 2));
        console.log('Created new metadata file:', metadataFilePath);
      } catch (error) {
        console.error('Error creating metadata file:', error);
      }
    }
    
    // Format date for display
    let displayDate = metadata.date;
    try {
      // Try to format the date if it's a valid date string
      displayDate = new Date(metadata.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.log('Error formatting date, using as-is:', error.message);
    }
    
    // Return the metadata with processed image URL
    return {
      id,
      title: metadata.title,
      description: metadata.description,
      image: processImageUrl(metadata.image),
      date: displayDate,
      category: metadata.category || 'Technology',
      fileName: file
    };
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

/**
 * Get all blog posts for related content
 */
async function getAllBlogPosts() {
  try {
    const files = await fs.readdir(UPLOADS_DIR);
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    
    const posts = [];
    
    for (let i = 0; i < docxFiles.length; i++) {
      const file = docxFiles[i];
      const metadataFileName = file.replace('.docx', '.json');
      const metadataFilePath = path.join(METADATA_DIR, metadataFileName);
      
      try {
        // Try to read metadata file
        let metadata = null;
        try {
          const metadataContent = await fs.readFile(metadataFilePath, 'utf8');
          metadata = JSON.parse(metadataContent);
        } catch (error) {
          // If no metadata file, create basic metadata
          metadata = {
            title: file.replace('.docx', '').split(' - ')[1] || file.replace('.docx', ''),
            description: 'Read our latest blog post',
            image: DEFAULT_IMAGE,
            category: 'Technology',
            date: new Date().toISOString().split('T')[0]
          };
        }
        
        // Format date for display
        let displayDate = metadata.date;
        try {
          displayDate = new Date(metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } catch (error) {
          console.log('Error formatting date, using as-is:', error.message);
        }
        
        posts.push({
          id: i.toString(),
          title: metadata.title,
          description: metadata.description,
          image: processImageUrl(metadata.image),
          date: displayDate,
          category: metadata.category || 'Technology',
          fileName: file
        });
      } catch (error) {
        console.error(`Error processing blog post ${file}:`, error);
      }
    }
    
    return posts;
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

/**
 * Get blog content from DOCX file
 */
async function getBlogContent(id) {
  try {
    const files = await fs.readdir(UPLOADS_DIR);
    const docxFiles = files.filter(file => file.endsWith('.docx'));

    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= docxFiles.length) {
      return null;
    }

    const file = docxFiles[index];
    const filePath = path.join(UPLOADS_DIR, file);
    
    // Read the file
    const buffer = await fs.readFile(filePath);
    
    // Convert DOCX to HTML
    const result = await mammoth.convertToHtml({ buffer });
    const html = result.value;
    
    // Process SharePoint images if any
    const processedHtml = await processSharePointImages(html);
    
    return {
      content: processedHtml,
      fileName: file
    };
  } catch (error) {
    console.error('Error getting blog content:', error);
    return null;
  }
}

/**
 * Generate metadata for the page (SEO)
 */
export async function generateMetadata({ params }) {
  try {
    // Ensure params is resolved before accessing properties
    const resolvedParams = await params;
    const post = await getBlogPostBySlug(resolvedParams.slug);
    
    if (!post) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found'
      };
    }
    
    // Create the canonical URL for this blog post
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synoptix.ai';
    const canonicalUrl = `${baseUrl}/blog/${resolvedParams.slug}`;
    
    return {
      title: post.title,
      description: post.description,
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: canonicalUrl,
        siteName: 'Synoptix',
        locale: 'en_US',
        type: 'article',
        publishedTime: post.date,
        authors: ['Synoptix'],
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [post.image],
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read our latest blog post'
    };
  }
}

/**
 * Main blog post page component
 */
export default async function BlogPost({ params }) {
  // Get metadata and content separately
  // Ensure params is resolved before accessing properties
  const resolvedParams = await params;
  console.log('Slug param:', resolvedParams.slug);
  
  // Find the blog post by slug
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/resources/blogs"
          className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 mt-10"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }
  
  // Get the content using the post ID
  const contentData = await getBlogContent(post.id);
  
  // If content not found, show error
  if (!contentData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Content Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the content for this blog post couldn't be loaded.
        </p>
        <Link 
          href="/resources/blogs"
          className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 mt-10"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-28">
      {/* Back to blogs link */}
      <div className="mb-8 mt-4">
        <Link 
          href="/resources/blogs"
          className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </Link>
      </div>

      {/* Two-column layout for TOC and content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left sidebar with table of contents */}
        <div className="md:w-1/4 lg:w-1/5 hidden md:block">
          <div className="sticky top-28">
            <TableOfContents content={contentData.content} />
          </div>
        </div>

        {/* Main content area */}
        <div className="md:w-3/4 lg:w-4/5">
          <div className="prose prose-lg max-w-none blog-content bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <BlogContent content={contentData.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Related blogs component
 */
async function RelatedBlogs({ currentPostId }) {
  // Get all blog posts
  const allPosts = await getAllBlogPosts();
  
  // Filter out the current post and limit to 3 related posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);
  
  // If no related posts, don't show anything
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {relatedPosts.map((post) => (
        <div 
          key={post.id}
          className="group bg-white rounded-xl border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
        >
          <div className="relative h-40 w-full overflow-hidden">
            <div className="absolute top-2 right-2 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-full">
              {post.category}
            </div>
            <Image
              src={post.image}
              alt={post.title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <div className="text-blue-400 text-xs mb-1">{post.date}</div>
            <Link 
              href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="block"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {post.description}
            </p>
            <div className="mt-auto">
              <Link 
                href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
