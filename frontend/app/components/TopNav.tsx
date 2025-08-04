'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function TopNav() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 w-full h-[50px] bg-[#010409] flex items-center justify-between px-4 shadow shadow-black z-50">
      
      {/* Left: CHECKLAB text */}
      <div className="w-[107px] flex items-center font-bold text-white text-lg">
        CHECKLAB
      </div>

      {/* Center: Search Input */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search checks or tags..."
          className="max-w-md w-[392px] h-9 bg-[#27272A] border border-[#3F3F46] text-white placeholder:text-[#A1A1AA] rounded-md px-3"
        />
      </div>

      {/* Right: PAPERS and JOIN buttons */}
      <div className="w-[107px] flex justify-end items-center gap-2 z-10">
        <Button
          variant="ghost"
          className="text-white text-sm hover:text-[#b94008] px-2 h-[37px]"
        >
          PAPERS
        </Button>
        <Button 
          onClick={() => router.push('/claim')}
          className="w-[79px] h-[37px] cursor-pointer bg-[#b94008] text-white text-sm rounded-[30px] border-none hover:bg-[#5f5fac] transition-colors duration-150"
        >
          JOIN
        </Button>
      </div>
    </div>
  )
}