'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Consultoría de Estrategia Comercial',
    short: 'Para empresas estancadas o con crecimiento desordenado que necesitan claridad sobre qué palancas mover.',
    detail: 'Diagnóstico de causas raíz, identificación de palancas clave y plan de ejecución con métricas reales de P&L. Trabajo con empresas FMCG, retail y consumo masivo.',
    process: ['Diagnóstico de situación actual', 'Mapa de causas raíz', 'Definición de palancas clave', 'Plan de ejecución accionable', 'Seguimiento de resultados'],
    tags: ['P&L', 'FMCG', 'Trade Marketing', 'Retail'],
    href: '/servicios#consultoria',
    accentColor: 'var(--sage)',
  },
  {
    num: '02',
    title: 'Marca Personal para Ejecutivos C-Level',
    short: 'Para directivos con 15–20 años de experiencia que son invisibles digitalmente y pierden oportunidades.',
    detail: 'Narrativa estratégica, LinkedIn optimizado y sistema de contenido con ghostwriting. Programa de 3 a 6 meses con resultados medibles en visibilidad e inbound.',
    process: ['Diagnóstico de marca actual', 'Propuesta de valor única', 'LinkedIn optimizado', 'Plan de contenido mensual', 'Ghostwriting semanal'],
    tags: ['LinkedIn', 'Ghostwriting', 'Narrativa', '3–6 meses'],
    href: '/servicios#marca-personal',
    accentColor: 'var(--rose)',
  },
  {
    num: '03',
    title: 'EGC — Empleados como Embajadores de Marca',
    short: 'Activa a tu equipo como canal de visibilidad y generación de negocio.',
    detail: 'Programa corporativo que convierte equipos directivos en embajadores auténticos. Formación, sistema de contenido grupal y métricas de impacto real.',
    process: ['Diagnóstico de cultura y equipo', 'Programa EGC a medida', 'Formación del equipo', 'Plantillas y banco de contenido', 'Dashboard de métricas'],
    tags: ['Employee Advocacy', 'Formación', 'Corporativo'],
    href: '/servicios#egc',
    accentColor: 'var(--sand-deep)',
  },
];

export default function ServicesPreview() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section style={{ background: 'var(--navy-deep)', paddingBlock: 'var(--space-section)', position: 'relative', overflow: 'hidden' }}>
      {/* Bg subtle */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '40%', height: '70%', borderRadius: '50%',
        background: 'rgba(107,158,149,0.04)', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'grid', gap: '2rem', marginBottom: '3.5rem' }}
          className="lg:grid-cols-2 items-end">
          <div>
            <div className="eyebrow eyebrow--light" style={{ marginBottom: '1.25rem' }}>Servicios</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,4vw,3.5rem)',
              fontWeight: 600,
              color: 'var(--white)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}>
              Tres formas de{' '}
              <em style={{ color: 'var(--sand)', fontStyle: 'italic' }}>trabajar juntos</em>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '420px',
          }}>
            Mismo principio siempre: diagnóstico honesto, palancas claras, ejecución disciplinada. Sin estrategias genéricas.
          </p>
        </div>

        {/* Service items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: expanded === i ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
              transition: 'background 0.3s',
            }}>
              {/* Header row — always visible */}
              <button
                style={{
                  width: '100%', textAlign: 'left',
                  padding: 'clamp(1.5rem,3vw,2rem) clamp(1.5rem,3vw,2.5rem)',
                  display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                }}
                onClick={() => setExpanded(expanded === i ? null : i)}>

                {/* Number */}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.1)',
                  flexShrink: 0,
                  minWidth: '3rem',
                  paddingTop: '0.2rem',
                }}>
                  {s.num}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.2rem,2vw,1.5rem)',
                      fontWeight: 600,
                      color: 'var(--white)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}>
                      {s.title}
                    </h3>
                    {/* Toggle */}
                    <span style={{
                      flexShrink: 0, color: 'rgba(255,255,255,0.3)',
                      transform: expanded === i ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s',
                      paddingTop: '0.2rem',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                    {s.short}
                  </p>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {s.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.62rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '0.25rem 0.7rem', borderRadius: '100px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.4)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              {/* Expanded */}
              {expanded === i && (
                <div style={{
                  padding: 'clamp(1rem,2vw,1.5rem) clamp(1.5rem,3vw,2.5rem) clamp(1.5rem,3vw,2rem)',
                  paddingLeft: 'clamp(1.5rem,3vw,2.5rem)',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'grid', gap: '2rem',
                }}
                  className="md:grid-cols-2">
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                      {s.detail}
                    </p>
                    <Link href={s.href} className="btn btn-cta" style={{ fontSize: '0.75rem', padding: '0.7rem 1.5rem' }}>
                      Ver detalle completo →
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: s.accentColor, marginBottom: '1rem' }}>
                      El proceso
                    </p>
                    <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                      {s.process.map((step, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                          <span style={{
                            width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                            border: `1.5px solid ${s.accentColor}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
                            color: s.accentColor,
                          }}>
                            {j + 1}
                          </span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, paddingTop: '0.1rem' }}>
                            {step}
                          </span>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.875rem', marginTop: '2.5rem' }}>
          <Link href="/servicios" className="btn btn-ghost">
            Ver todos los servicios →
          </Link>
          <a href="https://tally.so/r/XxYeEe" target="_blank" rel="noopener noreferrer" className="btn btn-cta">
            🎯 Diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
