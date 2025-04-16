import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Performance Evaluation for Enterprises | Synoptix.AI",
  description: "Measure groundedness, accuracy, and relevance of AI outputs to ensure performance, compliance, and business reliability.",
  alternates: {
    canonical: '/enterprise-rag',
  },
};

export default function RagLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen">
            {children}
        </main>
    );
} 