'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
    ArrowRight,
    Sparkles,
    TrendingUp,
    Target,
    CheckCircle2,
    AlertCircle,
    Home,
    Flame
} from 'lucide-react'
import { QuizResult, DimensionScore, getPriorityQueue } from '@/lib/quizRouting'
import { dimensionsData } from '@/data/dimensions'
import Navigation from '@/components/Navigation'

export default function ResultPage() {
    const router = useRouter()
    const [quizResults, setQuizResults] = useState<QuizResult | null>(null)
    const [priorityQueue, setPriorityQueue] = useState<DimensionScore[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Load quiz results from localStorage
        const savedResults = localStorage.getItem('quizResults')
        if (savedResults) {
            const results = JSON.parse(savedResults)
            setQuizResults(results)

            // Calculate priority queue
            const queue = getPriorityQueue(results)
            setPriorityQueue(queue)

            // Save priority queue to localStorage
            localStorage.setItem('priorityQueue', JSON.stringify(queue.map(d => d.dimensionId)))
            localStorage.setItem('completedDimensions', JSON.stringify([]))
        } else {
            // No results found, redirect to home
            router.push('/')
        }
    }, [router])

    const handleStartJourney = () => {
        if (priorityQueue.length > 0) {
            // Navigate to first dimension in priority queue
            router.push(`/dimension/${priorityQueue[0].dimensionId}`)
        }
    }

    const getGradeInfo = (percentage: number) => {
        if (percentage >= 95) return { grade: 'A+', color: 'from-emerald-500 to-green-600', bg: 'bg-emerald-50', text: 'text-emerald-700' }
        if (percentage >= 85) return { grade: 'A', color: 'from-emerald-400 to-green-500', bg: 'bg-emerald-50', text: 'text-emerald-700' }
        if (percentage >= 70) return { grade: 'B', color: 'from-blue-400 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-700' }
        if (percentage >= 55) return { grade: 'C', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-700' }
        return { grade: 'D', color: 'from-rose-400 to-red-500', bg: 'bg-rose-50', text: 'text-rose-700' }
    }

    if (!mounted || !quizResults) {
        return null
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] relative overflow-hidden">
            <Navigation />

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-300/20 blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-purple-200/25 to-pink-300/20 blur-[110px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-wellness-fern to-wellness-moss shadow-lg mb-6"
                    >
                        <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-display text-wellness-canopy mb-4">
                        Your Wellness Journey
                    </h1>
                    <p className="text-lg md:text-xl text-wellness-canopy/70 max-w-2xl mx-auto">
                        Discover your personalized path to holistic wellness
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Dimension Breakdown - Takes 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)] p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-wellness-canopy/60 mb-1">
                                        Assessment Results
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-display text-wellness-canopy">
                                        Dimension Breakdown
                                    </h2>
                                </div>
                                <TrendingUp className="w-8 h-8 text-wellness-fern" />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {quizResults.dimensionScores.map((dim, index) => {
                                    const gradeInfo = getGradeInfo(dim.percentage)
                                    const dimensionData = dimensionsData.find(d => d.id === dim.dimensionId)
                                    const Icon = dimensionData?.icon

                                    return (
                                        <motion.div
                                            key={dim.dimensionId}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            className="group relative overflow-hidden rounded-2xl border border-wellness-canopy/10 bg-gradient-to-br from-white to-wellness-mist/30 p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            {/* Background gradient on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${gradeInfo.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                            <div className="relative">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        {Icon && (
                                                            <div className={`w-8 h-8 rounded-lg ${dimensionData?.color} flex items-center justify-center`}>
                                                                <Icon className="w-4 h-4 text-white" />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="text-xs uppercase tracking-wide text-wellness-canopy/60">
                                                                {dim.dimensionName}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${gradeInfo.bg} ${gradeInfo.text}`}>
                                                        {gradeInfo.grade}
                                                    </span>
                                                </div>

                                                <div className="flex items-end justify-between mb-3">
                                                    <div>
                                                        <p className="text-3xl font-bold text-wellness-canopy">
                                                            {dim.score}<span className="text-lg text-wellness-canopy/50">/{dim.maxScore}</span>
                                                        </p>
                                                    </div>
                                                    <span className="text-xl font-display text-wellness-canopy/70">
                                                        {Math.round(dim.percentage)}%
                                                    </span>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="h-2.5 rounded-full bg-wellness-mist/50 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${dim.percentage}%` }}
                                                        transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: 'easeOut' }}
                                                        className={`h-full rounded-full bg-gradient-to-r ${gradeInfo.color} shadow-sm`}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Priority Queue Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Priority Queue Card */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)] p-6">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wellness-sun to-amber-500 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-wellness-canopy/60">
                                        Your Path
                                    </p>
                                    <h3 className="text-lg font-display text-wellness-canopy">
                                        Priority Focus
                                    </h3>
                                </div>
                            </div>

                            {priorityQueue.length > 0 ? (
                                <>
                                    <p className="text-sm text-wellness-canopy/70 mb-4">
                                        We've identified {priorityQueue.length} {priorityQueue.length === 1 ? 'dimension' : 'dimensions'} that could benefit from extra attention. Let's start your journey!
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        {priorityQueue.map((dim, index) => {
                                            const dimensionData = dimensionsData.find(d => d.id === dim.dimensionId)
                                            const Icon = dimensionData?.icon

                                            return (
                                                <motion.div
                                                    key={dim.dimensionId}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-wellness-canopy/10 bg-gradient-to-r from-wellness-mist/60 to-white/80 shadow-sm"
                                                >
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-wellness-fern/10 text-wellness-fern font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                    {Icon && (
                                                        <div className={`w-8 h-8 rounded-lg ${dimensionData?.color} flex items-center justify-center flex-shrink-0`}>
                                                            <Icon className="w-4 h-4 text-white" />
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-semibold text-wellness-canopy truncate">
                                                            {dim.dimensionName}
                                                        </p>
                                                        <p className="text-xs text-wellness-canopy/60">
                                                            Score: {dim.score}/{dim.maxScore}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )
                                        })}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleStartJourney}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-wellness-fern to-wellness-moss text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <Flame className="w-5 h-5" />
                                        <span>Start Your Journey</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </>
                            ) : (
                                <div className="text-center py-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 mb-4"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-wellness-canopy mb-2">
                                        Excellent Work!
                                    </h4>
                                    <p className="text-sm text-wellness-canopy/70">
                                        All dimensions are performing well. Keep up the great work on your wellness journey!
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-wellness-canopy/10 shadow-[0_20px_60px_rgba(31,91,76,0.12)] p-6">
                            <h3 className="text-lg font-display text-wellness-canopy mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 p-3 rounded-xl border border-wellness-canopy/10 hover:bg-wellness-mist/30 transition-colors group"
                                >
                                    <Home className="w-5 h-5 text-wellness-canopy/60 group-hover:text-wellness-fern transition-colors" />
                                    <span className="text-sm font-medium text-wellness-canopy">Return Home</span>
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('quizResults')
                                        localStorage.removeItem('priorityQueue')
                                        localStorage.removeItem('completedDimensions')
                                        router.push('/')
                                    }}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-wellness-canopy/10 hover:bg-wellness-mist/30 transition-colors group"
                                >
                                    <Sparkles className="w-5 h-5 text-wellness-canopy/60 group-hover:text-wellness-fern transition-colors" />
                                    <span className="text-sm font-medium text-wellness-canopy">Retake Assessment</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
