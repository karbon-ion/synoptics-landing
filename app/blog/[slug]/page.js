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
    
    console.log('Original HTML:', processedHtml);
    
    // Extract first heading and image
    let firstHeading = '';
    let firstImage = '';
    let remainingContent = processedHtml;
    
    // Extract first heading (h1)
    const headingMatch = processedHtml.match(/<h1[^>]*>(.*?)<\/h1>/is);
    console.log('Heading match:', headingMatch);
    if (headingMatch) {
      // Clean up any HTML tags from the heading
      firstHeading = headingMatch[1].replace(/<[^>]+>/g, '');
      // Decode HTML entities
      firstHeading = firstHeading.replace(/&amp;/g, '&')
                               .replace(/&lt;/g, '<')
                               .replace(/&gt;/g, '>')
                               .replace(/&quot;/g, '"')
                               .replace(/&#39;/g, "'");
      remainingContent = remainingContent.replace(headingMatch[0], '');
      console.log('Extracted heading:', firstHeading);
    }
    
    // Extract first image with data-src or src
    const imageRegex = /<img[^>]+(?:data-src|src)="([^"]+)"[^>]*>/is;
    const imageMatch = processedHtml.match(imageRegex);
    console.log('Image match:', imageMatch);
    if (imageMatch) {
      // Look for data-src first, then fallback to src
      const imgElement = imageMatch[0];
      const dataSrcMatch = imgElement.match(/data-src="([^"]+)"/i);
      const srcMatch = imgElement.match(/src="([^"]+)"/i);
      firstImage = dataSrcMatch ? dataSrcMatch[1] : (srcMatch ? srcMatch[1] : '');
      
      // Process the image URL if needed
      firstImage = processImageUrl(firstImage);
      
      remainingContent = remainingContent.replace(imageMatch[0], '');
      console.log('Extracted image:', firstImage);
    }

    // If no h1 found, try h2
    if (!firstHeading) {
      const h2Match = processedHtml.match(/<h2[^>]*>(.*?)<\/h2>/is);
      if (h2Match) {
        firstHeading = h2Match[1];
        remainingContent = remainingContent.replace(h2Match[0], '');
        console.log('Using h2 as heading:', firstHeading);
      }
    }

    // Remove any empty paragraphs that might be left after extraction
    remainingContent = remainingContent.replace(/<p>\s*<\/p>/g, '');
    
    // If still no heading found, use the title from metadata
    if (!firstHeading) {
      const metadataPath = path.join(METADATA_DIR, file.replace('.docx', '.json'));
      try {
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
        firstHeading = metadata.title;
        console.log('Using metadata title as heading:', firstHeading);
      } catch (error) {
        console.error('Error reading metadata for title fallback:', error);
      }
    }

    // If no image found, use the first image from metadata
    if (!firstImage) {
      const metadataPath = path.join(METADATA_DIR, file.replace('.docx', '.json'));
      try {
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
        firstImage = metadata.image;
        console.log('Using metadata image as fallback:', firstImage);
      } catch (error) {
        console.error('Error reading metadata for image fallback:', error);
      }
    }
    
    console.log('Final extracted data:', { firstHeading, firstImage });
    
    return {
      content: remainingContent.trim(),
      fileName: file,
      firstHeading,
      firstImage
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
    <div>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/blogs/background.png)' }}>
        <div className="max-w-7xl mx-auto px-4 pt-28">
          {/* Back to blogs link */}
          <div className="mb-8">
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

          {/* Blog header section */}
          <div className="relative overflow-hidden min-h-[400px]">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-2xl pt-8">
                <h1 className="text-[36px] font-bold mb-8 leading-[48px]" style={{ fontFamily: 'Syne' }}>
                  {contentData.firstHeading}
                </h1>
                <div className="flex flex-col gap-2">
                  <span className="text-[16px] leading-[100%] font-semibold" style={{ fontFamily: 'Syne' }}>Share with your community!</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#E7F3FF] flex items-center justify-center hover:bg-[#E7F3FF]/90 transition-colors">
                      <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#E8F4F9] flex items-center justify-center hover:bg-[#E8F4F9]/90 transition-colors">
                      <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center hover:bg-[#F7F7F7]/90 transition-colors">
                      <svg className="w-4.5 h-4.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 hidden md:block">
              <div className="relative" style={{ width: '535px', height: '301px' }}>
                <Image
                  src={contentData.firstImage || post.image}
                  alt="Blog header image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '20px' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Two-column layout for content and TOC */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            {/* Main content area */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="prose prose-lg max-w-none blog-content">
                <BlogContent content={contentData.content} />
              </div>
            </div>

            {/* Right sidebar with table of contents */}
            <div className="md:w-1/4 lg:w-1/5 hidden md:block">
              <div className="sticky top-28">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <TableOfContents content={contentData.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
