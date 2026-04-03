'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/sobre-mi',     label: 'Sobre mí' },
  { href: '/servicios',    label: 'Servicios' },
  { href: '/metodologia',  label: 'Metodología' },
  { href: '/diagnostico',  label: 'Diagnóstico' },
  { href: '/blog',         label: 'Blog' },
  { href: '/contacto',     label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#87c1b6]/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-display text-[1.05rem] font-bold text-[#404e66] tracking-wide group-hover:text-[#87c1b6] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Carolina Valencia<span className="text-[#c45572]"> M.</span>
          </span>
          <span
            className="text-[0.58rem] font-body font-bold tracking-[0.22em] uppercase text-[#87c1b6]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Fabricando Ideas
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[0.72rem] font-bold tracking-[0.1em] uppercase transition-colors ${
                  pathname === l.href
                    ? 'text-[#87c1b6]'
                    : 'text-[#6b6b6b] hover:text-[#404e66]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/diagnostico" className="btn-cta text-[0.7rem] px-4 py-2.5">
            Test Gratuito
          </Link>
          <Link
            href="/contacto"
            className="btn-primary text-[0.7rem] px-4 py-2.5"
          >
            Agenda sesión
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-[#404e66]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#e6e6e6] px-6 pb-6 pt-4 shadow-lg">
          <ul className="flex flex-col gap-4 mb-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[#404e66]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Link href="/diagnostico" onClick={() => setOpen(false)} className="btn-cta text-center text-[0.75rem]">
              Test Gratuito
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary text-center text-[0.75rem]">
              Agenda tu sesión estratégica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
