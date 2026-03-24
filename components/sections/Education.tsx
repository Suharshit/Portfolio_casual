'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    no: '01',
    school: 'Lovely Professional University',
    short: 'LPU',
    degree: 'B.Tech — Computer Science & Engineering',
    year: '2023 – 2027',
    detail: 'CGPA: 8.14',
    location: 'Phagwara, Punjab',
    tag: 'Ongoing',
    courses: ['DSA', 'OS', 'DBMS', 'Computer Networks', 'System Design'],
  },
  {
    no: '02',
    school: 'Seth Hukam Chand S.D. Public School',
    short: 'SHCSD',
    degree: 'Class XII — Science',
    year: '2022 – 2023',
    detail: 'Percentage: 71.4%',
    location: 'Jalandhar, Punjab',
    tag: 'Completed',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    no: '03',
    school: 'Seth Hukam Chand S.D. Public School',
    short: 'SHCSD',
    degree: 'Class X — Science',
    year: '2020 – 2021',
    detail: 'Percentage: 86%',
    location: 'Jalandhar, Punjab',
    tag: 'Completed',
    courses: ['Science', 'Mathematics', 'Social Science', 'English'],
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true })

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    // Wait for layout to settle
    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative h-screen overflow-hidden bg-ink"
    >

      {/* ── SECTION LABEL — fixed top left while pinned ── */}
      <div
        ref={titleRef}
        className="absolute top-10 left-[8vw] z-20 flex items-center gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="w-8 h-px bg-current" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-current">
            02 — Education
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-2 ml-6"
        >
          <span className="font-mono text-[0.6rem] tracking-widest uppercase text-current/50">
            scroll to explore
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-current/50 text-xs"
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* ── HORIZONTAL TRACK ── */}
      <div
        ref={trackRef}
        className="flex h-full items-center gap-8"
        style={{ paddingLeft: '8vw', width: 'max-content' }}
      >

        {/* Leading space so first card doesn't sit at top-left corner */}
        <div className="shrink-0 w-[4vw]" />

        {education.map((edu, index) => (
          <EducationCard key={edu.no} edu={edu} index={index} />
        ))}

        {/* Trailing space */}
        <div className="shrink-0 w-[8vw] h-full flex items-center">
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-px h-24"
              style={{
                background: 'linear-gradient(to bottom, rgba(84,131,179,0.4), transparent)',
              }}
            />
            <span
              className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-current/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              End of timeline
            </span>
          </div>
        </div>

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

/* ── INDIVIDUAL CARD ─────────────────────────────────────── */
function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="relative shrink-0 flex flex-col justify-end overflow-hidden group"
      style={{
        width: 'clamp(340px, 38vw, 580px)',
        height: '62vh',
        background: 'rgba(5, 38, 89, 0.35)',
        border: '1px solid rgba(84, 131, 179, 0.2)',
        backdropFilter: 'blur(12px)',
        borderRadius: '4px',
        transition: 'border-color 0.4s ease',
      }}
      whileHover={{
        borderColor: 'rgba(193, 232, 255, 0.25)',
        y: -8,
        transition: { duration: 0.3 },
      }}
    >

      {/* ── BIG NUMBER — top right decorative ── */}
      <span
        aria-hidden
        className="absolute top-4 right-6 font-display font-bold
                   leading-none select-none pointer-events-none
                   transition-opacity duration-500 group-hover:opacity-60"
        style={{
          fontSize: 'clamp(7rem, 12vw, 11rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(5, 38, 89, 0.95)',
        }}
      >
        {edu.no}
      </span>

      {/* ── SHORT NAME — large watermark center ── */}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center
                   font-display font-bold select-none pointer-events-none
                   opacity-[0.04]"
        style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
      >
        {edu.short}
      </span>

      {/* ── CARD CONTENT — bottom anchored ── */}
      <div className="relative z-10 p-8 flex flex-col gap-4">

        {/* Tag */}
        <span
          className="font-mono text-[0.65rem] tracking-[0.15em] uppercase
                     self-start px-3 py-1 rounded-full"
          style={{
            color: edu.tag === 'Ongoing' ? '#C1E8FF' : '#7DA0CA',
            border: `1px solid ${edu.tag === 'Ongoing'
              ? 'rgba(193,232,255,0.35)'
              : 'rgba(125,160,202,0.25)'}`,
            background: 'rgba(2, 16, 36, 0.5)',
          }}
        >
          {edu.tag === 'Ongoing' && (
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full bg-foam mr-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          )}
          {edu.tag}
        </span>

        {/* Year */}
        <p className="font-mono text-sm text-current tracking-wide">
          {edu.year}
        </p>

        {/* School name */}
        <h3
          className="font-display font-bold text-snow leading-tight"
          style={{
            fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
            letterSpacing: '-0.01em',
          }}
        >
          {edu.school}
        </h3>

        {/* Degree */}
        <p className="font-body text-wave text-base">
          {edu.degree}
        </p>

        {/* Detail row — grade + location */}
        <div className="flex items-center gap-4 flex-wrap">
          <span
            className="font-mono text-xs px-3 py-1 rounded-full text-foam"
            style={{
              background: 'rgba(193,232,255,0.08)',
              border: '1px solid rgba(193,232,255,0.15)',
            }}
          >
            {edu.detail}
          </span>
          <span className="font-mono text-xs text-current/60 tracking-wide">
            📍 {edu.location}
          </span>
        </div>

        {/* Courses */}
        <div className="flex flex-wrap gap-2 pt-1">
          {edu.courses.map((course) => (
            <span
              key={course}
              className="font-mono text-[0.6rem] tracking-wider uppercase
                         px-2.5 py-1 rounded text-current/70"
              style={{
                background: 'rgba(84, 131, 179, 0.08)',
                border: '1px solid rgba(84, 131, 179, 0.15)',
              }}
            >
              {course}
            </span>
          ))}
        </div>

      </div>

      {/* ── BOTTOM ACCENT LINE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to right, transparent, #5483B3, transparent)',
        }}
      />

    </motion.div>
  )
}