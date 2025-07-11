import Image from 'next/image';
import Link from 'next/link';

export default function EventsHero() {
  return (
    <div className="relative w-full max-w-7xl rounded-lg mx-auto mb-5 p-10 py-10 mt-20 overflow-hidden bg-[#F5F8FF]">
      <Image
        src="/events/hero-bg.png"
        alt="Events Background"
        fill
        className="object-contain z-0 opacity-50"
        priority
      />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <div className="bg-[#5E5CFF] text-white px-4 py-1 text-sm inline-flex items-center gap-2" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                <Image 
                  src="/events/calender.png" 
                  alt="Calendar" 
                  width={20} 
                  height={20} 
                />
                Upcoming Event
              </div>
            </div>
            
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800 whitespace-nowrap" style={{ fontFamily: 'Syne' }}>See <span className="text-[#5E5CFF]">Synoptix AI</span> in action</h1>
            
            <p className="text-[#4A5565] mb-6" style={{ fontFamily: 'Poppins' }}>
              Synoptix AI is tackling the enterprise challenge of generative AI with context-aware 
              retrieval, automation, and a powerful search platform. In this showcase, we'll 
              present real-world government use cases, showing how Synoptix AI cuts service 
              delivery costs, modernizes citizen engagement, and automates key workflows.
            </p>
            
            <Link href="#learn-more" className="inline-flex items-center bg-[#5E5CFF] text-white px-6 py-3 rounded-full font-medium">
              Learn More <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2">
            {/* <div className="bg-[#1A2942] rounded-lg p-6 relative"> */}
              <Image 
                src="/events/government.png" 
                alt="AI Government Showcase" 
                width={500} 
                height={500} 
                className="w-full h-auto max-w-[500px] mx-auto"
              />
              
             
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
