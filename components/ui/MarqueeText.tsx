'use client'
import { motion } from 'framer-motion'

interface Props {
  items: string[]
  speed?: number
  direction?: 'left' | 'right'
}

export default function MarqueeText({ items, speed = 35, direction = 'left' }: Props) {
  const doubled = [...items, ...items]
  const moveX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: moveX }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-12 shrink-0 whitespace-nowrap
                   font-mono text-[0.7rem] tracking-[0.15em] uppercase text-current"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-abyss text-[0.5rem]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}