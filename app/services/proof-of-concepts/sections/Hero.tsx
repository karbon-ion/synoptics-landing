import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full max-w-[1500px] rounded-[20px] mx-auto mt-20 h-[420px] sm:h-[450px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/services/fine-tuning/bg.png"
        alt="Services Background"
        fill
        className="object-cover z-0"
        priority
        style={{
          filter: 'blur(6px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center mt-12 sm:mt-8 md:mt-0">
        <h1 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '1.3',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#ffffff',
          marginBottom: '12px'
        }} className="text-3xl sm:text-4xl md:text-5xl md:leading-tight">
         Proof of Concept Services 
        </h1>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.5',
          letterSpacing: '2%',
          textAlign: 'center',
          color: '#ffffff',
          maxWidth: '800px',
          margin: '0 auto'
        }} className="text-sm sm:text-base md:text-lg md:leading-relaxed px-1">
         Our experts design and execute pilot solutions that demonstrate feasibility, unlock insights, and accelerate decision-making while delivering early results. 
        </p>
        <div style={{ marginTop: '16px' }} className="mt-3 sm:mt-5 md:mt-8">
          <Link 
            href="/contact-us" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5E5CFF',
              color: 'white',
              fontFamily: 'Poppins',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }} className="text-xs sm:text-sm md:text-base py-4 px-8 sm:py-2 sm:px-5 md:py-3 md:px-6">
            Book a consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}