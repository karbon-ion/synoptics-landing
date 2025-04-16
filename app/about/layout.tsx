import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us Synoptix.AI | Enterprise AI Platform & Solution",
  description: "Learn how Synoptix.AI empowers enterprises with secure, no‑code AI automation, instant chat, and customizable AI agents. Discover our mission and vision.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
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
