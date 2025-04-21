import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import mammoth from 'mammoth';
import { processSharePointImages, processImageUrl } from '../../utils/azureStorage';
import BlogContent from './BlogContent';
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
      ],
      transformDocument: function(document) {
        return mammoth.transforms.paragraph(function(paragraph) {
          const styleName = paragraph.properties && paragraph.properties.styleName;
          if (styleName && (styleName.indexOf('List') !== -1 || styleName.indexOf('Bullet') !== -1)) {
            return { ...paragraph, styleId: 'ListParagraph' };
          }
          return paragraph;
        })(document);
      },
      ignoreEmptyParagraphs: true,
      preserveEmptyParagraphs: false,
    });
    
    // Process the HTML to fix common issues
    let processedHtml = result.value;
    
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
    
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [blog.image]
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
  const metadata = await getBlogPost(resolvedParams.id);
  const contentData = await getBlogContent(resolvedParams.id);
  
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
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back to blogs link */}
      <div className="mb-12">
        <Link 
          href="/resources/blogs"
          className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Featured image */}
      <div className="relative h-96 w-full mb-12 rounded-2xl overflow-hidden">
        <Image
          src={metadata.image}
          alt={metadata.title}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
          {metadata.category}
        </div>
      </div>

      {/* Blog header - only showing date, not title/description from metadata */}
      <div className="mb-12">
        <div className="text-blue-400 text-sm mb-2">{metadata.date}</div>
      </div>

      {/* Blog content */}
      <div className="prose prose-lg max-w-none blog-content">
        <BlogContent content={contentData.content} />
      </div>

      {/* Related blogs section */}
      <div className="mt-20 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
        <div className="text-center">
          <Link
            href="/resources/blogs"
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
