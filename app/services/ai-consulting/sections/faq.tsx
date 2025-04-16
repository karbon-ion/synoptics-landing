'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "Who is Synoptix AI Consulting for?",
        answer: "Our services are built for enterprises across industries seeking to integrate AI, automate workflows, and make smarter, data-driven decisions. "
    },
    {
        question: "How long does implementation take? ",
        answer: "We move fast. With quick assessments, pilot programs, and phased rollouts, you start seeing results without the wait. "
    },
    {
        question: "Do I need existing AI tools or infrastructure? ",
        answer: "Not at all. Whether you're starting from zero or scaling existing tools, we tailor our approach to your current environment. "
    },
    {
        question: "Is my data secure with Synoptix? ",
        answer: "Yes—your data stays within your enterprise. Our platform is built with robust security and compliance at its core. "
    },
    {
        question: "What makes Synoptix AI Consulting different? ",
        answer: "We combine expert consulting with our no-code AI platform to deliver faster deployments, smarter automation, and long-term strategic value. "
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#F7FAFF] to-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-start justify-between text-left"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                <span className="text-2xl text-gray-400 flex-shrink-0 leading-none font-light">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            
                            <div 
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="pb-6 text-gray-600 text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 