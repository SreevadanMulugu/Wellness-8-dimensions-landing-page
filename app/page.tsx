'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import EnhancedHero from '@/components/EnhancedHero'
import InteractiveQuiz from '@/components/InteractiveQuiz'
import WellnessJournal from '@/components/WellnessJournal'
import Resources from '@/components/Resources'
import WellnessMap from '@/components/WellnessMap'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] transition-colors duration-300">
      <Navigation />
      <EnhancedHero onStartQuiz={() => setShowQuiz(true)} />
      <WellnessMap />
      <WellnessJournal />
      <Resources />
      <AnimatePresence>
        {showQuiz && (
          <InteractiveQuiz onClose={() => setShowQuiz(false)} />
        )}
      </AnimatePresence>
      <Footer />
    </main>
  )
}

