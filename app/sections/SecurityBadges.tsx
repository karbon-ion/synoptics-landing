import Image from 'next/image';

const SecurityBadges = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      <Image
        src="/test-page/iso-background.png"
        alt="Security Background"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />

      <div className="container mx-auto relative z-10">
        <div className="flex justify-center items-center gap-x-6">
          <div className="w-[214px] flex justify-center">
            <Image src="/test-page/iso.svg" alt="ISO 27001" width={214} height={255} />
          </div>
          <div className="w-[214px] flex justify-center">
            <Image src="/test-page/essential.png" alt="Essential 8" width={214} height={255} />
          </div>
          <div className="w-[214px] flex justify-center">
            <Image src="/test-page/cyber-essential.png" alt="Cyber Essential" width={214} height={255} />
          </div>
          <div className="w-[214px] flex justify-center">
            <Image src="/test-page/authentic.png" alt="Authentic" width={214} height={255} />
          </div>
          <div className="w-[214px] flex justify-center">
            <Image src="/test-page/encrypted.png" alt="Encrypted" width={214} height={255} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
