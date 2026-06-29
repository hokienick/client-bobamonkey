'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

export default function VideoMoment() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: 'clamp(480px, 75vh, 900px)',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.72,
        }}
      >
        <source src="/instagram/vid-1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient — heavier at top/bottom, lighter at center */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Centered brand text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 clamp(24px, 5vw, 80px)',
          textAlign: 'center',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.8, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              fontWeight: 400,
              color: 'white',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            CRAFTED
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              fontWeight: 400,
              color: 'var(--brand-red)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            DAILY.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(0.65rem, 1.3vw, 0.85rem)',
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.65)',
            marginTop: 'clamp(20px, 3vw, 36px)',
          }}
        >
          NORMAL HEIGHTS · MISSION BEACH · SAN DIEGO CA
        </motion.p>
      </div>

      {/* Bottom red line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'var(--brand-red)',
        }}
      />
    </section>
  )
}
