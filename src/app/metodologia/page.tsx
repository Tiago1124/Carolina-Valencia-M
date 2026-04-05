'use client';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MetodologÃ­a | Del diagnÃ³stico a los resultados',
  description:
    'MetodologÃ­a de trabajo basada en causas raÃ­z, palancas clave y ejecuciÃ³n accionable. Sin estrategias genÃ©ricas. Sin PowerPoints vacÃ­os.',
};

const steps = [
  {
    num: '01', icon: 'ðŸ”', color: '#87c1b6', bgLight: 'rgba(135,193,182,0.1)', borderColor: 'rgba(135,193,182,0.3)',
    title: 'DiagnÃ³stico de causas raÃ­z',
    tagline: 'No trato sÃ­ntomas. Encuentro el problema real.',
    desc: 'La mayorÃ­a de las empresas saben que algo no funciona. Pocas saben exactamente quÃ©. Mi primer trabajo es separar el ruido de la seÃ±al: revisar P&L, portafolio, canales, equipo y competencia para identificar dÃ³nde estÃ¡ el quiebre real.',
    tools: ['AnÃ¡lisis de P&L', 'AuditorÃ­a de portafolio', 'Mapa de canales', 'AnÃ¡lisis competitivo'],
  },
  {
    num: '02', icon: 'ðŸŽ¯', color: '#c45572', bgLight: 'rgba(196,85,114,0.08)', borderColor: 'rgba(196,85,114,0.25)',
    title: 'DefiniciÃ³n de palancas clave',
    tagline: 'El foco no se construye sumando. Se construye descartando.',
    desc: 'Identificadas las causas, priorizo las 2 o 3 acciones que tienen el mayor impacto potencial en el negocio. No 20 iniciativas que dispersan energÃ­a. Las palancas precisas que mueven el nÃºmero que importa.',
    tools: ['Matriz impacto vs esfuerzo', 'PriorizaciÃ³n de iniciativas', 'Mapa de palancas', 'DefiniciÃ³n de KPIs'],
  },
  {
    num: '03', icon: 'ðŸ“‹', color: '#f2aa79', bgLight: 'rgba(242,170,121,0.1)', borderColor: 'rgba(242,170,121,0.3)',
    title: 'Plan de ejecuciÃ³n accionable',
    tagline: 'La estrategia se prueba en la ejecuciÃ³n, no en el PowerPoint.',
    desc: 'Traduzco la estrategia en decisiones concretas: quÃ© hacer, quiÃ©n lo hace, cuÃ¡ndo y con quÃ© presupuesto. Cada acciÃ³n tiene un responsable y un indicador de Ã©xito. Sin ambigÃ¼edad. Sin excusas.',
    tools: ['Hoja de ruta con fechas', 'Responsables por acciÃ³n', 'Presupuesto asignado', 'Indicadores de Ã©xito'],
  },
  {
    num: '04', icon: 'ðŸ“ˆ', color: '#404e66', bgLight: 'rgba(64,78,102,0.07)', borderColor: 'rgba(64,78,102,0.2)',
    title: 'Seguimiento de resultados',
    tagline: 'Mido lo que importa y ajusto en el camino.',
    desc: 'El crecimiento sostenible no se improvisa, se construye con disciplina y criterio. Hago seguimiento de los indicadores que realmente importan, identifico desvÃ­os a tiempo y ajusto el plan antes de que el problema crezca.',
    tools: ['Dashboard de indicadores', 'Revisiones periÃ³dicas', 'Ajustes de plan', 'Informe de resultados'],
  },
];

const principles = [
  { title: 'Causas raÃ­z, no sÃ­ntomas',     body: 'La mayorÃ­a de las intervenciones de marketing atacan el sÃ­ntoma. Yo busco por quÃ© bajaron las ventas antes de recomendar cualquier cosa.' },
  { title: 'Foco sobre amplitud',           body: 'Hacer 20 cosas a medias no es estrategia. Prefiero hacer 3 cosas con excelencia que sean capaces de mover el nÃºmero que importa.' },
  { title: 'P&L primero, creatividad despuÃ©s', body: 'La creatividad es una herramienta al servicio del resultado. Una idea brillante que no mueve el P&L no es una estrategia. Es arte.' },
  { title: 'EjecuciÃ³n sobre planificaciÃ³n', body: 'Los planes perfectos que nunca se ejecutan valen cero. Prefiero un plan del 80% que se ejecute con disciplina al plan perfecto que queda en el papel.' },
];

export default function MetodologiaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-[#404e66] pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(135,193,182,0.12) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#f2aa79]/6 blur-[100px] pointer-events-none" />
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 text-center relative z-10 fade-up">
            <div className="eyebrow justify-center mb-6" style={{ color: '#87c1b6' }}>MetodologÃ­a</div>
            <h1 className="font-bold text-white leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Del diagnÃ³stico a los{' '}
              <em className="italic" style={{ color: '#f2aa79' }}>resultados</em>
            </h1>
            <div className="section-rule mx-auto mb-6" />
            <p className="text-white/85 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '1.02rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
              No entro a proponer soluciones sin entender el problema real. Mi proceso parte siempre de las causas raÃ­z, no de los sÃ­ntomas. Cuatro pasos. Sin atajos.
            </p>
          </div>
        </section>

        {/* â”€â”€ Steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual block */}
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

                {/* Content */}
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

        {/* â”€â”€ Flow summary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                    <span className="text-[#87c1b6] text-xl hidden md:block">â†’</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Principles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="eyebrow mb-4" style={{ color: '#87c1b6' }}>Mis principios</div>
            <h2 className="font-bold text-white mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Lo que creo sobre la estrategia
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl p-7 border transition-colors card-hover"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(135,193,182,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <h3 className="text-[1rem] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.title}
                  </h3>
                  <p className="text-[0.88rem] text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="eyebrow justify-center mb-5">Siguiente paso</div>
            <h2 className="font-bold text-[#404e66] mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Â¿Quieres ver la metodologÃ­a aplicada a tu caso?
            </h2>
            <p className="text-[#5a6070] mb-10 leading-relaxed" style={{ fontSize: '0.97rem', fontFamily: 'var(--font-body)' }}>
              30 minutos de conversaciÃ³n son suficientes para identificar las palancas clave de tu negocio o marca personal.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacto" className="btn-cta">ðŸ“… Agenda una sesiÃ³n gratuita</Link>
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Hacer el diagnÃ³stico
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

