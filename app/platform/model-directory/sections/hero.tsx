import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative py-20 md:py-30 overflow-hidden">
      <Image
        src="/model-hub/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="max-w-8xl mx-auto relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-16">
          <div className="w-full md:w-5/12 pt-8 md:pt-16 md:pl-16">
            <h1 style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '66px',
              letterSpacing: '0%',
              color: '#323E50',
              marginBottom: '1rem',
              overflow: 'visible',
              width: '150%',
              position: 'relative',
              zIndex: 20
            }}>
              Find the Best Model for <br />
              Each Enterprise Task
            </h1>
            <p style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '30px',
              letterSpacing: '2%',
              color: '#323E50',
              marginBottom: '2rem'
            }}>
             Deploy top-performing LLMs from Azure Open AI, Google Vertex, xAI, and Deepseek within a secure enterprise environment. 
              </p>
              <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
                        Get a Demo
                    </Link>
          </div>
          <div className="w-full md:w-7/12 flex justify-end">
            <div className="relative w-full flex justify-end">
              <Image
                src="/model-hub/hero-img.png"
                alt="Model Hub Hero"
                width={800}
                height={600}
                className="object-contain mt-auto"
                style={{ marginBottom:  '-7.5rem' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
