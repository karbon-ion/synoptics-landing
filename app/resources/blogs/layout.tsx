import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synoptix AI Blog | Enterprise AI Insights & Use Cases",
  description: "Explore the Synoptix AI blog for expert insights on enterprise AI, automation, agents, RAG, security, and real-world use cases across industries.",
  alternates: {
    canonical: '/resources/blogs',
  },
};

export default function BlogsLayout({
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
