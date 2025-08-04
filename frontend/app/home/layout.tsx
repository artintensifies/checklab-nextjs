import '../globals.css'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'
import type { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      <TopNav />
      <Sidebar />
      <main className="pl-[240px] pt-[50px] px-6">
        {children}
      </main>
    </div>
  )
}
