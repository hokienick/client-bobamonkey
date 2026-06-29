'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

const photos = [
  {
    src: '/instagram/ig-2.jpg',
    alt: 'Three Boba Monkey iced coffees on a sunny San Diego day',
    wide: true,
  },
  {
    src: '/instagram/ig-5.jpg',
    alt: 'Boba Monkey — Welcome to the Neighborhood',
    wide: false,
  },
  {
    src: '/instagram/ig-3.jpg',
    alt: 'Layered boba drink from Boba Monkey',
    wide: false,
  },
  {
    src: '/instagram/ig-4.jpg',
    alt: 'Boba Monkey branded cup held in front of menu board',
    wide: true,
  },
]

export default function InstaStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--background)',
        padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'clamp(24px, 4vw, 48px)',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--muted)',
          }}
        >
          FROM THE GRAM
        </p>
        <a
          href="https://www.instagram.com/thebobamonkey/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--brand-red)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--brand-red)',
            paddingBottom: '2px',
          }}
        >
          @THEBOBAMONKEY →
        </a>
      </motion.div>

      {/* Row 1: wide | narrow */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '60fr 40fr',
          gap: '6px',
          marginBottom: '6px',
        }}
        className="ig-grid"
      >
        {photos.slice(0, 2).map((photo, i) => (
          <motion.a
            key={photo.src}
            href="https://www.instagram.com/thebobamonkey/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.65, delay: i * 0.08, ease }}
            style={{
              display: 'block',
              overflow: 'hidden',
              borderRadius: '3px',
              aspectRatio: '4/3',
              position: 'relative',
            }}
            whileHover="hover"
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              variants={{ hover: { scale: 1.04 } }}
              transition={{ duration: 0.5, ease }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Row 2: narrow | wide (reversed rhythm) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40fr 60fr',
          gap: '6px',
        }}
        className="ig-grid"
      >
        {photos.slice(2, 4).map((photo, i) => (
          <motion.a
            key={photo.src}
            href="https://www.instagram.com/thebobamonkey/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.65, delay: (i + 2) * 0.08, ease }}
            style={{
              display: 'block',
              overflow: 'hidden',
              borderRadius: '3px',
              aspectRatio: '4/3',
              position: 'relative',
            }}
            whileHover="hover"
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              variants={{ hover: { scale: 1.04 } }}
              transition={{ duration: 0.5, ease }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.a>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ig-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
