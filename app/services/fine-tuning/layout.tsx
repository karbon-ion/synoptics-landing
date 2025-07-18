import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fine Tuning and Optimisation Services | Synoptix AI",
  description: "Tailor AI models for enterprise precision with Synoptix AI's Fine-Tuning and Optimisation Services. Enhance performance and reduce hallucinations.",
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
