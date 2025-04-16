import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syno Guard - Synoptix.ai",
  description: "Advanced security solutions for AI systems",
  alternates: {
    canonical: '/syno-guard',
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