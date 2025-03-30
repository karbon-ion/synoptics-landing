'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What are the applications of RAG in enterprises?",
        answer: "RAG turns scattered data into instant knowledge, automating workflows and eliminating manual research."
    },
    {
        question: "What are the benefits of RAG as a service in enterprises?",
        answer: "RAG as a service provides seamless data integration, automated insights generation, and secure enterprise-wide knowledge sharing without the overhead of managing complex infrastructure."
    },
    {
        question: "How does RAG differ for enterprises vs. midsize businesses?",
        answer: "Enterprise RAG offers enhanced security features, larger data processing capabilities, and customizable workflows tailored to complex organizational structures, while midsize solutions focus on quick deployment and essential functionalities."
    },
    {
        question: "What makes Synoptix Enterprise RAG unique?",
        answer: "Synoptix Enterprise RAG combines advanced security, seamless integration capabilities, and enterprise-grade scalability with an intuitive user interface, making it the ideal choice for organizations prioritizing both power and ease of use."
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