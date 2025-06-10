import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Agents | Synoptix Intelligent AI Agents',
  description: 'Automate workflows with Synoptix\'s Enterprise AI Agents. Deploy intelligent agents to streamline tasks, ensure security, and boost productivity across business.'
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
