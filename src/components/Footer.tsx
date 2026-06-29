'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'oklch(0.08 0 0)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          marginBottom: 'clamp(40px, 5vw, 60px)',
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--foreground)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              marginBottom: '16px',
            }}
          >
            BOBA<br />
            <span style={{ color: 'var(--brand-red)' }}>MONKEY</span>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              maxWidth: '28ch',
            }}
          >
            Vietnamese coffee and boba.
            Made fresh daily in San Diego.
          </p>
        </div>

        {/* Visit */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--border-bright)',
              marginBottom: '16px',
            }}
          >
            VISIT
          </p>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--muted)',
              lineHeight: 1.8,
            }}
          >
            <p>3801 Adams Ave</p>
            <p>San Diego, CA 92116</p>
            <br />
            <p>3953 Mission Blvd</p>
            <p>San Diego, CA 92109</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--border-bright)',
              marginBottom: '16px',
            }}
          >
            EXPLORE
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Full Menu', href: '/menu' },
              { label: 'Locations', href: '/locations' },
              { label: 'Order Adams Ave', href: 'https://bobamonkey.com/order/boba-monkey-3801-adams-ave' },
              { label: 'Order Mission Beach', href: 'https://bobamonkey.com/order/boba-monkey' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--border-bright)',
              marginBottom: '16px',
            }}
          >
            FOLLOW
          </p>
          <a
            href="https://www.instagram.com/thebobamonkey/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            @thebobamonkey
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            color: 'var(--border-bright)',
            letterSpacing: '0.06em',
          }}
        >
          &copy; {new Date().getFullYear()} Boba Monkey. San Diego, CA.
        </p>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-red)', display: 'inline-block' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-red)', display: 'inline-block', opacity: 0.5 }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-red)', display: 'inline-block', opacity: 0.25 }} />
        </div>
      </div>
    </footer>
  )
}
