import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-stone overflow-hidden flex items-center pt-16">

      {/* Background — blob teal suave arriba derecha */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-10 w-full py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-teal" />
              <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-teal"
                style={{ fontFamily: 'var(--font-body)' }}>
                Estrategia Comercial · Marca Personal
              </span>
            </div>

            {/* Headline — reducido a lo esencial */}
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.6rem, 4.8vw, 4rem)' }}
            >
              Experiencia que se convierte en{' '}
              <em className="italic" style={{ color: '#c45572' }}>crecimiento real.</em>
            </h1>

            {/* Subtítulo — una sola línea de apoyo */}
            <p className="text-[1.05rem] text-muted leading-relaxed max-w-[440px]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Consultoría comercial y marca personal para empresas y ejecutivos que quieren resultados — no promesas.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-5 pt-1">
              <Link
                href="/diagnostico"
                className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-7 py-3.5 hover:bg-[#e89563] transition-colors shadow-[0_4px_24px_rgba(242,170,121,0.4)]"
              >
                Diagnóstico gratis
              </Link>
              <Link
                href="/servicios"
                className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy/60 hover:text-navy transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Ver servicios →
              </Link>
            </div>

            {/* Stats — separador limpio, sin pills */}
            <div className="flex items-center gap-8 pt-4 border-t border-stone-2">
              {[
                { num: '+20', label: 'años de experiencia' },
                { num: '+50', label: 'empresas acompañadas' },
                { num: 'P&L', label: 'responsabilidad real' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-serif font-bold text-navy" style={{ fontSize: '1.4rem' }}>
                    {s.num}
                  </span>
                  <span className="text-[0.62rem] text-muted tracking-wide leading-tight"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: foto ── */}
          <div className="relative hidden lg:flex justify-end">

            {/* Marco decorativo detrás */}
            <div
              className="absolute bottom-6 right-6 w-full aspect-[4/5] rounded-2xl"
              style={{ background: 'rgba(135,193,182,0.10)', maxWidth: '420px' }}
            />

            {/* Foto */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/3.webp"
                alt="Carolina Valencia M."
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradiente inferior sutil para que la quote card flote bien */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Quote card — más contenida */}
            <div className="absolute -bottom-5 -left-6 bg-white border border-stone-2 rounded-xl p-4 max-w-[210px] shadow-lg">
              <p className="font-serif italic text-navy text-[0.85rem] leading-snug mb-2">
                "No observo el mercado. Lo construyo."
              </p>
              <span className="text-[0.58rem] font-bold tracking-[0.12em] uppercase text-teal"
                style={{ fontFamily: 'var(--font-body)' }}>
                Carolina Valencia M.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
