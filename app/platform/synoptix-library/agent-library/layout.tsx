import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore AI Agent Library for Enterprises | Synoptix AI',
  description: 'Deploy scalable, task-specific agents with Synoptix AI Agent Library. Build intelligent workflows across enterprise systems.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/synoptix-library/agent-library'
  }
};

export default function AgentLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
