'use client'

export default function OWASP() {
    return (
        <section className="relative w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-[40px] font-bold">
                        OWASP Top 10 for LLMs
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Ensure your AI stays secure and compliant with Synoptix Guard. We continuously update 
                        your guardrails to align with the latest security standards, including the OWASP 
                        Top 10 for LLMs, so you're always protected against emerging threats.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#0066FF] text-white font-medium rounded-full hover:bg-[#0052CC] transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Grid of Security Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
                    {/* LLM01 - Prompt Injections */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM01</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Prompt Injections
                        </h3>
                        <p className="text-gray-600">
                            Smart hackers can feed your AI harmful inputs to steal data or trigger unauthorized actions. 
                            With Synoptix, we intercept these attacks before they even start.
                        </p>
                    </div>

                    {/* LLM02 - Insecure Output Handling */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM02</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Insecure Output Handling
                        </h3>
                        <p className="text-gray-600">
                            Unchecked AI responses can be a prospect for malicious actors. Synoptix makes sure every 
                            output gets the green light before it ever leaves your system.
                        </p>
                    </div>

                    {/* LLM03 - Training Data Poisoning */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM03</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Training Data Poisoning
                        </h3>
                        <p className="text-gray-600">
                            If your AI learns from the wrong data, it could mislead users and spread misinformation. 
                            Synoptix filters out toxic data, ensuring your AI stays sharp, focused, and trustworthy.
                        </p>
                    </div>

                    {/* LLM04 - Denial of Service */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM04</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Denial of Service
                        </h3>
                        <p className="text-gray-600">
                            Some attacks aim to slow your AI down or rack up costs. Synoptix keeps a real-time eye on usage, 
                            spotting any spikes before they become a problem.
                        </p>
                    </div>

                    {/* LLM05 - Supply Chain */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM05</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Supply Chain
                        </h3>
                        <p className="text-gray-600">
                            Vulnerabilities in the AI supply chain are a hidden risk. Synoptix evaluates your models for biases, 
                            weaknesses, and performance gaps, so you can spot and fix them before they harm your system.
                        </p>
                    </div>

                    {/* LLM06 - Permission Issues */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM06</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Permission Issues
                        </h3>
                        <p className="text-gray-600">
                            Weak permissions can leave the door open for unwanted access. Synoptix tracks everything—no 
                            one gets in without permission, and no actions go unchecked.
                        </p>
                    </div>

                    {/* LLM07 - Data Leakage */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM07</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Data Leakage
                        </h3>
                        <p className="text-gray-600">
                            Sensitive data slipping through the cracks? Not with Synoptix. We scan your inputs and outputs to 
                            stop leaks in their tracks, protecting your privacy and user data.
                        </p>
                    </div>

                    {/* LLM08 - Excessive Agency */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM08</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Excessive Agency
                        </h3>
                        <p className="text-gray-600">
                            LLMs shouldn't be making decisions on their own. Synoptix ensures your system only does 
                            what it's supposed to, with strict controls embedded into every action.
                        </p>
                    </div>

                    {/* LLM09 - Overreliance */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM09</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Overreliance
                        </h3>
                        <p className="text-gray-600">
                            AI mistakes can lead to chaos, misleading responses and faulty data. Synoptix makes it easy to 
                            identify and correct these errors, keeping your AI on track and accurate every time.
                        </p>
                    </div>

                    {/* LLM10 - Insecure Plugins */}
                    <div className="space-y-4">
                        <div className="text-[#0066FF] font-medium text-sm">LLM10</div>
                        <h3 className="text-xl font-semibold border-b border-[#0066FF] pb-2 mb-4">
                            Insecure Plugins
                        </h3>
                        <p className="text-gray-600">
                            Plugins can be a weak spot for your AI. Synoptix continuously monitors these connections, 
                            ensuring malicious requests don't slip through the cracks and compromise your system.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 