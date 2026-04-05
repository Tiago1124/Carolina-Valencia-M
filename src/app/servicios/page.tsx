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
    id: 'consultoria', num: '01', tag: 'Empresas',
    title: 'Consultoría de Estrategia Comercial y Marketing',
    subtitle: 'Para empresas estancadas o con crecimiento desordenado que necesitan claridad sobre qué palancas mover.',
    color: '#87c1b6', bgLight: 'rgba(135,193,182,0.1)', borderLight: 'rgba(135,193,182,0.3)',
    description: `¿Tu empresa crece en ventas pero no en rentabilidad? ¿Tienes muchas acciones de marketing pero ninguna que mueva el negocio de verdad? Trabajo contigo para identificar las causas raíz del problema, no los síntomas, y construir un plan de ejecución claro con métricas reales de P&L.\n\nTengo más de 20 años de experiencia en FMCG, retail y consumo masivo en empresas como Colgate Palmolive, Kimberly Clark, Italcol y Laskin. Sé dónde se rompen los embudos, dónde se pierde rentabilidad y cómo destrabar el crecimiento.`,
    forWho: ['Empresas FMCG o retail con crecimiento estancado', 'Startups que necesitan estructura comercial desde cero', 'Equipos de marketing sin claridad estratégica', 'Directivos que quieren alinear marketing y ventas'],
    process: [
      { step: '1', title: 'Diagnóstico de situación actual', desc: 'Revisión de P&L, portafolio, canales y competencia.' },
      { step: '2', title: 'Mapa de causas raíz', desc: 'Diferencio síntomas de causas. El problema real suele tener 2–3 palancas.' },
      { step: '3', title: 'Definición de palancas clave', desc: 'Priorizo las acciones de mayor impacto en rentabilidad.' },
      { step: '4', title: 'Plan de ejecución accionable', desc: 'Responsables, tiempos, KPIs e inversión. Sin PowerPoints vacíos.' },
      { step: '5', title: 'Acompañamiento y ajuste', desc: 'Seguimiento de resultados y ajustes en el camino.' },
    ],
    deliverables: ['Diagnóstico de P&L y portafolio', 'Mapa de causas raíz', 'Plan estratégico accionable', 'KPIs y tablero de seguimiento', 'Sesiones de revisión mensuales'],
    duration: 'Desde 4 semanas',
    tags: ['Diagnóstico P&L', 'Retail & FMCG', 'Trade Marketing', 'Crecimiento Rentable', 'Portafolio'],
  },
  {
    id: 'marca-personal', num: '02', tag: 'Ejecutivos C-Level',
    title: 'Marca Personal de Autoridad para Ejecutivos C-Level',
    subtitle: 'Para directivos con 15 o 20 años de experiencia que son invisibles digitalmente y pierden oportunidades por eso.',
    color: '#c45572', bgLight: 'rgba(196,85,114,0.08)', borderLight: 'rgba(196,85,114,0.25)',
    description: `Tienes décadas de experiencia. Resultados reales. Criterio construido en el campo. Pero en LinkedIn nadie lo sabe, y las oportunidades pasan de largo.\n\nEl problema no es tu trayectoria. Es que no tienes un sistema para convertirla en autoridad visible. Yo construyo ese sistema contigo: narrativa estratégica, LinkedIn optimizado como canal de negocio, y contenido consistente que posiciona tu nombre como referente en tu sector.`,
    forWho: ['CEOs, directores y gerentes con 15+ años de experiencia', 'Ejecutivos que quieren transitar al emprendimiento o consultoría', 'Directivos invisibles digitalmente que pierden oportunidades', 'Profesionales que quieren ser referentes en su sector'],
    process: [
      { step: '1', title: 'Diagnóstico de marca personal actual', desc: 'Análisis de LinkedIn, narrativa actual y brechas vs. referentes del sector.' },
      { step: '2', title: 'Propuesta de valor única', desc: 'Definimos tu diferencial: qué sabes, a quién ayudas y qué resultado les produces.' },
      { step: '3', title: 'Optimización de LinkedIn', desc: 'Titular, resumen, experiencia, portafolio. Tu perfil debe vender solo.' },
      { step: '4', title: 'Sistema de contenido mensual', desc: 'Plan de publicación semanal con temas, formatos y calendario.' },
      { step: '5', title: 'Ghostwriting y publicación', desc: 'Redacto los contenidos en tu voz. Tú los apruebas. Yo publico o te doy el texto listo.' },
    ],
    deliverables: ['Diagnóstico de marca personal', 'Propuesta de valor escrita', 'LinkedIn optimizado', 'Plan de contenido mensual', 'Redacción semanal (ghostwriting)', 'Informe de resultados mensual'],
    duration: 'Programa de 3 a 6 meses',
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa Estratégica', '3–6 meses', 'C-Level'],
  },
  {
    id: 'egc', num: '03', tag: 'Empresas con equipos',
    title: 'EGC — Empleados como Embajadores de Marca',
    subtitle: 'Para empresas que quieren activar a sus equipos como canal de visibilidad y generación de negocio.',
    color: '#f2aa79', bgLight: 'rgba(242,170,121,0.1)', borderLight: 'rgba(242,170,121,0.3)',
    description: `Tus mejores vendedores no están en pauta. Están en tu equipo. El contenido generado por empleados tiene 8 veces más alcance orgánico que el contenido de marca corporativa, y genera 5 veces más leads.\n\nEl EGC no es pedirle a tu equipo que publique selfies. Es un sistema: formación, líneas editoriales, plantillas y métricas de impacto real. Convierto a tus equipos directivos en embajadores auténticos que generan visibilidad y negocio.`,
    forWho: ['Empresas con equipos directivos sin presencia digital', 'Compañías que quieren reducir dependencia de pauta pagada', 'Organizaciones que quieren amplificar su marca empleadora', 'Empresas B2B que necesitan más generación de leads orgánicos'],
    process: [
      { step: '1', title: 'Diagnóstico de cultura y equipo', desc: 'Evalúo la disposición del equipo, brechas de habilidades y potencial de cada perfil.' },
      { step: '2', title: 'Diseño del programa EGC', desc: 'Defino la línea editorial, los temas por perfil y las reglas de marca.' },
      { step: '3', title: 'Formación del equipo', desc: 'Sesiones de formación en LinkedIn y creación de contenido. Práctico, no teórico.' },
      { step: '4', title: 'Sistema de contenido y plantillas', desc: 'Plantillas, bancos de ideas y calendario. El equipo solo necesita publicar.' },
      { step: '5', title: 'Métricas y seguimiento', desc: 'Dashboard: alcance, engagement, leads generados y evolución de marca empleadora.' },
    ],
    deliverables: ['Diagnóstico de equipo y cultura', 'Programa EGC a medida', 'Sesiones de formación', 'Plantillas y banco de contenido', 'Dashboard de métricas', 'Seguimiento trimestral'],
    duration: 'Programa de 2 a 4 meses',
    tags: ['Employee Advocacy', 'Programa Corporativo', 'Formación', 'Equipos Directivos', 'LinkedIn'],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="bg-[#f8f5f0] dot-grid pt-32 pb-20 relative overflow-hidden">
          <div className="max-w-[860px] mx-auto px-6 lg:px-10 text-center fade-up">
            <div className="eyebrow justify-center mb-5">Servicios</div>
            <h1 className="font-bold text-[#404e66] leading-[1.08] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
              Tres formas de{' '}
              <em className="italic" style={{ color: '#c45572' }}>trabajar juntos</em>
            </h1>
            <div className="section-rule mx-auto mb-5" />
            <p className="text-[#5a6070] leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '1rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
              Cada servicio parte del mismo principio: diagnóstico honesto, palancas claras, ejecución disciplinada. Sin estrategias genéricas. Sin teorías vacías.
            </p>
          </div>

          {/* Quick nav */}
          <div className="max-w-[860px] mx-auto px-6 mt-10 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="text-[0.7rem] font-bold tracking-[0.1em] uppercase bg-white border border-[#e0dbd2] text-[#404e66] px-5 py-2.5 rounded-full hover:bg-[#404e66] hover:text-white hover:border-[#404e66] transition-all shadow-sm"
                style={{ fontFamily: 'var(--font-body)' }}>
                {s.num} — {s.tag}
              </a>
            ))}
          </div>
        </section>

        {/* ── Service blocks ───────────────────────────────────── */}
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`section-base ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f5f0]'}`}
          >
            <div className="max-w-[1160px] mx-auto px-6 lg:px-10">

              {/* Header */}
              <div className="flex flex-wrap items-start gap-5 mb-10">
                <span className="font-bold leading-none opacity-[0.08] text-[#404e66] select-none"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '5rem' }}>
                  {s.num}
                </span>
                <div className="flex-1 min-w-[260px]">
                  <span
                    className="inline-block text-[0.62rem] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-3"
                    style={{ background: s.bgLight, color: s.color, border: `1px solid ${s.borderLight}`, fontFamily: 'var(--font-body)' }}
                  >
                    {s.tag}
                  </span>
                  <h2 className="font-bold text-[#404e66] leading-tight mb-2"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                    {s.title}
                  </h2>
                  <p className="text-[#5a6070]" style={{ fontSize: '0.94rem', fontFamily: 'var(--font-body)' }}>
                    {s.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">

                {/* Description + for-who + duration */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <div className="text-[#5a6070] leading-[1.9] whitespace-pre-line" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                    {s.description}
                  </div>
                  <div>
                    <p className="text-[0.64rem] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: s.color, fontFamily: 'var(--font-body)' }}>
                      ¿Para quién es?
                    </p>
                    <ul className="flex flex-col gap-2">
                      {s.forWho.map((fw) => (
                        <li key={fw} className="flex items-start gap-2.5 text-[0.84rem] text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: s.color }} />
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl border border-[#e8e3dc] p-5 shadow-sm">
                    <p className="text-[0.64rem] font-bold tracking-[0.14em] uppercase text-[#5a6070] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Duración</p>
                    <p className="text-[0.94rem] font-bold text-[#404e66] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{s.duration}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="text-[0.6rem] font-bold tracking-wide uppercase px-2.5 py-1 rounded"
                          style={{ color: s.color, border: `1px solid ${s.borderLight}`, background: s.bgLight, fontFamily: 'var(--font-body)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="lg:col-span-1">
                  <p className="text-[0.64rem] font-bold tracking-[0.16em] uppercase mb-5" style={{ color: s.color, fontFamily: 'var(--font-body)' }}>
                    El proceso
                  </p>
                  <div className="flex flex-col gap-5">
                    {s.process.map((p, j) => (
                      <div key={j} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[0.72rem] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: s.color, fontFamily: 'var(--font-body)' }}>
                          {p.step}
                        </div>
                        <div>
                          <p className="text-[0.88rem] font-bold text-[#404e66] mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>{p.title}</p>
                          <p className="text-[0.8rem] text-[#5a6070] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables + CTA */}
                <div className="lg:col-span-1">
                  <p className="text-[0.64rem] font-bold tracking-[0.16em] uppercase mb-5" style={{ color: s.color, fontFamily: 'var(--font-body)' }}>
                    Lo que recibes
                  </p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[0.86rem] text-[#404e66] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                        <span className="text-[#87c1b6] flex-shrink-0 font-bold">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <Link href="/contacto" className="btn-cta text-center">
                      Quiero este servicio →
                    </Link>
                    <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer"
                      className="btn-outline text-center">
                      Primero hacer el diagnóstico
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA final ────────────────────────────────────────── */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <div className="eyebrow justify-center mb-5" style={{ color: '#87c1b6' }}>¿Dónde empezar?</div>
            <h2 className="font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              ¿No sabes por cuál empezar?
            </h2>
            <p className="text-white/85 mb-10 leading-relaxed" style={{ fontSize: '0.97rem', fontFamily: 'var(--font-body)' }}>
              Haz el diagnóstico gratuito y en 3 minutos te digo exactamente qué palanca debes activar primero.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn-cta">
                🎯 Hacer diagnóstico gratis
              </a>
              <Link href="/contacto" className="btn-outline-light">
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
