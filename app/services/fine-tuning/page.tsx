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
import SmallFoot from '../sections/smallFoot';

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
      <SmallFoot title="Take the Next Step" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
    </>
  );
}
