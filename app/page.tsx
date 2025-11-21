'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    console.log('Quiz modal state:', showQuiz)
  }, [showQuiz])

  const handleStartQuiz = () => {
    console.log('Button clicked! Setting showQuiz to true')
    setShowQuiz(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFEF9] via-[#e8f4f8] to-[#d4e9f7] transition-colors duration-300">
      <Navigation />
      <EnhancedHero onStartQuiz={handleStartQuiz} />
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
