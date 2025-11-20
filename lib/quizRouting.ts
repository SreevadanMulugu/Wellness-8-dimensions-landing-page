export interface DimensionScore {
  dimensionId: string
  dimensionName: string
  score: number
  maxScore: number
  percentage: number
}

export interface QuizResult {
  dimensionScores: DimensionScore[]
  totalScore: number
  maxTotalScore: number
  overallPercentage: number
}

const dimensionMapping: { [key: string]: string } = {
  'Physical Wellness': 'physical',
  'Emotional Wellness': 'emotional',
  'Intellectual Wellness': 'intellectual',
  'Social Wellness': 'social',
  'Spiritual Wellness': 'spiritual',
  'Environmental Wellness': 'environmental',
  'Occupational Wellness': 'occupational',
  'Financial Wellness': 'financial',
}

export function calculateQuizResults(answers: number[], questions: any[]): QuizResult {
  const dimensionScores: DimensionScore[] = questions.map((question, index) => {
    const score = answers[index] || 0
    const maxScore = Math.max(...question.scores)
    const percentage = (score / maxScore) * 100

    return {
      dimensionId: dimensionMapping[question.dimension] || question.dimension.toLowerCase(),
      dimensionName: question.dimension,
      score,
      maxScore,
      percentage,
    }
  })

  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  const maxTotalScore = questions.length * Math.max(...questions[0].scores)
  const overallPercentage = (totalScore / maxTotalScore) * 100

  return {
    dimensionScores,
    totalScore,
    maxTotalScore,
    overallPercentage,
  }
}

export function getSortedDimensionsByScore(results: QuizResult): DimensionScore[] {
  return [...results.dimensionScores].sort((a, b) => a.score - b.score)
}

export function getRecommendedDimensions(results: QuizResult, count: number = 2): DimensionScore[] {
  const sorted = getSortedDimensionsByScore(results)
  return sorted.slice(0, count)
}

export function getPriorityQueue(results: QuizResult): DimensionScore[] {
  // Filter dimensions with score <= 3 (out of 4) which is <= 75%
  const lowScoringDimensions = results.dimensionScores.filter(
    (dim) => dim.score <= 3
  )

  // Sort by score (lowest first) for FIFO queue
  return lowScoringDimensions.sort((a, b) => a.score - b.score)
}

