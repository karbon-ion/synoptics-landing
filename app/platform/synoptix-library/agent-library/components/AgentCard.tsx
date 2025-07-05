'use client'

import Image, { StaticImageData } from "next/image"
import copyIcon from "@/assets/copy.svg"

interface AgentCardProps {
  title: string
  description: string
  tags: string[]
  icons: StaticImageData[]
  onConfigure?: () => void
}

export function AgentCard({ title, description, tags, icons, onConfigure }: AgentCardProps) {
  return (
    <div className="group p-6 bg-white border border-gray-200 rounded-[20px] hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer w-full h-[214px]">
      <div className="h-full flex flex-col relative">
        <div className="absolute top-0 right-0 p-1.5 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
          <Image src={copyIcon} alt="copy" width={16} height={16} className="opacity-70" />
        </div>
        <div className="flex items-center gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-[#EEF2FF] text-[#4F46E5] text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base font-semibold mb-2 font-poppins text-[16px] leading-[23.4px]">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-auto font-poppins font-normal leading-5 line-clamp-2 overflow-hidden">
          {description}
        </p>
        <div className="mt-auto">
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-2">
              {icons.map((icon, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-white border border-gray-200 relative overflow-hidden">
                  <Image
                    src={icon}
                    alt="platform icon"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
            </div>
            {/* <button 
              onClick={(e) => {
                e.stopPropagation()
                onConfigure?.()
              }} 
              className="text-[#4F46E5] text-xs font-bold leading-[12px] hover:text-[#3d37b3] transition-colors" 
              style={{fontFamily: 'Syne'}}
            >
              Configure →
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
