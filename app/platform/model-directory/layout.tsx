import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Model Hub | Synoptix AI',
  description: 'Access a wide range of AI models through Synoptix Model Hub. Integrate with leading AI models to power your enterprise applications.',
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
