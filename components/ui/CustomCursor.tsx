'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 80, damping: 18 })
  const ringY = useSpring(dotY, { stiffness: 80, damping: 18 })

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [dotX, dotY])

  return (
    <>
      {/* Sharp inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-2 h-2 bg-foam rounded-full pointer-events-none mix-blend-difference z-[9999]"
      />
      {/* Lagging outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 w-8 h-8 -translate-x-3 -translate-y-3 border border-wave rounded-full pointer-events-none opacity-60 z-[9998]"
      />
    </>
  )
}