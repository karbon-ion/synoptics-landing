import Image from "next/image";

export default function TechStackCard() {
  return (
    <div className="bg-[#5662F6] w-full max-w-6xl mx-auto rounded-2xl mb-10 p-10 flex flex-col md:flex-row items-center justify-between text-white">
      <div className="md:max-w-md mb-6  md:mb-0">
        <h2 className="text-4xl md:text-4xl font-semibold leading-snug">
          <span className="block" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px", letterSpacing: "0%", whiteSpace: "nowrap" }}>Seamless integrations with</span>
          <span className="block" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "45px", letterSpacing: "0%" }}>your entire tech stack</span>
        </h2>
        <p className="text-sm mt-4 text-white/90">
          Your unified brain, connected to everything you work with.
          Your unified brain, connected to everything you work with.
        </p>
        <button className="mt-6 bg-white text-[#5662F6] px-5 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition-all">
          Get started →
        </button>
      </div>
      <div className="w-48 h-48 relative">
        <Image
          src="https://dummyimage.com/300x300/cccccc/000000&text=Lock"
          alt="Lock Illustration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
