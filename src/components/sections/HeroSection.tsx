import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f8f6f3] dot-grid overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#87c1b6]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-[#f2aa79]/15 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 min-h-screen items-center py-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="eyebrow mb-6">Fabricando Ideas</div>

          <h1
            className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] font-bold leading-[1.05] text-[#404e66] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Estrategia que<br />
            mueve el negocio.<br />
            <em className="text-[#c45572] not-italic italic">Marca que abre puertas.</em>
          </h1>

          <p
            className="text-[1rem] text-[#6b6b6b] leading-[1.85] max-w-[500px] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Consultoría de marketing y estrategia comercial para empresas que quieren{' '}
            <strong className="text-[#404e66] font-bold">crecer con rentabilidad</strong>, y construcción
            de marca personal para ejecutivos que quieren{' '}
            <strong className="text-[#404e66] font-bold">liderar la conversación en su sector.</strong>
          </p>

          {/* CTA buttons — PDF punto 2 */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/servicios" className="btn-primary">
              Ver servicios
            </Link>
            <Link href="/diagnostico" className="btn-outline">
              Diagnóstico gratuito
            </Link>
            {/* PDF punto 2: botón "Agenda una sesión estratégica" */}
            <Link href="/contacto" className="btn-cta">
              Agenda una sesión estratégica
            </Link>
          </div>

          {/* Stats — PDF punto 1: botones pequeños con claridad */}
          <div className="flex flex-wrap gap-3">
            {[
              { num: '+20',  label: 'Años de experiencia' },
              { num: 'FMCG', label: 'Retail & Consumo Masivo' },
              { num: 'P&L',  label: 'Con responsabilidad real' },
              { num: 'C-Level', label: 'Marca Personal' },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-white border border-[#e6e6e6] rounded-sm px-4 py-2 flex flex-col items-center min-w-[90px] shadow-sm hover:border-[#87c1b6] transition-colors"
              >
                <span
                  className="font-display font-bold text-[1.3rem] text-[#404e66]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.num}
                </span>
                <span
                  className="text-[0.62rem] text-[#6b6b6b] tracking-wide text-center leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo + quote card */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* ════════════════════════════════════════════
              FOTO PRINCIPAL — CAROLINA VALENCIA
              Reemplaza /images/carolina-hero.jpg
              Medida recomendada: 560 × 680 px (proporción 4:5)
              Formato: WebP o JPG de alta calidad
              Encuadre: retrato profesional, fondo neutro o estudio
              ════════════════════════════════════════════ */}
          <div className="relative w-[340px] lg:w-[420px]">
            <div className="w-full aspect-[4/5] bg-[#87c1b6]/20 rounded-md overflow-hidden border-4 border-white shadow-2xl">
              {/* REEMPLAZA ESTE BLOQUE POR:
                  <Image src="/images/carolina-hero.jpg" alt="Carolina Valencia M." fill className="object-cover object-top" />
              */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#404e66] to-[#87c1b6] text-white/80 gap-2 px-8 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase opacity-70" style={{ fontFamily: 'var(--font-body)' }}>
                  Foto de Carolina<br />560 × 680 px
                </p>
              </div>
            </div>

            {/* Quote card overlay */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-[#404e66] text-white rounded-md p-5 max-w-[260px] shadow-xl">
              <p
                className="font-display italic text-[0.9rem] leading-snug mb-3 text-white/90"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                "No observo el mercado. Lo construyo."
              </p>
              <span
                className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#87c1b6]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Carolina Valencia M.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
