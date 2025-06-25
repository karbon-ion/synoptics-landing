import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="/model-hub/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="max-w-8xl mx-auto relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-16">
          <div className="w-full md:w-5/12 pt-8 md:pt-16">
            <h1 style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '66px',
              letterSpacing: '0%',
              color: '#323E50',
              marginBottom: '1rem'
            }}>
              Find the best model for each agent.
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
              Experiment with the latest LLMs hosted on Amazon Bedrock, Azure OpenAI, Google Vertex AI, and OpenAI in an enterprise-safe environment.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-6 rounded-md font-medium transition-colors">
              Get a Demo
            </button>
          </div>
          <div className="w-full md:w-7/12 flex justify-end">
            <div className="relative w-full flex justify-end">
              <Image
                src="/model-hub/hero-img.png"
                alt="Model Hub Hero"
                width={600}
                height={450}
                className="object-contain"
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
