'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Calendar, Award, BarChart3, CheckCircle2 } from 'lucide-react'

export default function Dashboard() {
  const [progress, setProgress] = useState({
    physical: 75,
    emotional: 60,
    intellectual: 80,
    social: 70,
    spiritual: 65,
    environmental: 55,
    occupational: 85,
    financial: 70,
  })

  const goals = [
    { id: 1, title: 'Exercise 3x per week', dimension: 'Physical', progress: 67, deadline: '2024-01-31' },
    { id: 2, title: 'Read 2 books this month', dimension: 'Intellectual', progress: 50, deadline: '2024-01-31' },
    { id: 3, title: 'Meditate daily', dimension: 'Spiritual', progress: 80, deadline: '2024-01-31' },
  ]

  const achievements = [
    { id: 1, title: 'Wellness Explorer', description: 'Completed all dimension quizzes', icon: Award, color: 'from-yellow-400 to-orange-500' },
    { id: 2, title: 'Mindful Master', description: '7-day meditation streak', icon: CheckCircle2, color: 'from-green-400 to-emerald-500' },
    { id: 3, title: 'Social Butterfly', description: 'Connected with 10+ people', icon: TrendingUp, color: 'from-blue-400 to-cyan-500' },
  ]

  const overallScore = Math.round(
    Object.values(progress).reduce((sum, val) => sum + val, 0) / Object.keys(progress).length
  )

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Wellness Dashboard
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Track your progress across all dimensions
          </p>
        </motion.div>

        {/* Overall Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 mb-8 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Overall Wellness Score
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You're doing great! Keep up the momentum.
              </p>
            </div>
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl"
              >
                <span className="text-4xl font-bold text-white">{overallScore}%</span>
              </motion.div>
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: overallScore / 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0"
              >
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - overallScore / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Progress by Dimension */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-strong rounded-3xl p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Dimension Progress
              </h3>
            </div>
            <div className="space-y-4">
              {Object.entries(progress).map(([dimension, value], index) => (
                <motion.div
                  key={dimension}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 capitalize">
                      {dimension}
                    </span>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {value}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass-strong rounded-2xl p-6 backdrop-blur-xl">
              <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {goals.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Goals</div>
            </div>
            <div className="glass-strong rounded-2xl p-6 backdrop-blur-xl">
              <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {achievements.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
            </div>
            <div className="glass-strong rounded-2xl p-6 backdrop-blur-xl">
              <Calendar className="w-8 h-8 text-pink-600 dark:text-pink-400 mb-4" />
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                12
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Day Streak</div>
            </div>
          </motion.div>
        </div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 mb-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Your Goals
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {goal.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {goal.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.progress}%` }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {goal.dimension} • Due {goal.deadline}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Recent Achievements
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

