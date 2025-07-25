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
            Discover How Strategic AI Consulting Services Delivers Operational benefits 
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
                 Custom AI Strategy & Roadmap  
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
                  Define and prioritise AI opportunities that align with your business goals. This ensures every initiative drives measurable growth and efficiency, maximising ROI. 
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
                  Governance and Ethical AI Frameworks  
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
                 Implement data privacy, bias mitigation, and compliance frameworks to safeguard trust and reduce regulatory risk. 
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
                 Change Management and Adoption Support 
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
                 Design custom training and communication plans to ensure rapid user buy-in and seamless integration. 
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
