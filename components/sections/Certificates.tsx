'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const certificates = [
  {
    no:       '01',
    name:     'Cloud Computing',
    issuer:   'NPTEL – IIT Kharagpur',
    date:     'Oct 2025',
    url:      'https://drive.google.com/file/d/1R5P-HC2MpEkrMVgXR_8wAjMkS4Xo3vKq/view',
    size:     'large',
    icon:     '☁',
    accent:   '#C1E8FF',
    desc:     'Cloud architecture, deployment models, virtualization and distributed computing fundamentals.',
  },
  {
    no:       '02',
    name:     'Build GenAI Apps with No-Code Tools',
    issuer:   'Infosys Springboard',
    date:     'Aug 2025',
    url:      'https://drive.google.com/file/d/15XAVGXceq-vm_FQrPLa7mUmbbFkP-Hwk/view?usp=sharing',
    size:     'small',
    icon:     '⚡',
    accent:   '#7DA0CA',
    desc:     'Generative AI application development using no-code platforms and AI APIs.',
  },
  {
    no:       '03',
    name:     'TCP/IP and Advanced Topics',
    issuer:   'Coursera',
    date:     'Nov 2024',
    url:      'https://www.coursera.org/account/accomplishments/verify/HSW5Z1QJ1Q83',
    size:     'small',
    icon:     '🌐',
    accent:   '#7DA0CA',
    desc:     'Deep dive into TCP/IP protocols, network layers, routing and advanced networking concepts.',
  },
  {
    no:       '04',
    name:     'Intro to Hardware & Operating Systems',
    issuer:   'IBM × Coursera',
    date:     'Aug 2024',
    url:      'https://www.coursera.org/account/accomplishments/verify/6QTC2KMXLIQ3',
    size:     'large',
    icon:     '💻',
    accent:   '#5483B3',
    desc:     'Hardware components, OS fundamentals, memory management and process scheduling.',
  },
]

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative min-h-screen bg-ink px-[8vw] py-28 overflow-hidden"
    >

      {/* ── BACKGROUND NUMBER ── */}
      <span
        aria-hidden
        className="absolute -right-[4vw] top-1/2 -translate-y-1/2
                   font-display font-bold leading-none
                   select-none pointer-events-none"
        style={{
          fontSize:          'clamp(14rem, 30vw, 34rem)',
          color:             'transparent',
          WebkitTextStroke:  '1px rgba(5, 38, 89, 0.8)',
        }}
      >
        05
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
          05 — Certificates
        </span>
      </motion.div>

      {/* ── HEADING ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-16"
      >
        <h2
          className="font-display font-bold text-snow leading-tight"
          style={{
            fontSize:      'clamp(2.4rem, 5vw, 4rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Verified
          <span
            className="ml-4"
            style={{
              color:             'transparent',
              WebkitTextStroke:  '1.5px #5483B3',
            }}
          >
            Credentials.
          </span>
        </h2>
        <p className="font-body text-wave mt-4 max-w-lg text-lg">
          Industry-recognised certifications across cloud, networking,
          AI, and systems — all verified and linked.
        </p>
      </motion.div>

      {/* ── MASONRY GRID ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {certificates.map((cert, index) => (
          <CertCard key={cert.no} cert={cert} index={index} inView={inView} />
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

/* ── CERT CARD ─────────────────────────────────────────────── */
function CertCard({
  cert,
  index,
  inView,
}: {
  cert: (typeof certificates)[0]
  index: number
  inView: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  // 3D tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    const dx   = (e.clientX - cx) / (rect.width  / 2)
    const dy   = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  const isLarge = cert.size === 'large'

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay:    index * 0.1,
        ease:     [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered
          ? 'transform 0.1s ease'
          : 'transform 0.5s ease',
      }}
      className={`relative overflow-hidden group cursor-default
                  ${isLarge ? 'md:col-span-1' : 'md:col-span-1'}`}
    >
      {/* Card shell */}
      <div
        className="relative h-full flex flex-col gap-6 p-8 overflow-hidden"
        style={{
          background:     'rgba(5, 38, 89, 0.35)',
          border:         `1px solid rgba(84, 131, 179, 0.2)`,
          borderRadius:   '4px',
          backdropFilter: 'blur(12px)',
          minHeight:      isLarge ? '280px' : '220px',
          transition:     'border-color 0.4s ease',
          borderColor:    hovered
            ? `${cert.accent}40`
            : 'rgba(84, 131, 179, 0.2)',
        }}
      >

        {/* ── TOP ROW: icon + verified badge ── */}
        <div className="flex items-start justify-between">

          {/* Icon circle */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center
                       text-xl shrink-0"
            style={{
              background: `${cert.accent}12`,
              border:     `1px solid ${cert.accent}30`,
            }}
          >
            {cert.icon}
          </div>

          {/* Verified badge */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ background: '#00FF88' }}
            />
            <span
              className="font-mono text-[0.6rem] tracking-[0.15em] uppercase"
              style={{ color: '#00FF88' }}
            >
              Verified
            </span>
          </div>
        </div>

        {/* ── CERT NAME ── */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="font-display font-bold text-snow leading-tight"
            style={{
              fontSize:      isLarge ? 'clamp(1.3rem, 2vw, 1.8rem)' : 'clamp(1.1rem, 1.8vw, 1.4rem)',
              letterSpacing: '-0.01em',
              color:         cert.accent,
            }}
          >
            {cert.name}
          </h3>
          <p className="font-body text-wave/80 text-sm leading-relaxed">
            {cert.desc}
          </p>
        </div>

        {/* ── BOTTOM ROW: issuer + date + link ── */}
        <div className="flex items-end justify-between flex-wrap gap-4 pt-2"
          style={{ borderTop: '1px solid rgba(84,131,179,0.12)' }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs tracking-wide text-foam/90 font-bold">
              {cert.issuer}
            </span>
            <span className="font-mono text-[0.65rem] tracking-widest
                             uppercase text-current/50">
              {cert.date}
            </span>
          </div>

          {/* View cert link */}
          <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="font-mono text-[0.65rem] tracking-[0.12em] uppercase
                       flex items-center gap-2 transition-colors duration-300"
            style={{ color: cert.accent }}
          >
            View Certificate →
          </motion.a>
        </div>

        {/* ── ROTATING SEAL (appears on hover) ── */}
        <motion.div
          className="absolute -bottom-8 -right-8 w-24 h-24 flex items-center justify-center pointer-events-none"
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: hovered ? 8 : 0.5, ease: 'linear', repeat: hovered ? Infinity : 0 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id={`circle-${cert.no}`}
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              className="font-mono"
              style={{
                fontSize:    '10px',
                fill:        `${cert.accent}40`,
                letterSpacing: '2px',
              }}
            >
              <textPath href={`#circle-${cert.no}`}>
                VERIFIED · CERTIFIED · VERIFIED · CERTIFIED ·
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* ── CORNER GLOW (top-left) ── */}
        <div
          className="absolute top-0 left-0 w-20 h-20 pointer-events-none
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 0% 0%, ${cert.accent}15, transparent 70%)`,
          }}
        />

        {/* ── BOTTOM ACCENT LINE ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${cert.accent}, transparent)`,
          }}
        />

      </div>
    </motion.div>
  )
}