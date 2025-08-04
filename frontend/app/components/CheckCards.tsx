// 'use client'

// import { useEffect, useState } from 'react'
// import { Card, CardHeader, CardFooter } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Avatar, AvatarFallback } from '@/components/ui/avatar'
// import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, FlaskConical } from 'lucide-react'

// type Post = {
//   id: string
//   title: string
//   author: string
//   tags: string[]
//   stars: number
//   forks: number
//   status: string
//   created_at: string
//   time?: string
//   description?: string
//   image?: string | null
// }

// export default function Feed() {
//   const [posts, setPosts] = useState<Post[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch('https://checklab-directs.onrender.com/get-checks')
//         if (!res.ok) throw new Error('Failed to fetch posts')
//         const data: Post[] = await res.json()

//         const formattedPosts = data.map(post => {
//           const date = new Date(post.created_at)
//           const now = new Date()
//           const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5

//           let timeAgo
//           if (diffInHours < 1) timeAgo = `${Math.round(diffInHours * 60)} min. ago`
//           else if (diffInHours < 24) timeAgo = `${Math.round(diffInHours)} hr. ago`
//           else timeAgo = `${Math.round(diffInHours / 24)} day${Math.round(diffInHours / 24) > 1 ? 's' : ''} ago`

//           return { ...post, time: timeAgo }
//         })

//         const sortedPosts = formattedPosts.sort((a, b) => b.stars - a.stars)
//         setPosts(sortedPosts)
//       } catch (err: any) {
//         setError(err.message || 'Unknown error')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchPosts()
//   }, [])

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[60vh] text-muted-foreground text-sm">
//         Loading posts...
//       </div>
//     )
//   }

//   if (error) {
//     return <div className="text-red-500 text-sm p-4 text-center">Error: {error}</div>
//   }

//   if (posts.length === 0) {
//     return <p className="text-muted-foreground text-sm text-center">No posts found.</p>
//   }

//  return (
//   <div className="w-[707px] bg-[#0e0e10] rounded-md">
//     {posts.map(post => (
//       <div key={post.id}>
//         <div
//           className="group cursor-pointer my-4 rounded-md transition-all duration-200"
//           onClick={() => console.log('Open post:', post.id)} // Replace with navigation
//         >
//           <Card className="bg-[#0e0e10] border-none shadow-none group-hover:bg-[#181818] transition-all duration-150 rounded-md">
//             <CardHeader className="px-[19px] pt-4 pb-2 space-y-2">
//               {/* Header */}
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center space-x-2">
//                   <Avatar className="h-6 w-6">
//                     <AvatarFallback className="text-[10px] bg-red-500 text-white">
//                       {post.author.charAt(1).toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                   <span className="text-sm font-medium text-white">{post.author}</span>
//                   <span className="text-xs text-muted-foreground">• {post.time}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   {post.status && (
//                     <Button
//                       variant="ghost"
//                       className="h-7 text-xs px-2 text-white bg-[#1a1a1b] hover:bg-[#282829] rounded-full"
//                     >
//                       {post.status}
//                     </Button>
//                   )}
//                   <Button
//                     variant="ghost"
//                     className="h-7 w-7 p-0 text-muted-foreground hover:bg-[#282829]"
//                   >
//                     <MoreHorizontal className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>

//               {/* Title & Description */}
//               <h3 className="text-[19px] text-white font-semibold leading-tight">{post.title}</h3>

//               {post.description && (
//                 <p className="text-sm text-muted-foreground max-w-[641px] leading-tight whitespace-pre-line">
//                   {post.description}
//                 </p>
//               )}

//               {/* Tags */}
//               <div className="flex items-center flex-wrap gap-2 pt-2">
//                 {post.tags?.map((tag, i) => (
//                   <Button
//                     key={i}
//                     variant="ghost"
//                     className="h-7 text-xs px-2 text-muted-foreground bg-[#1a1a1b] hover:bg-[#282829] rounded-full"
//                   >
//                     <FlaskConical className="h-4 w-4 mr-1" />
//                     {tag}
//                   </Button>
//                 ))}
//               </div>

//               {/* Image */}
//               {post.image && (
//                 <img
//                   src={post.image}
//                   alt="thumbnail"
//                   className="rounded-md object-contain mt-2 max-h-[420px] max-w-full mx-auto"
//                 />
//               )}
//             </CardHeader>

//             <CardFooter className="px-[19px] mt-2 pb-4 flex justify-between items-center">
//               <div className="flex items-center">
//                 <Button
//                   variant="ghost"
//                   className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-l-full flex items-center gap-1"
//                 >
//                   <ThumbsUp className="h-4 w-4" />
//                 </Button>
//                 <span className="text-sm text-white font-semibold">{post.stars}</span>
//                 <Button
//                   variant="ghost"
//                   className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-r-full flex items-center gap-1"
//                 >
//                   <ThumbsUp className="h-4 w-4 rotate-180" />
//                 </Button>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Button
//                   variant="ghost"
//                   className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-full flex items-center gap-1"
//                 >
//                   <MessageSquare className="h-4 w-4" />
//                   <span>{post.forks}</span>
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-full flex items-center gap-1"
//                 >
//                   <Share2 className="h-4 w-4" />
//                   <span>Share</span>
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//         </div>

//         {/* Separator */}
//         <div className="border-t border-[#27272A] mx-2" />
//       </div>
//     ))}
//   </div>
// )

// }


'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  FlaskConical
} from 'lucide-react'

type Post = {
  id: string
  title: string
  author: string
  tags: string[]
  stars: number
  forks: number
  status: string
  created_at: string
  time?: string
  description?: string
  image?: string | null
}

export default function Feed() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://checklab-directs.onrender.com/get-checks')
        if (!res.ok) throw new Error('Failed to fetch posts')
        const data: Post[] = await res.json()

        const formattedPosts = data.map(post => {
          const date = new Date(post.created_at)
          const now = new Date()
          const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5

          let timeAgo
          if (diffInHours < 1) timeAgo = `${Math.round(diffInHours * 60)} min. ago`
          else if (diffInHours < 24) timeAgo = `${Math.round(diffInHours)} hr. ago`
          else timeAgo = `${Math.round(diffInHours / 24)} day${Math.round(diffInHours / 24) > 1 ? 's' : ''} ago`

          return { ...post, time: timeAgo }
        })

        const sortedPosts = formattedPosts.sort((a, b) => b.stars - a.stars)
        setPosts(sortedPosts)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-muted-foreground text-sm">
        Loading posts...
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 text-sm p-4 text-center">Error: {error}</div>
  }

  if (posts.length === 0) {
    return <p className="text-muted-foreground text-sm text-center">No posts found.</p>
  }

  return (
    <div className="w-[707px] bg-[#0e0e10] rounded-md">
      {/* Separator before the first post */}
      <div className="border-t border-[#27272A] mx-2 mt-4" />

      {posts.map((post, index) => (
        <div key={post.id}>
          <div
            className="group cursor-pointer my-4 rounded-md transition-all duration-200"
            onClick={() => router.push(`/home/stories/${post.id}`)}
          >
            <Card className="bg-[#0e0e10] border-none shadow-none group-hover:bg-[#0d1117] transition-all duration-150 rounded-md">
              <CardHeader className="px-[19px] pt-4 pb-2 space-y-2">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-[10px] bg-red-500 text-white">
                        {post.author.charAt(1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-white">{post.author}</span>
                    <span className="text-xs text-muted-foreground">• {post.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.status && (
                      <Button
                        variant="ghost"
                        className="h-7 text-xs px-2 text-white bg-[#1a1a1b] hover:bg-[#282829] rounded-full"
                      >
                        {post.status}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      className="h-7 w-7 p-0 text-muted-foreground hover:bg-[#282829]"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-[19px] text-white font-semibold leading-tight">{post.title}</h3>

                {post.description && (
                  <p className="text-sm text-muted-foreground max-w-[641px] leading-tight whitespace-pre-line">
                    {post.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex items-center flex-wrap gap-2 pt-2">
                  {post.tags?.map((tag, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="h-7 text-xs px-2 text-muted-foreground bg-[#1a1a1b] hover:bg-[#282829] rounded-full"
                    >
                      <FlaskConical className="h-4 w-4 mr-1" />
                      {tag}
                    </Button>
                  ))}
                </div>

                {/* Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="thumbnail"
                    className="rounded-md object-contain mt-2 max-h-[420px] max-w-full mx-auto"
                  />
                )}
              </CardHeader>

              <CardFooter className="px-[19px] mt-2 pb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-l-full flex items-center gap-1"
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-white font-semibold">{post.stars}</span>
                  <Button
                    variant="ghost"
                    className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-r-full flex items-center gap-1"
                  >
                    <ThumbsUp className="h-4 w-4 rotate-180" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-full flex items-center gap-1"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.forks}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-8 text-sm px-2 text-muted-foreground hover:bg-[#282829] rounded-full flex items-center gap-1"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Separator between posts */}
          <div className="border-t border-[#27272A] mx-2" />
        </div>
      ))}
    </div>
  )
}
