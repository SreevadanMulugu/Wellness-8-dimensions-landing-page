// Custom Hook for Mobile Haptic Feedback
// Provides native-like vibration feedback for touch interactions

import { useCallback, useEffect, useState } from 'react'

type HapticStyle = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error'

interface HapticOptions {
    enabled?: boolean
}

export function useHaptics(options: HapticOptions = {}) {
    const { enabled = true } = options
    const [isSupported, setIsSupported] = useState(false)

    useEffect(() => {
        // Check if Vibration API is supported
        setIsSupported('vibrate' in navigator)
    }, [])

    const vibrate = useCallback(
        (pattern: number | number[]) => {
            if (!enabled || !isSupported) return

            try {
                navigator.vibrate(pattern)
            } catch (error) {
                console.warn('Haptic feedback failed:', error)
            }
        },
        [enabled, isSupported]
    )

    const haptic = useCallback(
        (style: HapticStyle = 'light') => {
            if (!enabled || !isSupported) return

            const patterns: Record<HapticStyle, number | number[]> = {
                light: 10,           // Quick tap
                medium: 20,          // Button press
                heavy: 30,           // Important action
                success: [10, 50, 10], // Double tap
                warning: [20, 100, 20], // Alert pattern
                error: [30, 100, 30, 100, 30], // Strong alert
            }

            vibrate(patterns[style])
        },
        [enabled, isSupported, vibrate]
    )

    return {
        haptic,
        vibrate,
        isSupported,
    }
}

// Convenience hooks for specific interactions
export function useButtonHaptic() {
    const { haptic } = useHaptics()

    return useCallback(() => {
        haptic('light')
    }, [haptic])
}

export function useSuccessHaptic() {
    const { haptic } = useHaptics()

    return useCallback(() => {
        haptic('success')
    }, [haptic])
}

export function useErrorHaptic() {
    const { haptic } = useHaptics()

    return useCallback(() => {
        haptic('error')
    }, [haptic])
}
