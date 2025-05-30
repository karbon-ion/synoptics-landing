import Image from "next/image"

export default function DeploymentSection() {
  return (
    <section className="w-full py-6 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
          {/* Cloud-Native Deployment */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 w-full md:w-[600px]">
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
                <FeatureItem text="Fully managed LLM inference" />
                <FeatureItem text="Integrated vector search" />
                <FeatureItem text="Secure, resilient storage" />
                <FeatureItem text="Built-in RAG pipelines" />
                <FeatureItem text="Scalable API endpoints" />
                <FeatureItem text="Enterprise security & compliance" />
                <FeatureItem text="Extensible third-party integrations" />
              </ul>
            </div>
          </div>

          {/* Fully-Offline Deployment */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 w-full md:w-[600px]">
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
                <FeatureItem text="Local model hosting" />
                <FeatureItem text="On‑prem vector database" />
                <FeatureItem text="Self‑hosted object storage" />
                <FeatureItem text="Modular RAG orchestration" />
                <FeatureItem text="Container‑based deployment" />
                <FeatureItem text="Local REST API & UI" />
                <FeatureItem text="Complete data sovereignty" />
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
