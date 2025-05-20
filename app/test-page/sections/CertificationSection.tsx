import React from 'react';
import Image from 'next/image';

const CertificationSection = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="md:mb-0 max-w-3xl">
            <p 
              className="text-[#323E50] text-sm sm:text-base md:text-[16px] pr-8 pl-10 leading-relaxed"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            >
              Synoptix is ISO 27001 certified, aligned with the ACSC Essential Eight mitigation
              strategies, and built to meet rigorous enterprise security and compliance standards.
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-center sm:gap-6 md:gap-8">
            <Image
              src="/footer/iso.png"
              alt="ISO 27001 Certification"
              width={60}
              height={60}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <Image
              src="/footer/essential.png"
              alt="ACSC Essential Eight"
              width={60}
              height={60}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <Image
              src="/footer/cyber.png"
              alt="Cyber Security"
              width={60}
              height={60}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
