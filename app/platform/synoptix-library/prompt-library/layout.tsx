import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prompt Library | Synoptix AI',
  description: 'Access our curated collection of optimized prompts for various AI use cases. Leverage tested prompt templates to get the best results from AI models.',
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
