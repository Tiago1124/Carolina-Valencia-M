'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/sobre-mi',    label: 'Sobre mí' },
  { href: '/servicios',   label: 'Servicios' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/diagnostico', label: 'Diagnóstico' },
  { href: '/blog',        label: 'Blog' },
  { href: '/contacto',    label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(250,247,242,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--parchment-3)' : '1px solid transparent',
      }}>
      <nav className="wrap flex items-center justify-between" style={{ height: '68px' }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', gap: '1px', textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}>
            Carolina Valencia<span style={{ color: 'var(--rose)' }}> M.</span>
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--sage)',
            lineHeight: 1,
          }}>
            Fabricando Ideas
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex items-center" style={{ gap: '2rem', listStyle: 'none' }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === l.href ? 'var(--sage)' : 'var(--ink-60)',
                transition: 'color 0.2s',
                borderBottom: pathname === l.href ? '1.5px solid var(--sage)' : '1.5px solid transparent',
                paddingBottom: '2px',
              }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTAs ── */}
        <div className="hidden lg:flex items-center" style={{ gap: '0.75rem' }}>
          <Link href="/diagnostico" className="btn btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}>
            Test gratuito
          </Link>
          <Link href="/contacto" className="btn btn-cta" style={{ padding: '0.6rem 1.5rem', fontSize: '0.72rem' }}>
            Agenda sesión
          </Link>
        </div>

        {/* ── Mobile burger ── */}
        <button
          className="lg:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--ink)' }}
          onClick={() => setOpen(!open)}
          aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="7" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {open && (
        <div style={{
          background: 'var(--parchment)',
          borderTop: '1px solid var(--parchment-3)',
          padding: '1.5rem var(--space-inner)',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/diagnostico" onClick={() => setOpen(false)} className="btn btn-outline" style={{ textAlign: 'center' }}>
              Test gratuito
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-cta" style={{ textAlign: 'center' }}>
              Agenda tu sesión estratégica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
