import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Synoptix AI | Request a Demo or Talk to Experts',
  description: 'Connect with the Synoptix AI team for demos, partnerships, and support. Let us help you discover how enterprise AI can solve your biggest challenges.',
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
