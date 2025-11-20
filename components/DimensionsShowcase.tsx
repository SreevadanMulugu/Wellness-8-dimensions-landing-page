'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Heart, 
  Brain, 
  Users, 
  Leaf, 
  Briefcase, 
  DollarSign, 
  Activity,
  Sparkles
} from 'lucide-react'
import DimensionCard from './DimensionCard'
import DimensionDetail from './DimensionDetail'

const dimensions = [
  {
    id: 'physical',
    name: 'Physical Wellness',
    icon: Activity,
    gradient: 'from-[#1c6f5c] via-[#3bb58f] to-[#a9f4cc]',
    accent: 'bg-[#2d8a70]',
    description:
      'Maintaining a resilient body through nourishing movement, rest, and mindful fuel.',
    overlay: 'from-[#04150f]/95 via-[#063028]/80 to-transparent',
    image:
      'https://images.unsplash.com/photo-1526404079166-5bb7a5f0c5b8?w=1200&auto=format&fit=crop',
    content: {
      overview:
        "Physical wellness invites you to honor your body's rhythms through movement, rest, seasonal foods, and rejuvenating rituals. It's about cultivating strength and gentleness simultaneously.",
      keyPoints: [
        'Create rituals that honor mobility, balance, and breath',
        'Nourish with colorful, seasonal ingredients',
        'Protect sleep as sacred recovery time',
        'Hydrate with intention and gratitude',
        'Schedule preventative care and celebrate body literacy',
        'Design joyful movement practice outdoors when possible',
        'Listen deeply to signs of fatigue or tension',
      ],
      tips: [
        'Anchor workouts to natural cues like sunrise or sunset',
        'Batch-prep vibrant bowls using local produce',
        'Trade doom-scroll time for mindful stretching',
        'Pair hydration with micro-meditations',
        'Keep a “body gratitude” notebook for small wins',
      ],
    },
  },
  {
    id: 'emotional',
    name: 'Emotional Wellness',
    icon: Heart,
    gradient: 'from-[#f0b3c1] via-[#ffdee3] to-[#f3f7f0]',
    accent: 'bg-[#f47a9a]',
    description:
      'Listening to your feelings, creating safe releases, and cultivating resilience with compassion.',
    overlay: 'from-[#3c0f22]/90 via-[#591730]/75 to-transparent',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Emotional wellness is the art of self-attunement—welcoming every feeling, giving it language, and releasing it through healthy practices. It thrives on boundaries, empathy, and rituals of joy.',
      keyPoints: [
        'Name emotions without judgment',
        'Create tools for stressful moments (breathwork, tapping, music)',
        'Develop a gratitude and self-compassion practice',
        'Ask for help early and often',
        'Design boundaries that protect your energy',
        'Curate spaces and playlists that soothe your nervous system',
        'Celebrate laughter and creative expression',
      ],
      tips: [
        'Use a color wheel journal to track daily emotions',
        'Set “digital sunsets” to protect evening calm',
        'Practice box breathing before big conversations',
        'Share a weekly appreciation note with someone',
        'Host mini “joy labs” exploring art, scent, or sound',
      ],
    },
  },
  {
    id: 'intellectual',
    name: 'Intellectual Wellness',
    icon: Brain,
    gradient: 'from-[#6fb1ff] via-[#9fd6ff] to-[#e1fffc]',
    accent: 'bg-[#4c8eda]',
    description:
      'Feeding curiosity through soulful learning, creativity, and exploration.',
    overlay: 'from-[#071b3a]/92 via-[#0d2d4e]/75 to-transparent',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Intellectual wellness is a lifelong expedition where questions become constellations. Reading, tinkering, and debating expand your inner canopy.',
      keyPoints: [
        'Design immersive learning quests each season',
        'Blend logic with artistry (mind maps, sketchnotes)',
        'Stretch your brain with puzzles, languages, or music',
        'Attend salons, workshops, or audio classrooms',
        'Mentor others to reinforce your knowledge',
        'Cross-pollinate disciplines for fresh insights',
        'Document aha moments in a curiosity journal',
      ],
      tips: [
        'Set “deep work forest walks” without devices',
        'Keep a rotating “shelf of wonder” with new topics',
        'Host mini book salons or podcast dinners',
        'Subscribe to museum livestreams or lectures',
        'Gamify retention with flashcards + rewards',
      ],
    },
  },
  {
    id: 'social',
    name: 'Social Wellness',
    icon: Users,
    gradient: 'from-[#6ddccf] via-[#9ef7da] to-[#e2fff3]',
    accent: 'bg-[#2ca690]',
    description:
      'Tending meaningful bonds, reciprocal support, and joyful community rituals.',
    overlay: 'from-[#02242a]/95 via-[#0a4a4a]/70 to-transparent',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Social wellness blossoms when we feel seen, safe, and celebrated. It’s about nourishing circles of trust, practicing empathy, and creating shared memories.',
      keyPoints: [
        'Schedule intentional connection rituals',
        'Practice generous listening and reflective questions',
        'Co-create experiences that anchor belonging',
        'Honor boundaries and communicate needs clearly',
        'Engage with diverse communities and perspectives',
        'Offer support as often as you request it',
        'Celebrate milestones—large and small—together',
      ],
      tips: [
        'Host quarterly “gratitude gatherings” outdoors',
        'Rotate who leads shared meals or adventures',
        'Create collaborative playlists or vision boards',
        'Send voice notes instead of texts for warmth',
        'Volunteer as a group to amplify impact',
      ],
    },
  },
  {
    id: 'spiritual',
    name: 'Spiritual Wellness',
    icon: Sparkles,
    gradient: 'from-[#b39bff] via-[#d7ceff] to-[#f9f5ff]',
    accent: 'bg-[#8060d0]',
    description:
      'Deepening purpose, awe, and connection to something greater than yourself.',
    overlay: 'from-[#1b0b2d]/92 via-[#2b1245]/75 to-transparent',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Spiritual wellness is the quiet conversation between your inner compass and the world. It thrives in rituals, gratitude, stillness, and wonder.',
      keyPoints: [
        'Create sacred spaces at home or in nature',
        'Explore meditation, prayer, chant, or breathwork',
        'Practice daily gratitude and intention setting',
        'Study philosophies that expand compassion',
        'Spend time in silence to hear intuition',
        'Seek mentors or communities aligned with your values',
        'Transform setbacks into meaningful lessons',
      ],
      tips: [
        'Light a candle each morning with an intention',
        'Track moon phases and align self-care rituals',
        'Attend sunrise or sunset meditations outdoors',
        'Collect wisdom quotes in a “soul deck”',
        'Blend movement with mindfulness (yoga, qigong, walking prayer)',
      ],
    },
  },
  {
    id: 'environmental',
    name: 'Environmental Wellness',
    icon: Leaf,
    gradient: 'from-[#3b7b59] via-[#76c58d] to-[#d1ffd9]',
    accent: 'bg-[#2e6a46]',
    description:
      'Living in reciprocity with Earth—protecting habitats, spaces, and our shared climate.',
    overlay: 'from-[#041108]/95 via-[#0b2414]/75 to-transparent',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Environmental wellness weaves sustainability into daily life. It invites stewardship, conscious consumption, and reverence for natural systems.',
      keyPoints: [
        'Audit your footprint and set regenerative goals',
        'Support circular economies and low-waste swaps',
        'Spend restorative time outdoors weekly',
        'Create healthy indoor ecosystems with plants + light',
        'Advocate for local green initiatives',
        'Choose ethical brands and slow fashion',
        'Teach others about climate optimism and action',
      ],
      tips: [
        'Host clothing swaps or tool libraries',
        'Compost kitchen scraps for balcony gardens',
        'Adopt biking or walking commutes where possible',
        'Track energy use and celebrate reductions',
        'Join community science or clean-up projects',
      ],
    },
  },
  {
    id: 'occupational',
    name: 'Occupational Wellness',
    icon: Briefcase,
    gradient: 'from-[#f6c28b] via-[#fddcaf] to-[#fff8e8]',
    accent: 'bg-[#f29b38]',
    description:
      'Crafting meaningful work, creative flow, and boundaries that protect joy.',
    overlay: 'from-[#2c1404]/90 via-[#4e2a12]/70 to-transparent',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Occupational wellness is the alignment of your talents, values, and energy. It’s about designing a vocation that fuels vitality without sacrificing rest.',
      keyPoints: [
        'Define personal success metrics beyond titles',
        'Create energy maps to plan your week',
        'Invest in professional growth + mentorship',
        'Cultivate psychological safety in teams',
        'Build boundaries for digital balance',
        'Celebrate micro-wins and creative sparks',
        'Infuse purpose into daily tasks',
      ],
      tips: [
        'Design a “focus forest” playlist for deep work',
        'Batch similar tasks to preserve flow',
        'Schedule walking meetings outdoors',
        'Rotate inspiring art or affirmations in your workspace',
        'Experiment with sabbaticals, 4-day weeks, or co-working retreats',
      ],
    },
  },
  {
    id: 'financial',
    name: 'Financial Wellness',
    icon: DollarSign,
    gradient: 'from-[#8fd3c3] via-[#bff5d9] to-[#f0fff6]',
    accent: 'bg-[#4aa58b]',
    description:
      'Stewarding resources with clarity, generosity, and future-ready systems.',
    overlay: 'from-[#05231b]/90 via-[#0c3d30]/70 to-transparent',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop',
    content: {
      overview:
        'Financial wellness offers calm around money by blending literacy, aligned spending, and future stewardship. It empowers generosity and security.',
      keyPoints: [
        'Track inflows/outflows with curiosity, not shame',
        'Automate savings, investing, and giving',
        'Design spending plans that reflect core values',
        'Build safety nets for flexibility and rest',
        'Learn about ethical wealth-building vehicles',
        'Hold regular “money councils” with partners/friends',
        'Celebrate milestones like debt payoffs or giving goals',
      ],
      tips: [
        'Name each savings account after a dream outcome',
        'Practice “mindful spending pauses” before purchases',
        'Listen to joyful finance podcasts during walks',
        'Co-create community funds or micro-grants',
        'Review finances outdoors to reduce stress associations',
      ],
    },
  },
]

export default function DimensionsShowcase() {
  const [selectedDimension, setSelectedDimension] =
    useState<string | null>(null)

  const badges = [
    { label: 'Learn', color: 'bg-[#ffe6a7]', doodle: '✨' },
    { label: 'Breathe', color: 'bg-[#c9fdd7]', doodle: '🌿' },
    { label: 'Connect', color: 'bg-[#ffe3ec]', doodle: '🤝' },
    { label: 'Reflect', color: 'bg-[#d9e7ff]', doodle: '🌀' },
  ]

  return (
    <section
      id="dimensions"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/doodles/swirl.svg"
          alt=""
          width={900}
          height={400}
          className="absolute left-1/2 -translate-x-1/2 top-12 opacity-25 rotate-[-3deg]"
        />
        <Image
          src="/doodles/leaf-stack.svg"
          alt=""
          width={240}
          height={120}
          className="absolute -left-12 bottom-10 opacity-40"
        />
        <Image
          src="/doodles/sunburst.svg"
          alt=""
          width={180}
          height={180}
          className="absolute -right-10 top-20 opacity-35"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-wellness-canopy/60 mb-4">
            The Living Compass
          </p>
          <h2 className="text-4xl md:text-6xl font-display text-wellness-canopy mb-6">
            Explore Each Wellness Realm
          </h2>
          <p className="text-xl text-wellness-canopy/80 max-w-3xl mx-auto">
            Tap a stone marker to open its story, rituals, and invitations.
            Every realm is interactive, cinematic, and grounded in science.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${badge.color} text-wellness-canopy shadow-md`}
              >
                {badge.doodle} {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={dimension.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <DimensionCard
                dimension={dimension}
                onClick={() => setSelectedDimension(dimension.id)}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedDimension && (
            <DimensionDetail
              dimension={dimensions.find((d) => d.id === selectedDimension)!}
              onClose={() => setSelectedDimension(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

