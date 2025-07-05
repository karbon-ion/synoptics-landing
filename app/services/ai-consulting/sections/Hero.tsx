import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/services/bg.png"
        alt="Services Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
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
          AI Consulting Services for Enterprises
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
          Unlock the full potential of Artificial Intelligence with Synoptix AI's tailored consulting services. Our expertise lies in transforming complex business challenges into streamlined, intelligent solutions that drive efficiency, reduce errors, and accelerate decision-making.
        </p>
        <div style={{ marginTop: '32px' }}>
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
              padding: '12px 24px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            Book a consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}