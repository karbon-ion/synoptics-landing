// Client-side utility functions for blog posts

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

/**
 * Fetches all blog posts from the API
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Disable caching to always get fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetches a single blog post by ID
 */
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Disable caching to always get fresh data
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }

    const data = await response.json();
    return data.post || null;
  } catch (error) {
    console.error(`Error fetching blog post ${id}:`, error);
    return null;
  }
}
