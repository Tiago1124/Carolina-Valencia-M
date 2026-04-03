import Link from 'next/link';

export default function DiagnosticoCTA() {
  return (
    <section className="bg-[#f8f6f3] section-base relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-[#87c1b6]/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-[#f2aa79]/12 blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div>
          <div className="eyebrow mb-6">Diagnóstico gratuito</div>
          <h2
            className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#404e66] leading-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Cuánto vale tu{' '}
            <em className="text-[#c45572] italic">experiencia</em>{' '}
            en el mercado digital?
          </h2>
          <p
            className="text-[0.95rem] text-[#5a6578] leading-relaxed mb-6 max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            En 3 minutos descubres exactamente en qué punto está tu marca personal y qué palanca debes activar primero.{' '}
            <strong className="text-[#404e66]">Sin datos de tarjeta. Sin compromisos.</strong>
          </p>

          <div className="flex flex-col gap-2.5 mb-8">
            {[
              '6 preguntas sobre tu presencia y visibilidad actual',
              'Diagnóstico personalizado con tu perfil exacto',
              'Plan de acción con los 3 pasos prioritarios',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#87c1b6] flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[0.85rem] text-[#5a6578]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* PDF punto 8: gancho CTA */}
          <div className="flex flex-wrap gap-3">
            {/* Tally form link — PDF punto 8 */}
            <a
              href="https://tally.so/r/XxYeEe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-[0.82rem]"
            >
              🎯 Hacer el diagnóstico gratis
            </a>
            <Link href="/diagnostico" className="btn-outline text-[0.82rem]">
              Ver más información
            </Link>
          </div>
        </div>

        {/* Visual scorecard */}
        <div className="bg-white rounded-md border border-[#e6e6e6] p-7 shadow-sm">
          <p
            className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#5a6578] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Ejemplo de resultado
          </p>

          {[
            { label: 'Visibilidad digital',    value: 20, level: 'Bajo',  color: 'bg-[#c45572]' },
            { label: 'Propuesta de valor',     value: 55, level: 'Medio', color: 'bg-[#87c1b6]' },
            { label: 'Sistema de contenido',   value: 15, level: 'Bajo',  color: 'bg-[#c45572]' },
            { label: 'Oportunidades activas',  value: 40, level: 'Medio', color: 'bg-[#87c1b6]' },
            { label: 'Narrativa profesional',  value: 25, level: 'Bajo',  color: 'bg-[#c45572]' },
          ].map((row) => (
            <div key={row.label} className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[0.78rem] text-[#404e66] font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                  {row.label}
                </span>
                <span
                  className={`text-[0.65rem] font-bold tracking-wide ${
                    row.level === 'Bajo' ? 'text-[#c45572]' : 'text-[#87c1b6]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {row.level}
                </span>
              </div>
              <div className="h-2 bg-[#f0ede9] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${row.color} transition-all duration-700`}
                  style={{ width: `${row.value}%` }}
                />
              </div>
            </div>
          ))}

          <div className="mt-5 pt-4 border-t border-[#e6e6e6]">
            <p
              className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#f2aa79] mb-1.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Perfil: Marca en Construcción
            </p>
            <p className="text-[0.8rem] text-[#5a6578] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Tienes las bases. Te falta sistema y consistencia. Con la estructura correcta puedes convertir lo que ya tienes en autoridad real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
