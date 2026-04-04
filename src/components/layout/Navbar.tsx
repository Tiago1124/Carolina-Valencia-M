'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV = [
  { href: '/sobre-mi',    label: 'Sobre mí'     },
  { href: '/servicios',   label: 'Servicios'    },
  { href: '/metodologia', label: 'Metodología'  },
  { href: '/blog',        label: 'Blog'         },
  { href: '/contacto',    label: 'Contacto'     },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-3'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col gap-px no-underline group">
          <span className="font-serif text-[1.1rem] font-semibold leading-none text-navy group-hover:text-teal transition-colors">
            Carolina Valencia<span className="text-rose"> M.</span>
          </span>
          <span className="text-[0.58rem] font-sans font-semibold tracking-[0.22em] uppercase text-teal leading-none">
            Fabricando Ideas
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-small font-medium transition-colors ${
                path === l.href
                  ? 'text-navy font-semibold'
                  : 'text-muted hover:text-navy'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/diagnostico"
            className="text-label font-semibold uppercase tracking-widest text-navy border border-stone-3 rounded px-4 py-2 hover:border-navy transition-colors"
          >
            Test gratuito
          </Link>
          <Link
            href="/contacto"
            className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-5 py-2.5 hover:bg-[#e89563] transition-colors"
          >
            Agenda sesión
          </Link>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden p-1 text-navy"
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
        <div className="lg:hidden bg-white border-t border-stone-2 px-6 py-6 flex flex-col gap-4">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-body font-medium text-navy py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-stone-2">
            <Link href="/diagnostico" onClick={() => setMenuOpen(false)} className="text-center text-label font-semibold uppercase tracking-widest border border-stone-3 rounded py-2.5 text-navy">
              Test gratuito
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)} className="text-center text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full py-3">
              Agenda tu sesión estratégica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
