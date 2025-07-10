import Image from 'next/image';
import Link from 'next/link';

export default function RequestIntegration() {
  return (
    <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 relative py-10 sm:py-12 md:py-16 overflow-hidden">
        <Image
          src="/integrations/image.png"
          alt="Integration Request Background"
          fill
          className="object-cover z-0"
        />
        
        <div className="relative z-10 flex flex-col items-start justify-center h-full ml-2 sm:ml-4 md:ml-20">
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '1.3',
            letterSpacing: '0%',
            textAlign: 'left',
            color: '#323E50',
            marginBottom: '16px'
          }} className="text-2xl sm:text-3xl md:text-4xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            Can't find the integration you need?<br className="hidden sm:block" />
            Let us help you connect the dots.
          </h2>
          
          <Link 
            href="/contact-us" 
            className="bg-[#5662F6] text-white font-medium py-2 px-5 sm:py-3 sm:px-6 rounded-full hover:bg-[#4651E5] transition duration-300 inline-flex items-center text-sm sm:text-base"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
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
