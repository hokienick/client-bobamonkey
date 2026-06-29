'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: scrolled ? '14px 40px' : '24px 40px',
        backgroundColor: scrolled ? 'oklch(0.11 0 0 / 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(0.25 0 0)' : '1px solid transparent',
        transition: 'padding 0.35s ease, background-color 0.35s ease, border-color 0.35s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-sub)',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '0.1em',
          color: 'var(--foreground)',
          textDecoration: 'none',
        }}
      >
        BOBA MONKEY<sup style={{ fontSize: '0.55em', verticalAlign: 'super', opacity: 0.7 }}>®</sup>
      </Link>

      {/* Desktop links */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
        className="nav-desktop"
      >
        <Link
          href="/menu"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          MENU
        </Link>
        <Link
          href="/locations"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          LOCATIONS
        </Link>
        <a
          href="https://bobamonkey.com/order/boba-monkey"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            backgroundColor: 'var(--brand-red)',
            color: 'white',
            padding: '11px 22px',
            borderRadius: '3px',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red-hover)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-red)')}
        >
          ORDER NOW
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
