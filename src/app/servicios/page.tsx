import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios | Consultoría, Marca Personal y EGC',
  description:
    'Consultoría de estrategia comercial y marketing para FMCG y retail. Marca personal para ejecutivos C-Level. Programa EGC de empleados embajadores. Colombia.',
};

const services = [
  {
    id: 'consultoria',
    num: '01',
    tag: 'Empresas',
    title: 'Consultoría de Estrategia Comercial y Marketing',
    subtitle: 'Para empresas estancadas o con crecimiento desordenado que necesitan claridad sobre qué palancas mover.',
    color: '#87c1b6',
    bgLight: '#edf7f5',
    description: `¿Tu empresa crece en ventas pero no en rentabilidad? ¿Tienes muchas acciones de marketing pero ninguna que mueva el negocio de verdad? Trabajo contigo para identificar las causas raíz del problema, no los síntomas, y construir un plan de ejecución claro con métricas reales de P&L.

Tengo más de 20 años de experiencia en FMCG, retail y consumo masivo en empresas como Colgate Palmolive, Kimberly Clark, Italcol y Laskin. Sé dónde se rompen los embudos, dónde se pierde rentabilidad y cómo destrabar el crecimiento.`,
    forWho: [
      'Empresas FMCG o retail con crecimiento estancado',
      'Startups que necesitan estructura comercial desde cero',
      'Equipos de marketing sin claridad estratégica',
      'Directivos que quieren alinear marketing y ventas',
    ],
    process: [
      { step: '1', title: 'Diagnóstico de situación actual', desc: 'Revisión de P&L, portafolio, canales y competencia. Identifico dónde está el quiebre real.' },
      { step: '2', title: 'Mapa de causas raíz', desc: 'Diferencio síntomas de causas. La mayoría de los problemas comerciales tienen 2 o 3 palancas de fondo.' },
      { step: '3', title: 'Definición de palancas clave', desc: 'Priorizo las acciones de mayor impacto en rentabilidad, no en volumen de actividades.' },
      { step: '4', title: 'Plan de ejecución accionable', desc: 'Entregable con responsables, tiempos, KPIs e inversión. Sin PowerPoints vacíos.' },
      { step: '5', title: 'Acompañamiento y ajuste', desc: 'Seguimiento de resultados, revisión de indicadores y ajustes en el camino.' },
    ],
    deliverables: ['Diagnóstico de P&L y portafolio', 'Mapa de causas raíz', 'Plan estratégico accionable', 'KPIs y tablero de seguimiento', 'Sesiones de revisión mensuales'],
    duration: 'Desde 4 semanas',
    tags: ['Diagnóstico P&L', 'Retail & FMCG', 'Trade Marketing', 'Crecimiento Rentable', 'Portafolio'],
  },
  {
    id: 'marca-personal',
    num: '02',
    tag: 'Ejecutivos C-Level',
    title: 'Marca Personal de Autoridad para Ejecutivos C-Level',
    subtitle: 'Para directivos con 15 o 20 años de experiencia que son invisibles digitalmente y pierden oportunidades por eso.',
    color: '#c45572',
    bgLight: '#fdf0f3',
    description: `Tienes décadas de experiencia. Resultados reales. Criterio construido en el campo. Pero en LinkedIn nadie lo sabe, y las oportunidades pasan de largo.

El problema no es tu trayectoria. Es que no tienes un sistema para convertirla en autoridad visible. Yo construyo ese sistema contigo: narrativa estratégica que te diferencia, LinkedIn optimizado como canal de negocio, y contenido consistente que posiciona tu nombre como referente en tu sector.

El resultado: directivos que reciben oportunidades inbound, que son convocados a hablar en eventos, que cierran negocios gracias a su reputación digital.`,
    forWho: [
      'CEOs, directores y gerentes con 15+ años de experiencia',
      'Ejecutivos que quieren transitar al emprendimiento o consultoría',
      'Directivos invisibles digitalmente que pierden oportunidades',
      'Profesionales que quieren ser referentes en su sector',
    ],
    process: [
      { step: '1', title: 'Diagnóstico de marca personal actual', desc: 'Análisis de LinkedIn, narrativa actual, posicionamiento y brechas vs. referentes del sector.' },
      { step: '2', title: 'Propuesta de valor única', desc: 'Definimos tu diferencial: qué sabes, a quién ayudas y qué resultado les produces.' },
      { step: '3', title: 'Optimización de LinkedIn', desc: 'Titular, resumen, experiencia, portafolio. Tu perfil debe vender antes de que hablen contigo.' },
      { step: '4', title: 'Sistema de contenido mensual', desc: 'Plan de publicación semanal con temas, formatos y calendario. Sin improvisar.' },
      { step: '5', title: 'Ghostwriting y publicación', desc: 'Redacto los contenidos en tu voz. Tú los apruebas. Yo publico o te doy el texto listo.' },
    ],
    deliverables: ['Diagnóstico de marca personal', 'Propuesta de valor escrita', 'LinkedIn optimizado', 'Plan de contenido mensual', 'Redacción semanal (ghostwriting)', 'Informe de resultados mensual'],
    duration: 'Programa de 3 a 6 meses',
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa Estratégica', 'Programa 3–6 meses', 'C-Level'],
  },
  {
    id: 'egc',
    num: '03',
    tag: 'Empresas con equipos',
    title: 'EGC — Empleados como Embajadores de Marca',
    subtitle: 'Para empresas que quieren activar a sus equipos como canal de visibilidad y generación de negocio.',
    color: '#f2aa79',
    bgLight: '#fef8f2',
    description: `Tus mejores vendedores no están en pauta. Están en tu equipo. El contenido generado por empleados tiene 8 veces más alcance orgánico que el contenido de marca corporativa, y genera 5 veces más leads.

El EGC (Employee Generated Content) no es pedirle a tu equipo que publique selfies. Es un sistema: formación, líneas editoriales, plantillas, y métricas de impacto real. Convierto a tus equipos directivos en embajadores auténticos que generan visibilidad y negocio para la empresa.`,
    forWho: [
      'Empresas con equipos directivos que no tienen presencia digital',
      'Compañías que quieren reducir dependencia de pauta pagada',
      'Organizaciones que quieren amplificar su marca empleadora',
      'Empresas B2B que necesitan más generación de leads orgánicos',
    ],
    process: [
      { step: '1', title: 'Diagnóstico de cultura y equipo', desc: 'Evaluó la disposición del equipo, las brechas de habilidades digitales y el potencial de cada perfil.' },
      { step: '2', title: 'Diseño del programa EGC', desc: 'Defino la línea editorial, los temas por perfil y las reglas de marca para el contenido del equipo.' },
      { step: '3', title: 'Formación del equipo', desc: 'Sesiones de formación en LinkedIn, creación de contenido y comunicación de autoridad. Práctico, no teórico.' },
      { step: '4', title: 'Sistema de contenido y plantillas', desc: 'Entrego plantillas, bancos de ideas y calendario. El equipo solo necesita publicar.' },
      { step: '5', title: 'Métricas y seguimiento', desc: 'Dashboard de impacto: alcance, engagement, leads generados y evolución de marca empleadora.' },
    ],
    deliverables: ['Diagnóstico de equipo y cultura', 'Programa EGC a medida', 'Sesiones de formación (presencial o virtual)', 'Plantillas y banco de contenido', 'Dashboard de métricas de impacto', 'Seguimiento trimestral'],
    duration: 'Programa de 2 a 4 meses',
    tags: ['Employee Advocacy', 'Programa Corporativo', 'Formación', 'Equipos Directivos', 'LinkedIn'],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#f8f6f3] pt-28 pb-16 relative overflow-hidden dot-grid">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="eyebrow justify-center mb-5">Servicios</div>
            <h1
              className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-[#404e66] leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tres formas de{' '}
              <em className="italic text-[#c45572]">trabajar juntos</em>
            </h1>
            <p
              className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Cada servicio parte del mismo principio: diagnóstico honesto, palancas claras, ejecución disciplinada. Sin estrategias genéricas. Sin teorías vacías.
            </p>
          </div>

          {/* Quick nav chips */}
          <div className="max-w-3xl mx-auto px-6 mt-8 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[0.7rem] font-bold tracking-[0.1em] uppercase bg-white border border-[#e6e6e6] text-[#404e66] px-4 py-2 rounded-sm hover:bg-[#404e66] hover:text-white hover:border-[#404e66] transition-all"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {s.num} — {s.tag}
              </a>
            ))}
          </div>
        </section>

        {/* Service blocks */}
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`section-base ${i % 2 === 1 ? 'bg-white' : 'bg-[#f8f6f3]'}`}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              {/* Header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <span
                  className="font-display text-[4rem] font-bold leading-none opacity-10 text-[#404e66]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.num}
                </span>
                <div className="flex-1 min-w-[260px]">
                  <span
                    className="inline-block text-[0.62rem] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full mb-3"
                    style={{ background: s.bgLight, color: s.color, fontFamily: 'var(--font-body)' }}
                  >
                    {s.tag}
                  </span>
                  <h2
                    className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#404e66] leading-tight mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="text-[0.92rem] text-[#6b6b6b]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Description + for who */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <div
                    className="text-[0.88rem] text-[#6b6b6b] leading-[1.9] whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.description}
                  </div>

                  {/* For who */}
                  <div>
                    <p
                      className="text-[0.65rem] font-bold tracking-[0.16em] uppercase mb-3"
                      style={{ color: s.color, fontFamily: 'var(--font-body)' }}
                    >
                      ¿Para quién es?
                    </p>
                    <ul className="flex flex-col gap-2">
                      {s.forWho.map((fw) => (
                        <li key={fw} className="flex items-start gap-2 text-[0.82rem] text-[#6b6b6b]" style={{ fontFamily: 'var(--font-body)' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: s.color }} />
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration + tags */}
                  <div className="bg-white rounded-md border border-[#e6e6e6] p-4">
                    <p className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Duración</p>
                    <p className="text-[0.9rem] font-bold text-[#404e66] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{s.duration}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="text-[0.6rem] font-bold tracking-wide uppercase px-2 py-0.5 rounded-sm border" style={{ color: s.color, borderColor: s.color + '40', background: s.bgLight, fontFamily: 'var(--font-body)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="lg:col-span-1">
                  <p
                    className="text-[0.65rem] font-bold tracking-[0.16em] uppercase mb-5"
                    style={{ color: s.color, fontFamily: 'var(--font-body)' }}
                  >
                    El proceso
                  </p>
                  <div className="flex flex-col gap-4">
                    {s.process.map((p, j) => (
                      <div key={j} className="flex gap-4 items-start">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[0.7rem] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: s.color, fontFamily: 'var(--font-body)' }}
                        >
                          {p.step}
                        </div>
                        <div>
                          <p className="text-[0.85rem] font-bold text-[#404e66] mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>{p.title}</p>
                          <p className="text-[0.78rem] text-[#6b6b6b] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables + CTA */}
                <div className="lg:col-span-1">
                  <p
                    className="text-[0.65rem] font-bold tracking-[0.16em] uppercase mb-5"
                    style={{ color: s.color, fontFamily: 'var(--font-body)' }}
                  >
                    Lo que recibes
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[0.82rem] text-[#404e66] font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                        <span className="text-[#87c1b6] flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Link href="/contacto" className="btn-cta text-[0.78rem] text-center">
                      Quiero este servicio →
                    </Link>
                    <a
                      href="https://tally.so/r/XxYeEe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-[0.72rem] text-center"
                    >
                      Primero hacer el diagnóstico
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Final */}
        <section className="bg-[#404e66] text-white section-base">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ¿No sabes por cuál empezar?
            </h2>
            <p className="text-[0.95rem] text-white/65 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Haz el diagnóstico gratuito y en 3 minutos te digo exactamente qué palanca debes activar primero.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn-cta">
                🎯 Hacer diagnóstico gratis
              </a>
              <Link href="/contacto" className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#404e66]">
                Hablar directamente
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
