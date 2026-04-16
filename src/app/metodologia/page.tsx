import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PrinciplesGrid from '@/components/sections/PrinciplesGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metodología | Del diagnóstico a los resultados',
  description:
    'Metodología de trabajo basada en causas raíz, palancas clave y ejecución accionable. Sin estrategias genéricas. Sin PowerPoints vacíos.',
};

const steps = [
  {
    num: '01', icon: '🔍', color: '#87c1b6', bgLight: 'rgba(135,193,182,0.1)', borderColor: 'rgba(135,193,182,0.3)',
    title: 'Diagnóstico de causas raíz',
    tagline: 'No trato síntomas. Encuentro el problema real.',
    desc: 'La mayoría de las empresas saben que algo no funciona. Pocas saben exactamente qué. Mi primer trabajo es separar el ruido de la señal: revisar P&L, portafolio, canales, equipo y competencia para identificar dónde está el quiebre real.',
    tools: ['Análisis de P&L', 'Auditoría de portafolio', 'Mapa de canales', 'Análisis competitivo'],
  },
  {
    num: '02', icon: '🎯', color: '#c45572', bgLight: 'rgba(196,85,114,0.08)', borderColor: 'rgba(196,85,114,0.25)',
    title: 'Definición de palancas clave',
    tagline: 'El foco no se construye sumando. Se construye descartando.',
    desc: 'Identificadas las causas, priorizo las 2 o 3 acciones que tienen el mayor impacto potencial en el negocio. No 20 iniciativas que dispersan energía. Las palancas precisas que mueven el número que importa.',
    tools: ['Matriz impacto vs esfuerzo', 'Priorización de iniciativas', 'Mapa de palancas', 'Definición de KPIs'],
  },
  {
    num: '03', icon: '📋', color: '#f2aa79', bgLight: 'rgba(242,170,121,0.1)', borderColor: 'rgba(242,170,121,0.3)',
    title: 'Plan de ejecución accionable',
    tagline: 'La estrategia se prueba en la ejecución, no en el PowerPoint.',
    desc: 'Traduzco la estrategia en decisiones concretas: qué hacer, quién lo hace, cuándo y con qué presupuesto. Cada acción tiene un responsable y un indicador de éxito. Sin ambigüedad. Sin excusas.',
    tools: ['Hoja de ruta con fechas', 'Responsables por acción', 'Presupuesto asignado', 'Indicadores de éxito'],
  },
  {
    num: '04', icon: '📈', color: '#404e66', bgLight: 'rgba(64,78,102,0.07)', borderColor: 'rgba(64,78,102,0.2)',
    title: 'Seguimiento de resultados',
    tagline: 'Mido lo que importa y ajusto en el camino.',
    desc: 'El crecimiento sostenible no se improvisa, se construye con disciplina y criterio. Hago seguimiento de los indicadores que realmente importan, identifico desvíos a tiempo y ajusto el plan antes de que el problema crezca.',
    tools: ['Dashboard de indicadores', 'Revisiones periódicas', 'Ajustes de plan', 'Informe de resultados'],
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-[#404e66] pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(135,193,182,0.12) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#f2aa79]/6 blur-[100px] pointer-events-none" />
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 text-center relative z-10 fade-up">
            <div className="eyebrow justify-center mb-4" style={{ color: '#87c1b6' }}>Metodología</div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#f2aa79]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Método IGC
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-[0.62rem] text-white/70 tracking-wide"
                style={{ fontFamily: 'var(--font-body)' }}>
                Ingeniería de Crecimiento Comercial
              </span>
            </div>
            <h1 className="font-bold text-white leading-[1.08] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Del diagnóstico a los{' '}
              <em className="italic" style={{ color: '#f2aa79' }}>resultados</em>
            </h1>
            <p className="text-white/60 text-[0.8rem] tracking-wide mb-6"
              style={{ fontFamily: 'var(--font-body)' }}>
              El proceso detrás de cada servicio
            </p>
            <div className="section-rule mx-auto mb-6" />
            <p className="text-white/85 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '1.02rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
              No entro a proponer soluciones sin entender el problema real. Mi proceso parte siempre de las causas raíz, no de los síntomas. Cuatro pasos. Sin atajos.
            </p>
          </div>
        </section>

        {/* ── Steps ────────────────────────────────────────── */}
        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div
                  className="rounded-2xl p-12 flex flex-col items-center text-center relative overflow-hidden shadow-sm"
                  style={{ background: s.bgLight, border: `1.5px solid ${s.borderColor}` }}
                >
                  <span className="text-[3.5rem] mb-4 block">{s.icon}</span>
                  <span
                    className="font-bold leading-none opacity-[0.08] absolute bottom-3 right-5 select-none pointer-events-none"
                    style={{ color: s.color, fontFamily: 'var(--font-display)', fontSize: '5rem' }}
                  >
                    {s.num}
                  </span>
                  <h3 className="font-bold text-[#404e66] mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}>
                    {s.title}
                  </h3>
                  <p className="text-[0.84rem] font-semibold italic" style={{ color: s.color, fontFamily: 'var(--font-body)' }}>
                    "{s.tagline}"
                  </p>
                </div>

                <div>
                  <div
                    className="inline-block text-[0.62rem] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-5"
                    style={{ background: s.bgLight, color: s.color, border: `1px solid ${s.borderColor}`, fontFamily: 'var(--font-body)' }}
                  >
                    Paso {s.num}
                  </div>
                  <h2 className="font-bold text-[#404e66] mb-4 leading-tight"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                    {s.title}
                  </h2>
                  <p className="text-[#5a6070] leading-[1.9] mb-7" style={{ fontSize: '0.94rem', fontFamily: 'var(--font-body)' }}>
                    {s.desc}
                  </p>
                  <div>
                    <p className="text-[0.62rem] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: s.color, fontFamily: 'var(--font-body)' }}>
                      Herramientas y entregables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[0.68rem] font-bold tracking-wide uppercase px-3 py-1.5 rounded"
                          style={{ background: s.bgLight, border: `1px solid ${s.borderColor}`, color: s.color, fontFamily: 'var(--font-body)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Flow summary ─────────────────────────────────── */}
        <section className="bg-white section-tight border-y border-[#e8e3dc]">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <p className="text-center text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#5a6070] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
              Flujo del proceso
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="rounded-xl px-6 py-5 text-center min-w-[138px] shadow-sm"
                    style={{ background: s.bgLight, border: `1.5px solid ${s.borderColor}` }}
                  >
                    <span className="text-xl block mb-1.5">{s.icon}</span>
                    <p className="text-[0.68rem] font-bold text-[#404e66] leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                      {s.title}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="text-[#87c1b6] text-xl hidden md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ───────────────────────────────────── */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="eyebrow mb-4" style={{ color: '#87c1b6' }}>Mis principios</div>
            <h2 className="font-bold text-white mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Lo que creo sobre la estrategia
            </h2>
            <PrinciplesGrid />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="eyebrow justify-center mb-5">Siguiente paso</div>
            <h2 className="font-bold text-[#404e66] mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              ¿Quieres ver la metodología aplicada a tu caso?
            </h2>
            <p className="text-[#5a6070] mb-10 leading-relaxed" style={{ fontSize: '0.97rem', fontFamily: 'var(--font-body)' }}>
              30 minutos de conversación son suficientes para identificar las palancas clave de tu negocio o marca personal.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacto" className="btn-cta">📅 Agenda una sesión gratuita</Link>
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Hacer el diagnóstico
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}