import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synoptix | Enterprise AI Search Platform for Accurate Answers',
  description: 'Surface fast, context-rich answers from internal systems with Synoptix—your enterprise AI search platform for secure, permission-based results.'
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
