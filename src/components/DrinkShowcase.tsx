'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

const drinks = [
  { name: 'Thai Tea Sensation', label: 'Milk Tea', img: '/instagram/dd-thai-tea.jpg' },
  { name: 'Brown Sugar Milk Tea', label: 'Milk Tea', img: '/instagram/dd-brown-sugar.jpg' },
  { name: 'Strawberry Fresca', label: 'Specialty', img: '/instagram/dd-strawberry-fresca.jpg' },
  { name: 'Taro Milk Tea', label: 'Milk Tea', img: '/instagram/dd-taro.jpg' },
  { name: 'Banana Crème Matcha', label: 'Matcha Madness', img: '/instagram/dd-banana-matcha.jpg' },
  { name: 'Boba Monkey Milk Tea', label: 'Milk Tea', img: '/instagram/dd-boba-monkey-milk-tea.jpg' },
]

export default function DrinkShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--surface)',
        padding: 'clamp(60px, 8vw, 100px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 'clamp(32px, 4vw, 52px)',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          DRINKS
        </motion.h2>
        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          href="/menu"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--brand-red)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--brand-red)',
            paddingBottom: '2px',
            alignSelf: 'flex-end',
            marginBottom: '10px',
          }}
        >
          FULL MENU →
        </motion.a>
      </div>

      {/* Horizontal scroll strip */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`.drink-showcase::-webkit-scrollbar { display: none; }`}</style>
        {drinks.map((drink, i) => (
          <motion.div
            key={drink.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            style={{
              flex: '0 0 auto',
              width: 'clamp(180px, 22vw, 260px)',
            }}
          >
            {/* Square image */}
            <div
              style={{
                aspectRatio: '1 / 1',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '14px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={drink.img}
                alt={drink.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',

                }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
              />
            </div>

            {/* Label */}
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'var(--brand-red)',
                marginBottom: '4px',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {drink.label}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(0.82rem, 1.3vw, 0.95rem)',
                fontWeight: 700,
                color: 'var(--foreground)',
                lineHeight: 1.2,
                margin: 0,
                textAlign: 'center',
              }}
            >
              {drink.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
