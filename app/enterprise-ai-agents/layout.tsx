import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Agents to Automate Workflows | Synoptix.AI",
  description: "Launch secure, no-code AI agents to perform repetitive tasks, surface insights, and act as intelligent digital teammates.",
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