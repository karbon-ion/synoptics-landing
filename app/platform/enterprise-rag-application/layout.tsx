import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise RAG Application for Fast Insights | Synoptix.AI",
  description: "Deploy RAG-powered AI to retrieve accurate answers from enterprise data, documents, and systems with full control and traceability.",
  alternates: {
    canonical: '/platform/enterprise-rag-application',
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