'use client'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function RightBlock() {
  const contributors = [
    { name: 'Anmol Helmi', initials: 'AH' },
    { name: 'Dev D', initials: 'DD' },
    { name: 'Lana', initials: 'LN' }
  ]

  const tags = ['AI', 'Cognition', 'Neurosymbolic', 'Experimental']

  return (
    <div className="flex-1 min-w-[260px] max-w-[400px]">
      <div className="rounded-[7px] border border-none bg-[#0d1117] p-4 space-y-6">
        {/* About */}
        <div>
          <h3 className="text-sm font-semibold text-white">About this Lab</h3>
          <p className="text-xs text-gray-400 leading-snug mt-2">
            This lab focuses on experimental research in next-gen AI cognition.
            <br />
            Collaborative papers and models evolve into full paradigms here.
          </p>
        </div>

        {/* Tags */}
        <div>
          <h4 className="text-xs font-semibold text-white mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-white border-gray-700">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* DAUM License */}
        <div>
          <h4 className="text-xs font-semibold text-white mb-1">License</h4>
          <p className="text-xs text-gray-400">DAUM-Research Attribution v1.3</p>
        </div>

        {/* Contributors */}
        <div>
          <h4 className="text-xs font-semibold text-white mb-2">Contributors</h4>
          <div className="flex -space-x-2">
            {contributors.map((contributor, index) => (
              <Avatar key={index} className="h-7 w-7 border-2 border-[#0d1117]">
                <AvatarFallback>{contributor.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
