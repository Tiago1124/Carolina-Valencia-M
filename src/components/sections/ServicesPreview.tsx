'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Consultoría de Estrategia Comercial',
    short: 'Para empresas estancadas o con crecimiento desordenado.',
    detail: 'Diagnóstico de causas raíz, identificación de palancas clave y plan de ejecución con métricas reales de P&L. Trabajo con empresas FMCG, retail y consumo masivo.',
    process: ['Diagnóstico de situación actual', 'Mapa de causas raíz', 'Definición de palancas clave', 'Plan de ejecución accionable', 'Seguimiento de resultados'],
    tags: ['P&L', 'FMCG', 'Trade Marketing', 'Retail'],
    accent: 'var(--teal-dark)',
    accentBg: 'rgba(95,168,155,0.08)',
    href: '/servicios#consultoria',
  },
  {
    num: '02',
    title: 'Marca Personal para Ejecutivos C-Level',
    short: 'Para directivos con 15–20 años invisibles digitalmente.',
    detail: 'Narrativa estratégica, LinkedIn optimizado y sistema de contenido con ghostwriting. Programa de 3 a 6 meses con resultados medibles en visibilidad e inbound.',
    process: ['Diagnóstico de marca actual', 'Propuesta de valor única', 'LinkedIn optimizado', 'Sistema de contenido mensual', 'Ghostwriting semanal'],
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa', '3–6 meses'],
    accent: 'var(--rose)',
    accentBg: 'rgba(196,85,114,0.07)',
    href: '/servicios#marca-personal',
  },
  {
    num: '03',
    title: 'EGC — Empleados Embajadores de Marca',
    short: 'Activa tu equipo como canal de visibilidad y negocio.',
    detail: 'Programa corporativo que convierte equipos directivos en embajadores auténticos. Formación, sistema de contenido grupal y métricas de impacto real.',
    process: ['Diagnóstico de cultura y equipo', 'Programa EGC a medida', 'Formación del equipo', 'Plantillas y banco de contenido', 'Dashboard de métricas'],
    tags: ['Employee Advocacy', 'Formación', 'Corporativo'],
    accent: 'var(--peach-dark)',
    accentBg: 'rgba(232,147,94,0.08)',
    href: '/servicios#egc',
  },
];

export default function ServicesPreview() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="section bg-[var(--navy)]">
      <div className="container">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="eyebrow eyebrow--light mb-4">Servicios</div>
            <h2 style={{ fontFamily: 'var(--font-display)' }}
              className="text-white leading-tight">
              Tres formas de{' '}
              <em className="italic text-[var(--peach)]">trabajar juntos</em>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed lg:max-w-md">
            Mismo punto de partida siempre: diagnóstico honesto, palancas claras, ejecución disciplinada.
          </p>
        </div>

        {/* Cards — layout limpio, una columna con buen espacio */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <div key={i}
              className="bg-white/[0.04] border border-white/10 rounded-lg overflow-hidden
                         hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">

              {/* Card header — siempre visible */}
              <button
                className="w-full text-left p-7 flex items-start gap-6 group"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {/* Number */}
                <span style={{ fontFamily: 'var(--font-display)' }}
                  className="text-[3rem] font-bold leading-none text-white/10
                             group-hover:text-white/15 transition-colors flex-shrink-0 mt-1">
                  {s.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 style={{ fontFamily: 'var(--font-display)' }}
                      className="text-white text-xl font-bold leading-snug">
                      {s.title}
                    </h3>
                    {/* Toggle icon */}
                    <span className="text-white/40 flex-shrink-0 mt-1 transition-transform duration-300"
                      style={{ transform: expanded === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                  <p className="text-white/55 text-base">{s.short}</p>

                  {/* Tags — siempre visibles */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.map((t) => (
                      <span key={t}
                        className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-sm
                                   border border-white/10 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              {/* Expanded detail */}
              {expanded === i && (
                <div className="px-7 pb-7 border-t border-white/10 pt-6 grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <p className="text-white/65 text-base leading-relaxed mb-5">{s.detail}</p>
                    <Link href={s.href}
                      className="btn btn--cta text-sm px-5 py-2.5">
                      Ver detalle completo →
                    </Link>
                  </div>

                  {/* Process */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                      style={{ color: s.accent }}>
                      El proceso
                    </p>
                    <ol className="flex flex-col gap-2.5">
                      {s.process.map((step, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center
                                           text-xs font-bold flex-shrink-0 mt-0.5"
                            style={{ background: s.accentBg, color: s.accent, border: `1px solid ${s.accent}40` }}>
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/servicios" className="btn btn--outline-light">
            Ver todos los servicios →
          </Link>
          <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer"
            className="btn btn--cta">
            🎯 Diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
