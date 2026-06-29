'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

export default function Vibe() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--accent)',
        padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Oversized background type — graphic, not decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-0.15em',
          right: '-0.05em',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          fontWeight: 400,
          color: 'oklch(0.35 0.08 195)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        SD
      </div>

      <div style={{ position: 'relative', maxWidth: '60ch' }}>
        {/* Telma accent — selective use per PRODUCT.md */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease }}
          className="font-accent-type"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 'clamp(20px, 3vw, 40px)',
            textWrap: 'balance',
          }}
        >
          Not just another boba spot.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'oklch(0.80 0.04 195)',
            lineHeight: 1.65,
            maxWidth: '48ch',
            marginBottom: 'clamp(28px, 4vw, 48px)',
          }}
        >
          Born in San Diego. Rooted in Vietnamese coffee culture.
          Every drink is made fresh daily at Adams Ave and Mission Beach.
          Come for the boba. Stay for the neighborhood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}
        >
          {[
            { label: 'Fresh Daily', sub: 'Made to order' },
            { label: '2 Locations', sub: 'Adams Ave · Mission Beach' },
            { label: '20+ Drinks', sub: 'Coffee, tea, matcha' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '-0.01em',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  color: 'oklch(0.72 0.04 195)',
                  letterSpacing: '0.03em',
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
