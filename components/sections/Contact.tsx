'use client'
import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import MarqueeText from '@/components/ui/MarqueeText'

const contacts = [
  {
    label: 'Email',
    value: 'suharshit123@gmail.com',
    href:  'mailto:suharshit123@gmail.com',
    copy:  true,
  },
  {
    label: 'LinkedIn',
    value: '/suharshit-singh0905',
    href:  'https://linkedin.com/in/suharshit-singh0905',
    copy:  false,
  },
  {
    label: 'GitHub',
    value: '/Suharshit',
    href:  'https://github.com/Suharshit',
    copy:  false,
  },
  {
    label: 'Phone',
    value: '+91-7888390911',
    href:  'tel:+917888390911',
    copy:  true,
  },
]

const socialLinks = [
  { label: 'GitHub',    href: 'https://github.com/Suharshit' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/suharshit-singh0905' },
  { label: 'Portfolio', href: 'https://suharshitsingh.vercel.app' },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-5%' })

  // Parallax on the giant text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '0%'])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-ink flex flex-col
                 justify-between overflow-hidden pt-28"
    >

      {/* ── SECTION LABEL ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-3 px-[8vw]"
      >
        <span className="w-8 h-px bg-current" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
          07 — Get In Touch
        </span>
      </motion.div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-[8vw] pb-0">

        {/* Subtext above heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-wave text-lg mb-6 max-w-lg"
        >
          Open to full-time roles, freelance projects, and collaborations.
          Always up for a good conversation about code.
        </motion.p>

        {/* ── MASSIVE HEADLINE ── */}
        <motion.div
          style={{ y: textY }}
          className="overflow-hidden"
        >
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-bold leading-none"
            style={{
              fontSize:      'clamp(5rem, 18vw, 20rem)',
              letterSpacing: '-0.04em',
            }}
          >
            <span className="text-snow">LET'S </span>
            <span
              style={{
                color:            'transparent',
                WebkitTextStroke: '2px #5483B3',
              }}
            >
              BUILD
            </span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ color: '#C1E8FF' }}
            >
              .
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>

      {/* ── CONTACT GRID ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 mx-[8vw] mt-16"
        style={{ borderTop: '1px solid rgba(84,131,179,0.2)' }}
      >
        {contacts.map(({ label, value, href, copy }) => (
          <ContactCard
            key={label}
            label={label}
            value={value}
            href={href}
            copy={copy}
          />
        ))}
      </motion.div>

      {/* ── MARQUEE DIVIDER ── */}
      <div
        className="relative z-10 mt-16"
        style={{ borderTop: '1px solid rgba(84,131,179,0.1)' }}
      >
        <div className="py-4">
          <MarqueeText
            items={[
              'Available for work',
              'Full-Stack Developer',
              'Open to collaborate',
              'Let\'s build together',
              'Based in Punjab India',
              'Shipping real products',
            ]}
            speed={30}
            direction="right"
          />
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex items-center justify-between
                   px-[8vw] py-6"
        style={{ borderTop: '1px solid rgba(84,131,179,0.12)' }}
      >
        {/* Left — copyright */}
        <span className="font-mono text-xs text-current/50 tracking-wide">
          © 2026 Suharshit Singh — Designed & Built by Suharshit
        </span>

        {/* Right — social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.12em] uppercase
                         text-current/50 transition-colors duration-300
                         hover:text-foam"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── BACKGROUND GLOW — bottom center ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2
                   w-[80vw] h-[40vh] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(5,38,89,0.5) 0%, transparent 70%)',
        }}
      />

    </section>
  )
}

/* ── CONTACT CARD ──────────────────────────────────────── */
function ContactCard({
  label,
  value,
  href,
  copy,
}: {
  label: string
  value: string
  href:  string
  copy:  boolean
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!copy) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="group flex flex-col gap-2 pt-8 pb-6 pr-8
                 transition-all duration-300 cursor-pointer"
      onClick={handleCopy}
      style={{ borderRight: '1px solid rgba(84,131,179,0.1)' }}
    >
      {/* Label */}
      <span className="font-mono text-[0.65rem] tracking-[0.18em]
                       uppercase text-current/50 mb-1">
        {label}
      </span>

      {/* Value */}
      <a
        href={href}
        target={href.startsWith('mailto') || href.startsWith('tel') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        onClick={e => copy && e.preventDefault()}
        className="font-body text-wave group-hover:text-foam
                   transition-colors duration-300 text-sm leading-relaxed
                   break-all"
      >
        {value}
      </a>

      {/* Copy feedback / arrow */}
      <div className="mt-auto pt-3">
        {copy ? (
          <motion.span
            key={copied ? 'copied' : 'copy'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[0.6rem] tracking-widest uppercase"
            style={{ color: copied ? '#00FF88' : 'rgba(84,131,179,0.4)' }}
          >
            {copied ? '✓ Copied!' : 'Click to copy'}
          </motion.span>
        ) : (
          <motion.span
            className="font-mono text-[0.6rem] tracking-widest uppercase
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
            style={{ color: '#7DA0CA' }}
          >
            Open →
          </motion.span>
        )}
      </div>
    </div>
  )
}