'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Consultoría de Estrategia Comercial y Marketing',
    short: 'Para empresas estancadas o con crecimiento desordenado.',
    detail:
      'Realizo un diagnóstico de causas raíz, identifico las palancas clave y construyo un plan de ejecución con métricas reales de P&L. Trabajo con empresas FMCG, retail y consumo masivo que necesitan claridad sobre qué mover primero para crecer con rentabilidad.',
    process: ['Diagnóstico de situación actual', 'Identificación de causas raíz', 'Definición de palancas clave', 'Plan de ejecución accionable', 'Seguimiento y ajuste de resultados'],
    tags: ['Diagnóstico P&L', 'Retail & FMCG', 'Trade Marketing', 'Crecimiento Rentable'],
    color: 'bg-[#87c1b6]',
    href: '/servicios#consultoria',
  },
  {
    num: '02',
    title: 'Marca Personal de Autoridad para Ejecutivos C-Level',
    short: 'Para directivos con 15–20 años invisibles digitalmente.',
    detail:
      'Construyo narrativas estratégicas que convierten la experiencia acumulada en autoridad visible. LinkedIn optimizado, sistema de contenido mensual y ghostwriting. Programa de 3 a 6 meses con resultados medibles en visibilidad e inbound de oportunidades.',
    process: ['Diagnóstico de marca personal actual', 'Narrativa y propuesta de valor única', 'Optimización de LinkedIn', 'Sistema de contenido semanal', 'Ghostwriting y publicación'],
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa Estratégica', 'Programa 3–6 meses'],
    color: 'bg-[#c45572]',
    href: '/servicios#marca-personal',
  },
  {
    num: '03',
    title: 'EGC — Empleados como Embajadores de Marca',
    short: 'Activa a tu equipo como canal de visibilidad y negocio.',
    detail:
      'Diseño e implemento programas corporativos de Employee Generated Content que convierten a los equipos directivos en embajadores auténticos. Formación, sistema de contenido grupal y métricas de impacto real en visibilidad y generación de negocio.',
    process: ['Diagnóstico de cultura y equipo', 'Programa de formación a medida', 'Sistema de contenido para equipos', 'Plantillas y guías de publicación', 'Métricas de impacto y alcance'],
    tags: ['Employee Advocacy', 'Programa Corporativo', 'Formación', 'Equipos Directivos'],
    color: 'bg-[#f2aa79]',
    href: '/servicios#egc',
  },
];

export default function ServicesPreview() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="servicios-preview" className="bg-[#404e66] section-base relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#87c1b6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-12">
          <div>
            <div className="eyebrow text-[#87c1b6] mb-4" style={{ color: '#87c1b6' }}>Servicios</div>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tres formas de{' '}
              <em className="text-[#f2aa79] italic">trabajar juntos</em>
            </h2>
          </div>
          <p
            className="text-[0.92rem] text-white/75 leading-relaxed lg:max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Cada servicio parte del mismo principio: diagnóstico honesto, palancas claras, ejecución disciplinada.{' '}
            <strong className="text-white/80">Sin estrategias genéricas. Sin teorías vacías.</strong>
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-md p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#87c1b6]/40 group"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-[2.8rem] font-bold leading-none text-white/10 group-hover:text-white/15 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.num}
                </span>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${s.color}`} />
              </div>

              <h3
                className="text-[0.98rem] font-bold text-white leading-snug"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {s.title}
              </h3>

              <p
                className="text-[0.82rem] text-white/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {s.short}
              </p>

              {/* Expandable detail — PDF punto 5 */}
              {expanded === i && (
                <div className="pt-3 border-t border-white/10 flex flex-col gap-4 animate-fade-up">
                  <p className="text-[0.82rem] text-white/75 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {s.detail}
                  </p>
                  <div>
                    <p className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[#87c1b6] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      El proceso
                    </p>
                    <ol className="flex flex-col gap-1.5">
                      {s.process.map((step, j) => (
                        <li key={j} className="flex items-start gap-2 text-[0.78rem] text-white/65" style={{ fontFamily: 'var(--font-body)' }}>
                          <span className="text-[#f2aa79] font-bold flex-shrink-0">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <Link href={s.href} className="btn-cta text-[0.7rem] px-4 py-2.5 self-start mt-1">
                    Ver detalle completo →
                  </Link>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.62rem] font-bold tracking-[0.07em] uppercase bg-white/8 border border-white/12 text-[#87c1b6] px-2.5 py-1 rounded-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Expand hint */}
              <button
                className="self-start text-[0.68rem] font-bold tracking-[0.1em] uppercase text-white/40 hover:text-[#f2aa79] transition-colors mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={(e) => { e.stopPropagation(); setExpanded(expanded === i ? null : i); }}
              >
                {expanded === i ? '↑ Cerrar' : '+ Ver proceso'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link href="/servicios" className="btn-primary border-white text-white hover:bg-[#87c1b6] hover:border-[#87c1b6]">
            Ver todos los servicios en detalle →
          </Link>
        </div>
      </div>
    </section>
  );
}
