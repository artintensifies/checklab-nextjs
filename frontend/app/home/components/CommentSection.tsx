'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

interface Comment {
  id: string
  author: string
  content: string
  created_at: string
}

export default function CommentSection({ storyId }: { storyId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`https://checklab-directs.onrender.com/comments/${storyId}`)
        const data = await res.json()
        setComments(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchComments()
  }, [storyId])

  async function handleSubmit() {
    if (!content.trim()) return

    setLoading(true)
    try {
      const res = await fetch(`https://checklab-directs.onrender.com/comments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          story_id: storyId,
          author: 'Anonymous', // Replace with real user data
          content,
        }),
      })
      const newComment = await res.json()
      setComments(prev => [...prev, newComment])
      setContent('')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-1 space-y-2">
      <h2 className="text-lg font-semibold text-white">Comments</h2>

      <div className="flex flex-col space-y-2">
        <Textarea
          placeholder="Add your comment..."
          value={content}
          onChange={e => setContent(e.target.value)}
          className="bg-[#1c1c1f] text-white border border-gray-600"
        />
        <Button onClick={handleSubmit} disabled={loading || !content.trim()}>
          {loading ? 'Posting...' : 'Post Comment'}
        </Button>
      </div>

      <div className="space-y-3 mt-4">
  {/* Top Separator */}
  <div className="border-t border-[#2f2f35]" />

  {comments.length === 0 && (
    <p className="text-sm text-gray-400">No comments yet.</p>
  )}

  {comments.map(comment => (
    <Card key={comment.id} className="bg-[#0e0e10] border-none shadow-none text-white">
      <CardContent className="py-0 space-y-1">
        <p className="text-sm text-muted-foreground">{comment.author}</p>
        <p>{comment.content}</p>
        <p className="text-xs text-gray-500">
          {new Date(comment.created_at).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  ))}

  {/* Bottom Separator */}
  <div className="border-t border-[#2f2f35]" />
</div>

    </div>
  )
}
