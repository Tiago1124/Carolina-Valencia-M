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
    <footer className="bg-navy text-white">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4 no-underline">
            <span className="font-serif text-xl font-semibold text-white block leading-none">
              Carolina Valencia<span className="text-peach"> M.</span>
            </span>
            <span className="text-[0.6rem] font-sans font-semibold tracking-[0.2em] uppercase text-teal">
              Fabricando Ideas
            </span>
          </Link>
          <p className="text-small text-white/55 leading-relaxed max-w-xs mb-5">
            Estrategia que mueve el negocio. Marca que abre puertas. +20 años construyendo crecimiento rentable.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/gerentedemercadeo"
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="mailto:carovalenciam@outlook.com"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-label font-semibold uppercase tracking-widest text-teal mb-5">Navegación</p>
          <ul className="flex flex-col gap-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-small text-white/55 hover:text-peach transition-colors no-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-label font-semibold uppercase tracking-widest text-teal mb-5">Contacto</p>
          <div className="flex flex-col gap-2.5 mb-6">
            <a href="mailto:carovalenciam@outlook.com" className="text-small text-white/55 hover:text-peach transition-colors no-underline">
              carovalenciam@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/gerentedemercadeo"
              target="_blank" rel="noopener noreferrer"
              className="text-small text-white/55 hover:text-peach transition-colors no-underline"
            >
              LinkedIn → gerentedemercadeo
            </a>
          </div>
          <Link
            href="/contacto"
            className="inline-block text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-5 py-2.5 hover:bg-[#e89563] transition-colors no-underline"
          >
            Agenda tu sesión
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-site mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[0.7rem] text-white/30">
          © {new Date().getFullYear()} Carolina Valencia M. — Todos los derechos reservados.
        </p>
        <Link href="/politica-privacidad" className="text-[0.7rem] text-white/30 hover:text-white/60 transition-colors no-underline">
          Política de privacidad
        </Link>
      </div>
    </footer>
  );
}
