'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "Who should choose Synoptix AI Consulting?",
        answer: "Our AI consulting services are designed for enterprises across all industries looking to integrate AI, streamline operations, and make data-led decisions."
    },
    {
        question: "How long does implementation take? ",
        answer: "We move quickly. With early assessments, pilot phases, and staged rollouts, you’ll start seeing benefits sooner rather than later—guided by agile AI consulting."
    },
    {
        question: "Do I need existing AI tools or infrastructure? ",
        answer: "Not at all. Whether you're just getting started or expanding current tools, we adapt to suit your environment."
    },
    {
        question: "Is my data secure with Synoptix? ",
        answer: "Yes. Your data remains within your enterprise. Our platform follows rigorous security and compliance protocols, including GDPR, HIPAA, and SOC 2 standards."
    },
    {
        question: "What makes Synoptix AI Consulting different? ",
        answer: "We combine expert AI consulting services with a no-code AI platform to deliver faster implementations, smarter automation, and real business outcomes."
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