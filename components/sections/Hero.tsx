'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'
import MarqueeText from '@/components/ui/MarqueeText'

const techPills = ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS']

const marqueeItems = [
  'Next.js', 'TypeScript', 'PostgreSQL', 'Docker',
  'AWS', 'Redis', 'Java', 'CI/CD', 'System Design', 'Node.js',
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const lineVariants: Variants = {
  hidden:   { y: '100%', opacity: 0 },
  visible:  { y: '0%', opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const fadeUp = (delay: number): Variants => ({
  hidden:  { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } },
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const ghostX       = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const panelY       = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const panelOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center"
    >

      {/* ── GHOST NAME — parallax background ── */}
      <motion.div
        aria-hidden
        style={{ x: ghostX }}
        className="absolute inset-0 flex items-center pointer-events-none select-none z-0 translate-x-[15vw]"
      >
        <span
          className="font-display font-bold whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 22vw, 26rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(84, 131, 179, 0.18)',
          }}
        >
          SUHARSHIT
        </span>
      </motion.div>

      {/* ── RADIAL GLOW — atmosphere ── */}
      <div
        aria-hidden
        className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw]
                   rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(5,38,89,0.6) 0%, transparent 70%)',
        }}
      />

      {/* ── INFO PANEL ── */}
      <motion.div
        style={{ y: panelY, opacity: panelOpacity }}
        className="relative z-10 ml-[8vw] max-w-[640px] w-full pt-[7rem] pb-[5rem]"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Terminal tag */}
          <motion.div
            variants={fadeUp(0)}
            className="flex items-center gap-2 mb-6 font-mono text-xs text-wave"
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-foam shrink-0"
            />
            Full-Stack Developer · B.Tech CSE · LPU
          </motion.div>

          {/* Name — slide up per line */}
          <div className="mb-4">
            <div className="overflow-hidden leading-[1.05]">
              <motion.h1
                variants={lineVariants}
                className="font-display font-bold text-snow leading-[1.05] m-0"
                style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7rem)', letterSpacing: '-0.03em' }}
              >
                Suharshit
              </motion.h1>
            </div>
            <div className="overflow-hidden leading-[1.05]">
              <motion.h1
                variants={lineVariants}
                className="font-display font-bold text-foam leading-[1.05] m-0"
                style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7rem)', letterSpacing: '-0.03em' }}
              >
                Singh.
              </motion.h1>
            </div>
          </div>

          {/* Headline */}
          <motion.p
            variants={fadeUp(0.5)}
            className="font-body text-wave leading-relaxed mb-10 max-w-[500px]"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
          >
            Building performant full-stack systems — from type-safe APIs
            to CDN-optimized frontends.{' '}
            <span className="text-foam font-bold">LeetCode 1630</span>
            {' · '}
            <span className="text-foam font-bold">300+</span>
            {' '}DSA problems solved.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            variants={fadeUp(0.65)}
            className="flex flex-wrap gap-3 mb-12"
          >
            {techPills.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[0.75rem] px-5 py-2 rounded-full text-foam tracking-wide border border-current/40 bg-abyss/50 backdrop-blur-sm transition-colors duration-300 hover:border-foam/60 hover:bg-abyss cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.8)}
            className="flex items-center gap-8 flex-wrap"
          >
            {/* Resume download */}
            <MagneticButton>
              <a
                href="/Suharshit_Singh_General_CV.pdf"
                download
                className="font-mono text-xs font-bold tracking-wider px-10 py-4 rounded-full bg-foam text-ink outline-none transition-all duration-300 hover:bg-snow hover:scale-105 whitespace-nowrap"
              >
                Download Resume ↓
              </a>
            </MagneticButton>

            <span className="w-1 h-1 rounded-full bg-current/50 hidden sm:block" />

            {/* View projects */}
            <a
              href="#projects"
              className="font-mono text-sm text-wave hover:text-foam transition-colors duration-300 flex items-center gap-3 group"
            >
              View Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp(0.95)}
            className="flex gap-8 mt-10 pt-8 border-t border-current/20"
          >
            {[
              { label: 'GitHub',   href: 'https://github.com/Suharshit' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/suharshit-singh0905' },
              { label: 'Email',    href: 'mailto:suharshit123@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.15em] uppercase text-current hover:text-foam transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-current group-hover:bg-foam transition-colors duration-300" />
                {label}
              </a>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ── SCROLL HINT — bottom right ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-24 right-[8vw] flex flex-col items-center gap-2 z-10"
      >
        <span
          className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-current"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-16"
          style={{ background: 'linear-gradient(to bottom, #5483B3, transparent)' }}
        />
      </motion.div>

      {/* ── MARQUEE — pinned to bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-current/15 py-3.5"
      >
        <MarqueeText items={marqueeItems} speed={40} />
      </div>

    </section>
  )
}