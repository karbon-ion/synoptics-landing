import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="w-full py-30 relative overflow-hidden"
      style={{
        backgroundImage: "url('/evaluations/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-12">
        <div className="flex-1 mt-15">
          <h1 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '72px',
            letterSpacing: '0%'
          }}>
            Smarter AI Starts with Smarter Evaluation 
          </h1>
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '2%',
            color: '#666666'
          }} className="mt-6 mb-8">
           Get real time visibility into every interaction with built-in AI performance evaluation. Detect issues early, measure accuracy and efficiency, and resolve problems fast so your AI stays on track. 
          </p>
          <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
            Get a Demo
          </Link>
        </div>
        <div className="flex-1 mt-10">
          <Image
            src='/evaluations/evaluations.png'
            alt='Evaluations Dashboard'
            width={600}
            height={400}
            className="w-full h-auto max-w-[600px]"
          />
        </div>
      </div>
    </section>
  )
}
