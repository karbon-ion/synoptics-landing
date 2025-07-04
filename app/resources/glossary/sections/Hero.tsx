import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full  relative">
      <div className="relative py-30 overflow-hidden">
        <Image
          src="/services/bg.png"
          alt="Glossary Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <h1 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '72px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#323E50',
            marginBottom: '16px'
          }}>
            Conversational and Generative AI
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '2%',
            textAlign: 'center',
            color: '#323E50',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            The AI Market is noisy, and new terms are being coined each day, here is a list of all the most useful terms in the AI industry today
          </p>
        </div>
      </div>
    </section>
  );
}
