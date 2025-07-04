import Image from "next/image"

export default function DeploymentSection() {
  return (
    <section className="w-full py-6 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-center text-3xl font-bold mb-8" style={{fontFamily: "Syne", fontWeight: 700, fontSize: "36px", lineHeight: "45px"}}>
          Deployment Options Tailored to <span className="text-[#5662F6]">Enterprise Needs</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
          {/* Cloud-Native Deployment */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-[#5662F6] border-r border-l border-b border-gray-200 w-full md:w-[600px] transition-all hover:shadow-lg">
            <div className="h-[250px] md:h-[400px] relative flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <Image
                src="/platform/cloud-native-development.svg"
                alt="Cloud-Native Deployment illustration"
                width={350}
                height={350}
                className="object-contain w-[250px] md:w-[350px] h-[250px] md:h-[350px]"
              />
            </div>
            <div className="text-center md:text-left px-2 md:px-4">
              <h2 className="text-[#5662F6] font-bold text-xl md:text-2xl mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Cloud-Native Deployment</h2>
              <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>(Client's Environment)</p>
              <ul className="space-y-1.5 md:space-y-1">
                <FeatureItem text="Client-hosted in Azure environment" />
                <FeatureItem text="Data sovereignty" />
                <FeatureItem text="Low maintenance overhead" />
                <FeatureItem text="Compliance ready" />
                <FeatureItem text="Rapid scalability" />
              </ul>
            </div>
          </div>

          {/* Fully-Offline Deployment */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-[#5662F6] border-r border-l border-b border-gray-200 w-full md:w-[600px] transition-all hover:shadow-lg">
            <div className="h-[250px] md:h-[400px] relative flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <Image
                src="/platform/fully-offline-development.svg"
                alt="Fully-Offline Deployment illustration"
                width={350}
                height={350}
                className="object-contain w-[250px] md:w-[350px] h-[250px] md:h-[350px]"
              />
            </div>
            <div className="text-center md:text-left px-2 md:px-4">
              <h2 className="text-[#5662F6] font-bold text-xl md:text-2xl mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Fully-Offline Deployment</h2>
              <p className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>(On-Premise/Private Cloud) </p>
              <ul className="space-y-1.5 md:space-y-1 mt-4 md:mt-6">
                <FeatureItem text="On-premise deployment" />
                <FeatureItem text="Self-hosted and controlled" />
                <FeatureItem text="Custom integrations supported" />
                <FeatureItem text="Offline evaluations" />
                <FeatureItem text="No cloud dependency" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-0.5 flex-shrink-0">
        <Image 
          src="/test-page/synoptix/star.png" 
          alt="Star bullet" 
          width={16} 
          height={16} 
          className="text-[#5662F6] w-3.5 h-3.5 md:w-4 md:h-4"
        />
      </div>
      <span className="text-xs md:text-sm text-gray-700">{text}</span>
    </li>
  )
}
