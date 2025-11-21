'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { X, ArrowRight } from 'lucide-react'
import { calculateQuizResults } from '@/lib/quizRouting'

interface InteractiveQuizProps {
  onClose: () => void
}

const quizQuestions = [
  {
    id: 1,
    dimension: 'Physical Wellness',
    question: 'How often do you engage in physical exercise?',
    options: [
      'Daily (5-7 times per week)',
      'Regularly (3-4 times per week)',
      'Occasionally (1-2 times per week)',
      'Rarely or never',
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 2,
    dimension: 'Emotional Wellness',
    question: 'How well do you manage stress and emotions?',
    options: [
      'Very well - I have healthy coping strategies',
      'Well - I manage most situations effectively',
      'Moderately - I struggle sometimes',
      'Poorly - I often feel overwhelmed',
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 3,
    dimension: 'Intellectual Wellness',
    question: 'How often do you engage in learning or creative activities?',
    options: [
      'Daily - I love learning new things',
      'Regularly - A few times per week',
      'Occasionally - Once in a while',
      "Rarely - I don't prioritize this",
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 4,
    dimension: 'Social Wellness',
    question: 'How satisfied are you with your social relationships?',
    options: [
      'Very satisfied - I have strong connections',
      'Satisfied - I have good relationships',
      'Moderately - Could be better',
      'Unsatisfied - I feel isolated',
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 5,
    dimension: 'Spiritual Wellness',
    question: 'How connected do you feel to your sense of purpose?',
    options: [
      'Very connected - I have clear purpose',
      'Connected - I understand my values',
      "Somewhat - I'm exploring",
      'Not connected - I feel lost',
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 6,
    dimension: 'Environmental Wellness',
    question: 'How environmentally conscious are your daily habits?',
    options: [
      'Very conscious - I actively protect the environment',
      'Conscious - I make eco-friendly choices',
      'Somewhat - I try when I can',
      "Not really - I don't think about it much",
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 7,
    dimension: 'Occupational Wellness',
    question: 'How satisfied are you with your work-life balance?',
    options: [
      'Very satisfied - Perfect balance',
      'Satisfied - Good balance most of the time',
      'Moderately - Could be better',
      'Unsatisfied - I feel overwhelmed',
    ],
    scores: [4, 3, 2, 1],
  },
  {
    id: 8,
    dimension: 'Financial Wellness',
    question: 'How confident are you in your financial situation?',
    options: [
      "Very confident - I'm financially secure",
      'Confident - I manage well',
      'Somewhat - I have concerns',
      'Not confident - I struggle financially',
    ],
    scores: [4, 3, 2, 1],
  },
]

export default function InteractiveQuiz({ onClose }: InteractiveQuizProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  console.log('InteractiveQuiz component rendered!')

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      // Quiz completed - calculate results and redirect
      const results = calculateQuizResults(newAnswers, quizQuestions)

      // Save results to localStorage
      localStorage.setItem('quizResults', JSON.stringify(results))

      // Close modal and redirect to results page
      setTimeout(() => {
        onClose()
        router.push('/result')
      }, 500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative border border-wellness-canopy/10"
      >
        <div className="relative z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-8 md:p-12"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {quizQuestions[currentQuestion].dimension}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
                  {quizQuestions[currentQuestion].question}
                </h2>
              </div>

              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(quizQuestions[currentQuestion].scores[index])}
                    className="w-full text-left p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/40 dark:hover:to-purple-800/40 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 dark:text-gray-100 font-medium text-base">{option}</span>
                      <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
