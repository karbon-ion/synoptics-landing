import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of Concept Services for Enterprises | Synoptix AI",
  description: "Validate enterprise AI ideas with Synoptix AI's Proof of Concept Services. Reduce risk, prove feasibility, and fast-track implementation.",
  alternates: {
    canonical: '/services/proof-of-concepts',
  },
};

export default function AIConsultingLayout({
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
