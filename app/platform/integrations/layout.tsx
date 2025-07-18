import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Integrations for Your Enterprise Systems | Synoptix AI',
  description: 'Integrate AI Agents with enterprise AI integrations like Microsoft, Salesforce, and more. Enable seamless automation across data and workflows.',
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
