import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore the Latest Upcoming AI Industry Events | Synoptix AI",
  description: "Discover top AI industry events, from global conferences to expert-led workshops. Stay connected to AI trends, tools, and insights.",
  alternates: {
    canonical: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
