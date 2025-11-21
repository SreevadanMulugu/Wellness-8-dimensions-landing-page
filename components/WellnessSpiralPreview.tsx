'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export default function WellnessSpiralPreview() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-wellness-fern/10 via-wellness-sage/10 to-wellness-sun/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Avatar Spotlight - Centered */}
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center">
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-wellness-fern/15 via-wellness-sage/12 to-wellness-sun/15 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden shadow-[0_35px_90px_rgba(201,169,97,0.25)] border border-white/60 bg-white"
        >
          <Image
            src="/avatar.png"
            alt="Wellness guide avatar"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-wellness-canopy/15" />

          {/* Floating Sparkles around avatar */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top: `${10 + (i * 12)}%`,
                left: `${5 + (i * 11) % 90}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className={`w-4 h-4 ${i % 3 === 0 ? 'text-wellness-sun/50' : i % 3 === 1 ? 'text-wellness-fern/40' : 'text-wellness-dew/35'}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

