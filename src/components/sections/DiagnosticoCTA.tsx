import Link from 'next/link';

const BARS = [
  { label: 'Visibilidad digital',   pct: 20, level: 'Bajo',  color: 'bg-rose' },
  { label: 'Propuesta de valor',    pct: 55, level: 'Medio', color: 'bg-teal' },
  { label: 'Sistema de contenido',  pct: 15, level: 'Bajo',  color: 'bg-rose' },
  { label: 'Oportunidades activas', pct: 40, level: 'Medio', color: 'bg-teal' },
  { label: 'Narrativa profesional', pct: 25, level: 'Bajo',  color: 'bg-rose' },
];

export default function DiagnosticoCTA() {
  return (
    <section className="bg-stone-2 py-[clamp(5rem,10vw,8rem)]">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-teal" />
              <span className="text-label font-semibold uppercase tracking-widest text-teal">
                Diagnóstico gratuito
              </span>
            </div>
            <h2 className="font-serif font-semibold text-ink leading-tight mb-5" style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>
              ¿Cuánto vale tu{' '}
              <em className="italic text-rose">experiencia</em>{' '}
              en el mercado digital?
            </h2>
            <div className="w-10 h-0.5 bg-peach mb-5" />
            <p className="text-lead text-muted leading-relaxed mb-7 max-w-md">
              En 3 minutos descubres exactamente en qué punto está tu marca personal y qué palanca activar primero.{' '}
              <strong className="text-ink">Sin tarjeta. Sin compromisos.</strong>
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                '6 preguntas sobre tu presencia y visibilidad actual',
                'Diagnóstico personalizado con tu perfil exacto',
                'Plan de acción con los 3 pasos prioritarios',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-body text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://tally.so/r/XxYeEe"
                target="_blank" rel="noopener noreferrer"
                className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-6 py-3 hover:bg-[#e89563] transition-colors shadow-[0_4px_20px_rgba(242,170,121,0.3)]"
              >
                🎯 Hacer el diagnóstico gratis
              </a>
              <Link
                href="/diagnostico"
                className="text-label font-semibold uppercase tracking-widest border border-stone-3 text-navy rounded px-6 py-3 hover:border-navy transition-colors"
              >
                Ver más información
              </Link>
            </div>
          </div>

          {/* Scorecard */}
          <div className="bg-white border border-stone-2 rounded-lg p-8 shadow-sm">
            <p className="text-label font-semibold uppercase tracking-widest text-muted mb-7">
              Ejemplo de resultado
            </p>

            <div className="flex flex-col gap-5">
              {BARS.map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-small font-medium text-ink">{row.label}</span>
                    <span className={`text-[0.68rem] font-bold ${row.level === 'Bajo' ? 'text-rose' : 'text-teal'}`}>
                      {row.level}
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${row.color}`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-stone-2">
              <p className="text-label font-bold uppercase tracking-widest text-peach mb-2">
                Perfil: Marca en Construcción
              </p>
              <p className="text-small text-muted leading-relaxed">
                Tienes las bases. Te falta sistema y consistencia. Con la estructura correcta puedes convertir lo que ya tienes en autoridad real.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
