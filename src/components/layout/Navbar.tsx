'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV = [
  { href: '/sobre-mi',    label: 'Sobre mí'    },
  { href: '/servicios',   label: 'Servicios'   },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/blog',        label: 'Blog'        },
  { href: '/contacto',    label: 'Contacto'    },
];

// Pages whose hero section has a DARK (navy) background
const DARK_HERO_PAGES = ['/sobre-mi', '/metodologia', '/contacto', '/diagnostico'];

export default function Navbar() {
  const path     = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = !scrolled && DARK_HERO_PAGES.includes(path);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn(); // run once on mount
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Color tokens based on state
  const logoColor   = scrolled ? '#404e66' : isDark ? '#ffffff'         : '#404e66';
  const linkColor   = scrolled ? '#6b7280' : isDark ? 'rgba(255,255,255,0.88)' : '#6b7280';
  const linkHover   = scrolled ? '#404e66' : isDark ? '#ffffff'         : '#404e66';
  const activeColor = scrolled ? '#1a1f2e' : isDark ? '#ffffff'         : '#1a1f2e';
  const ghostBorder = scrolled ? 'rgba(64,78,102,0.3)' : isDark ? 'rgba(255,255,255,0.45)' : 'rgba(64,78,102,0.3)';
  const ghostText   = scrolled ? '#404e66' : isDark ? '#ffffff'         : '#404e66';
  const burgerColor = scrolled ? '#404e66' : isDark ? '#ffffff'         : '#404e66';

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-[1160px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col gap-px no-underline" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[1.05rem] font-bold leading-none transition-colors duration-300" style={{ color: logoColor }}>
            Carolina Valencia<span style={{ color: '#c45572' }}> M.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.84rem] tracking-wide transition-colors duration-200 no-underline"
              style={{
                fontFamily: 'var(--font-body)',
                color: path === l.href ? activeColor : linkColor,
                fontWeight: path === l.href ? 600 : 400,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = path === l.href ? activeColor : linkColor)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Ghost button */}
          <Link
            href="/diagnostico"
            className="text-[0.7rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded transition-colors duration-200 no-underline"
            style={{
              fontFamily: 'var(--font-body)',
              border: `1.5px solid ${ghostBorder}`,
              color: ghostText,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = isDark ? 'rgba(255,255,255,0.7)' : '#404e66';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = ghostBorder;
            }}
          >
            Test gratuito
          </Link>
          {/* Primary CTA — always peach */}
          <Link href="/contacto" className="btn-cta text-[0.7rem]">
            Agenda sesión
          </Link>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden p-1.5 transition-colors"
          style={{ color: burgerColor }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen
              ? <><path d="M3 3l16 16"/><path d="M19 3L3 19"/></>
              : <><path d="M3 6h16"/><path d="M3 11h16"/><path d="M7 16h12"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer — always light */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#ede9e2] px-6 py-6 flex flex-col gap-4 shadow-lg">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[1rem] py-1 transition-colors no-underline"
              style={{
                fontFamily: 'var(--font-body)',
                color: path === l.href ? '#404e66' : '#5a6070',
                fontWeight: path === l.href ? 600 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-[#ede9e2]">
            <Link href="/diagnostico" onClick={() => setMenuOpen(false)}
              className="text-center text-[0.7rem] font-bold tracking-[0.12em] uppercase border border-[#c8c4bc] rounded py-2.5 text-[#404e66] no-underline"
              style={{ fontFamily: 'var(--font-body)' }}>
              Test gratuito
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)} className="btn-cta text-center">
              Agenda tu sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
