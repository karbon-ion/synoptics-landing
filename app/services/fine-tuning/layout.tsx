import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine-Tuning - Synoptix.ai",
  description: "AI model fine-tuning services from Synoptix.ai",
  alternates: {
    canonical: '/fine-tuning',
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
