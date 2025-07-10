import Image from 'next/image'

const Hero = () => {
  const integrations = [
    { name: 'Outlook', src: '/integrations/hero/outlook.png' },
    { name: 'Slack', src: '/integrations/hero/blue.png' },
    { name: 'GitHub', src: '/integrations/hero/github.png' },
    { name: 'Salesforce', src: '/integrations/hero/sales-force.png' },
    { name: 'Google Drive', src: '/integrations/hero/google-drive.png' },
    { name: 'Figma', src: '/integrations/hero/figma.png' },
    { name: 'Yellow', src: '/integrations/hero/yellow.png' },
    { name: 'Orange', src: '/integrations/hero/orange.png' },
    { name: 'Black', src: '/integrations/hero/black.png' },
  ]

  return (
    <section className="relative py-20 sm:py-28 md:py-40">
      <Image
        src="/integrations/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h1 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '1.3',
          color: '#323E50',
          textAlign: 'center',
          marginBottom: '1rem'
        }} className="text-3xl sm:text-4xl md:text-5xl">
          Seamless Integrations for Smarter Enterprise AI 
        </h1>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.6',
          letterSpacing: '2%',
          textAlign: 'center',
          maxWidth: '40rem',
          margin: '0 auto 2rem',
          padding: '0 8px'
        }} className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-16">
         Connect your existing business application and data sources. Unlock the full power of your enterprise data in one unified platform. 
        </p>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          {integrations.map((integration, index) => (
            <div key={index} className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 relative flex items-center justify-center">
              <Image
                src={integration.src}
                alt={integration.name}
                width={64}
                height={64}
                className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
