import Image from "next/image";
import Link from "next/link";

export default function TechStackCard() {
  return (
    <div className="bg-[#5662F6] w-full max-w-6xl mx-auto rounded-2xl mb-10 p-6 md:p-10 flex flex-col md:flex-row items-center relative overflow-hidden text-white">
      <div className="md:max-w-md mb-6 md:mb-0 p-10 z-10">
        <h2 className="text-4xl md:text-4xl font-semibold leading-snug">
          <span className="block" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "28px", lineHeight: "45px", letterSpacing: "0%", whiteSpace: "nowrap" }}>SynoGuard</span>
          <span className="block" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "28px", lineHeight: "45px", letterSpacing: "0%", whiteSpace: "nowrap" }}>Secure and Built for Enterprise </span>
        </h2>
        <p className="text-sm mt-4 mb-4 text-white/90" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "24px", letterSpacing: "0%" }}>
        Prevent harmful content, block unauthorised access, and protect your business data with Synoptix AI enterprise-ready security layer. 
        </p>
        <Link href="contact-us" className="mt-6 bg-white text-[#5662F6] px-5 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition-all">
        Discover Enterprise AI Security 
        </Link>
      </div>
      <div className="absolute right-[-1%] top-1/2 transform -translate-y-1/2 md:w-[70%] h-full flex items-center justify-end">
        <Image
          src="/platform/integration lock.png"
          alt="Integration Lock"
          width={700}
          height={700}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
