import Image from 'next/image'

const Featured = () => {
  const boxStyle = {
    width: '225px',
    height: '214px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    padding: '20px'
  }

  const alternateBoxStyle = {
    ...boxStyle,
    width: '224.98px',
    height: '213.8px',
    background: '#FFFFFF',
    transform: 'translateY(12px)'
  }
  const integrations = [
    { name: 'XAI - Grok', src: '/model-hub/logos/Grok logo.jpeg', hasBackground: false },
    { name: 'DeepSeek', src: '/model-hub/logos/Deepseek logo.png', hasBackground: true },
    { name: 'Databricks', src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png', hasBackground: false },
    { name: 'Cohere', src: '/model-hub/logos/cohere.png', hasBackground: true },
    { name: 'AI21 Labs', src: '/model-hub/logos/A121 labs.png', hasBackground: false },
    { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png', hasBackground: true },
    { name: 'Mistral', src: '/model-hub/logos/Mistral.png', hasBackground: false },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png', hasBackground: true },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', hasBackground: false },
    { name: 'Azure OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png', hasBackground: true }
  ]

  return (
    <section className="mt-20 relative py-20">
      <Image
        src="/integrations/featured/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '72px',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          Featured Models 
        </h2>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '2%',
          textAlign: 'center',
          maxWidth: '60rem',
          margin: '0 auto 4rem'
        }}>
          Synoptix supports a wide range of leading AI models, allowing you to leverage the best technology for your specific use cases and requirements 
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'start'
        }}>
          {integrations.map((integration, index) => (
            <div
              key={index}
              style={{
                ...(index % 2 === 1 ? alternateBoxStyle : boxStyle),
                boxShadow: index % 2 === 0 ? '0px 6px 40px 0px #E4E9F180' : 'none',
                borderRadius: '8px'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <Image
                  src={integration.src}
                  alt={integration.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: '26px',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#323E50'
              }}>
                {integration.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
