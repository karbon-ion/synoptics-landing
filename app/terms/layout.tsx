import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Synoptix.ai",
  description: "Synoptix.ai Terms of Service",
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({
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
