import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <span style={{ fontFamily: 'var(--font-display)' }}
              className="text-xl font-bold text-white block">
              Carolina Valencia<span className="text-[var(--peach)]"> M.</span>
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--teal)]">
              Fabricando Ideas
            </span>
          </Link>
          <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-4">
            Estrategia que mueve el negocio. Marca que abre puertas. +20 años construyendo crecimiento rentable.
          </p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/8 hover:bg-[var(--teal)] flex items-center justify-center transition-colors"
              aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:carovalenciam@outlook.com"
              className="w-9 h-9 rounded-full bg-white/8 hover:bg-[var(--teal)] flex items-center justify-center transition-colors"
              aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--teal)] mb-4">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: '/sobre-mi',    label: 'Sobre mí' },
              { href: '/servicios',   label: 'Servicios' },
              { href: '/metodologia', label: 'Metodología' },
              { href: '/diagnostico', label: 'Diagnóstico gratuito' },
              { href: '/blog',        label: 'Blog' },
              { href: '/contacto',    label: 'Contacto' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-sm text-white/55 hover:text-[var(--peach)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--teal)] mb-4">
            Contacto
          </h3>
          <div className="flex flex-col gap-3 mb-5">
            <a href="mailto:carovalenciam@outlook.com"
              className="text-sm text-white/55 hover:text-[var(--peach)] transition-colors">
              carovalenciam@outlook.com
            </a>
            <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer"
              className="text-sm text-white/55 hover:text-[var(--peach)] transition-colors">
              LinkedIn → gerentedemercadeo
            </a>
          </div>
          <Link href="/contacto" className="btn btn--cta text-sm py-2.5 px-5">
            Agenda tu sesión estratégica
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Carolina Valencia M. — Fabricando Ideas
          </p>
          <Link href="/politica-privacidad"
            className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
