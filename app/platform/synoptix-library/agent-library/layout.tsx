import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Library | Synoptix AI',
  description: 'Explore our collection of pre-built AI agents for various business use cases. Deploy ready-to-use agents or customize them for your specific needs.',
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
