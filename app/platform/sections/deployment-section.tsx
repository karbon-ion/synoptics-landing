import Image from "next/image"

export default function DeploymentSection() {
  return (
    <section className="w-full py-10 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          {/* Cloud-Native Deployment */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-[600px]">
            <div className="h-[400px] relative flex items-center justify-center bg-white rounded-xl overflow-hidden">
            <Image
                src="/platform/fully online development.svg"
                alt="Fully-Offline Deployment illustration"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left px-4">
              <h2 className="text-[#5662F6] font-bold text-2xl mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Cloud-Native Deployment</h2>
              <p className="text-gray-600 text-sm mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>(Client's Environment)</p>
              <ul className="space-y-1">
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-[600px]">
            <div className="h-[400px] relative  flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <Image
                src="/platform/fully online development.svg"
                alt="Fully-Offline Deployment illustration"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left px-4">
              <h2 className="text-[#5662F6] font-bold text-2xl mb-1" style={{ fontFamily: "Syne, sans-serif" }}>Fully-Offline Deployment</h2>
              <p className="text-gray-600 text-sm " style={{ fontFamily: "Poppins, sans-serif" }}>&nbsp;</p>
              <ul className="space-y-1 mt-6">
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
          className="text-[#5662F6]"
        />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  )
}
