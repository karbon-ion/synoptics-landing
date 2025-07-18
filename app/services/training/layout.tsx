import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Training & Education Services for Enterprise | Synoptix AI",
  description: "Empower enterprise teams with Synoptix AI Training and Education programs. Build in-house AI capabilities and drive adoption.",
  alternates: {
    canonical: '/services/training',
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
