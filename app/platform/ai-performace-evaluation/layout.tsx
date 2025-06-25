import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AI Performance Evaluation | Synoptix",
    description: "Evaluate and optimize your AI models with Synoptix's performance evaluation tools.",
    alternates: {
        canonical: '/platform/ai-performace-evaluation'
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
