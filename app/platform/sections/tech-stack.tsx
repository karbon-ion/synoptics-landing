import Image from "next/image";
import Link from "next/link";

export default function TechStackCard() {
  return (
    <div className="bg-[#5662F6] w-[92%] md:w-full max-w-6xl mx-auto rounded-xl md:rounded-2xl mb-6 md:mb-10 p-4 md:p-10 flex flex-col md:flex-row items-center relative overflow-hidden text-white">
      <div className="w-[90%] md:w-full md:max-w-md mb-4 md:mb-0 p-3 md:p-10 z-10">
        <h2 className="font-semibold leading-tight md:leading-snug">
          <span className="block text-xl md:text-2xl" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, lineHeight: "normal", letterSpacing: "0%" }}>Secure and Built for Enterprise</span>
        </h2>
        <p className="text-xs md:text-sm mt-3 md:mt-4 mb-4 text-white/90" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "20px", letterSpacing: "0%" }}>
        Protect what matters. SynoGuard is built into the Synoptix AI Platform for Enterprise to defend against prompt injection, unauthorised access, and data leakage—so your AI works safely across departments.  
        </p>
        <Link href="contact-us" className="inline-block mt-4 md:mt-6 bg-white text-[#5662F6] px-4 md:px-5 py-2 text-sm md:text-base rounded-full font-medium shadow-md hover:bg-gray-100 transition-all">
        Discover Enterprise AI Security 
        </Link>
      </div>
      <div className="absolute right-[-15%] md:right-[-1%] top-1/2 transform -translate-y-1/2 w-[90%] md:w-[70%] h-full pt-10 pb-5 pl-20 flex items-center justify-end opacity-30 md:opacity-100">
        <Image
          src="/platform/integration lock.png"
          alt="Integration Lock"
          width={700}
          height={600}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
