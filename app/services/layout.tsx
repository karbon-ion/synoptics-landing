import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Synoptix.ai",
  description: "Explore Synoptix.ai's enterprise AI services",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
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
