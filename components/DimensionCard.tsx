'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Dimension {
  id: string
  name: string
  icon: LucideIcon
  gradient: string
  accent: string
  description: string
  image: string
}

interface DimensionCardProps {
  dimension: Dimension
  onClick: () => void
}

export default function DimensionCard({ dimension, onClick }: DimensionCardProps) {
  const Icon = dimension.icon

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="rounded-3xl border border-wellness-canopy/10 bg-white shadow-[0_20px_60px_rgba(31,91,76,0.12)] p-6 cursor-pointer hover:shadow-[0_25px_70px_rgba(31,91,76,0.2)] transition-all duration-300 relative overflow-hidden group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${dimension.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
      />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-full ${dimension.accent} flex items-center justify-center mb-5 shadow-md text-white`}
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        <h3 className="text-2xl font-display text-wellness-canopy mb-2">
          {dimension.name}
        </h3>
        <p className="text-sm text-wellness-canopy/80 leading-relaxed">
          {dimension.description}
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          className="mt-5 h-[2px] bg-gradient-to-r from-transparent via-wellness-fern to-transparent rounded-full"
        />
      </div>
    </motion.div>
  )
}

