import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations | Synoptix AI',
  description: 'Discover all the software integrations available with Synoptix AI platform. Connect your existing tools and systems for seamless AI-powered workflows.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/integrations'
  }
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
