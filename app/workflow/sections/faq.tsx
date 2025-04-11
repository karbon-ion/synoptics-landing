'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "How does Synoptix AI improve workflow efficiency?",
        answer: "Synoptix AI intelligently routes tasks, consolidates insights, and refines outputs—eliminating delays, reducing manual effort, and keeping operations seamless."
    },
    {
        question: "Can it integrate with our existing systems?",
        answer: "Yes. Synoptix AI works with your current tools, databases, and platforms, ensuring a frictionless transition without disrupting operations."
    },
    {
        question: "Does AI replace human decision-making?",
        answer: "No. AI handles the execution, your team stays in control. Routine tasks are automated, while critical decisions always have human oversight."
    },
    {
        question: "Is it scalable for enterprise growth?",
        answer: "Absolutely. Synoptix AI adapts to your needs, whether you're streamlining a few processes or scaling workflows across a global operation."
    },
    {
        question: "What is the Router Workflow?",
        answer: "It analyses tasks in real time and routes them to the most relevant AI agent, ensuring precision and efficiency."
    },
    {
        question: "How does the Consolidator Workflow improve decision-making?",
        answer: "It gathers insights from multiple AI agents and delivers a clear, structured output, eliminating fragmented data."
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