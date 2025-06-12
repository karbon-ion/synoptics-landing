import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build, Manage and Deploy Enterprise AI Agents | Synoptix AI',
  description: 'Create, deploy, and manage Enterprise AI Agents with Synoptix. Automate tasks, boost productivity, and scale intelligent workflows across your organisation.',
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
