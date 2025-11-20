'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { dimensionsData } from '@/data/dimensions'

export default function WellnessDimensionPreview() {
  return (
    <div className="relative rounded-[40px] p-6 bg-white/80 backdrop-blur-2xl border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)]">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-wellness-canopy/60 mb-2">
          Your Wellness Journey
        </p>
        <h3 className="text-3xl font-display text-wellness-canopy mb-2">
          Explore All 8 Dimensions
        </h3>
        <p className="text-sm text-wellness-canopy/70">
          Discover each realm of wellness and start your personalized path.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {dimensionsData.slice(0, 8).map((dimension, index) => {
          const Icon = dimension.icon
          return (
            <Link key={dimension.id} href={`/dimension/${dimension.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -5, z: 10 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white to-wellness-mist border border-wellness-canopy/10 shadow-md hover:shadow-xl transition-all overflow-hidden">
                  <div className="absolute inset-0 p-3 flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-10 h-10 ${dimension.color} rounded-xl flex items-center justify-center mb-2 shadow-sm`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <p className="text-xs font-semibold text-wellness-canopy text-center leading-tight">
                      {dimension.name.split(' ')[0]}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${dimension.color}/0 group-hover:bg-gradient-to-t ${dimension.color}/20 transition-all`} />
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>
      <div className="mt-6 bg-wellness-mist/50 border border-wellness-canopy/10 rounded-2xl px-6 py-4 text-center text-wellness-canopy/80 shadow-sm">
        <p className="text-sm">
          Tap any dimension to begin your journey into that realm of wellness.
        </p>
      </div>
    </div>
  )
}

