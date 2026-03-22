'use client'
import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { val: '8.14', label: 'CGPA' },
  { val: '1630', label: 'LeetCode' },
  { val: '300+', label: 'Problems' },
]

const learning = ['AWS Advanced', 'System Design', 'Open Source']

const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen flex items-center px-[8vw] py-32 overflow-hidden bg-ink"
    >

      {/* ── BACKGROUND: GIANT SECTION NUMBER ── */}
      <span
        aria-hidden
        className="absolute -left-[2vw] top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(14rem, 32vw, 36rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(5, 38, 89, 0.95)',
        }}
      >
        01
      </span>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2
                      gap-16 lg:gap-24 w-full max-w-7xl mx-auto">

        {/* ── LEFT: PHOTO ── */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative w-full max-w-[500px]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)',
          }}
        >
          {/* Photo */}
          <Image
            src="/me.jpg"
            alt="Suharshit Singh"
            width={500}
            height={600}
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.05) saturate(0.85)',
              border: '1px solid rgba(84, 131, 179, 0.35)',
              display: 'block',
              objectPosition: 'center 20%',
            }}
            priority
          />

          {/* Dark gradient overlay — bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(2,16,36,0.7) 0%, transparent 55%)',
            }}
          />

          {/* Name tag — sits on the photo bottom */}
          <div className="absolute bottom-6 left-6">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-wave mb-1">
              Currently based in
            </p>
            <p className="font-display font-bold text-foam text-lg leading-tight">
              Jalandhar, Punjab
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT: BIO ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col justify-center"
        >

          {/* Section label */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-mono text-xs tracking-[0.2em] uppercase
                       text-current mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-current" />
            About Me
          </motion.span>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-display font-bold text-foam leading-tight mb-8"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            "Full-stack dev who obsesses
            over both the architecture
            and the pixel."
          </motion.blockquote>

          {/* Body text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-body text-wave text-lg leading-relaxed mb-10"
          >
            I'm Suharshit — a B.Tech CSE student at Lovely Professional
            University (CGPA 8.14), building production-grade systems
            since day one. I specialise in type-safe full-stack development
            with Next.js, TypeScript, and PostgreSQL. When I'm not shipping
            features, I'm grinding DSA —{' '}
            <span className="text-foam font-bold">LeetCode 1630</span>,
            top 25% globally.
          </motion.p>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-3 overflow-hidden rounded-lg mb-10"
            style={{ border: '1px solid rgba(84, 131, 179, 0.25)' }}
          >
            {stats.map(({ val, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center
                           py-6 px-4 text-center"
                style={{
                  background: 'rgba(5, 38, 89, 0.4)',
                  borderRight: i < stats.length - 1
                    ? '1px solid rgba(84, 131, 179, 0.25)'
                    : 'none',
                }}
              >
                <span
                  className="font-display font-bold text-foam leading-none mb-2"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                >
                  {val}
                </span>
                <span className="font-mono text-[0.65rem] tracking-[0.15em]
                                 uppercase text-current">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Currently learning */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-xs tracking-widest uppercase
                             text-current shrink-0">
              Currently →
            </span>
            {learning.map((item) => (
              <span
                key={item}
                className="font-mono text-[0.7rem] px-4 py-1.5 rounded-full
                           text-wave tracking-wide"
                style={{
                  border: '1px solid rgba(125, 160, 202, 0.3)',
                  background: 'rgba(5, 38, 89, 0.3)',
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>

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