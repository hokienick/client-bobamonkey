'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

const locations = [
  {
    name: 'Adams Ave',
    address: '3801 Adams Ave',
    city: 'San Diego, CA 92116',
    phone: '(858) 205-7751',
    hours: [
      { days: 'Mon / Tue / Thu', time: '11AM – 5:45PM' },
      { days: 'Fri – Sun', time: '11AM – 6PM' },
      { days: 'Wednesday', time: 'Closed' },
    ],
    orderUrl: 'https://bobamonkey.com/order/boba-monkey-3801-adams-ave',
    tag: 'Normal Heights',
  },
  {
    name: 'Mission Beach',
    address: '3953 Mission Blvd',
    city: 'San Diego, CA 92109',
    phone: null,
    hours: [
      { days: 'Mon / Tue / Thu', time: '11AM – 5:45PM' },
      { days: 'Fri – Sun', time: '11AM – 6PM' },
      { days: 'Wednesday', time: 'Closed' },
    ],
    orderUrl: 'https://bobamonkey.com/order/boba-monkey',
    tag: 'Mission Beach',
  },
]

export default function Locations() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--surface)',
        padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)',
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
          margin: '0 0 clamp(40px, 6vw, 80px) 0',
        }}
      >
        FIND US
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2px',
        }}
      >
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, delay: i * 0.12, ease }}
            style={{
              backgroundColor: 'var(--background)',
              padding: 'clamp(32px, 4vw, 52px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            {/* Location tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--brand-red)',
                  textTransform: 'uppercase',
                }}
              >
                {loc.tag}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--border-bright)',
                }}
              >
                0{i + 1}
              </span>
            </div>

            {/* Shop photo — Adams Ave only (we have that shot) */}
            {i === 0 && (
              <div
                style={{
                  borderRadius: '3px',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  marginBottom: '4px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/instagram/ig-6.jpg"
                  alt="Boba Monkey Adams Ave location"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            )}

            {/* Name + address */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 400,
                  color: 'var(--foreground)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.01em',
                  margin: '0 0 16px 0',
                }}
              >
                {loc.name}
              </h3>
              <address style={{ fontStyle: 'normal' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {loc.address}
                  <br />
                  {loc.city}
                </p>
                {loc.phone && (
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, '')}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      marginTop: '6px',
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {loc.phone}
                  </a>
                )}
              </address>
            </div>

            {/* Hours */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  color: 'var(--border-bright)',
                  marginBottom: '12px',
                }}
              >
                HOURS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {loc.hours.map((h) => (
                  <div
                    key={h.days}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '16px',
                      borderBottom: '1px solid var(--border)',
                      paddingBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        color: 'var(--muted)',
                      }}
                    >
                      {h.days}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sub)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: h.time === 'Closed' ? 'var(--border-bright)' : 'var(--foreground)',
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={loc.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                backgroundColor: 'var(--brand-red)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '3px',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                transition: 'background-color 0.2s ease',
                marginTop: 'auto',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red)')}
            >
              ORDER FROM HERE
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
