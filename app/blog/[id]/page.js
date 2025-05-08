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

    const buffer = await fs.readFile(filePath);

    const result = await mammoth.convertToHtml({
      buffer,
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        "p[style-name='Heading 3'] => h3:fresh",
        "p[style-name='Heading 4'] => h4:fresh",
        "p[style-name='Heading 5'] => h5:fresh",
        "p[style-name='Heading 6'] => h6:fresh",
        "r[style-name='Emphasis'] => em",
        "p[style-name='List Paragraph'] => li:fresh",
        "p[style-name='Bullet List'] => li:fresh",
        "p[style-name='Normal (Web)'] => p:fresh",
        "u => u",
        // Add alignment mapping
        "p[style-name='center'] => p.center:fresh",
        "p[style-name='Center'] => p.center:fresh",
      ],
      transformDocument: function(document) {
        return mammoth.transforms.paragraph(function(paragraph) {
          const styleName = paragraph.properties && paragraph.properties.styleName;
          const alignment = paragraph.properties && paragraph.properties.alignment;
          
          // Handle list paragraphs
          if (styleName && (styleName.indexOf('List') !== -1 || styleName.indexOf('Bullet') !== -1)) {
            return { ...paragraph, styleId: 'ListParagraph' };
          }
          
          // Handle paragraph alignment
          if (alignment) {
            let newParagraph = { ...paragraph };
            
            // Add alignment as a class
            if (!newParagraph.properties) newParagraph.properties = {};
            if (!newParagraph.properties.className) newParagraph.properties.className = [];
            
            if (alignment === 'center') {
              newParagraph.properties.className.push('center-aligned');
            } else if (alignment === 'right') {
              newParagraph.properties.className.push('right-aligned');
            } else if (alignment === 'justify') {
              newParagraph.properties.className.push('justify-aligned');
            }
            
            return newParagraph;
          }
          
          return paragraph;
        })(document);
      },
      ignoreEmptyParagraphs: true,
      preserveEmptyParagraphs: false,
    });
    
    // Process the HTML to fix common issues
    let processedHtml = result.value;
    
    // Add inline styles for alignment classes
    processedHtml = processedHtml.replace(/<([h1-6|p])([^>]*)class="([^"]*center-aligned[^"]*)"([^>]*)>/gi, '<$1$2class="$3"$4 style="text-align: center;">');
    processedHtml = processedHtml.replace(/<([h1-6|p])([^>]*)class="([^"]*right-aligned[^"]*)"([^>]*)>/gi, '<$1$2class="$3"$4 style="text-align: right;">');
    processedHtml = processedHtml.replace(/<([h1-6|p])([^>]*)class="([^"]*justify-aligned[^"]*)"([^>]*)>/gi, '<$1$2class="$3"$4 style="text-align: justify;">');
    
    // Also handle elements with the center class
    processedHtml = processedHtml.replace(/<([h1-6|p])([^>]*)class="([^"]*center[^"]*)"([^>]*)>/gi, '<$1$2class="$3"$4 style="text-align: center;">');
    
    
    // Fix lists
    processedHtml = processedHtml.replace(/<li>([\s\S]*?)(?=<\/li>)<\/li>(?![\s\S]*?<\/[ou]l>)/g, '<ul><li>$1</li></ul>');
    processedHtml = processedHtml.replace(/<\/ul>\s*<ul>/g, '');
    
    // Remove metadata-related content
    const metaPatterns = [
      /<[^>]*>\s*(?:<strong>)?\s*Meta\s*Title\s*(?::|<\/strong>\s*:|<\/strong>\s*:\s*)\s*([^<]+)<\/[^>]*>/gi,
      /<[^>]*>\s*Meta\s*Title\s*:<\/[^>]*>\s*([^<]+)/gi,
      /<[^>]*>\s*(?:<strong>)?\s*Meta\s*Description\s*(?::|<\/strong>\s*:|<\/strong>\s*:\s*)\s*([^<]+)<\/[^>]*>/gi,
      /<[^>]*>\s*Meta\s*Description\s*:<\/[^>]*>\s*([^<]+)/gi,
      /<[^>]*>[^<]*Meta\s*Title[^<]*<\/[^>]*>/gi,
      /<[^>]*>[^<]*Meta\s*Description[^<]*<\/[^>]*>/gi,
      /<p>\s*(?:<strong>)?\s*Automate\s*Repetitive\s*Tasks\s*with\s*AI[^<]*<\/p>/gi
    ];
    
    // Apply all patterns
    metaPatterns.forEach(pattern => {
      processedHtml = processedHtml.replace(pattern, '');
    });
    
    // Clean up empty paragraphs and extra breaks
    processedHtml = processedHtml.replace(/<p>\s*<\/p>/gi, '');
    processedHtml = processedHtml.replace(/(<br\s*\/?>\s*>){2,}/gi, '<br />');
    
    // Process SharePoint image links in the content
    processedHtml = processSharePointImages(processedHtml);
    
    return {
      content: processedHtml.trim(),
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
    const blog = await getBlogPost(resolvedParams.id);
    
    if (!blog) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found'
      };
    }
    
    // Create the canonical URL for this blog post
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synoptix.ai';
    const canonicalUrl = `${baseUrl}/blog/${resolvedParams.id}`;
    
    return {
      title: blog.title,
      description: blog.description,
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: canonicalUrl,
        siteName: 'Synoptix',
        locale: 'en_US',
        type: 'article',
        publishedTime: blog.date,
        authors: ['Synoptix'],
        images: [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title,
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: [blog.image],
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
  
  // Extract the ID from the slug (format: title-id)
  // The ID is the numeric part at the end of the slug
  const id = resolvedParams.id.match(/-(\d+)$/)?.[1] || resolvedParams.id;
  
  const metadata = await getBlogPost(id);
  const contentData = await getBlogContent(id);
  
  // If either is missing, show error
  if (!metadata || !contentData) {
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

      {/* Related blogs section */}
      {/* <div className="mt-20 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
         */}
        {/* Fetch and display related blog posts */}
        {/* <RelatedBlogs currentPostId={resolvedParams.id} /> */}
        
        {/* <div className="text-center mt-12">
          <Link
            href="/resources/blogs"
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Blogs
          </Link>
        </div> */}
      {/* </div> */}
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
              href={`/blog/${post.id}`}
              className="block"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {post.description}
            </p>
            <div className="mt-auto">
              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-sm text-blue-500 font-medium group-hover:text-blue-700 transition-colors duration-300"
              >
                Read More
                <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
