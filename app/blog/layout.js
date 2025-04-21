export const metadata = {
  title: 'Synoptix Blog | AI and Enterprise Solutions',
  description: 'Explore our collection of thought leadership, technical guides, and industry analyses to stay ahead in the world of AI and enterprise solutions.',
};

export default function BlogLayout({ children }) {
  return (
    <div className="blog-layout">
      {children}
    </div>
  );
}
