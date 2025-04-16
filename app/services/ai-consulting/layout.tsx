import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting Services for Enterprises | Synoptix.AI",
  description: "Get expert AI consulting to plan, deploy, and scale enterprise-grade AI systems that deliver real value and measurable results.",
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
