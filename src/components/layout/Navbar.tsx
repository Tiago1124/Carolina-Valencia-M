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

export default function Navbar() {
  const path     = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect dark-hero pages to use light nav text before scroll
  // homepage (/) has a LIGHT background — do NOT include it here
  const darkHero = ['/sobre-mi', '/metodologia', '/contacto'].includes(path);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const logoTextColor = scrolled ? 'text-[#404e66]' : darkHero ? 'text-white' : 'text-[#404e66]';
  const linkColor     = scrolled ? 'text-[#6b7280] hover:text-[#404e66]' : darkHero ? 'text-white/80 hover:text-white' : 'text-[#6b7280] hover:text-[#404e66]';
  const activeColor   = scrolled ? 'text-[#404e66] font-semibold' : darkHero ? 'text-white font-semibold' : 'text-[#404e66] font-semibold';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.07)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col gap-px no-underline group">
          <span
            className={`font-serif text-[1.05rem] font-semibold leading-none transition-colors duration-300 ${logoTextColor}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Carolina Valencia<span className="text-[#c45572]"> M.</span>
          </span>
          <span className="text-[0.56rem] font-bold tracking-[0.24em] uppercase text-[#87c1b6] leading-none mt-0.5">
            Fabricando Ideas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.84rem] tracking-wide transition-colors duration-200 ${
                path === l.href ? activeColor : linkColor
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/diagnostico"
            className={`text-[0.7rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded border transition-colors duration-200 ${
              scrolled || !darkHero
                ? 'border-[#c8c4bc] text-[#404e66] hover:border-[#404e66]'
                : 'border-white/30 text-white hover:border-white/60'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Test gratuito
          </Link>
          <Link
            href="/contacto"
            className="btn-cta text-[0.7rem]"
          >
            Agenda sesión
          </Link>
        </div>

        {/* Burger */}
        <button
          className={`lg:hidden p-1.5 transition-colors ${scrolled || !darkHero ? 'text-[#404e66]' : 'text-white'}`}
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

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#ede9e2] px-6 py-6 flex flex-col gap-4 shadow-lg">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[1rem] py-1 transition-colors ${
                path === l.href ? 'text-[#404e66] font-semibold' : 'text-[#5a6070]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-[#ede9e2]">
            <Link
              href="/diagnostico"
              onClick={() => setMenuOpen(false)}
              className="text-center text-[0.7rem] font-bold tracking-[0.12em] uppercase border border-[#c8c4bc] rounded py-2.5 text-[#404e66]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Test gratuito
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-cta text-center"
            >
              Agenda tu sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
