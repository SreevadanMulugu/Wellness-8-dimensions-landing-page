'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface DimensionProgressSliderProps {
  currentDimensionId: string
  allDimensions: Array<{ id: string; name: string }>
  completedDimensions?: string[]
}

export default function DimensionProgressSlider({
  currentDimensionId,
  allDimensions,
  completedDimensions = [],
}: DimensionProgressSliderProps) {
  const router = useRouter()
  const [commitmentLevel, setCommitmentLevel] = useState(5)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const getNextRecommendedDimension = () => {
    // Get priority queue from localStorage
    if (typeof window === 'undefined') return null

    const priorityQueueStr = localStorage.getItem('priorityQueue')

    if (!priorityQueueStr) return null

    try {
      const priorityQueue = JSON.parse(priorityQueueStr) as string[]
      const completed = JSON.parse(localStorage.getItem('completedDimensions') || '[]') as string[]

      // Find next dimension from priority queue that hasn't been completed
      const nextDimId = priorityQueue.find(dimId => !completed.includes(dimId) && dimId !== currentDimensionId)

      if (nextDimId) {
        return allDimensions.find(d => d.id === nextDimId) || null
      }
    } catch (e) {
      console.error('Error parsing priority queue:', e)
    }

    return null
  }

  const nextDimension = getNextRecommendedDimension()

  const handleCommitmentSubmit = () => {
    // Save commitment level (could be stored in localStorage or sent to backend)
    const commitments = JSON.parse(localStorage.getItem('dimensionCommitments') || '{}')
    commitments[currentDimensionId] = commitmentLevel
    localStorage.setItem('dimensionCommitments', JSON.stringify(commitments))

    // Mark as completed
    const completed = JSON.parse(localStorage.getItem('completedDimensions') || '[]')
    if (!completed.includes(currentDimensionId)) {
      completed.push(currentDimensionId)
      localStorage.setItem('completedDimensions', JSON.stringify(completed))
    }

    // Save selected action
    if (selectedAction) {
      const actions = JSON.parse(localStorage.getItem('dimensionActions') || '{}')
      actions[currentDimensionId] = selectedAction
      localStorage.setItem('dimensionActions', JSON.stringify(actions))
    }

    // Navigate to next recommended dimension or home with smooth transition
    if (nextDimension) {
      // Add smooth transition
      setTimeout(() => {
        router.push(`/dimension/${nextDimension.id}`)
      }, 300)
    } else {
      // All dimensions completed - return to compass
      setTimeout(() => {
        router.push('/#compass')
      }, 300)
    }
  }

  // Get dimension-specific actions based on current dimension
  const getQuickActions = () => {
    const dimensionActions: { [key: string]: string[] } = {
      physical: [
        'I\'ll exercise 3x this week',
        'I\'ll take a 10-min walk daily',
        'I\'ll try a new healthy recipe',
        'I\'ll prioritize 8 hours of sleep',
        'I\'ll drink more water (8 glasses/day)',
      ],
      emotional: [
        'I\'ll meditate daily for 10 min',
        'I\'ll journal my feelings',
        'I\'ll practice deep breathing',
        'I\'ll express gratitude daily',
        'I\'ll listen to calming music',
      ],
      intellectual: [
        'I\'ll read for 30 min daily',
        'I\'ll learn something new today',
        'I\'ll solve a puzzle or brain game',
        'I\'ll attend a workshop or webinar',
        'I\'ll explore a new topic',
      ],
      social: [
        'I\'ll call a friend today',
        'I\'ll join a community group',
        'I\'ll practice active listening',
        'I\'ll plan a social activity',
        'I\'ll express appreciation to someone',
      ],
      spiritual: [
        'I\'ll spend time in nature',
        'I\'ll practice mindfulness',
        'I\'ll reflect on my values',
        'I\'ll engage in a spiritual practice',
        'I\'ll find moments of stillness',
      ],
      environmental: [
        'I\'ll reduce my waste today',
        'I\'ll spend time in nature',
        'I\'ll declutter my space',
        'I\'ll use reusable products',
        'I\'ll support eco-friendly businesses',
      ],
      occupational: [
        'I\'ll set clear work boundaries',
        'I\'ll take regular breaks',
        'I\'ll pursue a skill I\'m passionate about',
        'I\'ll network with colleagues',
        'I\'ll celebrate my achievements',
      ],
      financial: [
        'I\'ll review my budget today',
        'I\'ll automate my savings',
        'I\'ll track my expenses this week',
        'I\'ll set a financial goal',
        'I\'ll learn about investing',
      ],
    }

    return dimensionActions[currentDimensionId] || [
      'I\'ll commit to daily practice',
      'I\'ll track my progress',
      'I\'ll set a weekly goal',
      'I\'ll celebrate small wins',
      'I\'ll stay consistent',
    ]
  }

  const quickActions = getQuickActions()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 rounded-3xl p-8 bg-white border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)]"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block mb-4"
        >
          <Sparkles className="w-12 h-12 text-wellness-sun mx-auto" />
        </motion.div>
        <h3 className="text-3xl font-display text-wellness-canopy mb-3">
          Commit to Your Growth
        </h3>
        <p className="text-wellness-canopy/70 max-w-2xl mx-auto">
          Set your commitment level and choose a quick action to start improving this dimension today.
        </p>
      </div>

      {/* Commitment Slider */}
      <div className="mb-10">
        <label className="block text-lg font-semibold text-wellness-canopy mb-4 text-center">
          How committed are you to improving this dimension? ({commitmentLevel}/10)
        </label>
        <div className="max-w-2xl mx-auto">
          <input
            type="range"
            min="1"
            max="10"
            value={commitmentLevel}
            onChange={(e) => setCommitmentLevel(Number(e.target.value))}
            className="w-full h-3 bg-wellness-mist rounded-lg appearance-none cursor-pointer accent-wellness-fern"
            style={{
              background: `linear-gradient(to right, #2d8a70 0%, #2d8a70 ${(commitmentLevel / 10) * 100}%, #e5f0ed ${(commitmentLevel / 10) * 100}%, #e5f0ed 100%)`,
            }}
          />
          <div className="flex justify-between mt-2 text-sm text-wellness-canopy/60">
            <span>Just Exploring</span>
            <span>Fully Committed</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-wellness-canopy mb-4 text-center">
          Choose a Quick Action
        </h4>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAction(action)}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${selectedAction === action
                  ? 'border-wellness-fern bg-wellness-mist shadow-md'
                  : 'border-wellness-canopy/10 bg-white hover:border-wellness-fern/50'
                }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${selectedAction === action ? 'bg-wellness-fern' : 'bg-wellness-mist border border-wellness-canopy/20'
                    }`}
                >
                  {selectedAction === action && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-wellness-canopy/80 font-medium">{action}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-wellness-canopy">
            Your Journey Progress
          </span>
          <span className="text-sm text-wellness-canopy/70">
            {completedDimensions.length + (completedDimensions.includes(currentDimensionId) ? 0 : 1)} / {allDimensions.length}
          </span>
        </div>
        <div className="w-full h-3 bg-wellness-mist rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((completedDimensions.length + (completedDimensions.includes(currentDimensionId) ? 0 : 1)) / allDimensions.length) * 100}%`,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-wellness-fern to-wellness-moss rounded-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCommitmentSubmit}
          disabled={!selectedAction}
          className={`px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all flex items-center gap-2 ${selectedAction
              ? 'bg-gradient-to-r from-wellness-fern to-wellness-moss text-white hover:shadow-xl'
              : 'bg-wellness-mist text-wellness-canopy/50 cursor-not-allowed'
            }`}
        >
          {nextDimension ? 'Continue to Next Dimension' : 'Complete Journey'}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <Link
          href="/#compass"
          className="px-8 py-4 bg-white border border-wellness-canopy/10 text-wellness-canopy rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all"
        >
          Return to Compass
        </Link>
      </div>
    </motion.div>
  )
}

