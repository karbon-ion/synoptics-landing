import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fine Tuning and Optimisation Services | Synoptix.AI",
  description: "Customise and fine-tune AI models for your enterprise needs with expert optimisation services for higher precision and relevance.",
  alternates: {
    canonical: '/services/fine-tuning',
  },
};

export default function FinetuningLayout({
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
