'use client'

import { RightBlock } from './_components/RightBlock'
import { Badge } from '@/components/ui/badge'
import { ConstructBar } from './_components/Construct'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Footer } from './_components/Footer'

export default function LabPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Main Horizontal Section */}
      <div className="flex px-8 py-0 gap-6 flex-grow">
        {/* Left Content */}
        <div className="w-[897px] space-y-7">
          {/* Header */}
          <div className="space-y-0">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">Sentient Memory Compression Lab</h1>
              <Badge variant="outline" className="text-white text-sm">Active</Badge>
            </div>
            <div className="border-t border-[#27272A] my-4" />
            <div className="flex gap-2 mt-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-400">by Anmol Helmi • Updated 2 days ago</span>
            </div>
          </div>

          <ConstructBar />
        </div>

        {/* Right Content */}
        <RightBlock />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
