import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Search Platform for Data Access | Synoptix AI',
  description: 'Search and analyse enterprise data effortlessly with Synoptix AI Search—an enterprise AI search platform designed for real-time insights and faster decisions.',
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
