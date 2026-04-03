import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--cream)] dot-grid overflow-hidden flex items-center pt-16">
      {/* Blob top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--teal)]/8 blur-[120px] pointer-events-none" />
      {/* Blob bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--peach)]/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6">

            <div className="eyebrow">Fabricando Ideas</div>

            <h1 style={{ fontFamily: 'var(--font-display)' }}
              className="text-[clamp(2.6rem,5.5vw,4rem)] font-bold leading-[1.05] text-[var(--navy-dark)] tracking-tight">
              Estrategia que<br />
              mueve el negocio.<br />
              <em className="italic text-[var(--rose)] not-italic" style={{ fontStyle: 'italic' }}>
                Marca que abre puertas.
              </em>
            </h1>

            <p className="lead max-w-[500px]">
              Consultoría de marketing para empresas que quieren{' '}
              <strong className="text-[var(--text)] font-semibold">crecer con rentabilidad</strong>, y construcción
              de marca personal para ejecutivos que quieren{' '}
              <strong className="text-[var(--text)] font-semibold">liderar la conversación en su sector.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/servicios" className="btn btn--primary">
                Ver servicios
              </Link>
              <Link href="/diagnostico" className="btn btn--outline">
                Diagnóstico gratis
              </Link>
              <Link href="/contacto" className="btn btn--cta">
                Agenda una sesión estratégica
              </Link>
            </div>

            {/* Stats — chips pequeños, claros */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { num: '+20 años', label: 'de experiencia' },
                { num: 'FMCG',    label: 'Retail & Consumo' },
                { num: 'P&L',     label: 'Responsabilidad real' },
                { num: 'C-Level', label: 'Marca Personal' },
              ].map((s) => (
                <div key={s.num}
                  className="bg-white border border-[var(--cream-dark)] rounded px-4 py-2.5 flex gap-2 items-baseline shadow-sm">
                  <span style={{ fontFamily: 'var(--font-display)' }}
                    className="font-bold text-[var(--navy)] text-base leading-none">{s.num}</span>
                  <span className="text-xs text-[var(--text-muted)] leading-none">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — foto + quote ── */}
          <div className="relative hidden lg:flex justify-end">
            {/* ════════════════════════════════════════════
                FOTO PRINCIPAL
                Archivo: /public/images/carolina-hero.jpg
                Medida:  560 × 680 px  (proporción 4:5)
                Formato: WebP o JPG
                ════════════════════════════════════════════
                Para activar: reemplaza el div de placeholder
                por:
                <div className="relative w-[400px] aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <Image src="/images/carolina-hero.jpg"
                    alt="Carolina Valencia M." fill
                    className="object-cover object-top" priority />
                </div>
            */}
            <div className="relative w-[400px] aspect-[4/5]">
              {/* Placeholder foto */}
              <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--teal-dark)] flex flex-col items-center justify-center gap-3 text-white/50">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <p className="text-xs font-semibold tracking-widest uppercase opacity-60">
                  Foto 560 × 680 px
                </p>
              </div>

              {/* Quote card — abajo a la izquierda */}
              <div className="absolute -bottom-4 -left-8 bg-white rounded-lg p-5 max-w-[260px] shadow-xl border border-[var(--cream-dark)]">
                <p style={{ fontFamily: 'var(--font-display)' }}
                  className="italic text-[var(--navy)] text-sm leading-snug mb-2">
                  "No observo el mercado.<br />Lo construyo."
                </p>
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--teal-dark)]">
                  Carolina Valencia M.
                </span>
              </div>

              {/* Accent dot */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[var(--peach)]/30 blur-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
