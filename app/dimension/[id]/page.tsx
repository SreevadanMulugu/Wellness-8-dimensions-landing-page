'use client'

import { use, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Sparkles, Leaf, Flower2, Waves } from 'lucide-react'
import { dimensionsData } from '@/data/dimensions'
import Navigation from '@/components/Navigation'
import DimensionProgressSlider from '@/components/DimensionProgressSlider'

export default function DimensionPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string }
}) {
  const resolvedParams = params instanceof Promise ? use(params) : params
  const { id } = resolvedParams
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const dimension = dimensionsData.find((d) => d.id === id)

  if (!dimension) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff]">
        <div className="text-center">
          <h1 className="text-4xl font-display text-wellness-canopy mb-4">
            Dimension Not Found
          </h1>
          <Link
            href="/"
            className="text-wellness-fern hover:text-wellness-moss underline"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  const Icon = dimension.icon

  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="min-h-screen bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] relative overflow-hidden"
      >
      <Navigation />
      
      {/* Enhanced Doodles & Ambient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated SVG Doodles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute right-0 top-20"
        >
          <Image
            src="/doodles/swirl.svg"
            alt=""
            width={900}
            height={400}
            className="opacity-30"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute left-10 bottom-40"
        >
          <Image
            src="/doodles/leaf-stack.svg"
            alt=""
            width={200}
            height={100}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-8 top-1/4"
        >
          <Image
            src="/doodles/sunburst.svg"
            alt=""
            width={180}
            height={180}
          />
        </motion.div>

        {/* Floating Animated Elements */}
        {[...Array(12)].map((_, i) => {
          const positions = [
            { top: '10%', left: '5%' },
            { top: '20%', left: '85%' },
            { top: '30%', left: '15%' },
            { top: '40%', left: '75%' },
            { top: '50%', left: '25%' },
            { top: '60%', left: '65%' },
            { top: '70%', left: '10%' },
            { top: '80%', left: '90%' },
            { top: '15%', left: '50%' },
            { top: '45%', left: '50%' },
            { top: '75%', left: '50%' },
            { top: '35%', left: '50%' },
          ]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0.2, 0.4],
                scale: [0, 1.2, 0.8, 1.2],
                y: [0, -30, -60, -30, 0],
                x: [0, Math.sin(i) * 20, Math.cos(i) * 20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
              style={positions[i]}
              className="absolute"
            >
              {i % 3 === 0 ? (
                <Leaf className="w-8 h-8 text-wellness-fern/30" />
              ) : i % 3 === 1 ? (
                <Flower2 className="w-6 h-6 text-wellness-sun/40" />
              ) : (
                <Waves className="w-7 h-7 text-wellness-dew/35" />
              )}
            </motion.div>
          )
        })}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-32 -left-16 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-green-300/20 to-emerald-600/30 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 right-10 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-lime-200/25 to-teal-500/25 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/20 to-yellow-300/25 blur-[110px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sparkle Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-wellness-sun/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-wellness-canopy hover:text-wellness-moss mb-8 group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold">Back to Compass</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-wellness-canopy/10 bg-white shadow-[0_20px_60px_rgba(31,91,76,0.12)] overflow-hidden"
          >
            <div className="relative h-64 md:h-96 overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={dimension.image}
                  alt={dimension.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-t ${dimension.overlay}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${dimension.color} mb-4 text-white shadow-lg`}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {dimension.name}
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-display mb-3 text-glow"
                >
                  {dimension.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl opacity-95 max-w-3xl text-glow"
                >
                  {dimension.description}
                </motion.p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="mb-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl font-display text-wellness-canopy mb-4 flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Sparkles className="w-8 h-8 text-wellness-sun" />
                  </motion.div>
                  Overview
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg text-wellness-canopy/90 leading-relaxed"
                >
                  {dimension.content?.overview}
                </motion.p>
              </div>

              <div className="mb-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-3xl font-display text-wellness-canopy mb-6"
                >
                  Key Practices
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {dimension.content?.keyPoints?.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-wellness-canopy/10 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-6 h-6 ${dimension.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <p className="text-wellness-canopy/90 leading-relaxed group-hover:text-wellness-canopy transition-colors">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-3xl font-display text-wellness-canopy mb-6"
                >
                  Practical Tips
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {dimension.content?.tips?.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="p-5 rounded-2xl bg-gradient-to-br from-white to-wellness-mist border border-wellness-canopy/10 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                      >
                        <p className="text-wellness-canopy/90 leading-relaxed group-hover:text-wellness-canopy transition-colors">
                          {tip}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress Slider & Next Dimension */}
        {typeof window !== 'undefined' && (
          <DimensionProgressSlider
            currentDimensionId={id}
            allDimensions={dimensionsData.map((d) => ({ id: d.id, name: d.name }))}
            completedDimensions={
              typeof window !== 'undefined'
                ? JSON.parse(localStorage.getItem('completedDimensions') || '[]')
                : []
            }
          />
        )}

        {/* Explore Other Dimensions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <motion.h3
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl font-display text-wellness-canopy mb-6"
          >
            Explore Other Dimensions
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/#compass"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-wellness-canopy/10 rounded-full font-semibold text-wellness-canopy shadow-[0_20px_60px_rgba(31,91,76,0.12)] hover:shadow-[0_25px_70px_rgba(31,91,76,0.2)] transition-all group"
            >
              <span>View All Dimensions</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    </AnimatePresence>
  )
}

