import Hero from './sections/hero';
import EnterpriseSection from './sections/enterprise-solution';
import PromptLibrarySection from './sections/prompt-library';

export default function SynoptixLibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <EnterpriseSection />
      <PromptLibrarySection />
    </main>
  );
}