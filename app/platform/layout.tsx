import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synoptix | Secure, Scalable Enterprise AI Platform',
  description: 'Unify workflows, agents, and data with Synoptix—the enterprise AI platform powering automation, insight, and governance across your organisation.'
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
