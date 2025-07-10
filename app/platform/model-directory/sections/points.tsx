import Image from 'next/image'

const Points = () => {
  const cardData = [
    {
      title: "Optimise Agent Performance",
      description: "Explore and fine-tune the latest models to enhance how your agents respond. Mix and match models to suit specific workflows, use cases, or requirements."
    },
    {
      title: "Flexibility and Full Control",
      description: "Maintain control over model access, deployment, and performance on your terms, in your environment."
    },
    {
      title: "Avoid Single-Model Dependency",
      description: "Relying on one language model introduces operational and strategic risk. Synoptix AI gives you the flexibility, so you're prepared with a Plan B."
    },
    {
      title: "Commercial and Open-Source Models",
      description: "Test the latest LLMs from top providers, all in a secure, no-code environment. Teams can explore how different models perform with agents, instantly."
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 relative">
      <Image
        src="/model-hub/features-bg.png"
        alt="Features Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="max-w-8xl mx-auto container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-6">
          {/* Large card on the left - Mobile version */}
          <div 
            className="lg:hidden rounded-lg p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden w-full max-w-[407px] h-[300px] sm:h-[400px]"
          >
            <div className="hidden sm:block">
              <Image
                src="/model-hub/card-1-bg.png"
                alt="Card Background"
                fill
                className="object-contain z-0"
                quality={100}
              />
            </div>
            <div className="sm:hidden">
              <Image
                src="/model-hub/card-1-bg-rotate.png"
                alt="Card Background"
                fill
                className="object-contain z-0"
                quality={100}
              />
            </div>
            <h2 style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '36px',
              letterSpacing: '0%',
              color: '#323E50',
              position: 'relative',
              zIndex: 10,
              maxWidth: '100%',
              padding: '0 10px'
            }}>
              Discover, Compare,<br />and Deploy the<br />Best Language<br />Models All in One Place
            </h2>
          </div>
          
          {/* Desktop version of the large card with exact original styling */}
          <div 
            className="hidden lg:flex rounded-lg p-10 flex-col justify-center relative overflow-hidden" 
            style={{ width: '407px', height: '600px' }}
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
              Discover, Compare, and Deploy the     
              <br />
               Best Language 
              <br />
              Models All in One Place
            </h2>
          </div>

          {/* 2x2 grid of smaller cards on the right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
            {cardData.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg pt-6 pl-6 pr-6 pb-6 shadow-sm flex flex-col" 
                style={{ width: '100%', maxWidth: '384px', minHeight: '280px', maxHeight: '300px', overflow: 'hidden' }}
              >
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                  <Image 
                    src="/model-hub/icon-for-card.png" 
                    alt={card.title} 
                    width={69} 
                    height={69}
                  />
                </div>
                <h3 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                  color: '#323E50',
                  marginBottom: '1rem',
                  paddingRight: '1rem'
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
