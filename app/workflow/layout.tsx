import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow - Synoptix.ai",
  description: "Streamlined AI workflow solutions for enterprises",
  alternates: {
    canonical: '/workflow',
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