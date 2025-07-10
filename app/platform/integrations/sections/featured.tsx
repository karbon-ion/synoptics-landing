import Image from 'next/image'

const Featured = () => {
  // Styles are now handled with Tailwind classes
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
    <section className="mt-12 sm:mt-16 md:mt-20 relative py-12 sm:py-16 md:py-20">
      <Image
        src="/integrations/featured/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '1.3',
          textAlign: 'center',
          marginBottom: '1rem'
        }} className="text-3xl sm:text-4xl md:text-5xl">
          Featured Integration
        </h2>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.6',
          letterSpacing: '2%',
          textAlign: 'center',
          maxWidth: '60rem',
          margin: '0 auto 2rem',
          padding: '0 8px'
        }} className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-16">
        Synoptix AI connects with multiple enterprise systems so that you can embed AI into workflows. Access and act on your business data directly through your existing tools. 
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 max-w-[1200px] mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center relative p-3 sm:p-4 md:p-5 rounded-lg ${index % 2 === 1 ? 'bg-white transform translate-y-2 sm:translate-y-3' : 'shadow-md'}`}
            >
              <div className="mb-3 sm:mb-4">
                <Image
                  src={integration.src}
                  alt={integration.name}
                  width={48}
                  height={48}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              </div>
              <p className="font-poppins text-base sm:text-lg md:text-xl text-center text-[#323E50]">
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
