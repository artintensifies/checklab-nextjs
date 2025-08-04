// app/claim/page.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function ClaimPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAccess = async () => {
    if (!code.trim()) {
      setError('Please enter your magic link or claim code.')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Call your backend or redirect logic here
      // For now just simulate
      setTimeout(() => {
        setLoading(false)
        window.location.href = `/project/${code.trim()}`
      }, 1000)
    } catch (e) {
      setLoading(false)
      setError('Invalid code or expired link.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <motion.div
        className="max-w-md w-full space-y-6 p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold text-center text-black dark:text-white">
          Enter your Claim Code
        </h1>
        <p className="text-sm text-center text-neutral-500 dark:text-neutral-400">
          Enter your <span className="font-medium">magic link</span> or <span className="font-medium">claim code</span> below.
        </p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Magic link or code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="text-base"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button
            className="w-full"
            disabled={loading}
            onClick={handleAccess}
          >
            {loading ? 'Loading...' : 'Enter'}
          </Button>
        </div>
        <p className="text-xs text-center text-neutral-400">
          Don’t have a code? Ask your creator or teammate.
        </p>
      </motion.div>
    </div>
  )
}
