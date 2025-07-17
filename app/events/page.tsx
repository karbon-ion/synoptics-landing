'use client';

import EventsHero from './sections/EventsHero';
import Image from 'next/image';
import Link from 'next/link';
import SchemaOrgEvents from './schema';

export default function EventsPage() {
  return (
    <main className="overflow-x-hidden">
      <SchemaOrgEvents />
      <EventsHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Syne' }}>Recently Happened</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col" style={{ width: '384px', height: '580px' }}>
            <div className="relative w-full overflow-hidden" style={{ height: '337px', width: '382px' }}>
              {/* <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                Regional
              </div> */}
              <Image
                src="/events/recently.png"
                alt="iAwards Ceremony"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-[#5662F6] text-sm mb-2">June 24, 2025</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '22px', lineHeight: '24px', letterSpacing: '0%', color: '#323E50' }}>
               Act iAwards Ceremony
              </h3>
              <p className="text-gray-600 mb-4 flex-grow" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '20px', letterSpacing: '0%', color: '#323E50' }}>
                Proving the concept makes sure your idea is viable and gives you a certain roadmap based on a solid research. Proving the concept makes sure your idea is viable and gives you a certain roadmap
              </p>
              <Link 
                href="https://aiia.com.au/iawards/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-800 transition-colors duration-300"
              >
                Read more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
