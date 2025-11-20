'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Plus, X, Heart, Calendar, BookOpen, Edit2, Trash2 } from 'lucide-react'
import { format } from 'date-fns'

interface JournalEntry {
  id: string
  date: string
  dimension: string
  content: string
  mood: string
}

export default function WellnessJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      date: new Date().toISOString(),
      dimension: 'Emotional',
      content: 'Had a great day today! Felt really positive and accomplished.',
      mood: 'happy',
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    dimension: 'Physical',
    content: '',
    mood: 'happy',
  })

  const dimensions = ['Physical', 'Emotional', 'Intellectual', 'Social', 'Spiritual', 'Environmental', 'Occupational', 'Financial']
  const moods = [
    { value: 'happy', emoji: '😊', label: 'Happy' },
    { value: 'calm', emoji: '😌', label: 'Calm' },
    { value: 'energetic', emoji: '⚡', label: 'Energetic' },
    { value: 'grateful', emoji: '🙏', label: 'Grateful' },
    { value: 'focused', emoji: '🎯', label: 'Focused' },
    { value: 'tired', emoji: '😴', label: 'Tired' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...formData,
    }
    setEntries([newEntry, ...entries])
    setFormData({ dimension: 'Physical', content: '', mood: 'happy' })
    setIsOpen(false)
  }

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  return (
    <section
      id="journal"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated SVG Doodles */}
        <motion.div
          animate={{ rotate: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 bottom-0"
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
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-10 top-20"
        >
          <Image
            src="/doodles/leaf-stack.svg"
            alt=""
            width={200}
            height={100}
            className="opacity-50"
          />
        </motion.div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0.15, 0.3],
              scale: [0, 1.1, 0.9, 1.1],
              y: [0, -25, -50, -25, 0],
              x: [0, Math.sin(i) * 15, Math.cos(i) * 15, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
            style={{
              top: `${15 + i * 10}%`,
              left: `${(i * 12) % 80 + 10}%`,
            }}
            className="absolute"
          >
            <Heart className="w-5 h-5 text-wellness-fern/25" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-10 right-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-pink-200/15 to-purple-300/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-wellness-canopy/60 mb-4">
            Daily Field Notes
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-wellness-canopy mb-4">
            Forest Reflections
          </h2>
          <p className="text-xl text-wellness-canopy/80">
            Log your mood, rituals, and discoveries. Watch patterns bloom over
            time.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-full mb-10 px-6 py-4 bg-gradient-to-r from-wellness-fern to-wellness-moss text-white rounded-2xl font-semibold text-lg shadow-[0_20px_60px_rgba(31,91,76,0.2)] hover:shadow-[0_25px_70px_rgba(31,91,76,0.3)] transition-all flex items-center justify-center gap-3"
        >
          <Plus className="w-5 h-5" />
          New Reflection
        </motion.button>

        {/* Journal Entries */}
        <div className="space-y-4">
          <AnimatePresence>
            {entries.map((entry, index) => {
              const mood = moods.find((m) => m.value === entry.mood)
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl p-6 bg-white border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-wellness-fern to-wellness-sage flex items-center justify-center text-2xl shadow-md">
                        {mood?.emoji || '😊'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-wellness-canopy/60" />
                          <span className="text-sm text-wellness-canopy/70">
                            {format(new Date(entry.date), 'MMM dd, yyyy')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-wellness-canopy/60" />
                          <span className="text-sm font-semibold text-wellness-fern uppercase tracking-wide">
                            {entry.dimension}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-2 hover:bg-wellness-mist rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-wellness-canopy/70" />
                    </button>
                  </div>
                  <p className="text-wellness-canopy/80 leading-relaxed">
                    {entry.content}
                  </p>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {entries.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl p-12 text-center border border-dashed border-wellness-canopy/20 bg-white/50 text-wellness-canopy/70"
            >
              <Heart className="w-16 h-16 mx-auto mb-4 text-wellness-fern" />
              <p>Begin charting your story beneath the canopy.</p>
            </motion.div>
          )}
        </div>

        {/* Add Entry Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-3xl p-8 max-w-2xl w-full backdrop-blur-xl max-h-[90vh] overflow-y-auto text-gray-800 dark:text-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-display text-wellness-canopy dark:text-wellness-sage">
                    New Forest Reflection
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Dimension
                    </label>
                    <select
                      value={formData.dimension}
                      onChange={(e) => setFormData({ ...formData, dimension: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    >
                      {dimensions.map((dim) => (
                        <option key={dim} value={dim}>
                          {dim}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      How are you feeling?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {moods.map((mood) => (
                        <button
                          key={mood.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, mood: mood.value })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.mood === mood.value
                              ? 'border-emerald-300 bg-emerald-50/50 text-emerald-900'
                              : 'border-white/10 bg-white/5 text-white'
                          }`}
                        >
                          <div className="text-3xl mb-2">{mood.emoji}</div>
                          <div className="text-sm font-medium">
                            {mood.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your thoughts
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none placeholder:text-white/50"
                      placeholder="What did today feel like under the canopy?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-wellness-fern to-emerald-400 text-white rounded-xl font-semibold shadow-forest-glow hover:shadow-xl transition-all"
                  >
                    Save Entry
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

