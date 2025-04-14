import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Synoptix.ai",
  description: "Synoptix.ai Privacy Policy",
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
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
