import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="w-full py-16 md:py-30 relative overflow-hidden" 
      style={{
        backgroundImage: "url('/evaluations/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-1 mt-8 md:mt-15">
          <h1 className="text-3xl md:text-[48px] leading-tight md:leading-[72px]" style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            letterSpacing: '0%'
          }}>
            Smarter AI Starts with Smarter Evaluation 
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            color: '#666666',
            letterSpacing: '2%'
          }} className="mt-4 md:mt-6 mb-6 md:mb-8 text-sm md:text-[16px] leading-relaxed md:leading-[30px]">
           Get real-time visibility into every interaction with built-in AI performance evaluation. Detect issues, measure accuracy, and resolve problems fast so AI stays on track. 
          </p>
          <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-2.5 md:py-3 px-5 md:px-6 text-sm md:text-base rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
            Explore AI Performance
          </Link>
        </div>
        <div className="flex-1 mt-8 md:mt-10">
          <Image
            src='/evaluations/evaluations.png'
            alt='Evaluations Dashboard'
            width={600}
            height={400}
            className="w-full h-auto md:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  )
}
