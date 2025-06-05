'use client'

export default function Capabilities() {
    return (
        <section className="relative w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* No-Code AI Automation */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFF] border border-[#E2E8F0]">
                        <div className="relative">
                            <h3 className="text-xl font-semibold mb-4">
                                <span className="relative">
                                    No-Code AI Automation
                                </span>
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Synoptix AI Agent makes automation simple. Set up workflows, reduce time to configure or train a model, and customize AI agents to fit your business without writing code.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Teach and train AI to work the way you need, so you can stay focused on what's important.
                            </p>
                        </div>
                    </div>

                    {/* Seamless Integration */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFF] border border-[#E2E8F0]">
                        <h3 className="text-xl font-semibold mb-4">
                            Seamless Integration with Your Tech Stack
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Your AI agent should work where you work. Synoptix AI integrates smoothly with:
                        </p>
                        <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                            <li>• Business applications - Word, PDF, excel, outlook</li>
                            <li>• Databases - SQL, Oracle Database, SAP ERP</li>
                            <li>• CRM - Sales force, Microsoft Dynamic</li>
                            <li>• Google Drive and Sharepoint</li>
                        </ul>
                    </div>

                    {/* Train Your AI Agents */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFF] border border-[#E2E8F0]">
                        <h3 className="text-xl font-semibold mb-4">
                            Train Your AI Agents How Your Business Works
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Your processes are what make your business unique. Now, you can turn them into step-by-step instructions for your AI agents, ensuring they execute tasks exactly the way you want. From customer interactions to backend operations, your AI learns and improves over time.
                        </p>
                    </div>

                    {/* Start Fast */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFF] border border-[#E2E8F0] md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">
                            Start Fast with Pre-Built Templates
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            No need to start from scratch. Our growing library of AI Agent and Tool templates lets you deploy automation quickly—whether you're enhancing customer service, analyzing data, or streamlining workflows.
                        </p>
                    </div>

                    {/* Flexibility */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFF] border border-[#E2E8F0] md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">
                            Flexibility to Choose the Best AI Model
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We believe in giving you options. Our platform is LLM-agnostic, meaning you can choose the AI model that works best for you. Whether it's OpenAI, Meta, DeepSeek or Mistral you have the flexibility to switch between providers and stay at the cutting edge of AI technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 