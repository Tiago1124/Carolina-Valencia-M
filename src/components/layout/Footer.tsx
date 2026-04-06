'use client';
import Link from 'next/link';

const NAV = [
  { href: '/sobre-mi',    label: 'Sobre mí'           },
  { href: '/servicios',   label: 'Servicios'          },
  { href: '/metodologia', label: 'Metodología'        },
  { href: '/diagnostico', label: 'Diagnóstico gratis' },
  { href: '/blog',        label: 'Blog'               },
  { href: '/contacto',    label: 'Contacto'           },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a3347] text-white">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-5 no-underline">
            <span className="font-bold text-[1.1rem] text-white block leading-none mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Carolina Valencia<span style={{ color: '#f2aa79' }}> M.</span>
            </span>
            <span className="text-[0.56rem] font-bold tracking-[0.24em] uppercase" style={{ color: '#87c1b6' }}>
              Fabricando Ideas
            </span>
          </Link>
          <p className="text-[0.86rem] text-white/65 leading-relaxed max-w-xs mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Estrategia que mueve el negocio. Marca que abre puertas. +20 años construyendo crecimiento rentable en Colombia.
          </p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#87c1b6')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:carovalenciam@outlook.com"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#87c1b6')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <p className="text-[0.66rem] font-bold tracking-[0.2em] uppercase mb-6" style={{ color: '#87c1b6', fontFamily: 'var(--font-body)' }}>
            Navegación
          </p>
          <ul className="flex flex-col gap-3">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-[0.86rem] text-white/65 hover:text-white transition-colors no-underline"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-[0.66rem] font-bold tracking-[0.2em] uppercase mb-6" style={{ color: '#87c1b6', fontFamily: 'var(--font-body)' }}>
            Contacto
          </p>
          <div className="flex flex-col gap-3 mb-7">
            <a href="mailto:carovalenciam@outlook.com"
              className="text-[0.86rem] text-white/65 hover:text-white transition-colors no-underline"
              style={{ fontFamily: 'var(--font-body)' }}>
              carovalenciam@outlook.com
            </a>
            <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer"
              className="text-[0.86rem] text-white/65 hover:text-white transition-colors no-underline"
              style={{ fontFamily: 'var(--font-body)' }}>
              LinkedIn → gerentedemercadeo
            </a>
          </div>
          <Link href="/contacto" className="btn-cta text-[0.72rem]">
            Agenda tu sesión
          </Link>
        </div>
      </div>

      <div className="border-t max-w-[1160px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="text-[0.7rem] text-white/35" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Carolina Valencia M. — Todos los derechos reservados.
        </p>
        <Link href="/politica-privacidad"
          className="text-[0.7rem] text-white/35 hover:text-white/65 transition-colors no-underline"
          style={{ fontFamily: 'var(--font-body)' }}>
          Política de privacidad
        </Link>
      </div>
    </footer>
  );
}
