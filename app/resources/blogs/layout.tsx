import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Synoptix.ai",
  description: "Insights and articles from Synoptix.ai",
  alternates: {
    canonical: '/resources/blogs',
  },
};

export default function BlogsLayout({
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
