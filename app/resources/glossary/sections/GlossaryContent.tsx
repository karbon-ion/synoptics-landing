'use client';

import { useState } from 'react';

// Define the glossary terms
const glossaryTerms = [
  {
    id: 'large-language-model',
    letter: 'L',
    term: 'Large Language Model (LLM)',
    definition: 'A neural network trained on massive text corpora to understand and generate human-like language. Business benefit: Automates customer support, generates reports, and accelerates content creation.'
  },
  {
    id: 'retrieval-augmented-generation',
    letter: 'R',
    term: 'Retrieval-Augmented Generation (RAG)',
    definition: 'Combines vector search over your private data with an LLM\'s generation capability. Business benefit: Ensures accurate, up-to-date responses by grounding AI outputs in your own documents.'
  },
  {
    id: 'embeddings',
    letter: 'E',
    term: 'Embeddings',
    definition: 'Numeric vectors representing words, sentences, or documents in a multi-dimensional space. Business benefit: Enables semantic search, clustering, and similarity-based recommendations across large datasets.'
  },
  {
    id: 'vector-search',
    letter: 'V',
    term: 'Vector Search',
    definition: 'Finding relevant embeddings by measuring distance (e.g. cosine similarity). Business benefit: Delivers lightning‑fast, contextually relevant results from millions of documents.'
  },
  {
    id: 'prompt-engineering',
    letter: 'P',
    term: 'Prompt Engineering',
    definition: 'Crafting effective inputs (prompts) to guide LLMs toward desired outputs. Business benefit: Optimizes responses for clarity, compliance, and domain‑specific accuracy.'
  },
  {
    id: 'fine-tuning',
    letter: 'F',
    term: 'Fine‑Tuning',
    definition: 'Adapting a pre‑trained LLM on your own dataset to specialize it. Business benefit: Yields higher accuracy on industry‑specific terminology and workflows.'
  },
  {
    id: 'zero-shot-learning',
    letter: 'Z',
    term: 'Zero‑Shot Learning',
    definition: 'Asking an LLM to perform a task without any examples in the prompt. Business benefit: Quickly tests new use cases without upfront annotation or training.'
  },
  {
    id: 'few-shot-learning',
    letter: 'F',
    term: 'Few‑Shot Learning',
    definition: 'Supplying a small number of examples in the prompt to guide the LLM. Business benefit: Improves output quality with minimal effort, ideal for prototyping.'
  },
  {
    id: 'tokens',
    letter: 'T',
    term: 'Tokens',
    definition: 'The smallest units of text (words or sub‑words) processed by LLMs. Business benefit: Understanding token counts helps estimate prompt cost and model latency.'
  },
  {
    id: 'transformers',
    letter: 'T',
    term: 'Transformers',
    definition: 'The neural network architecture at the heart of modern LLMs, enabling parallel processing of tokens via self‑attention. Business benefit: Powers scalable, high‑quality text generation for enterprise workloads.'
  },
  {
    id: 'latency',
    letter: 'L',
    term: 'Latency',
    definition: 'The time it takes for an AI system to return a response. Business benefit: Critical metric for user experience in chatbots and real‑time analytics.'
  },
  {
    id: 'throughput',
    letter: 'T',
    term: 'Throughput',
    definition: 'Number of queries or tokens processed per second. Business benefit: Measures system capacity, influencing SLAs and infrastructure planning.'
  },
  {
    id: 'multi-modal-ai',
    letter: 'M',
    term: 'Multi‑Modal AI',
    definition: 'Models that handle different data types—text, images, audio, video—simultaneously. Business benefit: Enables unified analysis of documents, scanned forms, and multimedia assets.'
  },
  {
    id: 'hallucination',
    letter: 'H',
    term: 'Hallucination',
    definition: 'When an LLM generates plausible but incorrect or fabricated information. Business benefit: Awareness of hallucinations drives implementation of safeguards like RAG or post‑generation validation.'
  },
  {
    id: 'content-safety-moderation',
    letter: 'C',
    term: 'Content Safety & Moderation',
    definition: 'Techniques and policies to detect and filter harmful or non‑compliant outputs. Business benefit: Maintains brand integrity and regulatory compliance in all AI interactions.'
  },
  {
    id: 'sentiment-analysis',
    letter: 'S',
    term: 'Sentiment Analysis',
    definition: 'Automated classification of text as positive, negative, or neutral. Business benefit: Tracks customer feedback and market sentiment at scale.'
  },
  {
    id: 'knowledge-graph',
    letter: 'K',
    term: 'Knowledge Graph',
    definition: 'Structured representation of entities and their relationships. Business benefit: Enhances context discovery, recommendation engines, and complex query answering.'
  },
  {
    id: 'chain-of-thought',
    letter: 'C',
    term: 'Chain‑of‑Thought',
    definition: 'A prompting strategy that encourages the model to "think aloud," improving reasoning steps. Business benefit: Increases accuracy for complex decision‑support tasks.'
  },
  {
    id: 'api',
    letter: 'A',
    term: 'API (Application Programming Interface)',
    definition: 'A set of rules and endpoints that let your applications interact with AI services. Business benefit: Simplifies integration with existing enterprise systems (CRM, ERP, BI tools).'
  },
  {
    id: 'data-governance',
    letter: 'D',
    term: 'Data Governance',
    definition: 'Policies and processes ensuring data quality, privacy, and compliance. Business benefit: Provides the framework needed to trust and scale AI across the organization.'
  }
];

// Get unique letters for the alphabet filter
const uniqueLetters = Array.from(new Set(glossaryTerms.map(term => term.letter))).sort();
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryContent() {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter terms based on selected letter and search term
  const filteredTerms = glossaryTerms.filter(term => {
    if (searchTerm) {
      return term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
             term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    }
    if (selectedLetter) {
      return term.letter === selectedLetter;
    }
    return true; // Show all terms by default
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar with search and alphabet */}
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            {/* Search bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            

            
            {/* Alphabet filter - single line layout */}
            <div className="flex flex-wrap">
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => {
                    setSelectedLetter(letter === selectedLetter ? '' : letter);
                    setSearchTerm('');
                  }}
                  className={`w-6 h-6 flex items-center justify-center text-xs ${
                    selectedLetter === letter ? 'text-blue-600 font-bold' : 'text-gray-700'
                  } ${!uniqueLetters.includes(letter) ? 'opacity-40 cursor-not-allowed' : 'hover:text-blue-800'}`}
                  disabled={!uniqueLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
            
            {/* Current letter display */}
            {!searchTerm && selectedLetter && (
              <div className="mt-8 text-center">
                <span className="text-5xl font-bold text-blue-600">{selectedLetter}</span>
              </div>
            )}
            
            {/* List of terms for the selected letter - only shown on mobile */}
            <div className="mt-8 md:hidden">
              <ul className="space-y-2">
                {filteredTerms.map(term => (
                  <li key={term.id} className="text-blue-600 hover:text-blue-800">
                    <a href={`#${term.id}`}>{term.term}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right side with glossary terms */}
          <div className="flex-grow">
            <div className="space-y-12">
              {filteredTerms.map(term => (
                <div key={term.id} id={term.id} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{term.term}</h2>
                  <p className="text-gray-600">{term.definition}</p>
                </div>
              ))}
              
              {filteredTerms.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No terms found for {searchTerm ? `"${searchTerm}"` : `letter ${selectedLetter}`}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
