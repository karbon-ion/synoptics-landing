'use client';

import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import CallToActionSection from './sections/CallToActionSection';
// import ContactSection from '../sections/ContactSection';
import WhySection from './sections/WhySection';
import ResultSection from './sections/ResultSection';
import TestimonialSection from './sections/TestimonialSection';
import BlogSection from './sections/blogSection';
import TechniquesSection from './sections/TechniquesSection';
import FAQ from './sections/faq';
import SmallFoot from '@/app/sections/smallFoot';

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
      <SmallFoot title="Take the Next Step " buttonOne="Request an AI Strategy Briefing" buttonTwo="Need answers? Let's Talk." />
    </>
  );
}
