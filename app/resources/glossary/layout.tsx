import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synoptix AI Glossary | Key Terms in Enterprise AI',
  description: 'Browse the Synoptix AI Glossary to understand essential terms in enterprise AI, automation, agents, RAG, security, and AI-driven transformation.',
  alternates: {
    canonical: 'https://synoptix.ai/resources/glossary'
  }
};

export default function ModelHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
