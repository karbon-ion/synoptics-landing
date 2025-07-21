import { promises as fs } from 'fs';
import path from 'path';

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

const UPLOADS_DIR = path.join(process.cwd(), 'app/resources/blogs/uploads');
const METADATA_DIR = path.join(process.cwd(), 'app/resources/blogs/metadata');
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000';

/**
 * Returns all blog posts by reading from metadata files
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(UPLOADS_DIR);
    const docxFiles = files.filter(file => file.endsWith('.docx'));

    const posts: BlogPost[] = [];

    for (let i = 0; i < docxFiles.length; i++) {
      const file = docxFiles[i];
      const metadataFile = file.replace('.docx', '.json');
      const metadataPath = path.join(METADATA_DIR, metadataFile);

      try {
        const metadataContent = await fs.readFile(metadataPath, 'utf8');
        const metadata = JSON.parse(metadataContent);

        posts.push({
          id: i.toString(),
          title: metadata.title,
          description: metadata.description,
          image: metadata.image || DEFAULT_IMAGE,
          date: metadata.date,
          category: metadata.category || 'Technology',
          content: '', // Skip content for list view
          fileName: file
        });
      } catch (error) {
        console.warn(`No metadata for ${file}, skipping.`);
      }
    }

    return posts;
  } catch (error) {
    console.error('Failed to load blog posts:', error);
    return [];
  }
}
