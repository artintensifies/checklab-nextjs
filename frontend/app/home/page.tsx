
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import CheckCards from '../components/CheckCards'
import TrendingCard from '../components/TrendingCard'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'foryou' | 'trending'>('foryou')

  return (
    <main className="relative min-h-screen bg-[#0e0e10] text-foreground px-7 py-10">
      {/* TrendingCard fixed on the right */}
      <div className="sticky top-[60px] mt-20 px-3 w-[305px] float-right">
        <TrendingCard />
      </div>

      <div className="max-w-7xl mx-auto pr-[340px]"> {/* Add right padding for the card */}
        {/* Title */}
 

        {/* Buttons */}
        {/* <div className="flex gap-2 mb-10">
          {['Home', 'Labs', 'Checks', 'Explore'].map((label) => (
            <Button
              key={label}
              className="w-[220px] h-[45px] text-[#000000] text-[23px] font-medium rounded-[6px] cursor-pointer bg-[#f1f1f1] hover:bg-[#000000] hover:text-[#f1f1f1] transition-colors duration-150"
            >
              {label}
            </Button>
          ))}
        </div> */}

        {/* For You / Trending Tabs */}
        {/* <div className="flex gap-20 mb-6">
          {['trending', 'foryou'].map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab as 'trending' | 'foryou')}
              className={`text-white font-semibold cursor-pointer pb-1 ${
                activeTab === tab ? 'border-b-2 border-white' : 'opacity-60'
              }`}
              style={{
                width: '87px',
                height: '31px',
                fontSize: '18px',
                lineHeight: '22px',
                paddingBottom: '7px',
                borderBottomWidth: activeTab === tab ? '2px' : '0',
                borderColor: activeTab === tab ? 'white' : 'transparent'
              }}
            >
              {tab === 'trending' ? 'Trending' : 'For You'}
            </p>
          ))}
        </div> */}

        {/* Cards */}
        <CheckCards />
      </div>
    </main>
  )
}
