import Image from 'next/image';
import Link from 'next/link';

export default function Training() {
  return (
    <section className="w-full mb-10 mt-10 relative">
      <div className="relative py-20 overflow-hidden">
        <Image
          src="/services/Training/bg-train.png"
          alt="Training Background"
          fill
          className="object-contain z-0"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '45px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'white',
            marginBottom: '16px'
          }}>
            Training and Education
          </h2>
          
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '2%',
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Boost efficiency, automate workflows, and accelerate success with customised AI Consulting and integration. Let's transform the way you work.
          </p>
          
          <Link href="/contact-us" className="bg-[#ffffff] text-[#5662F6] font-medium py-2 px-6 rounded-full hover:bg-[#ffffff] mt-5 transition duration-300 inline-flex items-center">
                        Get Started
                    </Link>
        </div>
      </div>
    </section>
  );
}
