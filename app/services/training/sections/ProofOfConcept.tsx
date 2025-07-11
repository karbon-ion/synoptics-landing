import Image from 'next/image';
import Link from 'next/link';

export default function ProofOfConcept() {
  return (
    <section className="w-full">
      {/* Heading Section with White Background */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          {/* <h2 style={{
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#5E5CFF',
            marginBottom: '8px'
          }}>
            PROOF OF CONCEPT
          </h2> */}
          <h3 style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '44px',
            letterSpacing: '0px',
            color: '#323E50'
          }}>
           Our Workshops & Training    
          </h3>
        </div>
      </div>
      
      {/* Cards Section with Background Image */}
      <div className="relative py-10 sm:py-20 overflow-hidden">
        <Image
          src="/services/POC/cards-bg.png"
          alt="Cards Background"
          fill
          className="object-cover md:object-contain z-0"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px]">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/bulb.png" 
                    alt="Validated Product Idea" 
                    width={80} 
                    height={80}
                  />
                </div>
                <h4 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '26px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                  color: '#323E50',
                  marginBottom: '16px'
                }}>
                 AI Awareness    
                </h4>
                <p style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#323E50'
                }}>
               Build a solid foundation in artificial intelligence in what it is, where it's used, and why it matters. Perfect for beginners looking to understand AI’s growing role in life and work.  
</p>
              </div>
            </div>
            
            {/* Card 2 - Positioned slightly higher */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px] md:-mt-8">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/like.png" 
                    alt="Attract Investors" 
                    width={80} 
                    height={80}
                  />
                </div>
                <h4 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '26px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                  color: '#323E50',
                  marginBottom: '16px'
                }}>
                AI Fundamentals    
                </h4>
                <p style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#323E50'
                }}>
                Explore behind-the-scenes of how AI works. Learn key principles, methods, and the data-driven logic behind today’s emerging technologies.  
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px]">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/cost.png" 
                    alt="Cost Effectiveness" 
                    width={80} 
                    height={80}
                  />
                </div>
                <h4 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '26px',
                  lineHeight: '28px',
                  letterSpacing: '0px',
                  color: '#323E50',
                  marginBottom: '16px'
                }}>
                AI for Business Leaders   
                </h4>
                <p style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#323E50'
                }}>
                Gain strategic insight into transformative technologies like LLMs and RAG. Learn how to assess, implement, and lead AI initiatives that drive business impact.  
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center bg-[#5E5CFF] hover:bg-[#4A48FF] text-white font-poppins font-medium px-8 py-3 rounded-full transition-all duration-300"
            >
              Talk to our Expert →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
