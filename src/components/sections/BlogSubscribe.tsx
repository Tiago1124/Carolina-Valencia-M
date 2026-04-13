// ══════════════════════════════════════════════════════════
// BLOG SUBSCRIBE — Sección de suscripción al newsletter
//
// Cómo configurar:
// 1. Ve a tally.so → New Form → agrega Email (required) + Nombre
// 2. Share → copia el ID (los chars después de tally.so/r/)
// 3. Reemplaza FORM_ID abajo con ese ID
// 4. Para gestionar suscriptores: tally.so → Submissions → Export CSV
// 5. Para conectar con Brevo/Mailchimp: tally.so → Integrations
// ══════════════════════════════════════════════════════════

const FORM_ID = 'XxYeEe'; // ← reemplaza con tu ID de formulario de suscripción

export default function BlogSubscribe({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-[#404e66] rounded-xl p-7 text-white">
        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-3"
          style={{ color: '#87c1b6', fontFamily: 'var(--font-body)' }}>
          Newsletter
        </p>
        <h3 className="font-bold text-white mb-2"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', lineHeight: 1.2 }}>
          Recibe cada artículo en tu bandeja
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5"
          style={{ fontFamily: 'var(--font-body)' }}>
          Sin spam. Solo estrategia que puedes aplicar.
        </p>
        <a href={`https://tally.so/r/${FORM_ID}`} target="_blank" rel="noopener noreferrer"
          className="inline-block w-full text-center text-[0.72rem] font-bold uppercase tracking-widest bg-[#f2aa79] text-[#1a1f2e] rounded-full px-5 py-3 hover:bg-[#e89563] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}>
          Suscribirme gratis
        </a>
      </div>
    );
  }

  return (
    <section className="bg-[#f8f5f0] py-20 border-t border-[#e8e3dc]">
      <div className="max-w-[820px] mx-auto px-6 lg:px-10 text-center">

        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#87c1b6]" />
          <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6]"
            style={{ fontFamily: 'var(--font-body)' }}>
            Newsletter
          </span>
          <span className="w-8 h-px bg-[#87c1b6]" />
        </div>

        <h2 className="font-bold text-[#1a1f2e] mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', lineHeight: 1.1 }}>
          Estrategia que llega directo{' '}
          <em className="italic text-[#87c1b6]">a tu bandeja de entrada</em>
        </h2>

        <p className="text-[#6b7280] leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ fontSize: '1rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
          Cada artículo es un framework, un caso real o una palanca que puedes aplicar en tu negocio o marca personal.{' '}
          <strong className="text-[#404e66]">Sin relleno. Sin spam.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`https://tally.so/r/${FORM_ID}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-widest bg-[#404e66] text-white rounded-full px-8 py-3.5 hover:bg-[#1a1f2e] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}>
            📩 Suscribirme al newsletter
          </a>
          <p className="text-[0.72rem] text-[#6b7280]" style={{ fontFamily: 'var(--font-body)' }}>
            Cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
