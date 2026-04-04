import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-stone overflow-hidden flex items-center pt-16">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-peach/8 blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right,rgba(64,78,102,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(64,78,102,0.04) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-site mx-auto px-6 lg:px-10 w-full py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-teal" />
              <span className="text-label font-semibold uppercase tracking-widest text-teal">
                Fabricando Ideas
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-semibold leading-[1.05] tracking-tight text-ink" style={{ fontSize: 'clamp(2.8rem,5.5vw,4.4rem)' }}>
              Estrategia que<br />
              mueve el negocio.<br />
              <em className="italic text-rose not-italic" style={{ fontStyle: 'italic' }}>
                Marca que abre puertas.
              </em>
            </h1>

            {/* Sub */}
            <p className="text-lead text-muted max-w-[500px] leading-relaxed">
              Consultoría de marketing para empresas que quieren{' '}
              <strong className="text-ink font-semibold">crecer con rentabilidad</strong>, y construcción de marca
              personal para ejecutivos que quieren{' '}
              <strong className="text-ink font-semibold">liderar la conversación en su sector.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/servicios"
                className="text-label font-bold uppercase tracking-widest bg-navy text-white rounded px-6 py-3 hover:bg-ink transition-colors"
              >
                Ver servicios
              </Link>
              <Link
                href="/diagnostico"
                className="text-label font-semibold uppercase tracking-widest border border-stone-3 text-navy rounded px-6 py-3 hover:border-navy transition-colors"
              >
                Diagnóstico gratis
              </Link>
              <Link
                href="/contacto"
                className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-6 py-3 hover:bg-[#e89563] transition-colors shadow-[0_4px_20px_rgba(242,170,121,0.35)]"
              >
                Agenda una sesión estratégica
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { num: '+20',     label: 'años de exp.' },
                { num: 'FMCG',   label: 'Retail & Consumo' },
                { num: 'P&L',    label: 'Resp. real' },
                { num: 'C-Level',label: 'Marca Personal' },
              ].map((s) => (
                <div
                  key={s.num}
                  className="bg-white border border-stone-2 rounded px-4 py-2.5 flex items-baseline gap-2 shadow-sm"
                >
                  <span className="font-serif font-bold text-navy" style={{ fontSize: '1.15rem' }}>{s.num}</span>
                  <span className="text-[0.66rem] text-muted tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="relative hidden lg:block">
            {/*
              ══════════════════════════════════════════════
              FOTO PRINCIPAL
              Archivo: /public/images/carolina-hero.jpg
              Medida recomendada: 560 × 680 px (4:5)
              Formato: WebP o JPG, calidad alta

              Para activar:
              1. Guarda la foto en /public/images/carolina-hero.jpg
              2. Reemplaza el div de placeholder por:

              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/carolina-hero.jpg"
                  alt="Carolina Valencia M."
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              ══════════════════════════════════════════════
            */}
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-navy to-teal flex flex-col items-center justify-center gap-3 text-white/30">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <p className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase">
                Foto 560 × 680 px
              </p>
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-4 -left-8 bg-white border border-stone-2 rounded-lg p-5 max-w-[240px] shadow-xl">
              <p className="font-serif italic text-navy text-sm leading-snug mb-2">
                "No observo el mercado.<br />Lo construyo."
              </p>
              <span className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-teal">
                Carolina Valencia M.
              </span>
            </div>

            {/* Accent */}
            <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-peach/20 blur-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
