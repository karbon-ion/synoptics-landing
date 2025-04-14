import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Synoptix.ai",
  description: "Learn about Synoptix.ai and our mission",
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
