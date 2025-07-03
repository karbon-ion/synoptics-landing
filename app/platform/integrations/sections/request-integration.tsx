import Image from 'next/image';
import Link from 'next/link';

export default function RequestIntegration() {
  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 relative py-16 overflow-hidden">
        <Image
          src="/integrations/image.png"
          alt="Integration Request Background"
          fill
          className="object-cover z-0"
        />
        
        <div className="relative z-10 flex flex-col items-start justify-center h-full ml-4 md:ml-20">
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '38px',
            lineHeight: '53px',
            letterSpacing: '0%',
            textAlign: 'left',
            color: '#323E50',
            marginBottom: '24px'
          }}>
            Can't find the integration you need?<br />
            Let us help you connect the dots.
          </h2>
          
          <Link 
            href="/contact-us" 
            className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-[#4651E5] transition duration-300 inline-flex items-center"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            Request an integration
          </Link>
        </div>
      </div>
    </section>
  );
}
