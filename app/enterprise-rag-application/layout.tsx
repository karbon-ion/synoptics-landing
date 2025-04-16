import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Application - Synoptix.ai",
  description: "Retrieval-Augmented Generation solutions for enterprises",
  alternates: {
    canonical: '/rag-application',
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