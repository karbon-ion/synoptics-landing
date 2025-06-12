import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions | Synoptix Unified AI Platform',
  description: 'Discover Synoptix\'s Enterprise AI platform—built for scalability, secure automation, and real-time data orchestration across your enterprise systems.',
  alternates: {
    canonical: '/platform'
  }
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
