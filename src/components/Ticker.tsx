'use client'

import { motion } from 'motion/react'

const ITEMS = [
  'BOBA MONKEY',
  'SAN DIEGO',
  'VIETNAMESE COFFEE',
  'MILK TEA',
  'MATCHA MADNESS',
  'ORDER NOW',
]

export default function Ticker() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        backgroundColor: 'var(--brand-red)',
        overflow: 'hidden',
        padding: '14px 0',
        display: 'flex',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: '-33.333%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: 'white',
              padding: '0 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {item}
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)' }} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
