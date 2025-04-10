'use client';

import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import CallToActionSection from './sections/CallToActionSection';
import ContactSection from '../sections/ContactSection';
import WhySection from './sections/WhySection';
import ResultSection from './sections/ResultSection';
import TestimonialSection from './sections/TestimonialSection';
import BlogSection from './sections/blogSection';
import TechniquesSection from './sections/TechniquesSection';
import SmallFoot from '../sections/smallFoot';
import FAQ from './sections/faq';

export default function AIConsulting() {
  return (
    <>
      <Hero />
      <IntroSection />
      <CallToActionSection />
      <ResultSection/>
      <WhySection/>
      <TestimonialSection />
      <TechniquesSection/>
      <FAQ/>
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
      <SmallFoot title="Something" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
    </>
  );
}
