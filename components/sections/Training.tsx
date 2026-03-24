'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const training = {
  title:       'PEP — Professional Enhancement Program',
  short:       'PEP',
  org:         'Lovely Professional University',
  certificate: 'https://your-certificate-link.com',
  period:      'Jun 2025 – Jul 2025',
  duration:    '6 Weeks · 5hrs/day',
  type:        'DSA Bootcamp',
  languages:   ['C++', 'Java'],
  highlights: [
    {
      icon:  '⚡',
      stat:  '5hrs',
      label: 'Per Day',
      sub:   'Intensive daily sessions',
    },
    {
      icon:  '📅',
      stat:  '6',
      label: 'Weeks',
      sub:   'Consistent structured learning',
    },
    {
      icon:  '🧩',
      stat:  '2–3',
      label: 'Patterns/Day',
      sub:   'Algorithmic patterns mastered daily',
    },
    {
      icon:  '🏆',
      stat:  '1630',
      label: 'LeetCode',
      sub:   'Rating achieved post-bootcamp',
    },
  ],
  patterns: [
    'Topological Sort',
    'Dijkstra\'s Algorithm',
    'Union-Find',
    'Segment Trees',
    'Sliding Window',
    'Backtracking',
    'Dynamic Programming',
    'Binary Search',
    'Graph Traversal',
    'Two Pointers',
    'Monotonic Stack',
    'Trie',
  ],
  outcomes: [
    {
      before: 'Unrated',
      after:  '1630',
      label:  'LeetCode Rating',
      accent: '#C1E8FF',
    },
    {
      before: 'Unrated',
      after:  '669',
      label:  'Codeforces Rating',
      accent: '#7DA0CA',
    },
    {
      before: '0',
      after:  'Top 25%',
      label:  'Global LeetCode Ranking',
      accent: '#C1E8FF',
    },
  ],
}

export default function Training() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={sectionRef}
      id="training"
      className="relative min-h-screen bg-ink px-[8vw] py-28 overflow-hidden"
    >

      {/* ── BACKGROUND WATERMARK ── */}
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   font-display font-bold leading-none
                   select-none pointer-events-none whitespace-nowrap"
        style={{
          fontSize:         'clamp(6rem, 18vw, 20rem)',
          color:            'transparent',
          WebkitTextStroke: '1px rgba(5, 38, 89, 0.7)',
        }}
      >
        BOOTCAMP
      </span>

      {/* ── SECTION LABEL ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-3 mb-16"
      >
        <span className="w-8 h-px bg-current" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
          04 — Training & Bootcamp
        </span>
      </motion.div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]
                      gap-12 lg:gap-20 max-w-7xl">

        {/* ── LEFT: MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >

          {/* Header card */}
          <div
            className="relative overflow-hidden p-8 flex flex-col gap-6"
            style={{
              background:    'rgba(5, 38, 89, 0.4)',
              border:        '1px solid rgba(84, 131, 179, 0.25)',
              borderRadius:  '4px',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Top corner accent */}
            <div
              className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(193,232,255,0.08), transparent)',
              }}
            />

            {/* Type tag */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span
                className="font-mono text-[0.65rem] tracking-[0.18em]
                           uppercase px-3 py-1.5 rounded-full"
                style={{
                  color:      '#C1E8FF',
                  border:     '1px solid rgba(193,232,255,0.3)',
                  background: 'rgba(193,232,255,0.06)',
                }}
              >
                {training.type}
              </span>
              <span className="font-mono text-xs text-current/50 tracking-wide">
                {training.period}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2
                className="font-display font-bold text-snow leading-tight mb-2"
                style={{
                  fontSize:      'clamp(1.6rem, 3vw, 2.4rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                {training.title}
              </h2>
              <p className="font-body text-wave text-base">
                {training.org}
              </p>
            </div>

            {/* Duration + Languages row */}
            <div className="flex items-center gap-4 flex-wrap">
              <span
                className="font-mono text-xs px-3 py-1.5 rounded-full text-foam"
                style={{
                  background: 'rgba(193,232,255,0.06)',
                  border:     '1px solid rgba(193,232,255,0.15)',
                }}
              >
                📅 {training.duration}
              </span>
              {training.languages.map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-xs px-3 py-1.5 rounded-full text-wave"
                  style={{
                    background: 'rgba(84,131,179,0.1)',
                    border:     '1px solid rgba(84,131,179,0.25)',
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="font-body text-wave/80 text-base leading-relaxed">
              An intensive 6-week DSA bootcamp covering 2–3 algorithmic
              patterns daily in C/C++ and Java. Focused on building
              pattern recognition and execution speed under contest pressure
              — going from unrated to competitive in one program.
            </p>

            {/* Certificate link */}
            <a
              href={training.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase
                         flex items-center gap-2 self-start
                         transition-all duration-300 hover:gap-3"
              style={{ color: '#C1E8FF' }}
            >
              View Certificate →
            </a>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background: 'linear-gradient(to right, transparent, #5483B3, transparent)',
              }}
            />
          </div>

          {/* ── HIGHLIGHTS GRID ── */}
          <div className="grid grid-cols-2 gap-4">
            {training.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay:    0.2 + i * 0.08,
                  ease:     [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col gap-3 p-5 transition-all duration-300"
                style={{
                  background:   'rgba(5, 38, 89, 0.25)',
                  border:       '1px solid rgba(84, 131, 179, 0.15)',
                  borderRadius: '4px',
                }}
              >
                <span className="text-xl">{h.icon}</span>
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="font-display font-bold text-foam leading-none"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                    >
                      {h.stat}
                    </span>
                  </div>
                  <p className="font-mono text-xs tracking-wide text-snow/80 mb-1">
                    {h.label}
                  </p>
                  <p className="font-mono text-[0.6rem] tracking-wide text-current/50">
                    {h.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* ── RIGHT: PATTERNS + OUTCOMES ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col gap-8"
        >

          {/* ── PATTERNS COVERED ── */}
          <div
            className="p-8 flex flex-col gap-6"
            style={{
              background:    'rgba(5, 38, 89, 0.25)',
              border:        '1px solid rgba(84, 131, 179, 0.2)',
              borderRadius:  '4px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-current">
                Patterns Covered
              </span>
              <div className="flex-1 h-px bg-current/20" />
              <span className="font-mono text-[0.6rem] text-current/40">
                {training.patterns.length} total
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {training.patterns.map((pattern, i) => (
                <PatternChip
                  key={pattern}
                  pattern={pattern}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* ── OUTCOMES — before/after ── */}
          <div
            className="p-8 flex flex-col gap-6"
            style={{
              background:    'rgba(5, 38, 89, 0.25)',
              border:        '1px solid rgba(84, 131, 179, 0.2)',
              borderRadius:  '4px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-current">
                Results After Bootcamp
              </span>
              <div className="flex-1 h-px bg-current/20" />
            </div>

            <div className="flex flex-col gap-px"
              style={{ border: '1px solid rgba(84,131,179,0.15)', borderRadius: '4px', overflow: 'hidden' }}
            >
              {/* Header row */}
              <div
                className="grid grid-cols-3 px-4 py-2"
                style={{ background: 'rgba(2,16,36,0.6)' }}
              >
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-current/40">Metric</span>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-current/40 text-center">Before</span>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-current/40 text-right">After</span>
              </div>

              {training.outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="grid grid-cols-3 items-center px-4 py-4"
                  style={{
                    background:  i % 2 === 0
                      ? 'rgba(5,38,89,0.3)'
                      : 'rgba(2,16,36,0.3)',
                    borderTop: '1px solid rgba(84,131,179,0.08)',
                  }}
                >
                  <span className="font-mono text-xs text-wave/80">
                    {outcome.label}
                  </span>
                  <span className="font-mono text-sm text-current/50 text-center line-through">
                    {outcome.before}
                  </span>
                  <span
                    className="font-display font-bold text-right"
                    style={{
                      fontSize: '1.1rem',
                      color:    outcome.accent,
                    }}
                  >
                    {outcome.after}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="font-mono text-[0.6rem] tracking-wide text-current/40 leading-relaxed">
              * All ratings achieved by directly applying bootcamp patterns
              to contest problems — improving pattern recognition and
              execution speed under pressure.
            </p>
          </div>

        </motion.div>
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

/* ── PATTERN CHIP ──────────────────────────────────────── */
function PatternChip({
  pattern,
  index,
  inView,
}: {
  pattern: string
  index:   number
  inView:  boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay:    0.3 + index * 0.05,
        ease:     [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="font-mono text-[0.65rem] tracking-wide px-3 py-1.5
                 rounded cursor-default transition-all duration-300"
      style={{
        color:      hovered ? '#C1E8FF' : '#7DA0CA',
        border:     `1px solid ${hovered ? 'rgba(193,232,255,0.35)' : 'rgba(84,131,179,0.2)'}`,
        background: hovered ? 'rgba(193,232,255,0.08)' : 'rgba(5,38,89,0.3)',
      }}
    >
      {pattern}
    </motion.span>
  )
}