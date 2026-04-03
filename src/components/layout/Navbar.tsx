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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-[var(--cream-dark)]'
        : 'bg-transparent'}`}>

      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span style={{ fontFamily: 'var(--font-display)' }}
            className="text-[1.05rem] font-bold text-[var(--navy)] group-hover:text-[var(--teal-dark)] transition-colors">
            Carolina Valencia<span className="text-[var(--rose)]"> M.</span>
          </span>
          <span className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[var(--teal-dark)]">
            Fabricando Ideas
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className={`text-sm font-medium transition-colors
                  ${pathname === l.href
                    ? 'text-[var(--teal-dark)] font-semibold'
                    : 'text-[var(--text-mid)] hover:text-[var(--navy)]'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/diagnostico" className="btn btn--outline text-sm py-2 px-4">
            Test gratuito
          </Link>
          <Link href="/contacto" className="btn btn--cta text-sm py-2 px-5">
            Agenda sesión
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden p-2 text-[var(--navy)]" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--cream-dark)] px-5 pb-6 pt-4 shadow-lg">
          <ul className="flex flex-col gap-4 mb-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-[var(--navy)] py-1">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Link href="/diagnostico" onClick={() => setOpen(false)} className="btn btn--outline text-sm text-center">
              Test gratuito
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn--cta text-sm text-center">
              Agenda tu sesión estratégica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
