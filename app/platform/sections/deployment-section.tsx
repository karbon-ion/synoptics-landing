import Image from "next/image"
import { Check } from "lucide-react"

export default function DeploymentComparison() {
  return (
    <div className="w-full max-w-6xl py-40 mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cloud-Native Deployment */}
        <div className="bg-slate-50 rounded-lg p-6 flex flex-col flex-1">
          <div className="h-40 relative mb-6 flex items-center justify-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4033/4033437.png"
              alt="Cloud-Native Deployment illustration"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <h3 className="text-blue-600 font-bold text-xl mb-1">Cloud-Native Deployment</h3>
          <p className="text-gray-600 text-sm mb-4">(Client's Environment)</p>
          <ul className="space-y-2">
            <FeatureItem text="Fully managed LLM inference" />
            <FeatureItem text="Integrated vector search" />
            <FeatureItem text="Secure instant storage" />
            <FeatureItem text="Built-in RAG capabilities" />
            <FeatureItem text="Scalable API endpoints" />
            <FeatureItem text="Enterprise security & compliance" />
            <FeatureItem text="Extensive third-party integrations" />
          </ul>
        </div>

        {/* Fully-Offline Deployment */}
        <div className="bg-slate-50 rounded-lg p-6 flex flex-col flex-1">
          <div className="h-40 relative mb-6 flex items-center justify-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2888/2888407.png"
              alt="Fully-Offline Deployment illustration"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <h3 className="text-blue-600 font-bold text-xl mb-1">Fully-Offline Deployment</h3>
          <p className="text-gray-600 text-sm mb-4">&nbsp;</p>
          <ul className="space-y-2">
            <FeatureItem text="Fully managed LLM inference" />
            <FeatureItem text="Integrated vector search" />
            <FeatureItem text="Secure instant storage" />
            <FeatureItem text="Built-in RAG capabilities" />
            <FeatureItem text="Scalable API endpoints" />
            <FeatureItem text="Enterprise security & compliance" />
            <FeatureItem text="Extensive third-party integrations" />
          </ul>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-1 flex-shrink-0">
        <Check className="h-4 w-4 text-blue-600" />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  )
}
