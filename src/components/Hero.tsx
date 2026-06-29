'use client'

import { motion } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100svh',
        backgroundColor: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 'clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Background grid texture — subtle */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(oklch(0.25 0 0 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.25 0 0 / 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      {/* Rotating circle badge — top right */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 'clamp(60px, 10vw, 120px)',
          right: 'clamp(-60px, -2vw, -20px)',
          width: 'clamp(200px, 28vw, 380px)',
          height: 'clamp(200px, 28vw, 380px)',
        }}
      >
        <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <circle cx="190" cy="190" r="188" fill="oklch(0.53 0.23 27)" />
          {/* Circular text path */}
          <defs>
            <path id="circle-text-path" d="M 190,190 m -155,0 a 155,155 0 1,1 310,0 a 155,155 0 1,1 -310,0" />
          </defs>
          <text fontFamily="var(--font-sub)" fontSize="22" fontWeight="700" letterSpacing="14" fill="white" opacity="0.9">
            <textPath href="#circle-text-path">
              BOBA MONKEY ® SAN DIEGO CA · ORDER NOW ·
            </textPath>
          </text>
          {/* Inner content */}
          <text x="190" y="178" textAnchor="middle" fontFamily="var(--font-display)" fontSize="52" fill="white">BOBA</text>
          <text x="190" y="230" textAnchor="middle" fontFamily="var(--font-display)" fontSize="52" fill="white">MONKEY</text>
        </svg>
      </motion.div>

      {/* Main content */}
      <div style={{ position: 'relative', maxWidth: '75%' }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'var(--brand-red)',
            marginBottom: 'clamp(16px, 2.5vw, 28px)',
            marginLeft: '4px',
          }}
        >
          YOUR NEIGHBORHOOD
        </motion.p>

        {/* BOBA — massive Tanker, white */}
        <div style={{ overflow: 'hidden', lineHeight: 0.9 }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 20vw, 18rem)',
              fontWeight: 400,
              color: 'var(--foreground)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              margin: 0,
              display: 'block',
            }}
          >
            BOBA
          </motion.h1>
        </div>

        {/* MONKEY. — massive Tanker, brand red, offset right */}
        <div style={{ overflow: 'hidden', lineHeight: 0.9, marginLeft: 'clamp(16px, 5vw, 80px)' }}>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 20vw, 18rem)',
              fontWeight: 400,
              color: 'var(--brand-red)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              display: 'block',
            }}
          >
            MONKEY.
          </motion.span>
        </div>

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          style={{ marginTop: 'clamp(28px, 4vw, 56px)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'var(--muted)',
              marginBottom: 'clamp(24px, 3.5vw, 40px)',
            }}
          >
            Vietnamese Coffee &nbsp;·&nbsp; Creamy Milk Teas &nbsp;·&nbsp; San Diego, CA
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://bobamonkey.com/order/boba-monkey"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                backgroundColor: 'var(--brand-red)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red)')}
            >
              ORDER NOW
            </a>
            <a
              href="/locations"
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                backgroundColor: 'transparent',
                color: 'var(--foreground)',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--border-bright)',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--foreground)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-bright)'
              }}
            >
              FIND A LOCATION
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vertical text — right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '24px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontFamily: 'var(--font-sub)',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          color: 'var(--border-bright)',
        }}
      >
        TWO LOCATIONS IN SAN DIEGO
      </motion.div>

      {/* Bottom red accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.8, ease }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'var(--brand-red)',
          transformOrigin: 'left',
        }}
      />
    </section>
  )
}
