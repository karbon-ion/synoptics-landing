'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What Are AI Agents? ",
        answer: "AI agents use advanced reasoning to process requests, make decisions, and execute tasks—driving business outcomes. Enterprise AI Agents are tailored to deliver scalable, secure automation across departments."
    },
    {
        question: "How Much Do AI Agents Cost? ",
        answer: "Pricing for AI Agents for Enterprise depends on selected features, usage limits, and required support levels, with flexible subscription models to fit organizational needs."
    },
    {
        question: "What Are the Benefits of AI Agents in an Enterprise? ",
        answer: "Enterprise AI Agents automate tasks to boost productivity, optimize resources, and scale support—cutting costs while enabling teams to focus on strategy."
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