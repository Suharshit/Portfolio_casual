'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const skillData: Record<string, string[]> = {
  Languages:        ['Java', 'C++', 'Python', 'TypeScript', 'JavaScript'],
  Frameworks:       ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Turborepo', 'Expo'],
  Frontend:         ['HTML5', 'CSS3', 'Responsive Design', 'Core Web Vitals', 'CDN', 'Lazy Loading'],
  Databases:        ['PostgreSQL', 'MongoDB', 'Supabase', 'Upstash Redis'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Vercel', 'Cloudflare R2', 'GitHub Actions', 'CI/CD', 'Linux'],
  Tools:            ['Git', 'GitHub', 'Postman', 'Figma', 'Shadcn/UI', 'ImageKit', 'Zod'],
  'CS Core':        ['DSA', 'OOP', 'OS', 'DBMS', 'Networking', 'System Design', 'Microservices'],
}

const categories = Object.keys(skillData)

// 8 scatter directions — chips fly in/out from these offsets
const scatterDirections = [
  { x: -280, y: -120 },
  { x:  280, y: -160 },
  { x: -200, y:  120 },
  { x:  320, y:  100 },
  { x: -320, y:   40 },
  { x:  140, y:  220 },
  { x: -120, y: -220 },
  { x:  260, y:  -60 },
]

// Color tint per category
const categoryColors: Record<string, string> = {
  Languages:        'rgba(193, 232, 255, 0.12)',
  Frameworks:       'rgba(125, 160, 202, 0.12)',
  Frontend:         'rgba(84,  131, 179, 0.12)',
  Databases:        'rgba(193, 232, 255, 0.10)',
  'Cloud & DevOps': 'rgba(125, 160, 202, 0.10)',
  Tools:            'rgba(84,  131, 179, 0.10)',
  'CS Core':        'rgba(193, 232, 255, 0.08)',
}

const categoryBorder: Record<string, string> = {
  Languages:        'rgba(193, 232, 255, 0.35)',
  Frameworks:       'rgba(125, 160, 202, 0.35)',
  Frontend:         'rgba(84,  131, 179, 0.35)',
  Databases:        'rgba(193, 232, 255, 0.30)',
  'Cloud & DevOps': 'rgba(125, 160, 202, 0.30)',
  Tools:            'rgba(84,  131, 179, 0.30)',
  'CS Core':        'rgba(193, 232, 255, 0.25)',
}

export default function Skills() {
  const [active, setActive] = useState('Languages')
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-10%' })

  const skills = skillData[active]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex flex-col items-center
                 justify-center py-28 px-[8vw] overflow-hidden bg-ink"
    >

      {/* ── GIANT GHOST CATEGORY NAME — switches with active tab ── */}
      <AnimatePresence mode="wait">
        <motion.span
          key={active}
          initial={{ opacity: 0, y:  50, scale: 0.95 }}
          animate={{ opacity: 1, y:   0, scale: 1    }}
          exit={{    opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold leading-none text-center select-none pointer-events-none whitespace-nowrap z-0"
          style={{
            fontSize: 'clamp(4rem, 13vw, 14rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(5, 38, 89, 0.8)',
          }}
        >
          {active.toUpperCase()}
        </motion.span>
      </AnimatePresence>

      {/* ── SECTION LABEL ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-3 mb-16 self-start"
      >
        <span className="w-8 h-px bg-current" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
          03 — Skills
        </span>
      </motion.div>

      {/* ── CATEGORY TABS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 flex flex-wrap justify-center gap-3 mb-20"
      >
        {categories.map((cat) => {
          const isActive = active === cat
          return (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-mono text-[0.7rem] tracking-widest uppercase
                         px-5 py-2.5 rounded-full transition-all duration-300
                         cursor-pointer"
              style={{
                border: isActive
                  ? '1px solid rgba(193, 232, 255, 0.6)'
                  : '1px solid rgba(84, 131, 179, 0.3)',
                background: isActive
                  ? 'rgba(193, 232, 255, 0.08)'
                  : 'rgba(5, 38, 89, 0.25)',
                color:  isActive ? '#C1E8FF' : '#5483B3',
                boxShadow: isActive
                  ? '0 0 20px rgba(193, 232, 255, 0.12)'
                  : 'none',
              }}
            >
              {cat}
            </motion.button>
          )
        })}
      </motion.div>

      {/* ── SKILL CHIPS — fly in/out with AnimatePresence ── */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-4xl">
        <AnimatePresence mode="popLayout">
          {skills.map((skill, i) => {
            const dir = scatterDirections[i % scatterDirections.length]
            return (
              <motion.div
                key={`${active}-${skill}`}
                initial={{
                  opacity: 0,
                  x: dir.x,
                  y: dir.y,
                  scale: 0.4,
                  rotate: (i % 2 === 0 ? 1 : -1) * (i * 3),
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -dir.x,
                  y: -dir.y,
                  scale: 0.4,
                  rotate: (i % 2 === 0 ? -1 : 1) * (i * 3),
                }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.12,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="font-mono text-sm tracking-wide
                           px-6 py-3 rounded-full cursor-default"
                style={{
                  border:     `1px solid ${categoryBorder[active]}`,
                  background: categoryColors[active],
                  color:      '#C1E8FF',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {skill}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* ── CHIP COUNT ── */}
      <motion.p
        key={active + '-count'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 font-mono text-[0.65rem] tracking-[0.15em]
                   uppercase text-current/50 mt-12"
      >
        {skills.length} {skills.length === 1 ? 'skill' : 'skills'} in {active}
      </motion.p>

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