import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Prompt Library for Creators & Developers | Synoptix AI',
  description: 'Boost creativity and productivity with Synoptix AI curated AI Prompt Library. Designed for teams building with LLMs.',
  alternates: {
    canonical: 'https://synoptix.ai/platform/synoptix-library/prompt-library'
  }
};

export default function PromptLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
