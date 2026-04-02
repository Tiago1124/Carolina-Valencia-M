import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre mí | Trayectoria y Experiencia',
  description:
    'Ingeniera Industrial con más de 20 años en marketing y estrategia comercial. Trayectoria en Colgate Palmolive, Kimberly Clark, Casa Luker, Tostao, Italcol y Laskin Dermocosmética.',
};

// ── TRAYECTORIA CORREGIDA — PDF punto 4 ──────────────────────────────
const trajectory = [
  {
    period: '2025 — Actual',
    company: 'Laskin Dermocosmética',
    role: 'Gerente de Mercadeo y Ventas',
    type: 'ejecutiva',
    description: 'Liderazgo integral del área comercial y de marketing para marca de dermocosmética con presencia nacional.',
  },
  {
    period: '2021 — 2024',
    company: 'Italcol Consumo Masivo',
    role: 'Directora de Marketing y Trade',
    type: 'ejecutiva',
    description: 'Dirección de la estrategia de marketing y trade para división de consumo masivo del grupo Italcol.',
  },
  {
    period: '2019 — 2021',
    company: 'Tostao BBI Colombia',
    role: 'Gerente de Marketing & B2B',
    type: 'ejecutiva',
    description: 'Gerencia de marketing y desarrollo de negocio B2B para la cadena de cafeterías Tostao.',
  },
  {
    period: '2015 — 2019',
    company: 'Totto',
    role: 'Gerente de Marketing',
    type: 'ejecutiva',
    description: 'Gestión de la estrategia de marca, trade marketing y experiencia de cliente para marca de moda colombiana.',
  },
  {
    period: '2012 — 2014',
    company: 'Locatel',
    role: 'Gerente de Marketing y Trade',
    type: 'ejecutiva',
    description: 'Gerencia de marketing y trade para cadena de retail de salud y bienestar.',
  },
  {
    period: '2006 — 2012',
    company: 'Casa Luker',
    role: 'Directora de Marca y Marketing',
    type: 'ejecutiva',
    description: 'Dirección de portafolio de marcas y estrategia de marketing para empresa colombiana líder en alimentos y cuidado personal.',
  },
  {
    period: '2003 — 2005',
    company: 'Kimberly Clark Co.',
    role: 'Gerente de Marca Senior',
    type: 'ejecutiva',
    description: 'Gestión de marcas del portafolio de cuidado personal para multinacional líder.',
  },
  {
    period: '2001 — 2003',
    company: 'Colgate Palmolive Co.',
    role: 'Ejecutiva de Ventas y Trade Marketing',
    type: 'ejecutiva',
    description: 'Inicio de carrera en ventas y trade marketing para multinacional de consumo masivo.',
  },
];

const skills = [
  'Estrategia Comercial',
  'Trade Marketing',
  'Branding & Portafolio',
  'P&L Management',
  'Marketing B2B',
  'Marketing B2C',
  'FMCG & Retail',
  'Marca Personal C-Level',
  'Employee Advocacy',
  'AI Marketing',
  'Marketing Full Funnel',
  'Thought Leadership',
];

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#404e66] text-white pt-28 pb-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#87c1b6]/8 blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="eyebrow text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Sobre mí</div>
              <h1
                className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ingeniera Industrial que{' '}
                <em className="text-[#87c1b6] italic">ingenia crecimiento</em>
              </h1>
              <p
                className="text-[0.98rem] text-white/70 leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Mi formación en Ingeniería Industrial me enseñó a ver más allá de los síntomas, desentrañar la complejidad y optimizar cada proceso. Hoy aplico ese pensamiento de causas raíz a la estrategia de marketing y la transformación comercial.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/servicios" className="btn-cta">Ver servicios</Link>
                <Link href="/contacto" className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#404e66]">
                  Hablemos
                </Link>
              </div>
            </div>

            {/* ── FOTO PRINCIPAL SOBRE MÍ ────────────────────────────────
                Archivo: /public/images/carolina-sobre-mi.jpg
                Medida: 520 × 600 px
                Formato: WebP o JPG
                Encuadre: retrato profesional, 3/4, fondo oscuro o estudio
                ──────────────────────────────────────────────────────── */}
            <div className="w-full max-w-[380px] mx-auto aspect-[4/4.8] bg-[#87c1b6]/15 rounded-md flex items-center justify-center text-white/40 flex-col gap-3 border border-white/10">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-center px-8" style={{ fontFamily: 'var(--font-body)' }}>
                Foto Carolina Sobre Mí<br />520 × 600 px
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-white section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="eyebrow mb-8">Mi filosofía</div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🔍',
                  title: 'Diagnóstico profundo',
                  body: 'Identifico las palancas precisas que mueven el negocio antes de proponer cualquier solución. Las causas raíz, no los síntomas.',
                },
                {
                  icon: '📊',
                  title: 'Ejecución con resultados medibles',
                  body: 'Cada estrategia tiene un número detrás. Sin impacto tangible en el P&L, no es estrategia. Es decoración.',
                },
                {
                  icon: '♻️',
                  title: 'Crecimiento sostenible',
                  body: 'Crecer en ventas sin rentabilidad no es una estrategia. Es aplazar el problema. Construyo sistemas que duran.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-[#f8f6f3] rounded-md p-7 border border-[#e6e6e6] card-hover"
                >
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                  <h3
                    className="text-[0.95rem] font-bold text-[#404e66] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[0.82rem] text-[#6b6b6b] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trajectory — PDF punto 4: corrected and expanded */}
        <section className="bg-[#f8f6f3] section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="eyebrow mb-3">Trayectoria</div>
            <h2
              className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#404e66] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              +20 años construyendo <em className="italic text-[#87c1b6]">resultados reales</em>
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88px] top-0 bottom-0 w-0.5 bg-[#87c1b6]/25 hidden md:block" />

              <div className="flex flex-col gap-6">
                {trajectory.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start group"
                  >
                    {/* Period */}
                    <div className="hidden md:flex flex-col items-end min-w-[80px] pt-1">
                      <span
                        className="text-[0.65rem] font-bold tracking-wide text-[#87c1b6] text-right leading-snug"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex w-5 h-5 rounded-full border-2 border-[#87c1b6] bg-white flex-shrink-0 mt-1 group-hover:bg-[#87c1b6] transition-colors z-10" />

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-md p-5 border border-[#e6e6e6] group-hover:border-[#87c1b6]/40 transition-colors shadow-sm">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h3
                          className="text-[0.95rem] font-bold text-[#404e66]"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {item.company}
                        </h3>
                        <span className="md:hidden text-[0.62rem] font-bold tracking-wide text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                          {item.period}
                        </span>
                      </div>
                      <p
                        className="text-[0.78rem] font-bold tracking-wide text-[#c45572] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.role}
                      </p>
                      <p
                        className="text-[0.8rem] text-[#6b6b6b] leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <div className="eyebrow justify-center text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Áreas de expertise</div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {skills.map((s) => (
                <span
                  key={s}
                  className="bg-white/8 border border-white/15 text-white/80 text-[0.72rem] font-bold tracking-wide uppercase px-4 py-2 rounded-sm hover:bg-[#87c1b6]/20 hover:border-[#87c1b6] hover:text-white transition-all cursor-default"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/servicios" className="btn-cta">
                Ver mis servicios →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
