import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting - Synoptix.ai",
  description: "Expert AI consulting services from Synoptix.ai",
  alternates: {
    canonical: '/ai-consulting',
  },
};

export default function AIConsultingLayout({
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
