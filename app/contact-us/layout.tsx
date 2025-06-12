import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Synoptix – Request a Demo & Connect with AI Experts',
  description: 'Contact Synoptix.ai to explore enterprise AI agents, request a demo, or get expert support. Share your company email—our contact team will respond promptly.',
  alternates: {
    canonical: 'https://synoptix.ai/contact-us'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
