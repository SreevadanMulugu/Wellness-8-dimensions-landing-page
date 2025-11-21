'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Sparkles, Flame, Leaf, Flower2, Waves, Compass } from 'lucide-react'
import WellnessSpiralPreview from './WellnessSpiralPreview'
import TypewriterText from './TypewriterText'

interface EnhancedHeroProps {
  onStartQuiz: () => void
}

export default function EnhancedHero({ onStartQuiz }: EnhancedHeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col overflow-hidden pt-16 pb-4 bg-gradient-to-b from-[#FFFEF9] via-[#FAF6ED] to-[#F4E4C1]"
    >
      {/* Enhanced Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-1/2 -translate-x-1/2 top-20"
        >
          <Image
            src="/doodles/swirl.svg"
            alt=""
            width={1000}
            height={500}
            className="opacity-30 rotate-3"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -left-10 bottom-20"
        >
          <Image
            src="/doodles/leaf-stack.svg"
            alt=""
            width={220}
            height={120}
            className="opacity-50"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-8 top-1/3"
        >
          <Image
            src="/doodles/sunburst.svg"
            alt=""
            width={200}
            height={200}
            className="opacity-40"
          />
        </motion.div>
      </div>

      {/* Enhanced Ambient layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-16 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-amber-200/20 to-yellow-300/25 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 right-10 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-yellow-100/25 to-amber-300/20 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], y: [0, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-amber-200/20 to-orange-300/25 blur-[90px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[url('/textures/leaf-veins.svg')] opacity-10 mix-blend-overlay"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 border border-white/20 rounded-full"
            style={{
              top: `${8 + i * 7}%`,
              left: `${(i * 11) % 85 + 8}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 14 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = [Leaf, Flower2, Waves, Sparkles, Compass]
          const Icon = icons[i % icons.length]
          const positions = [
            { top: '12%', left: '8%' },
            { top: '25%', left: '15%' },
            { top: '18%', right: '12%' },
            { top: '35%', left: '5%' },
            { top: '45%', right: '8%' },
            { top: '55%', left: '12%' },
            { top: '65%', right: '15%' },
            { top: '75%', left: '10%' },
            { top: '30%', right: '25%' },
            { top: '50%', left: '20%' },
            { top: '70%', right: '22%' },
            { top: '15%', left: '30%' },
            { top: '40%', right: '30%' },
            { top: '60%', left: '28%' },
            { top: '80%', right: '18%' },
          ]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0.2, 0.4],
                scale: [0, 1.2, 0.8, 1.2],
                y: [0, -30, -60, -30, 0],
                x: [0, Math.sin(i) * 25, Math.cos(i) * 25, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
              style={positions[i]}
              className="absolute"
            >
              <Icon className={`w-6 h-6 ${i % 3 === 0 ? 'text-wellness-fern/30' : i % 3 === 1 ? 'text-wellness-sun/35' : 'text-amber-300/25'}`} />
            </motion.div>
          )
        })}
      </div>

      <div className="relative z-10 flex-1 w-full flex items-center min-h-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
          {/* Enhanced Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[48px] border border-wellness-fern/20 bg-white/70 backdrop-blur-3xl shadow-[0_50px_140px_rgba(201,169,97,0.18)] p-6 md:p-10 lg:p-12 overflow-hidden"
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-wellness-mist/20 rounded-[52px] pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(31,91,76,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,91,76,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            <div className="relative z-10 h-full">
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center h-full">
                {/* Left Content - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left space-y-4 md:space-y-5"
                >
                  {/* Badge - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-wellness-cream/90 to-wellness-sage/40 backdrop-blur-md text-wellness-moss border border-wellness-fern/15 shadow-[0_20px_60px_rgba(201,169,97,0.15)]">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                        }}
                      >
                        <Sparkles className="w-5 h-5 text-wellness-sun" />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm font-semibold tracking-wide uppercase"
                      >
                        Welcome to the Wellness Journey
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Main Heading - Enhanced Typography with Typewriter */}
                  <div className="space-y-2 md:space-y-3">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight text-wellness-moss leading-snug"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.04, 1],
                          opacity: [1, 0.95, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="inline-block text-wellness-sun"
                      >
                        <TypewriterText
                          text="Breathe In."
                          speed={120}
                          className="inline-block"
                        />
                      </motion.span>
                      <span className="block md:inline md:ml-2 text-wellness-fern">
                        Grow Deeply.
                      </span>
                    </motion.h2>

                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-wellness-moss leading-snug"
                    >
                      Journey Through the{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-wellness-fern via-wellness-moss to-wellness-sage">
                        Eight Dimensions
                      </span>{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-wellness-sage via-wellness-moss to-wellness-fern">
                        of Wellness
                      </span>
                    </motion.h1>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-sm md:text-base text-wellness-moss/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  >
                    Step into an immersive learning sanctuary inspired by ancient forests
                    and modern mindfulness. Each realm reveals practices, sounds, and
                    stories to nurture your whole self.
                  </motion.p>

                  {/* CTA Buttons - Enhanced */}
                  <motion.div
                    {/* Right Visual - Enhanced */}
              <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
                    className="hidden lg:block relative"
                  >
                    <div className="relative">
                      {/* Enhanced Glow Behind Card */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-amber-300/30 via-yellow-200/25 to-wellness-fern/20 blur-3xl rounded-[52px]"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      <div className="relative">
                        <WellnessSpiralPreview />
                      </div>
                    </div>
                  </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div >

      {/* Scroll Indicator - Enhanced - Fixed at bottom */}
      < motion.div
        initial={{ opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="pb-2 md:pb-4 text-center relative z-10 flex-shrink-0"
      >
        <motion.a

