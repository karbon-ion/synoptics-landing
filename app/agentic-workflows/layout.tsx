import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agentic Workflows for Business Automation | Synoptix.AI",
  description: "Automate tasks and decisions with no-code AI agents that streamline workflows and adapt to enterprise logic and security needs.",
  alternates: {
    canonical: '/workflow',
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