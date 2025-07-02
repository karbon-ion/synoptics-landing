import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Agent Platform to Automate Tasks | Synoptix AI',
  description: 'Boost productivity with Synoptix enterprise AI agents platform. Automate workflows, reduce manual tasks, and enable smarter enterprise operations at scale.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/synoptix-ai-agents'
  }
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
