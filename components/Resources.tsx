'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Book, Video, FileText, ExternalLink, Play, Download } from 'lucide-react'

const resources = [
  {
    category: 'Articles',
    icon: FileText,
    items: [
      {
        title: 'The Complete Guide to Physical Wellness',
        description: 'Learn how to maintain optimal physical health through exercise, nutrition, and rest.',
        link: '#',
        type: 'article',
      },
      {
        title: 'Emotional Intelligence: A Key to Success',
        description: 'Discover how emotional wellness impacts every aspect of your life.',
        link: '#',
        type: 'article',
      },
      {
        title: 'Financial Wellness in 2024',
        description: 'Modern strategies for managing your finances and building wealth.',
        link: '#',
        type: 'article',
      },
    ],
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      {
        title: 'Introduction to 8 Dimensions of Wellness',
        description: 'A comprehensive overview of all wellness dimensions.',
        link: '#',
        type: 'video',
        duration: '15 min',
      },
      {
        title: 'Meditation for Spiritual Wellness',
        description: 'Guided meditation practices for inner peace and clarity.',
        link: '#',
        type: 'video',
        duration: '20 min',
      },
      {
        title: 'Building Social Connections',
        description: 'Tips for developing meaningful relationships.',
        link: '#',
        type: 'video',
        duration: '12 min',
      },
    ],
  },
  {
    category: 'Downloads',
    icon: Download,
    items: [
      {
        title: 'Wellness Assessment PDF',
        description: 'Printable assessment tool for tracking your wellness journey.',
        link: '#',
        type: 'download',
      },
      {
        title: '30-Day Wellness Challenge',
        description: 'A month-long guide to improving all dimensions of wellness.',
        link: '#',
        type: 'download',
      },
      {
        title: 'Goal Setting Worksheet',
        description: 'Structured templates for setting and achieving wellness goals.',
        link: '#',
        type: 'download',
      },
    ],
  },
]

export default function Resources() {
  return (
    <section
      id="resources"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated SVG Doodles */}
        <motion.div
          animate={{ rotate: [0, -15, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 top-20"
        >
          <Image
            src="/doodles/swirl.svg"
            alt=""
            width={800}
            height={300}
            className="opacity-30"
          />
        </motion.div>
        
        <motion.div
          animate={{ rotate: [0, 360], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute right-10 bottom-20"
        >
          <Image
            src="/doodles/sunburst.svg"
            alt=""
            width={200}
            height={200}
            className="opacity-40"
          />
        </motion.div>

        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.35, 0.2, 0.35],
              scale: [0, 1.15, 0.85, 1.15],
              y: [0, -35, -70, -35, 0],
              x: [0, Math.sin(i) * 25, Math.cos(i) * 25, 0],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 13 + i * 1.8,
              repeat: Infinity,
              delay: i * 0.35,
              ease: 'easeInOut',
            }}
            style={{
              top: `${10 + i * 7}%`,
              left: `${(i * 8) % 85 + 5}%`,
            }}
            className="absolute"
          >
            <Book className={`w-6 h-6 ${i % 3 === 0 ? 'text-wellness-fern/30' : i % 3 === 1 ? 'text-wellness-sun/35' : 'text-wellness-dew/30'}`} />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute bottom-10 left-1/3 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-300/25 blur-[110px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-wellness-canopy/60 mb-4">
            Knowledge Grove
          </p>
          <h2 className="text-4xl md:text-6xl font-display text-wellness-canopy mb-4">
            Curated Resources & Rituals
          </h2>
          <p className="text-xl text-wellness-canopy/80">
            Expand your wisdom with immersive reads, films, and downloadable
            guides rooted in modern science and ancient practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              className="rounded-3xl p-6 bg-white border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)]"
              >
                <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center`}
                  style={{
                    background: categoryIndex === 0 ? 'linear-gradient(135deg, #ffe6a7, #fff4d4)' : 
                                categoryIndex === 1 ? 'linear-gradient(135deg, #c9fdd7, #e8fcef)' : 
                                'linear-gradient(135deg, #d9e7ff, #f0f4ff)'
                  }}
                >
                  <Icon className="w-6 h-6 text-wellness-canopy" />
                  </div>
                <h3 className="text-2xl font-display text-wellness-canopy">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.type === 'video' ? Play : item.type === 'download' ? Download : FileText
                    return (
                      <motion.a
                        key={itemIndex}
                        href={item.link}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="block rounded-2xl p-4 bg-wellness-mist/50 hover:bg-wellness-mist border border-wellness-canopy/10 transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white border border-wellness-canopy/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <ItemIcon className="w-5 h-5 text-wellness-fern" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-wellness-canopy group-hover:text-wellness-fern transition-colors">
                                {item.title}
                              </h4>
                              <ExternalLink className="w-4 h-4 text-wellness-canopy/40 group-hover:text-wellness-fern transition-colors" />
                            </div>
                            <p className="text-sm text-wellness-canopy/70 mb-2">
                              {item.description}
                            </p>
                            {item.duration && (
                              <span className="text-xs text-wellness-fern font-medium">
                                {item.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Resource */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl p-8 bg-white border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-wellness-fern to-wellness-sage flex items-center justify-center flex-shrink-0 shadow-md">
              <Book className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display text-wellness-canopy mb-2">
                Immersive Wellness Masterclass
              </h3>
              <p className="text-wellness-canopy/80 mb-4">
                An 8-week guided journey through nature-based practices, live
                sessions, and creative labs led by holistic strategists.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-wellness-fern to-wellness-moss text-white rounded-xl font-semibold shadow-[0_20px_60px_rgba(31,91,76,0.2)] hover:shadow-[0_25px_70px_rgba(31,91,76,0.3)] transition-all"
              >
                Join the Next Cohort
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

