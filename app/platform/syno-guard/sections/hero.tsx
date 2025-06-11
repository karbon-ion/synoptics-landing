'use client';

export default function SynoGuardHero() {
    return (
        <section className="w-full mb-20 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
                backgroundImage: "url('/syno-guard/image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: '100%',
                height: '100vh'
            }}
        >
            <div className="max-w-6xl mx-auto mt-40">
                <h1 style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: '72px',
                    letterSpacing: '0%',
                    textAlign: 'center'
                }}>
                    Stay Compliant. Stay in Control.
                </h1>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '2%',
                    textAlign: 'center',
                    color: '#666666',
                    maxWidth: '800px',
                    margin: '24px auto 48px'
                }}>
                    Attackers Don't Wait—Neither Should You. Identify and fix AI security vulnerabilities before they become threats.
                </p>
                <div className="relative w-full max-w-5xl mx-auto">
                    <img 
                        src="/syno-guard/hero-image.png"
                        alt="Synoptix Guard Platform Overview"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
