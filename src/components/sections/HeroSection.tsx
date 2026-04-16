import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-stone overflow-hidden flex items-center pt-16">

      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-10 w-full py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6 lg:gap-7">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-teal" />
              <span className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-teal"
                style={{ fontFamily: 'var(--font-body)' }}>
                Estrategia Comercial · Marca Personal
              </span>
            </div>

            {/* H1 — título completo, tamaño calibrado para no ahogar */}
            {/*
              Estrategia tipográfica:
              - Mobile (< 640px):  2rem  → cabe en 3 líneas cómodas
              - Tablet (640-1024): 2.4rem → 3 líneas equilibradas
              - Desktop (> 1024):  3rem  → 3 líneas con aire, nunca 4
              leading-[1.15] en lugar de 1.05 porque con más líneas
              el interlineado estrecho se siente comprimido
            */}
            <h1
              className="font-serif font-semibold tracking-tight text-ink"
              style={{
                fontSize: 'clamp(1.9rem, 3.6vw, 3rem)',
                lineHeight: '1.18',
              }}
            >
              Acompaño a empresas y ejecutivos a convertir la experiencia acumulada en{' '}
              <em className="italic" style={{ color: '#c45572' }}>crecimiento real.</em>
            </h1>

            {/* Subtítulo — más pequeño y con max-width ajustado */}
            <p
              className="text-muted leading-relaxed max-w-[420px]"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}
            >
              Consultoría comercial y marca personal para directivos que quieren resultados con foco — no con ruido.
            </p>

            {/* Cita — visualmente diferenciada: serif, itálica, acento peach */}
            <p
              className="font-serif italic leading-relaxed text-navy border-l-[3px] border-peach pl-4 max-w-[400px]"
              style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}
            >
              El camino empieza cuando hay claridad de dónde ir y valentía para mover las palancas correctas.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-5 pt-1">
              <Link
                href="/diagnostico"
                className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-6 py-3 lg:px-7 lg:py-3.5 hover:bg-[#e89563] transition-colors shadow-[0_4px_24px_rgba(242,170,121,0.4)]"
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

            {/* Stats */}
            <div className="flex items-center gap-6 lg:gap-8 pt-4 border-t border-stone-2">
              {[
                { num: '+20', label: 'años de experiencia' },
                { num: '+50', label: 'empresas acompañadas' },
                { num: 'P&L', label: 'responsabilidad real' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-serif font-bold text-navy" style={{ fontSize: '1.3rem' }}>
                    {s.num}
                  </span>
                  <span className="text-[0.6rem] text-muted tracking-wide leading-tight"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: foto — oculta en mobile, visible desde lg ── */}
          <div className="relative hidden lg:flex justify-end">

            {/* Marco decorativo */}
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
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-5 -left-6 bg-white border border-stone-2 rounded-xl p-4 max-w-[220px] shadow-lg">
              <p className="font-serif italic text-navy text-[0.82rem] leading-snug mb-2">
                "Convierto complejidad en claridad. Claridad en resultados."
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
