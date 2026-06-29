'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const ease = [0.23, 1, 0.32, 1] as const

const categories = [
  {
    name: 'Iced Coffee',
    items: [
      { name: 'Nitro Crack Coffee', desc: 'Bold espresso whipped with our signature milk. It\'s CRACK for a reason.', price: '$6.90+' },
      { name: 'SaiGon Sunrise Ca Phe', desc: 'Vietnamese inspired. Bold espresso, condensed milk, our signature milk.', price: '$6.90+' },
      { name: 'Salty Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted sea salt crème foam.', price: '$6.90+' },
      { name: 'Ube Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted ube crème foam.', price: '$6.90+' },
      { name: 'Banana Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted banana crème foam.', price: '$6.90+' },
    ],
  },
  {
    name: 'Milk Tea',
    items: [
      { name: 'Thai Tea Sensation', desc: 'Blend of Thai Tea and condensed milk, paired with our signature milk.', price: '$6.50+', badge: '#1' },
      { name: 'Brown Sugar Milk Tea', desc: 'Brown sugar swirls, paired with our signature milk and black tea.', price: '$6.50+', badge: '#3' },
      { name: 'Taro Milk Tea', desc: 'Lavender taro paired with our signature milk and black tea.', price: '$6.50+' },
      { name: 'Strawberry Milk Tea', desc: 'Fresh strawberries, paired with our signature milk and black tea.', price: '$6.50+' },
      { name: 'Boba Monkey Milk Tea', desc: 'A traditional favorite. Black tea, our signature milk, and condensed milk.', price: '$5.90+' },
    ],
  },
  {
    name: 'Matcha Madness',
    items: [
      { name: 'Matcha Milk Tea', desc: 'Premium matcha paired with our signature milk and black tea.', price: '$6.90+' },
      { name: 'Banana Crème Matcha', desc: 'Premium matcha and signature milk, topped with frothy banana crème foam.', price: '$6.90+' },
      { name: 'Matcha Latte', desc: 'Premium matcha blended with espresso, paired with our signature milk.', price: '$6.90+' },
      { name: 'Ube Matcha', desc: 'Purple ube meets earthy matcha. Our signature milk ties it together.', price: '$6.90+' },
    ],
  },
  {
    name: 'Specialty',
    items: [
      { name: 'Strawberry Fresca', desc: 'Mojito inspired. Fresh strawberries, citrus, mint, sparkling mineral water.', price: '$5.90+', badge: '#2' },
      { name: 'Tropical Refresher', desc: 'Lychee, mango, citrus juice, paired with our signature black tea.', price: '$5.90+' },
      { name: 'Purple Passion', desc: 'Taro, butterfly pea flower, and our signature milk.', price: '$5.90+' },
      { name: 'Sun Kissed Bliss', desc: 'Bright citrus and tropical fruit paired with our signature black tea.', price: '$5.90+' },
    ],
  },
]

function MenuCategory({
  cat,
  index,
  inView,
}: {
  cat: (typeof categories)[0]
  index: number
  inView: boolean
}) {
  return (
    <div style={{ display: 'contents' }}>
      {/* Category label row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08, ease }}
        style={{
          gridColumn: '1 / -1',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          paddingTop: index === 0 ? 0 : 'clamp(32px, 4vw, 52px)',
          paddingBottom: '16px',
          borderTop: index === 0 ? 'none' : '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
        >
          {cat.name}
        </span>
        <span
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'var(--border)',
          }}
        />
      </motion.div>

      {/* Items */}
      {cat.items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: index * 0.08 + i * 0.05, ease }}
          style={{
            gridColumn: '1 / -1',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '20px',
            alignItems: 'baseline',
            padding: 'clamp(12px, 1.5vw, 18px) 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  color: 'var(--foreground)',
                }}
              >
                {item.name}
              </span>
              {item.badge && (
                <span
                  style={{
                    fontFamily: 'var(--font-sub)',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--brand-red)',
                    border: '1px solid var(--brand-red)',
                    padding: '1px 6px',
                    borderRadius: '2px',
                    lineHeight: 1.6,
                  }}
                >
                  BEST SELLER {item.badge}
                </span>
              )}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                color: 'var(--muted)',
                lineHeight: 1.4,
                maxWidth: '55ch',
              }}
            >
              {item.desc}
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--foreground)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {item.price}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default function LineUp() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
          marginBottom: 'clamp(40px, 5vw, 72px)',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          href="https://bobamonkey.com/order/boba-monkey-3801-adams-ave"
          target="_blank"
          rel="noopener noreferrer"
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
          ORDER NOW →
        </motion.a>
      </div>

      {/* Menu grid */}
      <div style={{ display: 'grid' }}>
        {categories.map((cat, i) => (
          <MenuCategory key={cat.name} cat={cat} index={i} inView={inView} />
        ))}
      </div>

      {/* Add-ons footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease }}
        style={{
          marginTop: 'clamp(32px, 4vw, 52px)',
          paddingTop: 'clamp(20px, 2.5vw, 32px)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            color: 'var(--muted)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Add boba or crystal boba to anything — $1.50 &nbsp;·&nbsp; Ube / Banana / Sea Salt Crème Foam — $2.50
        </p>
      </motion.div>
    </section>
  )
}
