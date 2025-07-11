import Image from 'next/image';
import Link from 'next/link';

export default function Training() {
  return (
    <section className="w-full mb-8 mt-8 sm:mb-10 sm:mt-10 relative">
      <div className="relative py-16 sm:py-16 md:py-20 overflow-hidden">
        <Image
          src="/services/Training/bg-train.png"
          alt="Training Background"
          fill
          className="object-cover md:object-contain z-0"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-4 md:py-0">
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '1.3',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'white',
            marginBottom: '12px'
          }} className="text-2xl sm:text-3xl md:text-4xl md:leading-tight">
           Fine-Tune Your Model with Purpose.  
          </h2>
          
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.6',
            letterSpacing: '2%',
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: '8px',
            paddingRight: '8px'
          }} className="text-sm sm:text-base md:text-lg md:leading-relaxed mb-6 sm:mb-4">
           Work with our AI specialists to optimise your models and elevate performance across the board.  
          </p>
          
          <Link href="/contact-us" className="bg-[#ffffff] text-[#5662F6] font-medium py-2 px-5 sm:py-2 sm:px-6 text-sm sm:text-base rounded-full hover:bg-[#ffffff] mt-4 sm:mt-5 transition duration-300 inline-flex items-center">
                        Get Started
                    </Link>
        </div>
      </div>
    </section>
  );
}
