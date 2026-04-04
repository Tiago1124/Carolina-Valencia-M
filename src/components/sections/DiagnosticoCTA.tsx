import Link from 'next/link';

export default function DiagnosticoCTA() {
  return (
    <section style={{ background: 'var(--parchment-2)', paddingBlock: 'var(--space-section)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gap: '4rem' }} className="lg:grid-cols-2 items-center">

          {/* Content */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Diagnóstico gratuito</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              fontWeight: 600,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}>
              ¿Cuánto vale tu{' '}
              <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>experiencia</em>{' '}
              en el mercado digital?
            </h2>
            <div className="divider" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink-60)', marginBottom: '1.75rem', maxWidth: '460px' }}>
              En 3 minutos descubres exactamente en qué punto está tu marca personal y qué palanca debes activar primero.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Sin tarjeta. Sin compromisos.</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
              {[
                '6 preguntas sobre tu presencia y visibilidad actual',
                'Diagnóstico personalizado con tu perfil exacto',
                'Plan de acción con los 3 pasos prioritarios',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'var(--sage)', flexShrink: 0, marginTop: '1px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--ink-60)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn btn-cta">
                🎯 Hacer el diagnóstico gratis
              </a>
              <Link href="/diagnostico" className="btn btn-outline">
                Ver más información
              </Link>
            </div>
          </div>

          {/* Scorecard */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--parchment-3)',
            borderRadius: '4px',
            padding: 'clamp(1.5rem,4vw,2.5rem)',
            boxShadow: '0 8px 32px rgba(28,35,51,0.06)',
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: '1.75rem' }}>
              Ejemplo de resultado
            </p>

            {[
              { label: 'Visibilidad digital',   value: 20, level: 'Bajo',  color: 'var(--rose)' },
              { label: 'Propuesta de valor',    value: 55, level: 'Medio', color: 'var(--sage)' },
              { label: 'Sistema de contenido',  value: 15, level: 'Bajo',  color: 'var(--rose)' },
              { label: 'Oportunidades activas', value: 40, level: 'Medio', color: 'var(--sage)' },
              { label: 'Narrativa profesional', value: 25, level: 'Bajo',  color: 'var(--rose)' },
            ].map(row => (
              <div key={row.label} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--ink)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: row.color }}>{row.level}</span>
                </div>
                <div style={{ height: '4px', background: 'var(--parchment-3)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${row.value}%`, background: row.color, borderRadius: '2px', transition: 'width 0.7s ease' }} />
                </div>
              </div>
            ))}

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--parchment-3)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sand-deep)', marginBottom: '0.5rem' }}>
                Perfil: Marca en Construcción
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-60)', lineHeight: 1.65 }}>
                Tienes las bases. Te falta sistema y consistencia. Con la estructura correcta puedes convertir lo que ya tienes en autoridad real.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
