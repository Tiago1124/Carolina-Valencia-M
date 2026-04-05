import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre mí | Trayectoria y Experiencia',
  description:
    'Ingeniera Industrial con más de 20 años en marketing y estrategia comercial. Trayectoria en Colgate Palmolive, Kimberly Clark, Casa Luker, Tostao, Italcol y Laskin Dermocosmética.',
};

const trajectory = [
  { period: '2025 — Actual', company: 'Laskin Dermocosmética',   role: 'Gerente de Mercadeo y Ventas',        description: 'Liderazgo integral del área comercial y de marketing para marca de dermocosmética con presencia nacional.' },
  { period: '2021 — 2024',   company: 'Italcol Consumo Masivo',  role: 'Directora de Marketing y Trade',      description: 'Dirección de la estrategia de marketing y trade para división de consumo masivo del grupo Italcol.' },
  { period: '2019 — 2021',   company: 'Tostao BBI Colombia',     role: 'Gerente de Marketing & B2B',         description: 'Gerencia de marketing y desarrollo de negocio B2B para la cadena de cafeterías Tostao.' },
  { period: '2015 — 2019',   company: 'Totto',                   role: 'Gerente de Marketing',               description: 'Gestión de la estrategia de marca, trade marketing y experiencia de cliente para marca de moda colombiana.' },
  { period: '2012 — 2014',   company: 'Locatel',                 role: 'Gerente de Marketing y Trade',       description: 'Gerencia de marketing y trade para cadena de retail de salud y bienestar.' },
  { period: '2006 — 2012',   company: 'Casa Luker',              role: 'Directora de Marca y Marketing',     description: 'Dirección de portafolio de marcas y estrategia de marketing para empresa colombiana líder en alimentos y cuidado personal.' },
  { period: '2003 — 2005',   company: 'Kimberly Clark Co.',      role: 'Gerente de Marca Senior',            description: 'Gestión de marcas del portafolio de cuidado personal para multinacional líder.' },
  { period: '2001 — 2003',   company: 'Colgate Palmolive Co.',   role: 'Ejecutiva de Ventas y Trade Marketing', description: 'Inicio de carrera en ventas y trade marketing para multinacional de consumo masivo.' },
];

const skills = [
  'Estrategia Comercial', 'Trade Marketing', 'Branding & Portafolio', 'P&L Management',
  'Marketing B2B', 'Marketing B2C', 'FMCG & Retail', 'Marca Personal C-Level',
  'Employee Advocacy', 'AI Marketing', 'Marketing Full Funnel', 'Thought Leadership',
];

const pillars = [
  { icon: '🔍', title: 'Diagnóstico profundo',            body: 'Identifico las palancas precisas que mueven el negocio antes de proponer cualquier solución. Las causas raíz, no los síntomas.' },
  { icon: '📊', title: 'Ejecución con resultados medibles', body: 'Cada estrategia tiene un número detrás. Sin impacto tangible en el P&L, no es estrategia. Es decoración.' },
  { icon: '♻️', title: 'Crecimiento sostenible',           body: 'Crecer en ventas sin rentabilidad no es una estrategia. Es aplazar el problema. Construyo sistemas que duran.' },
];

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="bg-[#404e66] text-white pt-32 pb-24 relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#87c1b6]/8 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#c45572]/6 blur-[90px] pointer-events-none" />

          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div className="fade-up">
              <div className="eyebrow mb-6" style={{ color: '#87c1b6' }}>Sobre mí</div>
              <h1
                className="font-bold text-white leading-[1.08] mb-6"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
              >
                Ingeniera Industrial que{' '}
                <em className="italic" style={{ color: '#87c1b6' }}>ingenia crecimiento</em>
              </h1>
              <div className="section-rule mb-6" />
              <p className="text-white/85 leading-relaxed mb-8 max-w-lg" style={{ fontSize: '1rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
                Mi formación en Ingeniería Industrial me enseñó a ver más allá de los síntomas, desentrañar la complejidad y optimizar cada proceso. Hoy aplico ese pensamiento de causas raíz a la estrategia de marketing y la transformación comercial.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/servicios" className="btn-cta">Ver servicios</Link>
                <Link href="/contacto" className="btn-outline-light">Hablemos</Link>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="fade-up-delay-2 w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="aspect-[4/4.8] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/foto-personal.jpg"
                alt="Carolina Valencia"
                className="w-full h-full object-cover"
              />
            </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#ede9e2]">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '+20', label: 'años de experiencia' },
              { num: '8',   label: 'empresas líderes' },
              { num: '3',   label: 'servicios especializados' },
              { num: '100%', label: 'enfoque en resultados' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-bold text-[#404e66] leading-none mb-1.5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  {s.num}
                </div>
                <div className="text-[0.76rem] text-[#5a6070] tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Philosophy pillars ───────────────────────────────── */}
        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10">
            <div className="eyebrow mb-3">Mi filosofía</div>
            <h2 className="font-bold text-[#404e66] mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Tres principios que guían mi trabajo
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="bg-white rounded-xl p-8 border border-[#e8e3dc] card-hover shadow-sm">
                  <span className="text-3xl mb-5 block">{p.icon}</span>
                  <h3 className="text-[1rem] font-bold text-[#404e66] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.title}
                  </h3>
                  <p className="text-[0.88rem] text-[#5a6070] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trajectory timeline ──────────────────────────────── */}
        <section className="bg-white section-base">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10">
            <div className="eyebrow mb-3">Trayectoria</div>
            <h2 className="font-bold text-[#404e66] mb-14" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              +20 años construyendo{' '}
              <em className="italic" style={{ color: '#87c1b6' }}>resultados reales</em>
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: '92px',
                  top: 0,
                  bottom: 0,
                  width: '1.5px',
                  background: 'linear-gradient(to bottom, transparent, #87c1b6 8%, #87c1b6 92%, transparent)',
                  opacity: 0.3,
                }}
              />

              <div className="flex flex-col gap-5">
                {trajectory.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    {/* Period */}
                    <div className="hidden md:flex flex-col items-end min-w-[84px] pt-4">
                      <span className="text-[0.62rem] font-bold tracking-wide text-[#87c1b6] text-right leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.period}
                      </span>
                    </div>
                    {/* Dot */}
                    <div className="hidden md:flex w-[18px] h-[18px] rounded-full border-2 border-[#87c1b6] bg-white flex-shrink-0 mt-4 group-hover:bg-[#87c1b6] transition-colors z-10" />
                    {/* Card */}
                    <div className="flex-1 bg-[#f8f5f0] rounded-xl p-5 border border-[#e8e3dc] group-hover:border-[#87c1b6]/50 group-hover:shadow-md transition-all">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-[0.95rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>
                          {item.company}
                        </h3>
                        <span className="md:hidden text-[0.6rem] font-bold tracking-wide text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[0.76rem] font-bold tracking-wide text-[#c45572] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.role}
                      </p>
                      <p className="text-[0.82rem] text-[#5a6070] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills / expertise ───────────────────────────────── */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <div className="eyebrow justify-center mb-4" style={{ color: '#87c1b6' }}>Áreas de expertise</div>
              <h2 className="font-bold text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                Lo que sé hacer bien
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {skills.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
            <div className="mt-12 text-center">
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
