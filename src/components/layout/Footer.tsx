import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="wrap" style={{ paddingBlock: 'clamp(3.5rem,7vw,5rem)' }}>
        <div style={{ display: 'grid', gap: '3rem' }} className="md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--white)', display: 'block', lineHeight: 1 }}>
                Carolina Valencia<span style={{ color: 'var(--sand)' }}> M.</span>
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)' }}>
                Fabricando Ideas
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '280px', marginBottom: '1.25rem' }}>
              Estrategia que mueve el negocio. Marca que abre puertas. +20 años construyendo crecimiento rentable.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gerentedemercadeo',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: 'Email', href: 'mailto:carovalenciam@outlook.com',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--sage)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: '1.25rem' }}>
              Navegación
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: '/sobre-mi',    label: 'Sobre mí' },
                { href: '/servicios',   label: 'Servicios' },
                { href: '/metodologia', label: 'Metodología' },
                { href: '/diagnostico', label: 'Diagnóstico gratuito' },
                { href: '/blog',        label: 'Blog' },
                { href: '/contacto',    label: 'Contacto' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--sand)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: '1.25rem' }}>
              Contacto directo
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <a href="mailto:carovalenciam@outlook.com" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                carovalenciam@outlook.com
              </a>
              <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                LinkedIn → gerentedemercadeo
              </a>
            </div>
            <Link href="/contacto" className="btn btn-cta" style={{ fontSize: '0.75rem', padding: '0.7rem 1.5rem' }}>
              Agenda tu sesión estratégica
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="wrap" style={{ paddingBlock: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Carolina Valencia M. — Fabricando Ideas
          </p>
          <Link href="/politica-privacidad" style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
