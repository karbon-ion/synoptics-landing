import Image from 'next/image'

const Points = () => {
  const cardData = [
    {
      title: "Deploy AI Agents",
      description: "Launch task-specific AI agents in seconds — from summarizing documents to answering complex queries"
    },
    {
      title: "Customize Models",
      description: "Fine-tune behavior and responses using real examples and natural language, not code."
    },
    {
      title: "Connect Your Data",
      description: "Seamlessly link models with your CRMs, ERPs, SharePoint, Outlook, and more."
    },
    {
      title: "Build Secure Workflows",
      description: "Create AI-driven processes that respect your internal governance."
    }
  ];

  return (
    <section className="py-16 relative">
      <Image
        src="/model-hub/features-bg.png"
        alt="Features Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="max-w-8xl mx-auto container px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
          {/* Large card on the left */}
          <div 
            className="rounded-lg p-10 flex flex-col justify-center relative overflow-hidden" 
            style={{ width: '407px', height: '485px' }}
          >
            <Image
              src="/model-hub/card-1-bg.png"
              alt="Card Background"
              fill
              className="object-contain z-0"
              quality={100}
            />
            <h2 style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '45px',
              letterSpacing: '0%',
              color: '#323E50',
              position: 'relative',
              zIndex: 10
            }}>
              All your AI tools.
              <br />
              One powerful
              <br />
              workspace.
            </h2>
          </div>

          {/* 2x2 grid of smaller cards on the right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg pt-6 pl-6 pr-6 shadow-sm flex flex-col" 
                style={{ width: '384px', height: '240px' }}
              >
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <Image 
                    src="/model-hub/icon-for-card.png" 
                    alt={card.title} 
                    width={69} 
                    height={69}
                  />
                </div>
                <h3 className='' style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '26px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                  color: '#323E50',
                  marginBottom: '0.5rem',
                  paddingRight:"8rem"
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#4B5563'
                }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Points
