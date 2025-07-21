import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';

const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');
const METADATA_DIR = path.join(process.cwd(), 'app/resources/blogs/metadata');

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string;
  overview?: string;
  fileName: string;
  relevanceScore?: number;
  url?: string;
}

async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  if (!fs.existsSync(UPLOADS_DIR)) {
    console.error('Uploads directory does not exist:', UPLOADS_DIR);
    return [];
  }

  const files = fs.readdirSync(UPLOADS_DIR);
  const docxFiles = files.filter(file => file.endsWith('.docx'));
  
  const searchResults: BlogPost[] = [];
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
  
  for (let i = 0; i < docxFiles.length; i++) {
    const file = docxFiles[i];
    const filePath = path.join(UPLOADS_DIR, file);
    
    try {
      const buffer = fs.readFileSync(filePath);
      const plainTextResult = await mammoth.extractRawText({ buffer });
      const content = plainTextResult.value;
      
      // Extract title from content or use filename
      const titleMatch = content.match(/^(.+?)(?:\n|\r)/);
      const title = titleMatch ? titleMatch[1].trim() : file.replace('.docx', '');
      
      // Check for metadata
      let metadataImage = '';
      let metadataDate = '';
      let metadataCategory = 'Technology';
      let metadataTitle = '';
      
      const metadataFileName = file.replace('.docx', '.json');
      const metadataFilePath = path.join(METADATA_DIR, metadataFileName);
      
      if (fs.existsSync(metadataFilePath)) {
        try {
          const metadataContent = fs.readFileSync(metadataFilePath, 'utf8');
          const metadata = JSON.parse(metadataContent);
          
          if (metadata.title) metadataTitle = metadata.title;
          if (metadata.image) metadataImage = metadata.image;
          if (metadata.date) metadataDate = metadata.date;
          if (metadata.category) metadataCategory = metadata.category;
        } catch (error) {
          console.error(`Error reading metadata for ${file}:`, error);
        }
      }
      
      const finalTitle = metadataTitle || title;
      // Extract a more comprehensive overview from the content
      // Look for paragraphs that might contain comprehensive descriptions
      const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 0);
      
      // Find paragraphs that are likely to be comprehensive overviews
      const overviewParagraphs = paragraphs.filter(p => 
        p.length > 100 && 
        (p.toLowerCase().includes('overview') || 
         p.toLowerCase().includes('provides') || 
         p.toLowerCase().includes('explains') || 
         p.toLowerCase().includes('benefits') || 
         p.toLowerCase().includes('highlights'))
      );
      
      // Use the best overview paragraph or combine multiple relevant ones
      let overview = '';
      if (overviewParagraphs.length > 0) {
        // Sort by relevance to the query
        const sortedOverviews = overviewParagraphs.sort((a, b) => {
          const aRelevance = searchTerms.reduce((score, term) => 
            score + (a.toLowerCase().match(new RegExp(term, 'g')) || []).length, 0);
          const bRelevance = searchTerms.reduce((score, term) => 
            score + (b.toLowerCase().match(new RegExp(term, 'g')) || []).length, 0);
          return bRelevance - aRelevance;
        });
        
        // Use the most relevant paragraph or combine if they're short
        if (sortedOverviews[0].length > 200) {
          overview = sortedOverviews[0];
        } else if (sortedOverviews.length > 1) {
          overview = sortedOverviews.slice(0, 2).join(' ');
        } else {
          overview = sortedOverviews[0];
        }
      } else {
        // Fallback to the first substantial paragraph
        const substantialParagraphs = paragraphs.filter(p => p.length > 100);
        overview = substantialParagraphs.length > 0 ? substantialParagraphs[0] : paragraphs[0] || '';
      }
      
      // Clean up the overview
      overview = overview.replace(/\n/g, ' ').trim();
      
      // Create a shorter description for previews
      const description = overview.substring(0, 200) + (overview.length > 200 ? '...' : '');
      
      // Calculate relevance score based on query matches
      let relevanceScore = 0;
      const contentLower = content.toLowerCase();
      const titleLower = finalTitle.toLowerCase();
      
      // Check for exact query match (highest relevance)
      if (contentLower.includes(query.toLowerCase())) {
        relevanceScore += 10;
      }
      
      if (titleLower.includes(query.toLowerCase())) {
        relevanceScore += 15;
      }
      
      // Check for individual term matches
      searchTerms.forEach(term => {
        const titleMatches = (titleLower.match(new RegExp(term, 'g')) || []).length;
        const contentMatches = (contentLower.match(new RegExp(term, 'g')) || []).length;
        
        relevanceScore += titleMatches * 3;  // Title matches are more important
        relevanceScore += contentMatches;    // Content matches
      });
      
      // Only include results that have some relevance
      if (relevanceScore > 0) {
        // Determine the URL based on the content type
        let url = `/resources/blogs/${i}`;
        
        // If this is a service or product page, adjust the URL
        if (finalTitle.toLowerCase().includes('fine-tuning') || content.toLowerCase().includes('fine-tuning service')) {
          url = '/services/fine-tuning';
        } else if (finalTitle.toLowerCase().includes('llm') || content.toLowerCase().includes('llm services')) {
          url = '/services/llm-services';
        }
        
        searchResults.push({
          id: i.toString(),
          title: finalTitle,
          description,
          overview: overview,
          image: metadataImage || '',
          date: metadataDate || new Date().toISOString(),
          category: metadataCategory,
          content,
          fileName: file,
          url,
          relevanceScore
        });
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }
  
  // Sort results by relevance score (highest first)
  return searchResults.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    
    if (!query) {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }
    
    const results = await searchBlogPosts(query);
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to search blog posts' },
      { status: 500 }
    );
  }
}
