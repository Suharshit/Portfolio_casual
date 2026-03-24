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
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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
          className="relative flex items-end justify-center"
          style={{ minHeight: '520px' }}
        >
          {/* ── GLOW RING behind figure ── */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2
                      w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(125,160,202,0.18) 0%, transparent 70%)',
              filter: 'blur(24px)',
            }}
          />

          {/* ── GRID CIRCLE — decorative ring ── */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2
                      w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{
              border: '1px solid rgba(84, 131, 179, 0.15)',
              boxShadow: '0 0 0 40px rgba(84,131,179,0.04), 0 0 0 80px rgba(84,131,179,0.02)',
            }}
          />

          {/* ── SCAN LINES overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(2,16,36,0.08) 3px, rgba(2,16,36,0.08) 4px)',
              mixBlendMode: 'multiply',
            }}
          />

          {/* ── ACTUAL IMAGE ── */}
          <div className="relative z-10">
            <Image
              src="/suharshitsingh.png"
              alt="Suharshit Singh"
              width={520}
              height={620}
              className="object-contain object-bottom select-none"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(125,160,202,0.35)) drop-shadow(0 0 80px rgba(5,38,89,0.6))',
                maxHeight: '620px',
              }}
              priority
              draggable={false}
            />
          </div>

          {/* ── BOTTOM FADE — blends into page ── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-30"
            style={{
              background: 'linear-gradient(to top, #021024 0%, transparent 100%)',
            }}
          />

          {/* ── SIDE ACCENT LINE — left ── */}
          <div
            className="absolute left-4 top-[15%] bottom-[15%] w-px pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(193,232,255,0.2), transparent)',
            }}
          />

          {/* ── NAME TAG — bottom overlay ── */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40
                      flex flex-col items-center gap-1 text-center"
          >
            <div
              className="px-4 py-2 rounded-sm backdrop-blur-sm"
              style={{
                background: 'rgba(5, 38, 89, 0.6)',
                border: '1px solid rgba(84,131,179,0.3)',
              }}
            >
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-current mb-0.5">
                Currently based in
              </p>
              <p className="font-display font-bold text-foam text-base leading-tight">
                Jalandhar, Punjab
              </p>
            </div>
          </div>
          {/* ── AVAILABLE badge — top right of photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-8 right-0 z-40 flex items-center gap-2 px-3 py-2 rounded-full"
            style={{
              background: 'rgba(5, 38, 89, 0.8)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#00FF88' }}
            />
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase"
              style={{ color: '#00FF88' }}>
              Open to work
            </span>
          </motion.div>
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
            &quot;Full-stack dev who obsesses
            over both the architecture
            and the pixel.&quot;
          </motion.blockquote>

          {/* Body text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-body text-wave text-lg leading-relaxed mb-10"
          >
            I&apos;m Suharshit — a B.Tech CSE student at Lovely Professional
            University (CGPA 8.14), building production-grade systems
            since day one. I specialise in type-safe full-stack development
            with Next.js, TypeScript, and PostgreSQL. When I&apos;m not shipping
            features, I&apos;m grinding DSA —{' '}
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