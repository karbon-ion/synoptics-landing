import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Enterprise AI Performance Evaluation Tool | Synoptix AI",
    description: "Ensure your AI is accurate, efficient, and reliable. Synoptix AI offers AI Performance Evaluation to help you monitor the performance of AI across use cases.",
    alternates: {
        canonical: '/platform/ai-performace-evaluation'
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
