// 3D Circular Progress Component
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CircularProgress3DProps {
    percentage: number
    size?: number
    strokeWidth?: number
    label?: string
    showPercentage?: boolean
}

export default function CircularProgress3D({
    percentage,
    size = 200,
    strokeWidth = 12,
    label,
    showPercentage = true,
}: CircularProgress3DProps) {
    const [displayPercentage, setDisplayPercentage] = useState(0)

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (displayPercentage / 100) * circumference

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayPercentage(percentage)
        }, 100)
        return () => clearTimeout(timer)
    }, [percentage])

    // Color based on percentage
    const getColor = () => {
        if (percentage >= 75) return { from: '#10b981', to: '#059669' } // Green
        if (percentage >= 50) return { from: '#3b82f6', to: '#2563eb' } // Blue
        return { from: '#f59e0b', to: '#d97706' } // Orange
    }

    const colors = getColor()

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                width={size}
                height={size}
                className="transform -rotate-90"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))' }}
            >
                {/* Background circle with 3D effect */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#bgGradient)"
                    strokeWidth={strokeWidth}
                    opacity="0.2"
                />

                {/* Progress circle with gradient */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* Inner glow effect */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius - strokeWidth / 2}
                    fill="url(#innerGlow)"
                    opacity="0.1"
                />

                {/* Gradients */}
                <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e5f0ed" />
                        <stop offset="100%" stopColor="#d1e7dd" />
                    </linearGradient>

                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors.from} />
                        <stop offset="100%" stopColor={colors.to} />
                    </linearGradient>

                    <radialGradient id="innerGlow">
                        <stop offset="0%" stopColor={colors.from} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={colors.to} stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {showPercentage && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                        className="text-center"
                    >
                        <div className="text-4xl font-bold text-wellness-canopy">
                            {Math.round(displayPercentage)}
                            <span className="text-2xl">%</span>
                        </div>
                        {label && (
                            <div className="text-xs text-wellness-canopy/60 mt-1 font-medium">
                                {label}
                            </div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Outer glow ring */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `radial-gradient(circle, transparent 60%, ${colors.from}15 100%)`,
                    filter: 'blur(20px)',
                }}
            />
        </div>
    )
}
