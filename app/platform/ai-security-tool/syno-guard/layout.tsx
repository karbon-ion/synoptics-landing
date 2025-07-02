import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SynoGuard—AI Security Tool for Protection | Synoptix AI",
  description: "Defend your AI systems with SynoGuard—a security tool by Synoptix AI designed to prevent threats and protect enterprise data within their environment.",
  alternates: {
    canonical: '/platform/ai-security-tool/syno-guard',
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