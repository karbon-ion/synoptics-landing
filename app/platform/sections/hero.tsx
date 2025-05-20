'use client';

export default function RagHero() {
    return (
        <section
            className="min-h-[60vh] flex flex-col items-center text-center px-4 pt-50"
            style={{
                background: "radial-gradient(54.74% 122.85% at 50% 50%, rgba(108, 126, 212, 0.4) 0%, rgba(108, 126, 212, 0) 50%)",
            }}
        >
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "48px", lineHeight: "72px", letterSpacing: "0%" }}>
            <h1 className="text-3xl md:text-5xl  mb-6 text-[#323E50]">
                The <span className="text-[#5662F6] ">Work AI</span> platform that puts AI <br /> 
                to work on your company's data.
            </h1>
            </span>
        </section>
    );
}
