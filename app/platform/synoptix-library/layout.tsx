import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synoptix AI Library | Pre-Built Agents to Accelerate',
  description: 'Explore and use ready-to-use agents and prompts in the Synoptix AI Library. Build faster, deploy smarter, and bring AI to life across your enterprise for ease.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/synoptix-library'
  }
};

export default function ModelHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
