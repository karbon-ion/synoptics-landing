import Image from 'next/image';
import Link from 'next/link';

export default function ProofOfConcept() {
  return (
    <section className="w-full">
      {/* Heading Section with White Background */}
      <div className="bg-white py-30 text-center">
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
            Discover How Fine-Tuning Services Maximise the ROI of Your AI Investments 
          </h3>
        </div>
      </div>
      
      {/* Cards Section with Background Image */}
      <div className="relative py-20 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/POC/cards-bg.png"
            alt="Cards Background"
            fill
            className="object-cover z-0"
            style={{ objectPosition: 'center top' }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16 justify-items-center">
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
                 Customised Model Tuning 
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
                 We adjust and train pre-built AI models on your own data and use cases. This specialised fine-tuning improves accuracy and relevance for your specific tasks. 
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
                 Performance & Cost Optimisation
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
               Our experts streamline AI workflows and model configurations for faster inference and lower computational costs. You get efficient, reliable performance that scales with demand. 
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
                 Domain-Specific Solutions 
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
               We tailor AI models to excel in your industry context, whether it’s advanced chatbots, document analysis, or predictive analytics. This ensures your AI is truly fit for purpose. 
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px]">              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/bulb.png" 
                    alt="Continuous Improvement" 
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
                 Continuous Improvement & Governance 
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
                We provide ongoing model maintenance and updates. By regularly evaluating and optimising, we keep your AI solutions effective, compliant, and aligned with evolving data and business needs. 
                </p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px] md:-mt-8">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/like.png" 
                    alt="Brand-Aligned Style" 
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
                 Brand-Aligned Style and Tone  
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
               Shape AI's voice to mirror your brand, whether that's professional, technical, or conversational. Perfect for maintaining consistency across customer support, internal comms, and brand storytelling. 
                </p>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg w-full max-w-[379px] h-auto min-h-[320px] sm:h-[360px]">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/services/POC/cost.png" 
                    alt="Compliance and Safety" 
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
                 Built-In Compliance and Safety 
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
               Ensure AI outputs align with your organisation's compliance policies and regulatory obligations. Fine-tuning helps safeguard operations in industries where trust, ethics, and accountability are paramount.  
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16 mb-8">
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
