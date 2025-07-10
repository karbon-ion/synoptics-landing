import Image from 'next/image';

const SecurityBadges = () => {
  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      <Image
        src="/test-page/iso-background.png"
        alt="Security Background"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-white mb-8 sm:mb-12 md:mb-16" style={{ fontFamily: "Syne", fontWeight: 700 }}>Built on Modern Security Standards<br className="hidden sm:block"/>and Certified Frameworks</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[214px] flex justify-center">
            <Image src="/test-page/iso.svg" alt="ISO 27001" width={214} height={255} className="w-full h-auto" />
          </div>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[214px] flex justify-center">
            <Image src="/test-page/essential.png" alt="Essential 8" width={214} height={255} className="w-full h-auto" />
          </div>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[214px] flex justify-center">
            <Image src="/test-page/cyber-essential.png" alt="Cyber Essential" width={214} height={255} className="w-full h-auto" />
          </div>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[214px] flex justify-center">
            <Image src="/test-page/authentic.png" alt="Authentic" width={214} height={255} className="w-full h-auto" />
          </div>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[214px] flex justify-center">
            <Image src="/test-page/encrypted.png" alt="Encrypted" width={214} height={255} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
