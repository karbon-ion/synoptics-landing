import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting Services for Enterprises | Synoptix AI",
  description: "Partner with Synoptix AI for strategic AI Consulting Services, from AI readiness to scalable enterprise deployment.",
  alternates: {
    canonical: '/services/ai-consulting',
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
