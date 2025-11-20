'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

interface ProgressiveHoldButtonProps {
  onComplete: () => void
  duration?: number
  title: string
  subtitle?: string
  className?: string
}

const catchyTitles = [
  { main: 'Begin Your Transformation', sub: 'Start your wellness journey' },
  { main: 'Ignite Your Path', sub: 'Discover your potential' },
  { main: 'Awaken Your Journey', sub: 'Unlock your wellness' },
  { main: 'Embark on Growth', sub: 'Transform yourself' },
  { main: 'Start Your Evolution', sub: 'Begin the change' },
]

export default function ProgressiveHoldButton({
  onComplete,
  duration = 5000,
  title,
  subtitle,
  className = '',
}: ProgressiveHoldButtonProps) {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTitle, setCurrentTitle] = useState(0)

  const progressMotion = useMotionValue(0)
  const scale = useTransform(progressMotion, [0, 1], [1, 1.05])

  useEffect(() => {
    if (isHolding) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 16.67 // ~60fps for 5 seconds
          if (newProgress >= 100) {
            clearInterval(interval)
            onComplete()
            return 100
          }
          return newProgress
        })
      }, duration / 60)

      // Rotate titles while holding
      const titleInterval = setInterval(() => {
        setCurrentTitle((prev) => (prev + 1) % catchyTitles.length)
      }, 1000)

      return () => {
        clearInterval(interval)
        clearInterval(titleInterval)
      }
    } else {
      setProgress(0)
      progressMotion.set(0)
    }
  }, [isHolding, duration, onComplete, progressMotion])

  useEffect(() => {
    progressMotion.set(progress / 100)
  }, [progress, progressMotion])

  const handleMouseDown = () => {
    setIsHolding(true)
  }

  const handleMouseUp = () => {
    setIsHolding(false)
    setProgress(0)
  }

  const handleMouseLeave = () => {
    setIsHolding(false)
    setProgress(0)
  }

  const displayTitle = catchyTitles[currentTitle]

  return (
    <motion.button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={{ scale }}
      className={`relative w-full px-8 py-4 bg-gradient-to-r from-wellness-fern to-wellness-moss text-white rounded-full font-bold text-base md:text-lg shadow-[0_20px_60px_rgba(31,91,76,0.3)] hover:shadow-[0_25px_70px_rgba(31,91,76,0.4)] transition-all flex items-center justify-center gap-2 overflow-hidden group ${className}`}
    >
      {/* Progress Fill */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-lime-400 to-amber-200"
        style={{
          scaleX: progressMotion,
          transformOrigin: 'left',
        }}
        initial={false}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3 w-full justify-center">
        <div className="flex flex-col items-center">
          <motion.span
            key={currentTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-bold text-lg"
          >
            {isHolding ? displayTitle.main : title}
          </motion.span>
          {isHolding && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-normal opacity-90"
            >
              {displayTitle.sub}
            </motion.span>
          )}
        </div>
        <motion.div
          animate={{ x: isHolding ? [0, 5, 0] : 0 }}
          transition={{ duration: 1.5, repeat: isHolding ? Infinity : 0 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </span>

      {/* Progress Ring */}
      {isHolding && (
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.1 }}
          />
        </svg>
      )}

      {/* Percentage Indicator */}
      {isHolding && progress > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-wellness-fern shadow-lg"
        >
          {Math.round(progress)}%
        </motion.div>
      )}
    </motion.button>
  )
}

