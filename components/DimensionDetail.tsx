'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface Dimension {
  id: string
  name: string
  icon: any
  gradient: string
  accent: string
  overlay: string
  description: string
  image: string
  content: {
    overview: string
    keyPoints: string[]
    tips: string[]
  }
}

interface DimensionDetailProps {
  dimension: Dimension
  onClose: () => void
}

export default function DimensionDetail({ dimension, onClose }: DimensionDetailProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative bg-white border border-wellness-canopy/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white hover:bg-wellness-mist border border-wellness-canopy/10 flex items-center justify-center shadow-lg transition-all"
          >
            <X className="w-6 h-6 text-wellness-canopy" />
          </button>

          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={dimension.image}
              alt={dimension.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${dimension.overlay}`} />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-glow">
              <h2 className="text-4xl md:text-5xl font-display mb-2">{dimension.name}</h2>
              <p className="text-lg opacity-95 max-w-3xl font-medium">{dimension.description}</p>
            </div>
          </div>

          <div className="p-8 bg-white">
            <div className="mb-8">
              <h3 className="text-2xl font-display text-wellness-canopy mb-4">
                Overview
              </h3>
              <p className="text-wellness-canopy/80 leading-relaxed text-lg">
                {dimension.content.overview}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-display text-wellness-canopy mb-4">
                Key Points
              </h3>
              <ul className="space-y-3">
                {dimension.content.keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      className={`w-6 h-6 ${dimension.color} text-white rounded-full flex-shrink-0 mt-0.5`}
                    />
                    <span className="text-wellness-canopy/80 leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display text-wellness-canopy mb-4">
                Practical Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dimension.content.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-wellness-mist/50 border border-wellness-canopy/10 shadow-sm"
                  >
                    <p className="text-wellness-canopy/80">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

