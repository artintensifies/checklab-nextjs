'use client'

import { ReactNode } from 'react'
import { LabTopbar } from './_components/LabTopbar'

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <LabTopbar />
      <main className="px-6 py-6">{children}</main>
    </div>
  )
}
