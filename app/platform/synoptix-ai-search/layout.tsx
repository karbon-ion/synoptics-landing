import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Search | Synoptix Intelligent Search Tools',
  description: 'Unlock insights with Synoptix\'s Enterprise AI Search. Connect data across systems, retrieve answers instantly, and power an intelligent decision-making process.'
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
