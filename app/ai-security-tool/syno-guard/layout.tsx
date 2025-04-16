import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SynoGuard – AI Security Tool for Enterprises | Synoptix.AI",
  description: "Protect your enterprise AI with SynoGuard. Monitor usage, enforce policies, and prevent data exposure in real time.",
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