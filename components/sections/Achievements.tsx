'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    no:      '01',
    number:  300,
    suffix:  '+',
    label:   'DSA Problems Solved',
    sub:     'LeetCode · Codeforces · HackerRank · GFG',
    icon:    '⚡',
    accent:  '#C1E8FF',
  },
  {
    no:      '02',
    number:  1630,
    suffix:  '',
    label:   'LeetCode Rating',
    sub:     'Top ~25% Globally',
    icon:    '🏆',
    accent:  '#7DA0CA',
  },
  {
    no:      '03',
    number:  5,
    suffix:  '★',
    label:   'HackerRank C/C++ Rating',
    sub:     'Low-level programming & algo optimization',
    icon:    '⭐',
    accent:  '#C1E8FF',
  },
  {
    no:      '04',
    number:  669,
    suffix:  '',
    label:   'Codeforces Rating',
    sub:     'Contest-level competitive programming',
    icon:    '🎯',
    accent:  '#7DA0CA',
  },
]

/* ── COUNT UP HOOK ─────────────────────────────────────── */
function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const startVal = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (target - startVal) + startVal))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative min-h-screen bg-ink py-28 overflow-hidden"
    >

      {/* ── BACKGROUND NUMBER ── */}
      <span
        aria-hidden
        className="absolute -left-[2vw] top-1/2 -translate-y-1/2
                   font-display font-bold leading-none
                   select-none pointer-events-none"
        style={{
          fontSize:         'clamp(14rem, 30vw, 34rem)',
          color:            'transparent',
          WebkitTextStroke: '1px rgba(5, 38, 89, 0.8)',
        }}
      >
        06
      </span>

      {/* ── SECTION LABEL ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-3 mb-16 px-[8vw]"
      >
        <span className="w-8 h-px bg-current" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
          06 — Achievements
        </span>
      </motion.div>

      {/* ── HEADING ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-[8vw] mb-20"
      >
        <h2
          className="font-display font-bold text-snow leading-tight"
          style={{
            fontSize:      'clamp(2.4rem, 5vw, 4rem)',
            letterSpacing: '-0.03em',
          }}
        >
          By the
          <span
            className="ml-4"
            style={{
              color:            'transparent',
              WebkitTextStroke: '1.5px #5483B3',
            }}
          >
            Numbers.
          </span>
        </h2>
        <p className="font-body text-wave mt-4 max-w-lg text-lg">
          Consistent grinding across competitive programming platforms —
          every number earned, not given.
        </p>
      </motion.div>

      {/* ── ACHIEVEMENT BARS ── */}
      <div className="relative z-10 flex flex-col">
        {achievements.map((item, index) => (
          <AchievementBar
            key={item.no}
            item={item}
            index={index}
            inView={inView}
          />
        ))}
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div
        className="absolute bottom-0 left-[8vw] right-[8vw] h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(84,131,179,0.3), transparent)',
        }}
      />
    </section>
  )
}

/* ── ACHIEVEMENT BAR ───────────────────────────────────── */
function AchievementBar({
  item,
  index,
}: {
  item: (typeof achievements)[0]
  index: number
  inView: boolean
}) {
  const ref        = useRef<HTMLDivElement>(null)
  const barInView  = useInView(ref, { once: true, margin: '-5%' })
  const [hovered, setHovered] = useState(false)

  // Count up triggers when bar is in view
  const count = useCountUp(item.number, 1600, barInView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }}
      animate={barInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay:    index * 0.12,
        ease:     [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default"
      style={{
        borderTop:    '1px solid rgba(84, 131, 179, 0.12)',
        borderBottom: index === 3 ? '1px solid rgba(84, 131, 179, 0.12)' : 'none',
        background:   hovered ? 'rgba(5, 38, 89, 0.2)' : 'transparent',
        transition:   'background 0.4s ease',
      }}
    >
      {/* Shimmer sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        animate={hovered ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${item.accent}08 40%,
            ${item.accent}15 50%,
            ${item.accent}08 60%,
            transparent 100%
          )`,
        }}
      />

      {/* ── BAR INNER LAYOUT ── */}
      <div className="relative z-10 flex items-center px-[8vw] py-8
                      gap-8 md:gap-16 flex-wrap md:flex-nowrap">

        {/* No */}
        <span
          className="font-mono text-xs tracking-[0.2em] shrink-0
                     hidden md:block"
          style={{ color: `${item.accent}50` }}
        >
          {item.no}
        </span>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center
                     text-xl shrink-0 transition-all duration-400"
          style={{
            background: hovered ? `${item.accent}15` : `${item.accent}08`,
            border:     `1px solid ${hovered ? item.accent + '40' : item.accent + '20'}`,
          }}
        >
          {item.icon}
        </div>

        {/* Count */}
        <div className="shrink-0 flex items-baseline gap-1 min-w-[140px]">
          <span
            className="font-display font-bold leading-none tabular-nums"
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              color:    item.accent,
              letterSpacing: '-0.03em',
            }}
          >
            {count.toLocaleString()}
          </span>
          <span
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
              color:    item.accent,
            }}
          >
            {item.suffix}
          </span>
        </div>

        {/* Divider */}
        <div
          className="hidden md:block w-px self-stretch shrink-0"
          style={{ background: 'rgba(84,131,179,0.2)' }}
        />

        {/* Label + sub */}
        <div className="flex flex-col gap-1.5 flex-1">
          <h3
            className="font-display font-bold text-snow leading-tight"
            style={{
              fontSize:      'clamp(1.2rem, 2vw, 1.7rem)',
              letterSpacing: '-0.01em',
            }}
          >
            {item.label}
          </h3>
          <p className="font-mono text-xs tracking-wide text-current/60">
            {item.sub}
          </p>
        </div>

        {/* Arrow — appears on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 hidden md:block"
          style={{ color: item.accent }}
        >
          <span className="font-mono text-lg">→</span>
        </motion.div>

      </div>

      {/* Left accent bar — glows on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to bottom, transparent, ${item.accent}, transparent)` }}
      />

    </motion.div>
  )
}