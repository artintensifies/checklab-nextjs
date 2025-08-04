'use client'

import FolderCopySharpIcon from '@mui/icons-material/FolderCopySharp'
import { useEffect, useState } from 'react'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

type Paper = {
    name: string
    last_updated: string
}

export function ConstructBar() {
    const [papers, setPapers] = useState<Paper[]>([])

    useEffect(() => {
        fetch('https://checklab-directs.onrender.com/papers')
            .then((res) => res.json())
            .then((data) => setPapers(data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="space-y-1 w-[897px]">
            {/* Custom Card Container */}
            <div className="w-full rounded-[7px] overflow-hidden border border-[#3d444d] bg-[#0d1117]">
                {/* Title Bar */}
                <div className="h-[52px] bg-[#151b23] flex items-center px-4 border-b border-[#1f2933]">
                    <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                        <FolderCopySharpIcon style={{ fontSize: 18, color: 'white' }} />
                        <span>Papers</span>
                    </h2>
                </div>

                {/* File Rows */}
                <div className="divide-y divide-[#1f2933]">
                    {papers.map((paper, index) => (
                        <div
                            key={index}
                            className="hover:bg-[#161b22] cursor-pointer px-4 py-3 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-2">
                                <SubdirectoryArrowRightIcon style={{ fontSize: 18, color: '#c9d1d9' }} />
                                <span className="text-sm text-white">{paper.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{paper.last_updated}</span>
                        </div>
                    ))}
                </div>




            </div>
            {/* Readme Section */}
            <div className="mt-4 w-full rounded-[7px] overflow-hidden border border-[#27272A] bg-[#0d1117]">
                {/* Header */}
                <div className="h-[52px] bg-[#151b23] flex items-center px-4 border-b border-[#1f2933]">
                    <h2 className="text-sm font-semibold text-white">README</h2>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4 text-sm text-gray-300 leading-relaxed">
                    <p>
                        Welcome to your Checklab paper workspace. This section gives collaborators an overview of the
                        lab's purpose, documentation, or instructions — just like a GitHub README.
                    </p>
                    <p>
                        You can use this area to describe:
                        <ul className="list-disc list-inside mt-2 ml-4">
                            <li>What the research is about</li>
                            <li>Current findings or models</li>
                            <li>Next steps or open questions</li>
                            <li>Links to published versions or citations</li>
                        </ul>
                    </p>
                    <p>
                        Update this section in the backend or via an edit button you can add here.
                    </p>
                </div>
            </div>

        </div>
    )
}
