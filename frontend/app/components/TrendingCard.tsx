'use client'

import { useEffect, useState } from "react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type Check = {
  id: string
  title: string
  author: string
  tags: string[]
  stars: number
}

export default function ContributorCard() {
  const [checks, setChecks] = useState<Check[]>([])

  useEffect(() => {
    fetch("https://checklab-directs.onrender.com/get-checks")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a: Check, b: Check) => b.stars - a.stars)
        setChecks(sorted)
      })
      .catch(err => console.error("Error fetching checks:", err))
  }, [])

  return (
    <Card className="w-[320px] h-[420px] bg-[#010409] border border-[#27272A] rounded-2xl shadow-sm hover:shadow-md transition duration-200 flex flex-col">
      
      {/* Card Title/Header */}
      <CardHeader className="text-center pt-4 pb-2">
        <h3 className="text-white text-base font-semibold">Top Contributors</h3>
        <p className="text-sm text-muted-foreground">from Checklab</p>
      </CardHeader>

      {/* Scrollable Contributor List */}
      <CardContent className="flex-1 px-4 pb-2">
        <ScrollArea className="h-[270px] pr-2">
          <div className="flex flex-col gap-4">
            {checks.map((check, idx) => (
              <div key={check.id} className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.jpg" alt={check.author} />
                  <AvatarFallback>{check.author.slice(1, 3).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium">{check.author}</h4>
                  <p className="text-xs text-muted-foreground truncate">{check.title}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {check.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-1 py-0.5 bg-[#27272A] text-white rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xsfont-bold text-yellow-400">{check.stars}★</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>

      {/* Footer Button */}
      <CardFooter className="pt-2 px-6 pb-4">
        <Button
          variant="secondary"
          className="w-full bg-[#27272A] text-white hover:bg-[#3f3f46] transition-colors"
        >
          View All Profiles
        </Button>
      </CardFooter>
    </Card>
  )
}
