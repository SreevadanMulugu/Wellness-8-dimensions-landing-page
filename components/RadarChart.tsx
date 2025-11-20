// Radar Chart Component for Dimension Comparison
'use client'

import { motion } from 'framer-motion'
import { DimensionScore } from '@/lib/quizRouting'

interface RadarChartProps {
    dimensions: DimensionScore[]
}

export default function RadarChart({ dimensions }: RadarChartProps) {
    const size = 300
    const center = size / 2
    const radius = size / 2 - 40
    const angleStep = (2 * Math.PI) / dimensions.length

    // Calculate points for the polygon
    const getPoint = (index: number, percentage: number) => {
        const angle = angleStep * index - Math.PI / 2
        const r = (radius * percentage) / 100
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle),
        }
    }

    // Create path for the score polygon
    const scorePath = dimensions
        .map((dim, index) => {
            const point = getPoint(index, dim.percentage)
            return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
        })
        .join(' ') + ' Z'

    // Create grid circles
    const gridLevels = [25, 50, 75, 100]

    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-auto"
            >
                {/* Background grid circles */}
                {gridLevels.map((level) => {
                    const r = (radius * level) / 100
                    return (
                        <circle
                            key={level}
                            cx={center}
                            cy={center}
                            r={r}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-wellness-canopy/10"
                        />
                    )
                })}

                {/* Grid lines from center to each dimension */}
                {dimensions.map((_, index) => {
                    const endPoint = getPoint(index, 100)
                    return (
                        <line
                            key={index}
                            x1={center}
                            y1={center}
                            x2={endPoint.x}
                            y2={endPoint.y}
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-wellness-canopy/10"
                        />
                    )
                })}

                {/* Score polygon */}
                <motion.path
                    d={scorePath}
                    fill="url(#radarGradient)"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-wellness-fern"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />

                {/* Gradient definition */}
                <defs>
                    <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2d8a70" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3fa87b" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Score points */}
                {dimensions.map((dim, index) => {
                    const point = getPoint(index, dim.percentage)
                    return (
                        <motion.circle
                            key={dim.dimensionId}
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="currentColor"
                            className="text-wellness-fern"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                        />
                    )
                })}

                {/* Dimension labels */}
                {dimensions.map((dim, index) => {
                    const labelPoint = getPoint(index, 110)
                    const shortName = dim.dimensionName.replace(' Wellness', '')

                    return (
                        <text
                            key={`label-${dim.dimensionId}`}
                            x={labelPoint.x}
                            y={labelPoint.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-[10px] font-semibold fill-wellness-canopy"
                        >
                            {shortName}
                        </text>
                    )
                })}
            </svg>

            {/* Legend */}
            <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-4 text-xs text-wellness-canopy/70">
                    {gridLevels.map((level) => (
                        <div key={level} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-wellness-canopy/20" />
                            <span>{level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
