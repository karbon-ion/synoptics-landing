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
    <section className="relative  py-40">
      <Image
        src="/integrations/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '72px',
          color: '#323E50',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          Seamlessly integrate your apps
        </h1>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '2%',
          textAlign: 'center',
          maxWidth: '40rem',
          margin: '0 auto 4rem'
        }}>
          Connect all your existing applications. Experience the power of your company's collective knowledge all in one place.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {integrations.map((integration, index) => (
            <div key={index} className="w-20 h-20 relative flex items-center justify-center">
              <Image
                src={integration.src}
                alt={integration.name}
                width={86}
                height={86}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
