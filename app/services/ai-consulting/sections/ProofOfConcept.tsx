import Image from 'next/image';
import Link from 'next/link';

export default function ProofOfConcept() {
  return (
    <section className="w-full">
      {/* Heading Section with White Background */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
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
            Why Choose Synoptix AI Consulting?
          </h3>
        </div>
      </div>
      
      {/* Cards Section with Background Image */}
      <div className="relative py-20 overflow-hidden">
        <Image
          src="/services/POC/cards-bg.png"
          alt="Cards Background"
          fill
          className="object-contain z-0"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg w-[379px] h-[360px]">
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
                  Customized AI Solutions
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
                  We develop AI strategies that align with your unique business objectives, ensuring relevance and effectiveness.
                </p>
              </div>
            </div>
            
            {/* Card 2 - Positioned slightly higher */}
            <div className="bg-white rounded-lg p-8 shadow-lg w-[379px] h-[360px] md:-mt-8">
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
                  Seamless Integration
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
                  Our solutions are designed to integrate effortlessly with your existing systems, minimizing disruption and maximizing adoption.
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg w-[379px] h-[360px]">
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
                 Scalable and Secure
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
                  Built with enterprise-grade security, our AI solutions are scalable to grow with your business needs.
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
