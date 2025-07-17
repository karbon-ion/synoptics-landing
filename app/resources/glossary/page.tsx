'use client';

import Hero from './sections/Hero';
import GlossaryContent from './sections/GlossaryContent';
import SchemaOrgGlossary from './schema';

export default function GlossaryPage() {
  return (
    <main className="overflow-x-hidden">
      <SchemaOrgGlossary />
      <Hero />
      <GlossaryContent />
    </main>
  );
}
