'use client';

import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import ServiceProcessSection from './sections/ServiceProcessSection';
import CtaBanner from './sections/CtaBanner';
import TechniquesSection from './sections/TechniquesSection';
import ContactSection from '../sections/ContactSection';
import WhySection from './sections/WhySection';
import ResultSection from './sections/ResultsSection';
import FAQ from './sections/faq';

export default function FineTuning() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServiceProcessSection />
      <CtaBanner />
      <TechniquesSection />
      {/* <ContactSection /> */}
      <WhySection />
      <ResultSection />
      <FAQ />
    </>
  );
}
