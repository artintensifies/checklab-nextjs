'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <aside className="fixed top-10 left-0 h-screen w-[245px] bg-[#0d1117] text-white z-40 shadow-lg">
      <ScrollArea className="h-[calc(100vh-50px)] px-4 py-6">
        <nav className="space-y-2 text-sm">

          {/* Main Links */}
          <Link href="/home" className="block px-2 py-2 rounded hover:bg-[#27272A] transition font-medium">
            Home
          </Link>
          <Link href="/labs" className="block px-2 py-2 rounded hover:bg-[#27272A] transition font-medium">
            Labs
          </Link>
          <Link href="/post" className="block px-2 py-2 rounded hover:bg-[#27272A] transition font-medium">
            Checks
          </Link>
          <Link href="/post" className="block px-2 py-2 rounded hover:bg-[#27272A] transition font-medium">
            Inbox
          </Link>

          {/* Separator */}
          <div className="border-t border-[#27272A] my-4" />

          <Link href="/post" className="block px-2 py-2 rounded hover:bg-[#27272A] transition font-medium">
            My Posts
          </Link>

          <div className="border-t border-[#27272A] my-4" />

          {/* Secondary Links */}
          <Link href="/projects" className="block px-2 py-2 rounded hover:bg-[#27272A] transition">
            Projects
          </Link>

          {/* Collapsible Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="settings">
              <AccordionTrigger className="px-2 py-2 hover:bg-[#27272A] rounded">
                Settings
              </AccordionTrigger>
              <AccordionContent className="ml-4 space-y-1">
                <Link href="/settings/profile" className="block py-1 hover:text-muted-foreground">
                  Profile
                </Link>
                <Link href="/settings/team" className="block py-1 hover:text-muted-foreground">
                  Team
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="border-t border-[#27272A] my-4" />

          {/* New Check Button */}
          <div className="pt-3 cursor-pointer">
            <Link href="/create-check">
              <Button
                className="w-full h-[50px] cursor-pointer py-1 bg-[#ffffff] text-[#27272A] text-[20px] font-semibold rounded-xl hover:bg-[#dadafc] transition"
              >
                + New Check
              </Button>
            </Link>
          </div>

        </nav>
      </ScrollArea>
    </aside>
  )
}
