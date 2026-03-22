'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const projects = [
  {
    no:       '01',
    name:     'Vibely',
    tagline:  'Event-Centric Photo Sharing Platform',
    period:   'Dec 2025 – Feb 2026',
    tech:     ['Next.js 14', 'TypeScript', 'Supabase', 'ImageKit', 'Redis', 'Turborepo'],
    stats: [
      { val: '~40%', label: 'Cross-platform overhead reduced' },
      { val: '~60%', label: 'Asset load time cut via CDN' },
      { val: '200+', label: 'Concurrent sessions handled' },
    ],
    bullets: [
      'Full-stack monorepo with QR-based event photo collection across web and Expo mobile',
      'Normalized PostgreSQL schema with RLS policies and Zod-validated REST API contracts',
      'ImageKit CDN pipeline with WebP/AVIF adaptive delivery',
      'Automated photo-expiry via Vercel Cron — entire platform on free-tier infrastructure',
    ],
    github: 'https://github.com/Suharshit/vibely',
    live:   'https://vibelyevents.vercel.app',
    accent: '#C1E8FF',
    bg:     'rgba(5, 38, 89, 0.5)',
  },
  {
    no:       '02',
    name:     'PeerLink',
    tagline:  'Serverless LAN Mesh Platform',
    period:   'Sep 2025 – Dec 2025',
    tech:     ['Java', 'TCP/UDP Sockets', 'Multi-threading', 'Java NIO', 'JSON'],
    stats: [
      { val: '10',   label: 'Peers with zero thread contention' },
      { val: 'Zero', label: 'Residual disk artifacts on close' },
      { val: 'No',   label: 'Central server required' },
    ],
    bullets: [
      'P2P LAN tool using UDP broadcast for zero-config device discovery across subnets',
      'Concurrent messaging with Java NIO non-blocking I/O — simultaneous TCP + UDP',
      'Heap-only volatile storage — instant wipe on session close',
      'JSON-serialised message framing over raw TCP with custom protocol headers',
    ],
    github: 'https://github.com/Suharshit/PeerLink',
    live:   null,
    accent: '#7DA0CA',
    bg:     'rgba(2, 16, 36, 0.6)',
  },
  {
    no:       '03',
    name:     'DSAViz',
    tagline:  'Algorithm Visualization Platform',
    period:   'Jun 2025 – Jul 2025',
    tech:     ['Next.js', 'React.js', 'TypeScript', 'Shadcn/UI', 'Tailwind CSS', 'Vercel'],
    stats: [
      { val: '10+',   label: 'Algorithms visualized' },
      { val: '<2s',   label: 'LCP at 200 concurrent users' },
      { val: '<100ms', label: 'Interaction feedback time' },
    ],
    bullets: [
      'Frame-by-frame step control with variable-speed animation engine',
      'Pixel-perfect Figma-to-code UI using Shadcn/UI + Tailwind CSS',
      'Edge caching on Vercel sustaining 200 concurrent users at <2s LCP',
      'Customizable input controls for injecting arbitrary datasets',
    ],
    github: 'https://github.com/Suharshit/DSAViz',
    live:   'https://dsa-visualizer-suharshit-singh.vercel.app',
    accent: '#5483B3',
    bg:     'rgba(5, 38, 89, 0.3)',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef   = useRef<HTMLDivElement>(null)
  const inView     = useInView(titleRef, { once: true })

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-ink"
    >
      {/* ── SECTION LABEL ── */}
      <div
        ref={titleRef}
        className="sticky top-0 z-10 px-[8vw] pt-10 pb-6 bg-ink"
        style={{ borderBottom: '1px solid rgba(84,131,179,0.1)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-current" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
              04 — Projects
            </span>
          </div>
          <span className="font-mono text-xs text-current/40 tracking-widest hidden md:block">
            {projects.length} projects
          </span>
        </motion.div>
      </div>

      {/* ── STACKING CARDS ── */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.no}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div
        className="h-px mx-[8vw]"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(84,131,179,0.3), transparent)',
        }}
      />
    </section>
  )
}

/* ── PROJECT CARD ──────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0]
  index: number
  total: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView  = useInView(cardRef, { once: true, margin: '-5%' })

  // Each card scrolls at a slightly different rate — creates the peel effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y       = useTransform(scrollYProgress, [0, 1], [60,  -60])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4])
  const scale   = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.97])

  return (
    <div
      className="sticky px-[8vw] py-12"
      style={{ top: `${80 + index * 24}px` }}  // stagger the sticky top value
    >
      <motion.div
        ref={cardRef}
        style={{
          y,
          opacity,
          scale,
          background:    project.bg,
          border:        `1px solid rgba(84, 131, 179, 0.2)`,
          borderRadius:  '4px',
          backdropFilter: 'blur(12px)',
        }}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative w-full overflow-hidden group"
      >

        {/* ── GIANT PROJECT NAME — watermark ── */}
        <span
          aria-hidden
          className="absolute -bottom-4 -right-4 font-display font-bold
                     leading-none select-none pointer-events-none
                     opacity-[0.06] z-0"
          style={{
            fontSize:           'clamp(6rem, 14vw, 13rem)',
            color:              project.accent,
            letterSpacing:      '-0.03em',
          }}
        >
          {project.name.toUpperCase()}
        </span>

        {/* ── CARD INNER GRID ── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto]
                        gap-10 p-8 md:p-12">

          {/* LEFT — main info */}
          <div className="flex flex-col gap-6">

            {/* Top row — number + period */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span
                className="font-mono text-xs tracking-[0.2em] uppercase"
                style={{ color: project.accent }}
              >
                Project {project.no}
              </span>
              <span className="font-mono text-xs text-current/50 tracking-wide">
                {project.period}
              </span>
            </div>

            {/* Project name */}
            <div>
              <h3
                className="font-display font-bold text-snow leading-none mb-2"
                style={{
                  fontSize:      'clamp(2.4rem, 5vw, 4.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {project.name}
              </h3>
              <p
                className="font-body text-wave"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
              >
                {project.tagline}
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.65rem] tracking-wider uppercase
                             px-3 py-1 rounded"
                  style={{
                    color:      project.accent,
                    border:     `1px solid ${project.accent}22`,
                    background: `${project.accent}08`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 shrink-0 w-1 h-1 rounded-full"
                    style={{ background: project.accent }}
                  />
                  <span className="font-body text-wave/80 text-sm leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA links */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase
                           flex items-center gap-2 transition-all duration-300
                           hover:gap-3"
                style={{ color: project.accent }}
              >
                GitHub →
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest uppercase
                             flex items-center gap-2 transition-all duration-300
                             hover:gap-3 text-current/60 hover:text-wave"
                >
                  Live Demo →
                </a>
              )}
            </div>

          </div>

          {/* RIGHT — stats column */}
          <div className="flex flex-col justify-center gap-px
                          lg:min-w-[220px] lg:border-l lg:pl-10"
            style={{ borderColor: 'rgba(84,131,179,0.15)' }}
          >
            {project.stats.map(({ val, label }, i) => (
              <div
                key={i}
                className="flex flex-col py-6"
                style={{
                  borderBottom: i < project.stats.length - 1
                    ? '1px solid rgba(84,131,179,0.1)'
                    : 'none',
                }}
              >
                <span
                  className="font-display font-bold leading-none mb-2"
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    color:    project.accent,
                  }}
                >
                  {val}
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.12em]
                                 uppercase text-current/60 leading-relaxed">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ── HOVER ACCENT LINE — bottom ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`,
          }}
        />

        {/* ── TOP CORNER ACCENT ── */}
        <div
          className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.accent}15, transparent)`,
          }}
        />

      </motion.div>
    </div>
  )
}