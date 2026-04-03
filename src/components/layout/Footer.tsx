import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#404e66] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-3">
            <span className="font-display text-xl font-bold text-white block" style={{ fontFamily: 'var(--font-display)' }}>
              Carolina Valencia<span className="text-[#f2aa79]"> M.</span>
            </span>
            <span className="text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
              Fabricando Ideas
            </span>
          </Link>
          <p className="text-[0.82rem] text-white/60 leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
            Estrategia que mueve el negocio. Marca que abre puertas. +20 años construyendo crecimiento rentable.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/gerentedemercadeo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#87c1b6] flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="mailto:carovalenciam@outlook.com"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#87c1b6] flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Navegación
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: '/sobre-mi', label: 'Sobre mí' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/metodologia', label: 'Metodología' },
              { href: '/diagnostico', label: 'Diagnóstico gratuito' },
              { href: '/blog', label: 'Blog' },
              { href: '/contacto', label: 'Contacto' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.8rem] text-white/60 hover:text-[#f2aa79] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Contacto
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:carovalenciam@outlook.com"
              className="text-[0.82rem] text-white/70 hover:text-[#f2aa79] transition-colors flex items-center gap-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span>carovalenciam@outlook.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gerentedemercadeo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.82rem] text-white/70 hover:text-[#f2aa79] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              LinkedIn → gerentedemercadeo
            </a>
            <div className="mt-4">
              <Link href="/contacto" className="btn-cta text-[0.72rem] px-4 py-2.5">
                Agenda tu sesión estratégica
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[0.7rem] text-white/55" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Carolina Valencia M. — Fabricando Ideas. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/politica-privacidad" className="text-[0.7rem] text-white/55 hover:text-white/70 transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
