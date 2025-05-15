import React from 'react';
import Image from 'next/image';

const CertificationSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:max-w-xl">
            <p className="text-gray-700 text-sm md:text-base">
              Synoptix is ISO 27001 certified, aligned with the ACSC Essential Eight mitigation
              strategies, and built to meet rigorous enterprise security and compliance standards.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <Image
              src="/footer/iso.png"
              alt="ISO 27001 Certification"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/footer/essential.png"
              alt="ACSC Essential Eight"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/footer/cyber.png"
              alt="Cyber Security"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
