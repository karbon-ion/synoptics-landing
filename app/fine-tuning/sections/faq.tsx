'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What is fine-tuning in AI?",
        answer: "Fine-tuning involves adapting a pre-trained AI model to perform specific tasks more effectively by training it further on a targeted dataset."
    },
    {
        question: "Why fine-tune a model?",
        answer: "Fine-tuning enhances a model's performance on specialized tasks, making it more accurate and relevant to applications."
    },
    {
        question: "What are the benefits of fine-tuning an AI model?",
        answer: "Benefits include improved task-specific performance, reduced training costs compared to building models from scratch, and the ability to incorporate domain-specific knowledge."
    },
    {
        question: "What kind of data is needed to fine-tune an LLM?",
        answer: "High-quality, domain-specific data that accurately represents the language and scenarios of the intended application is essential for effective fine-tuning."
    },
    {
        question: "How do you ensure secure fine-tuning and confidentiality throughout the process?",
        answer: "Implementing strict data handling protocols, encryption, and access controls ensures data security and confidentiality during the fine-tuning process."
    },
    {
        question: "Does Synoptix offer post-deployment & maintenance support for fine-tuning & optimisation services?",
        answer: "Yes, Synoptix offers ongoing post-deployment and maintenance to ensure your system remains efficient and up to date."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#F7FAFF] to-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Frequently asked questions about Fine tuning & Optimisation
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