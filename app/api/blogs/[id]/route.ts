import { NextRequest, NextResponse } from 'next/server';
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

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
  'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
  'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1000'
];

// ✅ Correct type signature
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    if (!fs.existsSync(UPLOADS_DIR)) {
      console.error('Uploads directory does not exist:', UPLOADS_DIR);
      return NextResponse.json(
        { error: 'Uploads directory not found' },
        { status: 500 }
      );
    }

    const files = fs.readdirSync(UPLOADS_DIR);
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    const index = parseInt(id, 10);

    if (isNaN(index) || index < 0 || index >= docxFiles.length) {
      console.error('Invalid blog ID or no file at that index');
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const file = docxFiles[index];
    const filePath = path.join(UPLOADS_DIR, file);
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer });
    const content = result.value;

    const fileName = file.replace('.docx', '');
    const title = fileName.split(' - ')[1] || fileName;
    const description = content.substring(0, 150) + '...';

    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const image = DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];

    const post: BlogPost = {
      id,
      title,
      description,
      image,
      date,
      category: 'Technology',
      content,
      fileName: file
    };

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error getting blog post:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch blog post',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
