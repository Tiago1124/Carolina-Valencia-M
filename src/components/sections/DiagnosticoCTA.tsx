import Link from 'next/link';

export default function DiagnosticoCTA() {
  return (
    <section className="section bg-[var(--cream-mid)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Content */}
          <div>
            <div className="eyebrow mb-4">Diagnóstico gratuito</div>
            <h2 style={{ fontFamily: 'var(--font-display)' }}
              className="text-[var(--navy-dark)] mb-4">
              ¿Cuánto vale tu{' '}
              <em className="italic text-[var(--rose)]">experiencia</em>{' '}
              en el mercado digital?
            </h2>
            <div className="divider" />
            <p className="lead mb-6 max-w-md">
              En 3 minutos descubres exactamente en qué punto está tu marca personal y qué palanca debes activar primero.{' '}
              <strong className="text-[var(--text)] font-semibold">Sin tarjeta. Sin compromisos.</strong>
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                '6 preguntas sobre tu presencia y visibilidad actual',
                'Diagnóstico personalizado con tu perfil exacto',
                'Plan de acción con los 3 pasos prioritarios',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--teal)] flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-base text-[var(--text-mid)]">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer"
                className="btn btn--cta">
                🎯 Hacer el diagnóstico gratis
              </a>
              <Link href="/diagnostico" className="btn btn--outline">
                Ver más información
              </Link>
            </div>
          </div>

          {/* Scorecard visual */}
          <div className="card p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-6">
              Ejemplo de resultado
            </p>

            {[
              { label: 'Visibilidad digital',   value: 20, status: 'Bajo',  color: 'var(--rose)' },
              { label: 'Propuesta de valor',    value: 55, status: 'Medio', color: 'var(--teal-dark)' },
              { label: 'Sistema de contenido',  value: 15, status: 'Bajo',  color: 'var(--rose)' },
              { label: 'Oportunidades activas', value: 40, status: 'Medio', color: 'var(--teal-dark)' },
              { label: 'Narrativa profesional', value: 25, status: 'Bajo',  color: 'var(--rose)' },
            ].map((row) => (
              <div key={row.label} className="mb-5 last:mb-0">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-[var(--navy)]">{row.label}</span>
                  <span className="text-xs font-semibold" style={{ color: row.color }}>{row.status}</span>
                </div>
                <div className="h-1.5 bg-[var(--cream-dark)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${row.value}%`, background: row.color }} />
                </div>
              </div>
            ))}

            <div className="mt-6 pt-5 border-t border-[var(--cream-dark)]">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--peach-dark)] mb-2">
                Perfil: Marca en Construcción
              </p>
              <p className="text-sm text-[var(--text-mid)] leading-relaxed">
                Tienes las bases. Te falta sistema y consistencia. Con la estructura correcta puedes convertir lo que ya tienes en autoridad real.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
