import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Agent Platform for Scalable Automation | Synoptix AI',
  description: 'Build, deploy, and manage no-code AI agents at scale. Synoptix AI powers enterprise automation with full compliance, speed, and control.',
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
