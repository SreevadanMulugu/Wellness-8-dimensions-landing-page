'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import {
  Activity,
  Heart,
  Brain,
  Users,
  Sparkles,
  Leaf,
  Briefcase,
  DollarSign,
  Flower2,
} from 'lucide-react'

const pathDimensions: {
  id: string
  name: string
  icon: LucideIcon
  color: string
  blurb: string
}[] = [
  {
    id: 'physical',
    name: 'Physical',
    icon: Activity,
    color: 'bg-[#2d8a70]',
    blurb: 'Movement, nourishment, and rest rituals.',
  },
  {
    id: 'emotional',
    name: 'Emotional',
    icon: Heart,
    color: 'bg-[#f47a9a]',
    blurb: 'Compassion, expression, and calm.',
  },
  {
    id: 'intellectual',
    name: 'Intellectual',
    icon: Brain,
    color: 'bg-[#4c8eda]',
    blurb: 'Curiosity, creativity, and flow.',
  },
  {
    id: 'social',
    name: 'Social',
    icon: Users,
    color: 'bg-[#2ca690]',
    blurb: 'Belonging, listening, and shared joy.',
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    icon: Sparkles,
    color: 'bg-[#8060d0]',
    blurb: 'Purpose, awe, and inner guidance.',
  },
  {
    id: 'environmental',
    name: 'Environmental',
    icon: Leaf,
    color: 'bg-[#2e6a46]',
    blurb: 'Reciprocity with our planet.',
  },
  {
    id: 'occupational',
    name: 'Occupational',
    icon: Briefcase,
    color: 'bg-[#f29b38]',
    blurb: 'Meaningful work and boundaries.',
  },
  {
    id: 'financial',
    name: 'Financial',
    icon: DollarSign,
    color: 'bg-[#4aa58b]',
    blurb: 'Stewardship, clarity, generosity.',
  },
]

export default function WellnessMap() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated SVG Doodles */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 -translate-x-1/2 top-12"
        >
          <Image
            src="/doodles/swirl.svg"
            alt="path doodle"
            width={900}
            height={400}
            className="opacity-40"
          />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-12 bottom-10"
        >
          <Image
            src="/doodles/leaf-stack.svg"
            alt="leaf doodle"
            width={240}
            height={120}
            className="opacity-70"
          />
        </motion.div>
        
        <motion.div
          animate={{ rotate: [0, 360], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-10 top-0"
        >
          <Image
            src="/doodles/sunburst.svg"
            alt="sun doodle"
            width={160}
            height={160}
            className="opacity-60"
          />
        </motion.div>

        {/* Floating Animated Elements */}
        {[...Array(15)].map((_, i) => {
          const positions = [
            { top: '5%', left: '10%' },
            { top: '10%', left: '80%' },
            { top: '15%', left: '25%' },
            { top: '20%', left: '70%' },
            { top: '25%', left: '50%' },
            { top: '30%', left: '15%' },
            { top: '35%', left: '85%' },
            { top: '40%', left: '40%' },
            { top: '50%', left: '60%' },
            { top: '60%', left: '20%' },
            { top: '65%', left: '75%' },
            { top: '70%', left: '35%' },
            { top: '75%', left: '90%' },
            { top: '80%', left: '5%' },
            { top: '85%', left: '55%' },
          ]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.5, 0.3, 0.5],
                scale: [0, 1.3, 0.9, 1.3],
                y: [0, -40, -80, -40, 0],
                x: [0, Math.sin(i) * 30, Math.cos(i) * 30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
              style={positions[i]}
              className="absolute"
            >
              {i % 3 === 0 ? (
                <Leaf className="w-6 h-6 text-wellness-fern/40" />
              ) : i % 3 === 1 ? (
                <Flower2 className="w-5 h-5 text-wellness-sun/50" />
              ) : (
                <Sparkles className="w-6 h-6 text-wellness-dew/45" />
              )}
            </motion.div>
          )
        })}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-green-200/20 to-emerald-400/25 blur-[130px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-lime-200/25 to-teal-400/30 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sparkle Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-wellness-sun/70 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2.5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-[0.4em] text-wellness-canopy/60 mb-4">
          Interactive Compass
        </p>
        <h2 className="text-4xl md:text-5xl font-display text-wellness-canopy mb-4">
          Follow the Spiral of Wellness
        </h2>
        <p className="text-lg text-wellness-canopy/80 max-w-3xl mx-auto">
          Each stone is a dimension. Trace the spiral clockwise to see how they
          interconnect. Hover to feel the energy of each realm.
        </p>
      </div>

      <div id="compass" className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {pathDimensions.map((dimension, index) => {
          const Icon = dimension.icon
          return (
            <Link key={dimension.id} href={`/dimension/${dimension.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -12, rotate: Math.random() > 0.5 ? 3 : -3, scale: 1.03 }}
                className="relative cursor-pointer group"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  className="absolute -top-4 -left-4 text-xs uppercase tracking-[0.3em] text-wellness-sun font-bold bg-white/80 px-2 py-1 rounded-full"
                >
                  {index + 1}
                </motion.div>
                <motion.div
                  whileHover={{ boxShadow: '0 30px 80px rgba(31,91,76,0.25)' }}
                  className="rounded-3xl border border-wellness-canopy/10 bg-white shadow-[0_20px_60px_rgba(31,91,76,0.12)] p-5 text-left min-h-[190px] transition-all relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: 'spring' }}
                    className={`w-12 h-12 rounded-2xl ${dimension.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-xl font-display text-wellness-canopy mb-2 group-hover:text-wellness-fern transition-colors"
                  >
                    {dimension.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-sm text-wellness-canopy/80 leading-relaxed"
                  >
                    {dimension.blurb}
                  </motion.p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                    className="mt-4 text-xs text-wellness-fern font-semibold uppercase tracking-wide flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

