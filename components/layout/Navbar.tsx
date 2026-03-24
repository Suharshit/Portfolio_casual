'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Training', 'Certificates', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[9997] px-[8vw] py-5 flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(2,16,36,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(84,131,179,0.2)' : 'none',
      }}
    >
      {/* Logo */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="font-display font-bold text-foam text-2xl tracking-tight"
      >
        SS<span className="text-current animate-pulse">_</span>
      </motion.a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault()
              const targetId = link.toLowerCase()
              const target = document.getElementById(targetId)
              const lenis = window.portfolioLenis
              if (lenis && typeof lenis.scrollTo === 'function') {
                lenis.scrollTo(`#${targetId}`)
              } else if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foam transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden font-mono text-wave text-sm"
        aria-label="Toggle menu"
      >
        {open ? '✕ Close' : '☰ Menu'}
      </button>

      {/* Mobile fullscreen menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-ink z-50 flex flex-col items-center justify-center gap-10"
        >
          <button onClick={() => setOpen(false)} className="absolute top-6 right-8 font-mono text-wave text-sm">
            ✕ Close
          </button>
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                const targetId = link.toLowerCase()
                const target = document.getElementById(targetId)
                const lenis = window.portfolioLenis
                if (lenis && typeof lenis.scrollTo === 'function') {
                  lenis.scrollTo(`#${targetId}`)
                } else if (target) {
                  target.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="font-display font-bold text-snow text-4xl hover:text-foam transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}