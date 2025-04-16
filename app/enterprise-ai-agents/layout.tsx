import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Agent - Synoptix.ai",
  description: "Advanced Enterprise AI Agent solutions for businesses",
  alternates: {
    canonical: '/enterprise-ai-agent',
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