'use client'


import BlogSection from "../sections/blog-section";
import SecurityBadges from "@/app/sections/SecurityBadges";
import Hero from "./sections/hero";
import FeaturesSection from "./sections/features-section";
import TechniquesSection from "./sections/techniques-section";

export default function Evaluation() {
    return (
        <main className="w-full">
           <Hero/>
           <FeaturesSection/>
           <TechniquesSection/>
           <div className="container mx-auto mt-12 md:mt-16 px-4 md:px-0">
                <h2 className="text-2xl md:text-[36px] leading-tight md:leading-[45px]" style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    letterSpacing: "0%",
                    textAlign: "center"
                }}>
                    Other Resources
                </h2>
            </div>
           <BlogSection/>
        </main>
    );
}