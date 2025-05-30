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
            <h1
                className="text-xl sm:text-2xl md:text-5xl mb-20 md:mb-60 text-[#323E50] leading-tight md:leading-[72px]"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0%' }}
            >
                The <span className="text-[#5662F6]">AI Platform</span> That Works with Your <br className="hidden md:block" />
                Enterprise Data—Not Just on It
            </h1>
        </section>
    );
}
