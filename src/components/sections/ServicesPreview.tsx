'use client';
import { useState } from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    title: 'Consultoría de Estrategia Comercial',
    short: 'Para empresas estancadas o con crecimiento desordenado que necesitan claridad sobre qué palancas mover.',
    detail: 'Diagnóstico de causas raíz, identificación de palancas clave y plan de ejecución con métricas reales de P&L. Trabajo con empresas FMCG, retail y consumo masivo.',
    steps: ['Diagnóstico de situación actual', 'Mapa de causas raíz', 'Definición de palancas clave', 'Plan de ejecución accionable', 'Seguimiento de resultados'],
    tags: ['P&L', 'FMCG', 'Trade Marketing', 'Retail'],
    href: '/servicios#consultoria',
    accent: 'text-teal',
    dot: 'bg-teal',
  },
  {
    num: '02',
    title: 'Marca Personal para Ejecutivos C-Level',
    short: 'Para directivos con 15–20 años de experiencia que son invisibles digitalmente y pierden oportunidades.',
    detail: 'Narrativa estratégica, LinkedIn optimizado y sistema de contenido con ghostwriting. Programa de 3 a 6 meses con resultados medibles en visibilidad e inbound.',
    steps: ['Diagnóstico de marca actual', 'Propuesta de valor única', 'LinkedIn optimizado', 'Plan de contenido mensual', 'Ghostwriting semanal'],
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa', '3–6 meses'],
    href: '/servicios#marca-personal',
    accent: 'text-rose',
    dot: 'bg-rose',
  },
  {
    num: '03',
    title: 'EGC — Empleados como Embajadores de Marca',
    short: 'Activa a tu equipo como canal de visibilidad y generación de negocio para la empresa.',
    detail: 'Programa corporativo que convierte equipos directivos en embajadores auténticos. Formación, sistema de contenido grupal y métricas de impacto real.',
    steps: ['Diagnóstico de cultura y equipo', 'Programa EGC a medida', 'Formación del equipo', 'Plantillas y banco de contenido', 'Dashboard de métricas'],
    tags: ['Employee Advocacy', 'Formación', 'Corporativo'],
    href: '/servicios#egc',
    accent: 'text-peach',
    dot: 'bg-peach',
  },
];

export default function ServicesPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-navy py-[clamp(5rem,10vw,8rem)]">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-teal" />
              <span className="text-label font-semibold uppercase tracking-widest text-teal">Servicios</span>
            </div>
            <h2 className="font-serif font-semibold text-white leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Tres formas de{' '}
              <em className="italic text-peach">trabajar juntos</em>
            </h2>
          </div>
          <p className="text-body text-white/70 leading-relaxed lg:max-w-sm">
            Mismo principio siempre: diagnóstico honesto, palancas claras, ejecución disciplinada.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-7 flex items-start gap-6 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Num */}
                <span className="font-serif text-[2.5rem] font-semibold leading-none text-white/10 group-hover:text-white/15 transition-colors shrink-0 w-12 pt-0.5">
                  {s.num}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif font-semibold text-white text-xl leading-snug">
                      {s.title}
                    </h3>
                    {/* Plus/minus icon */}
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                      className={`shrink-0 text-white/30 mt-1 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                    >
                      <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-small text-white/75 leading-relaxed mb-3">{s.short}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[0.62rem] font-semibold uppercase tracking-wider border border-white/10 text-white/60 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              {/* Expanded */}
              {open === i && (
                <div className="pb-8 pl-[4.5rem] grid md:grid-cols-2 gap-8 border-t border-white/8 pt-6">
                  <div>
                    <p className="text-small text-white/60 leading-relaxed mb-5">{s.detail}</p>
                    <Link
                      href={s.href}
                      className="inline-block text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-5 py-2.5 hover:bg-[#e89563] transition-colors"
                    >
                      Ver detalle →
                    </Link>
                  </div>
                  <div>
                    <p className={`text-label font-semibold uppercase tracking-widest mb-4 ${s.accent}`}>
                      El proceso
                    </p>
                    <ol className="flex flex-col gap-3">
                      {s.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center text-[0.62rem] font-bold mt-0.5 ${s.accent} border-current`}>
                            {j + 1}
                          </span>
                          <span className="text-small text-white/70">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Link
            href="/servicios"
            className="text-label font-semibold uppercase tracking-widest border border-white/20 text-white/70 rounded px-6 py-3 hover:border-white/50 hover:text-white transition-colors"
          >
            Ver todos los servicios →
          </Link>
          <a
            href="https://tally.so/r/XxYeEe"
            target="_blank" rel="noopener noreferrer"
            className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-6 py-3 hover:bg-[#e89563] transition-colors"
          >
            🎯 Diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
