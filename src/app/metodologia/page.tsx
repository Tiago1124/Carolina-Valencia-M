import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metodología | Del diagnóstico a los resultados',
  description:
    'Metodología de trabajo basada en causas raíz, palancas clave y ejecución accionable. Sin estrategias genéricas. Sin PowerPoints vacíos.',
};

const steps = [
  {
    num: '01',
    title: 'Diagnóstico de causas raíz',
    tagline: 'No trato síntomas. Encuentro el problema real.',
    desc: 'La mayoría de las empresas saben que algo no funciona. Pocas saben exactamente qué. Mi primer trabajo es separar el ruido de la señal: revisar P&L, portafolio, canales, equipo y competencia para identificar dónde está el quiebre real.',
    tools: ['Análisis de P&L', 'Auditoría de portafolio', 'Mapa de canales', 'Análisis competitivo'],
    icon: '🔍',
    color: '#87c1b6',
  },
  {
    num: '02',
    title: 'Definición de palancas clave',
    tagline: 'El foco no se construye sumando. Se construye descartando.',
    desc: 'Identificadas las causas, priorizo las 2 o 3 acciones que tienen el mayor impacto potencial en el negocio. No 20 iniciativas que dispersan energía. Las palancas precisas que mueven el número que importa.',
    tools: ['Matriz de impacto vs esfuerzo', 'Priorización de iniciativas', 'Mapa de palancas', 'Definición de KPIs'],
    icon: '🎯',
    color: '#c45572',
  },
  {
    num: '03',
    title: 'Plan de ejecución accionable',
    tagline: 'La estrategia se prueba en la ejecución, no en el PowerPoint.',
    desc: 'Traduzco la estrategia en decisiones concretas: qué hacer, quién lo hace, cuándo y con qué presupuesto. Cada acción tiene un responsable y un indicador de éxito. Sin ambigüedad. Sin excusas.',
    tools: ['Hoja de ruta con fechas', 'Responsables por acción', 'Presupuesto asignado', 'Indicadores de éxito'],
    icon: '📋',
    color: '#f2aa79',
  },
  {
    num: '04',
    title: 'Seguimiento de resultados',
    tagline: 'Mido lo que importa y ajusto en el camino.',
    desc: 'El crecimiento sostenible no se improvisa, se construye con disciplina y criterio. Hago seguimiento de los indicadores que realmente importan, identifico desvíos a tiempo y ajusto el plan antes de que el problema crezca.',
    tools: ['Dashboard de indicadores', 'Revisiones periódicas', 'Ajustes de plan', 'Informe de resultados'],
    icon: '📈',
    color: '#404e66',
  },
];

const principles = [
  {
    title: 'Causas raíz, no síntomas',
    body: 'La mayoría de las intervenciones de marketing atacan el síntoma: "las ventas bajaron, hagamos más publicidad". Yo busco por qué bajaron las ventas antes de recomendar cualquier cosa.',
  },
  {
    title: 'Foco sobre amplitud',
    body: 'Hacer 20 cosas a medias no es estrategia. Es dispersión de energía. Prefiero hacer 3 cosas con excelencia que sean capaces de mover el número que importa.',
  },
  {
    title: 'P&L primero, creatividad después',
    body: 'La creatividad es una herramienta al servicio del resultado. Una idea brillante que no mueve el P&L no es una estrategia. Es arte.',
  },
  {
    title: 'Ejecución sobre planificación',
    body: 'Los planes perfectos que nunca se ejecutan valen cero. Prefiero un plan del 80% que se ejecute con disciplina al 100% que un plan perfecto que queda en el papel.',
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#404e66] pt-28 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(135,193,182,0.1)_0%,transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="eyebrow justify-center text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Metodología</div>
            <h1
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Del diagnóstico a los{' '}
              <em className="italic text-[#f2aa79]">resultados</em>
            </h1>
            <p
              className="text-[1rem] text-white/65 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              No entro a proponer soluciones sin entender el problema real. Mi proceso parte siempre de las causas raíz, no de los síntomas. Cuatro pasos. Sin atajos.
            </p>
          </div>
        </section>

        {/* Steps — PDF punto 6: más didáctico y contundente */}
        <section className="bg-[#f8f6f3] section-base">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            {steps.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-10 items-center mb-20 last:mb-0 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual block */}
                <div
                  className="rounded-md p-10 flex flex-col items-center text-center relative overflow-hidden"
                  style={{ background: s.color + '18', border: `2px solid ${s.color}30` }}
                >
                  <span className="text-[4rem] mb-4 block">{s.icon}</span>
                  <span
                    className="font-display text-[5rem] font-bold leading-none opacity-10 absolute bottom-2 right-4 select-none"
                    style={{ color: s.color, fontFamily: 'var(--font-display)' }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="font-display text-[1.5rem] font-bold text-[#404e66] mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[0.82rem] font-bold italic"
                    style={{ color: s.color, fontFamily: 'var(--font-body)' }}
                  >
                    "{s.tagline}"
                  </p>
                </div>

                {/* Content */}
                <div>
                  <div
                    className="inline-block text-[0.62rem] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-4"
                    style={{ background: s.color + '15', color: s.color, fontFamily: 'var(--font-body)' }}
                  >
                    Paso {s.num}
                  </div>
                  <h2
                    className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[#404e66] mb-4 leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="text-[0.92rem] text-[#5a6578] leading-[1.9] mb-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.desc}
                  </p>
                  <div>
                    <p
                      className="text-[0.62rem] font-bold tracking-[0.14em] uppercase mb-3"
                      style={{ color: s.color, fontFamily: 'var(--font-body)' }}
                    >
                      Herramientas y entregables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[0.68rem] font-bold tracking-wide uppercase px-3 py-1.5 rounded-sm"
                          style={{
                            background: s.color + '12',
                            border: `1px solid ${s.color}30`,
                            color: s.color,
                            fontFamily: 'var(--font-body)',
                          }}
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

        {/* Flow diagram — visual summary */}
        <section className="bg-white section-base border-y border-[#e6e6e6]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p
              className="text-center text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#5a6578] mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Flujo del proceso
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="rounded-md px-5 py-4 text-center min-w-[130px]"
                    style={{ background: s.color + '15', border: `1.5px solid ${s.color}40` }}
                  >
                    <span className="text-xl block mb-1">{s.icon}</span>
                    <p
                      className="text-[0.68rem] font-bold text-[#404e66] leading-snug"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {s.title}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="text-[#87c1b6] text-lg hidden md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="eyebrow text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Mis principios</div>
            <h2
              className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-white mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Lo que creo sobre la estrategia
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-md p-6 hover:border-[#87c1b6]/40 transition-colors"
                >
                  <h3
                    className="text-[0.95rem] font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[0.82rem] text-white/75 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f8f6f3] section-base">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[#404e66] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Quieres ver la metodología aplicada a tu caso?
            </h2>
            <p className="text-[0.95rem] text-[#5a6578] mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              30 minutos de conversación son suficientes para identificar las palancas clave de tu negocio o marca personal.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacto" className="btn-cta">📅 Agenda una sesión gratuita</Link>
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Hacer el diagnóstico gratis
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
