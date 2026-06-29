'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

const drinks = [
  {
    name: 'Nitro Crack Coffee',
    category: 'Iced Coffee',
    price: '$6.90+',
    descriptor: 'Smooth nitro cold brew. The one that started it.',
    bg: 'oklch(0.18 0.04 50)',
    accent: 'oklch(0.65 0.14 55)',
    size: 'large',
  },
  {
    name: 'Brown Sugar Milk Tea',
    category: 'Milk Tea',
    price: '$6.50+',
    descriptor: 'Tiger-stripe caramel, classic boba, rich milk tea.',
    bg: 'oklch(0.20 0.05 60)',
    accent: 'oklch(0.70 0.16 65)',
    size: 'small',
  },
  {
    name: 'Ube Matcha',
    category: 'Matcha Madness',
    price: '$6.90+',
    descriptor: 'Purple ube meets earthy green. Not subtle.',
    bg: 'oklch(0.18 0.05 300)',
    accent: 'oklch(0.60 0.12 155)',
    size: 'small',
  },
  {
    name: 'Over the Rainbow',
    category: 'Specialty',
    price: '$5.90+',
    descriptor: 'Layered color, tropical fruit, rainbow poppers.',
    bg: 'oklch(0.18 0.05 200)',
    accent: 'oklch(0.65 0.18 195)',
    size: 'large',
  },
]

function DrinkCard({
  drink,
  index,
  inView,
}: {
  drink: (typeof drinks)[0]
  index: number
  inView: boolean
}) {
  const isLarge = drink.size === 'large'

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      style={{
        backgroundColor: drink.bg,
        border: '1px solid oklch(0.28 0 0)',
        borderRadius: '4px',
        padding: isLarge ? 'clamp(28px, 3.5vw, 48px)' : 'clamp(24px, 3vw, 36px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: isLarge ? 'clamp(260px, 28vw, 380px)' : 'clamp(180px, 18vw, 260px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent circle — graphic element */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: isLarge ? '-40px' : '-30px',
          right: isLarge ? '-40px' : '-30px',
          width: isLarge ? '160px' : '110px',
          height: isLarge ? '160px' : '110px',
          borderRadius: '50%',
          backgroundColor: drink.accent,
          opacity: 0.18,
        }}
      />

      <div>
        <p
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            color: drink.accent,
            marginBottom: '10px',
            textTransform: 'uppercase',
          }}
        >
          {drink.category}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isLarge ? 'clamp(1.6rem, 3.5vw, 3rem)' : 'clamp(1.3rem, 2.5vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            margin: 0,
            textWrap: 'balance',
          }}
        >
          {drink.name}
        </h3>
      </div>

      <div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.78rem, 1.2vw, 0.9rem)',
            color: 'var(--muted)',
            marginBottom: '16px',
            lineHeight: 1.5,
            maxWidth: '32ch',
          }}
        >
          {drink.descriptor}
        </p>
        <span
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: 'var(--foreground)',
          }}
        >
          {drink.price}
        </span>
      </div>
    </motion.article>
  )
}

export default function LineUp() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const row1 = drinks.slice(0, 2) // large | small
  const row2 = drinks.slice(2, 4) // small | large

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--background)',
        padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 'clamp(32px, 5vw, 64px)',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          THE LINE UP
        </motion.h2>
        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          href="/menu"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--brand-red)',
            textDecoration: 'none',
            paddingBottom: '2px',
            borderBottom: '1px solid var(--brand-red)',
            flexShrink: 0,
            alignSelf: 'flex-end',
            marginBottom: '12px',
          }}
        >
          FULL MENU →
        </motion.a>
      </div>

      {/* Row 1: large | small  (60/40 split) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '60fr 40fr',
          gap: '12px',
          marginBottom: '12px',
        }}
        className="drinks-grid"
      >
        {row1.map((drink, i) => (
          <DrinkCard key={drink.name} drink={drink} index={i} inView={inView} />
        ))}
      </div>

      {/* Row 2: small | large  (40/60 split — reversed rhythm) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40fr 60fr',
          gap: '12px',
        }}
        className="drinks-grid"
      >
        {row2.map((drink, i) => (
          <DrinkCard key={drink.name} drink={drink} index={i + 2} inView={inView} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .drinks-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
