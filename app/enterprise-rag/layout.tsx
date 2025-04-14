import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise RAG - Synoptix.ai",
  description: "Enterprise Retrieval-Augmented Generation solutions",
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