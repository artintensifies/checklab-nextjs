'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CommentSection from '@/app/home/components/CommentSection'
import { useRouter } from 'next/navigation'

interface CheckData {
  id: string
  title: string
  author: string
  tags: string[]
  stars: number
  description: string
}

export default function StoryPage() {
  const router = useRouter()
  const { id } = useParams()
  const [check, setCheck] = useState<CheckData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCheck() {
      try {
        const res = await fetch(`https://checklab-directs.onrender.com/get-checks`)
        const data = await res.json()
        const story = data.find((item: CheckData) => item.id === id)
        setCheck(story)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }

    fetchCheck()
  }, [id])

  if (loading || !check) {
    return (
      <div className="p-8">
        <Skeleton className="h-10 w-2/3 mb-4" />
        <Skeleton className="h-5 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    )
  }

  return (
  <div className="flex px-5">
    <Card className="w-full max-w-3xl bg-[#0e0e10] text-white border-none rounded-none shadow-none">
      <CardHeader className="flex flex-col items-start p-4 pb-2">
        {/* Top row */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button onClick={() => router.back()} className="w-[34px] cursor-pointer h-[34px] rounded-full hover:bg-[#1c1c1f] flex items-center justify-center text-white">
              ←
            </button>
            <img
              src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${check.author}`}
              alt="avatar"
              className="w-[34px] h-[34px] cursor-pointer rounded-full object-cover"
            />
            <span className="text-sm cursor-pointer text-muted-foreground">{check.author}</span>
          </div>
          <button className="w-[34px] cursor-pointer h-[34px] rounded-full hover:bg-[#1c1c1f] flex items-center justify-center text-lg text-white">
            ⋮
          </button>
        </div>

        <h1 className="text-2xl px-3 font-bold mt-3">{check.title}</h1>
      </CardHeader>

      <CardContent className="space-y-6 px-7 pb-4">
        <p className="text-sm text-gray-300">{check.description}</p>

        <div className="flex gap-2 flex-wrap">
          {check.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-[#2f2f35] text-white">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground mt-4">
          ⭐ {check.stars} stars
        </div>
      </CardContent>

      {/* Centered Comment Section */}
      <div className="px-7 pb-6">
        <CommentSection storyId={id as string} />
      </div>
    </Card>
  </div>
)


}
