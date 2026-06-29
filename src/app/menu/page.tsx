'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const ease = [0.23, 1, 0.32, 1] as const

const categories = [
  {
    name: 'Iced Coffee',
    tag: '01',
    items: [
      { name: 'Nitro Crack Coffee', desc: 'Bold espresso whipped with our signature milk. It\'s CRACK for a reason.', price: '$6.90+' },
      { name: 'SaiGon Sunrise Ca Phe', desc: 'Vietnamese inspired. Bold espresso, condensed milk, our signature milk.', price: '$6.90+' },
      { name: 'Salty Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted sea salt crème foam.', price: '$6.90+' },
      { name: 'Ube Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted ube crème foam.', price: '$6.90+' },
      { name: 'Banana Crème Coffee', desc: 'Bold espresso and signature milk, topped with hand-crafted banana crème foam.', price: '$6.90+' },
    ],
  },
  {
    name: 'Milk Tea Drinks',
    tag: '02',
    items: [
      { name: 'Thai Tea Sensation', desc: 'Blend of Thai Tea and condensed milk, paired with our signature milk.', price: '$6.50+', badge: '#1 Best Seller' },
      { name: 'Brown Sugar Milk Tea', desc: 'Brown sugar swirls, paired with our signature milk and black tea.', price: '$6.50+', badge: '#3 Best Seller' },
      { name: 'Taro Milk Tea', desc: 'Lavender taro paired with our signature milk and black tea.', price: '$6.50+' },
      { name: 'Strawberry Milk Tea', desc: 'Fresh strawberries, paired with our signature milk and black tea.', price: '$6.50+' },
      { name: 'Boba Monkey Milk Tea', desc: 'A traditional favorite. Black tea, our signature milk, and condensed milk.', price: '$5.90+' },
    ],
  },
  {
    name: 'Matcha Madness',
    tag: '03',
    items: [
      { name: 'Matcha Milk Tea', desc: 'Premium matcha, paired with our signature milk and black tea.', price: '$6.90+' },
      { name: 'Banana Crème Matcha', desc: 'Premium matcha and signature milk, topped with frothy banana crème foam.', price: '$6.90+' },
      { name: 'Matcha Latte', desc: 'Premium matcha blended with espresso, paired with our signature milk.', price: '$6.90+' },
      { name: 'Ube Matcha', desc: 'Purple ube meets earthy matcha. Our signature milk ties it all together.', price: '$6.90+' },
    ],
  },
  {
    name: 'Specialty Drinks',
    tag: '04',
    items: [
      { name: 'Strawberry Fresca', desc: 'Mojito inspired. Fresh strawberries, citrus juice, mint leaves, sparkling mineral water.', price: '$5.90+', badge: '#2 Best Seller' },
      { name: 'Tropical Refresher', desc: 'Exotic lychee, mango, citrus juice, paired with our signature black tea.', price: '$5.90+' },
      { name: 'Purple Passion', desc: 'A vibrant blend of taro, butterfly pea flower, and our signature milk.', price: '$5.90+' },
      { name: 'Sun Kissed Bliss', desc: 'Bright citrus and tropical fruit paired with our signature black tea.', price: '$5.90+' },
    ],
  },
]

function CategorySection({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 'clamp(48px, 6vw, 80px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
      }}
    >
      {/* Category header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'baseline',
          marginBottom: 'clamp(32px, 4vw, 56px)',
          gap: '16px',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {cat.name}
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--brand-red)',
          }}
        >
          {cat.tag}
        </motion.span>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cat.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '24px',
              alignItems: 'start',
              padding: 'clamp(16px, 2vw, 24px) 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sub)',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    color: 'var(--foreground)',
                  }}
                >
                  {item.name}
                </span>
                {item.badge && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: 'var(--brand-red)',
                      border: '1px solid var(--brand-red)',
                      padding: '2px 7px',
                      borderRadius: '2px',
                    }}
                  >
                    {item.badge.toUpperCase()}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
                  color: 'var(--muted)',
                  lineHeight: 1.5,
                  maxWidth: '60ch',
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                letterSpacing: '0.04em',
                paddingTop: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
        {/* Hero header */}
        <div
          style={{
            padding: 'clamp(120px, 16vw, 200px) clamp(24px, 5vw, 80px) clamp(40px, 6vw, 80px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--brand-red)',
              marginBottom: '20px',
            }}
          >
            FULL MENU
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: 400,
              color: 'var(--foreground)',
              lineHeight: 0.88,
              letterSpacing: '-0.025em',
              margin: '0 0 clamp(24px, 3vw, 40px) 0',
              textWrap: 'balance',
            }}
          >
            WHAT WE MAKE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              color: 'var(--muted)',
              maxWidth: '52ch',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Handcrafted drinks made fresh daily in Normal Heights and Mission Beach.
            Add boba or crystal boba to anything — $1.50.
          </motion.p>
        </div>

        {/* Menu categories */}
        <div style={{ padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)' }}>
          {categories.map((cat, i) => (
            <CategorySection key={cat.name} cat={cat} index={i} />
          ))}
        </div>

        {/* Add-ons footer note */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: 'clamp(32px, 4vw, 56px) clamp(24px, 5vw, 80px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--border-bright)',
                marginBottom: '8px',
              }}
            >
              ADD-ONS
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: 'var(--muted)',
                lineHeight: 1.5,
              }}
            >
              Boba +$1.50 &nbsp;·&nbsp; Crystal Boba +$1.50 &nbsp;·&nbsp; Rainbow Poppers +$1.50
              <br />
              Almond / Soy / Oat Milk +$1.50 &nbsp;·&nbsp; Ube / Banana / Sea Salt Crème Foam +$2.50
            </p>
          </div>
          <a
            href="https://bobamonkey.com/order/boba-monkey-3801-adams-ave"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              backgroundColor: 'var(--brand-red)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '3px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red-hover)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red)')}
          >
            ORDER NOW →
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
