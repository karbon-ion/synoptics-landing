import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';

const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string;
  fileName: string;
}

// Default images to use when no specific image is available
const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
  'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
  'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1000'
];

async function getBlogPosts(): Promise<BlogPost[]> {
  // Check if uploads directory exists
  if (!fs.existsSync(UPLOADS_DIR)) {
    console.error('Uploads directory does not exist:', UPLOADS_DIR);
    return [];
  }

  const files = fs.readdirSync(UPLOADS_DIR);
  const docxFiles = files.filter(file => file.endsWith('.docx'));
  
  const blogPosts: BlogPost[] = [];
  
  for (let i = 0; i < docxFiles.length; i++) {
    const file = docxFiles[i];
    const filePath = path.join(UPLOADS_DIR, file);
    
    try {
      // Read the file buffer
      const buffer = fs.readFileSync(filePath);
      
      // Convert docx to html
      const result = await mammoth.extractRawText({ buffer });
      const content = result.value;
      
      // Extract title from filename
      const fileName = file.replace('.docx', '');
      const title = fileName.split(' - ')[1] || fileName;
      
      // Generate a simple description from the first 150 characters
      const description = content.substring(0, 150) + '...';
      
      // Use current date for the blog post
      const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Select a random image from defaults
      const image = DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
      
      blogPosts.push({
        id: i.toString(),
        title,
        description,
        image,
        date,
        category: 'Technology',
        content,
        fileName: file
      });
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }
  
  return blogPosts;
}

// GET all blog posts
export async function GET() {
  console.log('API Route - Getting all blog posts');

  try {
    // Check if uploads directory exists
    if (!fs.existsSync(UPLOADS_DIR)) {
      console.error('Uploads directory does not exist:', UPLOADS_DIR);
      return NextResponse.json({ 
        error: 'Uploads directory not found',
        posts: [] 
      }, { status: 200 }); // Return empty array instead of error
    }

    // Get files in the uploads directory
    const files = fs.readdirSync(UPLOADS_DIR);
    console.log('All files in uploads directory:', files);
    
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    console.log('DOCX files found:', docxFiles);
    
    const blogPosts: BlogPost[] = [];
    
    for (let i = 0; i < docxFiles.length; i++) {
      const file = docxFiles[i];
      const filePath = path.join(UPLOADS_DIR, file);
      
      try {
        // Read the file buffer
        const buffer = fs.readFileSync(filePath);
        
        // Convert docx to html
        const result = await mammoth.extractRawText({ buffer });
        const content = result.value;
        
        // Extract title from filename
        const fileName = file.replace('.docx', '');
        const title = fileName.split(' - ')[1] || fileName;
        
        // Generate a simple description from the first 150 characters
        const description = content.substring(0, 150) + '...';
        
        // Use current date for the blog post
        const date = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        // Select a random image from defaults
        const image = DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
        
        blogPosts.push({
          id: i.toString(),
          title,
          description,
          image,
          date,
          category: 'Technology',
          content,
          fileName: file
        });
        
        console.log(`Successfully processed blog ${i}: ${title}`);
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
    
    console.log(`Returning ${blogPosts.length} blog posts`);
    return NextResponse.json({ posts: blogPosts });
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch blog posts', 
      details: error instanceof Error ? error.message : String(error),
      posts: [] 
    }, { status: 500 });
  }
}
