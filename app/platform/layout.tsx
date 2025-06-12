import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Platform for Secure Deployment | Synoptix AI',
  description: 'Explore the Enterprise AI Platform—designed for secure, scalable deployment, seamless integration, and real-time insights across your tech stack | Synoptix AI',
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
