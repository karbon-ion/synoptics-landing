import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Synoptix AI Blog | Enterprise AI Insights & Use Cases",
  description: "Explore the Synoptix AI blog for expert insights on enterprise AI, automation, agents, RAG, security, and real-world use cases across industries.",
  alternates: {
    canonical: "/resources/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`min-h-screen ${syne.variable} ${poppins.variable}`}>
      {children}
    </main>
  );
}
