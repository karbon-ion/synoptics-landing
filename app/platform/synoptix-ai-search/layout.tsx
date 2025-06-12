import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Powerful Enterprise AI Search Platform | Synoptix AI',
  description: 'Discover Enterprise AI Search that connects tools, files, and chats to get instant, accurate answers and drive smarter decisions across your organisation.',
  alternates: {
    canonical: '/platform/synoptix-ai-search'
  }
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
