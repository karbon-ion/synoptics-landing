import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';
import { processImageUrl } from '../../utils/azureStorage';

const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');
const METADATA_DIR = path.join(process.cwd(), 'app/resources/blogs/metadata');

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
      
      // Convert docx to HTML to properly extract headings and formatting
      const result = await mammoth.convertToHtml({ buffer });
      const htmlContent = result.value;
      
      // Extract the first heading (h1) as the title
      let title = '';
      const titleMatch = htmlContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
      if (titleMatch && titleMatch[1]) {
        // Remove any HTML tags inside the heading
        title = titleMatch[1].replace(/<[^>]*>/g, '').trim();
      } else {
        // Fallback to filename if no h1 found
        const fileName = file.replace('.docx', '');
        title = fileName.split(' - ')[1] || fileName;
      }
      
      // Extract content after the first heading for the description
      let description = '';
      const contentAfterTitle = htmlContent.split(/<\/h1>/i)[1] || '';
      
      // Get the first paragraph after the heading
      const firstParagraphMatch = contentAfterTitle.match(/<p[^>]*>(.*?)<\/p>/i);
      if (firstParagraphMatch && firstParagraphMatch[1]) {
        // Remove any italic text from the first paragraph
        description = firstParagraphMatch[1]
          .replace(/<em>.*?<\/em>/g, '') // Remove italic text
          .replace(/<i>.*?<\/i>/g, '')   // Also check for <i> tags
          .replace(/<[^>]*>/g, '')       // Remove any other HTML tags
          .trim();
        
        // If description is too short after removing italic text, get more content
        if (description.length < 50) {
          const secondParagraphMatch = contentAfterTitle.replace(firstParagraphMatch[0], '').match(/<p[^>]*>(.*?)<\/p>/i);
          if (secondParagraphMatch && secondParagraphMatch[1]) {
            const additionalText = secondParagraphMatch[1].replace(/<[^>]*>/g, '').trim();
            description = description ? `${description} ${additionalText}` : additionalText;
          }
        }
        
        // Limit description length and add ellipsis
        if (description.length > 150) {
          description = description.substring(0, 150) + '...';
        }
      } else {
        // Fallback: extract plain text and use first 150 chars
        const plainTextResult = await mammoth.extractRawText({ buffer });
        const plainText = plainTextResult.value;
        description = plainText.substring(0, 150) + '...';
      }
      
      // Check if metadata JSON file exists for this blog post
      let metadataImage = '';
      let metadataDate = '';
      let metadataCategory = 'Technology';
      
      const metadataFileName = file.replace('.docx', '.json');
      const metadataFilePath = path.join(METADATA_DIR, metadataFileName);
      
      if (fs.existsSync(metadataFilePath)) {
        try {
          const metadataContent = fs.readFileSync(metadataFilePath, 'utf8');
          const metadata = JSON.parse(metadataContent);
          
          // Use image from metadata if available
          if (metadata.image) {
            metadataImage = processImageUrl(metadata.image);
          }
          
          // Use date from metadata if available
          if (metadata.date) {
            try {
              const dateObj = new Date(metadata.date);
              metadataDate = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
            } catch (error) {
              console.error('Error parsing date from metadata:', error);
              metadataDate = metadata.date; // Use as-is if parsing fails
            }
          }
          
          // Use category from metadata if available
          if (metadata.category) {
            metadataCategory = metadata.category;
          }
        } catch (error) {
          console.error(`Error reading metadata file ${metadataFileName}:`, error);
        }
      }
      
      // Use current date as fallback if no metadata date
      const date = metadataDate || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Use metadata image or select a random image from defaults
      const image = metadataImage || DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
      
      // Extract plain text content for the full blog post
      const plainTextResult = await mammoth.extractRawText({ buffer });
      const content = plainTextResult.value;
      
      blogPosts.push({
        id: i.toString(),
        title,
        description,
        image,
        date,
        category: metadataCategory,
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
export async function GET(_request: Request) {
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
    const blogPosts = await getBlogPosts();
    
    return NextResponse.json({ posts: blogPosts });
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', posts: [] },
      { status: 500 }
    );
  }
}
