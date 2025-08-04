'use client'

import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function LabTopbar() {
  const router = useRouter()

  return (
    <header className="h-[105px] bg-[#010409] w-full border-b border-[#1e1e20] flex flex-col justify-between">
      
      {/* Top Section: 52px */}
      <div className="h-[52px] px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1
           onClick={() => router.push('/home')}
           className="text-[15px] cursor-pointer font-bold"><ArrowBackIcon/> Back to Home</h1>
          
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">⭐ Follow</Button>
          <Avatar className="w-8 h-8">
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Bottom Section: 45px */}
      <div className="h-[45px] px-7 flex items-center border-none">
        <Tabs defaultValue="overview">
          <TabsList className="bg-transparent p-0 space-x-7">
            <TabsTrigger value="overview" asChild>
              <Link href="/labs" className="text-sm font-medium text-muted-foreground hover:text-white">Papers</Link>
            </TabsTrigger>
            <TabsTrigger value="experiments" asChild>
              <Link href="/labs/experiments" className="text-sm font-medium text-muted-foreground hover:text-white">History</Link>
            </TabsTrigger>
            <TabsTrigger value="members" asChild>
              <Link href="/labs/members" className="text-sm font-medium text-muted-foreground hover:text-white">Team</Link>
            </TabsTrigger>
            <TabsTrigger value="check" asChild>
              <Link href="/labs/check" className="text-sm font-medium text-muted-foreground hover:text-white">Check</Link>
            </TabsTrigger>
            <TabsTrigger value="insights" asChild>
              <Link href="/labs/insights" className="text-sm font-medium text-muted-foreground hover:text-white">Insights</Link>
            </TabsTrigger>
            <TabsTrigger value="milestone" asChild>
              <Link href="/labs/milestone" className="text-sm font-medium text-muted-foreground hover:text-white">Milestone</Link>
            </TabsTrigger>
            <TabsTrigger value="security" asChild>
              <Link href="/labs/security" className="text-sm font-medium text-muted-foreground hover:text-white">Security</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  )
}
