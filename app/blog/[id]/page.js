import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import mammoth from 'mammoth';
import BlogContent from './BlogContent';

// Default images to use when no specific image is available
const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
  'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
  'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1000'
];

// Fetch blog data on the server
async function getBlogPost(id) {
  console.log("Getting blog post with ID:", id);
  const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');
  
  try {
    // Check if uploads directory exists
    try {
      await fs.access(UPLOADS_DIR);
    } catch (error) {
      console.error('Uploads directory does not exist:', UPLOADS_DIR);
      return null;
    }

    // List files in directory
    const files = await fs.readdir(UPLOADS_DIR);
    console.log("Files in upload directory:", files);
    
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    console.log("DOCX files:", docxFiles);
    
    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= docxFiles.length) {
      console.error('Invalid blog ID or no file at that index');
      return null;
    }
    
    const file = docxFiles[index];
    const filePath = path.join(UPLOADS_DIR, file);
    console.log("Reading file:", filePath);
    
    // Read the file
    const buffer = await fs.readFile(filePath);
    
    // Convert docx to HTML with enhanced options to better preserve formatting
    const result = await mammoth.convertToHtml({ 
      buffer,
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        "p[style-name='Heading 3'] => h3:fresh",
        "p[style-name='Heading 4'] => h4:fresh",
        "p[style-name='Heading 5'] => h5:fresh",
        "p[style-name='Heading 6'] => h6:fresh",
        "r[style-name='Strong'] => strong",
        "r[style-name='Emphasis'] => em",
        "p[style-name='List Paragraph'] => li:fresh",
        "p[style-name='Bullet List'] => li:fresh",
        "p[style-name='Normal (Web)'] => p:fresh",
        "u => u",
      ],
      transformDocument: function(document) {
        // This helps with proper list nesting
        return mammoth.transforms.paragraph(function(paragraph) {
          const styleName = paragraph.properties && paragraph.properties.styleName;
          if (styleName && (styleName.indexOf('List') !== -1 || styleName.indexOf('Bullet') !== -1)) {
            // Check if it's a list item
            return { ...paragraph, styleId: 'ListParagraph' };
          }
          return paragraph;
        })(document);
      },
      ignoreEmptyParagraphs: true,
      preserveEmptyParagraphs: false,
    });
    
    // We'll add the styles in the component itself, not in the content
    
    // Process the HTML to fix common issues
    let processedHtml = result.value;
    
    // Fix lists - wrap adjacent li elements in ul/ol tags if they're not already
    processedHtml = processedHtml.replace(/<li>([\s\S]*?)(?=<\/li>)<\/li>(?![\s\S]*?<\/[ou]l>)/g, '<ul><li>$1</li></ul>');
    
    // Fix nested lists
    processedHtml = processedHtml.replace(/<\/ul>\s*<ul>/g, '');
    
    const content = processedHtml;
    
    // Extract title from filename
    const fileName = file.replace('.docx', '');
    const title = fileName.split(' - ')[1] || fileName;
    
    // Generate a simple description from the first 150 characters
    const description = content.substring(0, 150) + '...';
    
    // Format date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Select a random image
    const image = DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
    
    return {
      id,
      title,
      description,
      image,
      date,
      category: 'Technology',
      content,
      fileName: file
    };
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

// Main component for the blog post page
export default async function BlogPost({ params }) {
  console.log("BlogPost component rendering with params:", params);
  const blog = await getBlogPost(params.id);
  
  if (!blog) {
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
      {/* No styles here - moved to client component */}
      
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
          src={blog.image}
          alt={blog.title}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
          {blog.category}
        </div>
      </div>

      {/* Blog header */}
      <div className="mb-12">
        <div className="text-blue-400 text-sm mb-2">{blog.date}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
        <p className="text-xl text-gray-600">{blog.description}</p>
      </div>

      {/* Blog content */}
      <div className="prose prose-lg max-w-none blog-content">
        {/* Use client component for the blog content */}
        <BlogContent content={blog.content} />
      </div>

      {/* Related blogs section placeholder */}
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
