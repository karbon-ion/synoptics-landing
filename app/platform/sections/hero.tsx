'use client';

export default function RagHero() {
    return (
        <section
            className="py-50  flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
            style={{
                backgroundImage: "url('/platform/herobackground.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "48px", lineHeight: "72px", letterSpacing: "0%" }}>
            <h1 className="text-3xl md:text-5xl  mb-60 text-[#323E50]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "48px", lineHeight: "72px", letterSpacing: "0%" }}>
                The <span className="text-[#5662F6] ">Work AI</span> platform that puts AI <br /> 
                to work on your company's data.
            </h1>
            </span>
        </section>
    );
}
