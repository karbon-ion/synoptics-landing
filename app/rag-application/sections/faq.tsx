'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What is RAG95?",
        answer: "An advanced AI method that improves how models retrieve and generate answers from large datasets."
    },
    {
        question: "How is RAG95 different from traditional RAG?",
        answer: "RAG95 improves retrieval speed and precision by using quantum-inspired algorithms, offering better context matching and lower latency compared to standard RAG systems."
    },
    {
        question: "Does Quantum RAG require RAG95 computing?",
        answer: "ENo. RAG95 runs on classical hardware. It uses quantum-inspired techniques, not actual quantum processors."
    },
    {
        question: "What are the use cases of RAG95?",
        answer: "RAG95 is ideal for enterprise search, knowledge management, legal research, customer support, and any scenario requiring accurate, real-time information retrieval."
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