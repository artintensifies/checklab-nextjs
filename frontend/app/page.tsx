'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

// shadcn/ui imports
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://checklab-directs.onrender.com/content', { cache: 'no-store' })
      .then(res => res.json())
      .then(json => {
        setData(Array.isArray(json) ? json : [])
        setLoading(false)
      })
      .catch(() => {
        setError('Please Check Your Internet Connection.')
        setLoading(false)
      })
  }, [])

  const hero = data.find((item: any) => item.type === 'hero') || {
    title: 'Reimagine Learning, Forever.',
    description: 'Checklab transforms knowledge into collaborative breakthroughs.',
    button_label: 'Join the Lab',
    button_link: '#',
  }

  const cards = data.filter((item: any) => item.type === 'card')
    || [
      {
        id: '1',
        title: 'Paradigm Sharing',
        description: 'Submit, evolve, and license advanced AI ideas at scale.',
      },
      {
        id: '2',
        title: 'Collaborative Research',
        description: 'Turn solo innovation into team-led breakthroughs.',
      },
      {
        id: '3',
        title: 'DAUM Ownership',
        description: 'Full control over your work. Firebird-integrated.',
      },
    ]

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="cl-throbber" />
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </main>
    )
  }

  return (
    <main className="min-h-screen p-6 font-mono text-foreground bg-background transition-all duration-300">
      {/* Outer container for the page border effect */}
      <div className="border border-border rounded-xl p-8 max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-10 flex items-center justify-between">
  <div className="text-sm uppercase tracking-widest text-muted-foreground">
    — from Creators TO Innovators
  </div>

  <a
    href="/home"
    className="bg-foreground text-background px-4 py-2 text-sm rounded-md font-semibold hover:scale-105 transition-transform"
  >
    EXPLORE
  </a>
</header>


        {/* HERO */}
        <motion.section
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-6xl font-bold bg-black from-foreground to-muted text-transparent bg-clip-text leading-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{hero.description}</p>

          {hero.button_label && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={hero.button_link}
              className="mt-8 inline-block bg-foreground text-background px-6 py-3 rounded-xl text-sm font-semibold transition-transform"
            >
              {hero.button_label}
            </motion.a>
          )}
        </motion.section>

        {/* CARDS */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {cards.map((card: any) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="border border-border rounded-xl p-6 bg-muted/30 hover:bg-muted/60 transition hover:shadow-xl">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  )
}
