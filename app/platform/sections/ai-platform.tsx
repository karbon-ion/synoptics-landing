import { StarIcon, SearchIcon } from "lucide-react"

export default function AIPlatformDiagram() {
  return (
    <div className="w-full max-w-7xl mx-auto mb-20 p-20 shadow-lg font-sans bg-gray-50/30">
      {/* Agents Section */}
      <div className="rounded-lg bg-[#e6f0ff]  mb-0">
        <div className="flex items-center justify-center  gap-2 text-indigo-500 mb-4">
          <StarIcon className="h-5 w-5" />
          <h2 className="text-lg  mt-2 font-medium tracking-wide">Agents</h2>
        </div>

        {/* Single container without borders between items */}
        <div className="bg-white rounded shadow-lg p-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center text-sm font-medium">Agent Creation</div>
            <div className="text-center text-sm font-medium">Reasoning & Decision Making</div>
            <div className="text-center text-sm font-medium">Agent Collaboration & APIs</div>
            <div className="text-center text-sm font-medium">Knowledge Access</div>
          </div>
        </div>
      </div>

      {/* Vertical dotted line */}
      <div className="flex justify-center h-8">
        <div className="h-full border-l border-dashed border-blue-200"></div>
      </div>

      {/* Enterprise Search Section */}
      <div className="rounded-lg overflow-hidden mb-0">
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-500 py-3">
          <div className="flex items-center justify-center gap-2 text-white">
            <SearchIcon className="h-5 w-5" />
            <h2 className="text-lg font-medium tracking-wide">Enterprise Search</h2>
          </div>
        </div>

        <div className="bg-white p-4 border border-gray-100 rounded-b-lg">
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="py-2 px-1 text-center text-sm font-medium">Retrieval Systems</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Query Understanding</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Content Understanding</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Orchestration & Self Learning</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="py-2 px-1 text-center text-sm font-medium">Data Management</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Multimodal</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Knowledge Structuring</div>
            <div className="py-2 px-1 text-center text-sm font-medium">Developer Tools</div>
          </div>
        </div>
      </div>

      {/* Vertical dotted lines */}
      <div className="grid grid-cols-3 h-8">
        <div className="flex justify-center">
          <div className="h-full border-l border-dashed border-blue-200"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-full border-l border-dashed border-blue-200"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-full border-l border-dashed border-blue-200"></div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">Observability</div>
          <div className="bg-white py-3 text-center text-sm font-medium">Performance Visibility</div>
        </div>

        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">Evaluations</div>
          <div className="bg-white py-3 text-center text-sm font-medium">Quantitative Scoring</div>
        </div>

        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">LLM Ops</div>
          <div className="bg-white py-3 text-center text-sm font-medium">CI/CD for AI Applications</div>
        </div>
      </div>

      {/* Security, Compliance, Governance Row */}
      <div className="rounded-lg overflow-hidden mb-4">
        <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-500 text-white">
          <div className="py-3 text-center font-medium">Security</div>
          <div className="py-3 text-center font-medium">Compliance</div>
          <div className="py-3 text-center font-medium">Governance</div>
        </div>

        <div className="flex">
          {/* Responsible AI & Trust - taller and on the left */}
          <div className="w-1/4 bg-blue-50/80 flex items-center justify-center">
            <div className="text-center text-sm font-medium py-6">
              Responsible
              <br />
              AI & Trust
            </div>
          </div>
          <div className="w-3/4 grid grid-cols-3">
            <div className="bg-white py-3 text-center text-sm font-medium border-r border-gray-100">
              AI Applications
            </div>
            <div className="bg-white py-3 text-center text-sm font-medium border-r border-gray-100">
              AI Applications
            </div>
            <div className="bg-white py-3 text-center text-sm font-medium">AI Applications</div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">Integration</div>
          <div className="bg-white py-3 text-center text-sm font-medium">AI Applications</div>
        </div>

        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">Tools</div>
          <div className="bg-white py-3 text-center text-sm font-medium">AI Applications</div>
        </div>

        <div className="rounded-lg bg-blue-50/80 overflow-hidden">
          <div className="py-3 text-center font-medium">Deployement</div>
          <div className="bg-white py-3 text-center text-sm font-medium">AI Applications</div>
        </div>
      </div>
    </div>
  )
}
