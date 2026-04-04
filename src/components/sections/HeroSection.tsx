import Link from 'next/link';

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--parchment)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '68px',
      overflow: 'hidden',
    }}>
      {/* Gradiente fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(107,158,149,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(242,170,121,0.06)',
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ paddingBlock: 'clamp(4rem,8vw,7rem)', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}
          className="lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* ── LEFT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Eyebrow */}
            <div className="eyebrow">Fabricando Ideas</div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem,6.5vw,5.5rem)',
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
            }}>
              Estrategia que<br />
              mueve el negocio.<br />
              <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>
                Marca que abre puertas.
              </em>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem,1.5vw,1.125rem)',
              lineHeight: 1.75,
              color: 'var(--ink-60)',
              maxWidth: '520px',
            }}>
              Consultoría de marketing para empresas que quieren{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>crecer con rentabilidad</strong>,
              y construcción de marca personal para ejecutivos que quieren{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>liderar la conversación en su sector.</strong>
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <Link href="/servicios" className="btn btn-primary">
                Ver servicios
              </Link>
              <Link href="/diagnostico" className="btn btn-outline">
                Diagnóstico gratis
              </Link>
              <Link href="/contacto" className="btn btn-cta">
                Agenda una sesión estratégica
              </Link>
            </div>

            {/* Stats chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', paddingTop: '0.25rem' }}>
              {[
                { num: '+20', label: 'años experiencia' },
                { num: 'FMCG', label: 'retail & consumo' },
                { num: 'P&L', label: 'responsabilidad real' },
                { num: 'C-Level', label: 'marca personal' },
              ].map((s) => (
                <div key={s.num} style={{
                  display: 'flex', alignItems: 'baseline', gap: '0.5rem',
                  background: 'var(--white)',
                  border: '1px solid var(--parchment-3)',
                  borderRadius: '3px',
                  padding: '0.5rem 0.875rem',
                  boxShadow: '0 1px 4px rgba(28,35,51,0.05)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--navy-deep)',
                    lineHeight: 1,
                  }}>{s.num}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: 'var(--ink-40)',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                  }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — foto ── */}
          <div className="hidden lg:block" style={{ position: 'relative' }}>
            {/*
              ════════════════════════════════════════════════
              FOTO PRINCIPAL — carolina-hero.jpg
              Medida: 560 × 680 px · Formato: WebP o JPG
              Encuadre: retrato 3/4, fondo neutro
              
              Para activar, reemplaza el div gris por:
              <div style={{ position:'relative', width:'100%', aspectRatio:'4/5',
                borderRadius:'4px', overflow:'hidden', boxShadow:'0 24px 60px rgba(28,35,51,0.18)' }}>
                <Image src="/images/carolina-hero.jpg" alt="Carolina Valencia M."
                  fill style={{ objectFit:'cover', objectPosition:'top' }} priority />
              </div>
              ════════════════════════════════════════════════
            */}
            <div style={{
              width: '100%', aspectRatio: '4/5', borderRadius: '4px',
              background: 'linear-gradient(160deg, var(--navy-deep) 0%, var(--sage) 100%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '0.75rem',
              color: 'rgba(255,255,255,0.35)',
              boxShadow: '0 24px 60px rgba(28,35,51,0.18)',
            }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Foto 560 × 680 px
              </span>
            </div>

            {/* Quote card flotante */}
            <div style={{
              position: 'absolute', bottom: '-1.5rem', left: '-2.5rem',
              background: 'var(--white)',
              border: '1px solid var(--parchment-3)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              maxWidth: '260px',
              boxShadow: '0 8px 32px rgba(28,35,51,0.1)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.5,
                marginBottom: '0.625rem',
              }}>
                "No observo el mercado. Lo construyo."
              </p>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
              }}>
                Carolina Valencia M.
              </span>
            </div>

            {/* Accent line */}
            <div style={{
              position: 'absolute', top: '2rem', right: '-1.5rem',
              width: '3px', height: '60%',
              background: 'linear-gradient(to bottom, var(--sand), transparent)',
              borderRadius: '2px',
            }} />
          </div>

        </div>
      </div>
    </section>
  );
}
