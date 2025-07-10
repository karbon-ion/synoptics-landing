'use client';

export default function SynoGuardHero() {
    return (
        <section className="w-full mb-10 sm:mb-16 md:mb-20 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
                backgroundImage: "url('/syno-guard/image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: '100%',
                height: '100vh'
            }}
        >
            <div className="max-w-6xl mx-auto mt-20 sm:mt-28 md:mt-40 px-4 sm:px-6">
                <h1 style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '1.3',
                    letterSpacing: '0%',
                    textAlign: 'center'
                }} className="text-3xl sm:text-4xl md:text-5xl">
                   Visibility. Protection. Control.  
                </h1>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.6',
                    letterSpacing: '2%',
                    textAlign: 'center',
                    color: '#666666',
                    maxWidth: '800px',
                    margin: '16px auto 32px'
                }} className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-0 mb-6 sm:mb-8 md:mb-12">
                  Purpose-built to protect AI applications, agents, and MCPs with enterprise-grade security.    
                </p>
                <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                    <img 
                        src="/syno-guard/hero-image.png"
                        alt="Synoptix Guard Platform Overview"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
