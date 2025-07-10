import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <Image
          src="/services/bg.png"
          alt="Glossary Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-4 sm:mt-0">
          <h1 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '1.2',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#323E50',
            marginBottom: '12px'
          }} className="text-3xl sm:text-4xl md:text-5xl">
            Conversational and Generative AI
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.6',
            letterSpacing: '2%',
            textAlign: 'center',
            color: '#323E50',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 8px'
          }} className="text-sm sm:text-base md:text-lg">
            The AI Market is noisy, and new terms are being coined each day, here is a list of all the most useful terms in the AI industry today
          </p>
        </div>
      </div>
    </section>
  );
}
