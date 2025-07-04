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
    { name: 'Confluence', src: '/integrations/featured/icons/blue.png', hasBackground: false },
    { name: 'Github', src: '/integrations/featured/icons/github.png', hasBackground: true },
    { name: 'Gmail', src: '/integrations/featured/icons/gmail.png', hasBackground: false },
    { name: 'Google Drive', src: '/integrations/featured/icons/one-drive.png', hasBackground: true },
    { name: 'Notion', src: '/integrations/featured/icons/notion.png', hasBackground: false },
    { name: 'Sharepoint', src: '/integrations/featured/icons/sharepoint.png', hasBackground: true },
    { name: 'Slack', src: '/integrations/featured/icons/slack.png', hasBackground: false },
    { name: 'Teams', src: '/integrations/featured/icons/teams.png', hasBackground: true },
    { name: 'Zendesk', src: '/integrations/featured/icons/zen-desk.png', hasBackground: false },
    { name: 'Salesforce', src: '/integrations/featured/icons/salesforce.png', hasBackground: true }
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
          Featured Integration
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
         Synoptix AI connects with hundreds of enterprise systems so that you can embed AI into workflows. Access and act on your business data directly through your existing tools.
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
