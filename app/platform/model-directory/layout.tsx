import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Model Directory for Enterprise Automation | Synoptix AI',
  description: 'Explore Synoptix AI Model Directory—your gateway for AI models ready to accelerate AI development and solve real business problems.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/model-hub'
  }
};

export default function ModelHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
