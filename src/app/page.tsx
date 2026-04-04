import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Strip from '@/components/sections/Strip';
import BrandsSection from '@/components/sections/BrandsSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import DiagnosticoCTA from '@/components/sections/DiagnosticoCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carolina Valencia M. | Estrategia Comercial & Marca Personal en Colombia',
  description: 'Consultoría de estrategia comercial y marketing para empresas FMCG y retail. Construcción de marca personal para ejecutivos C-Level. +20 años de experiencia.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Strip />
        <BrandsSection />
        <ServicesPreview />

        {/* Sobre mí mini */}
        <section style={{ background: 'var(--white)', paddingBlock: 'var(--space-section)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gap: '4rem' }} className="lg:grid-cols-2 items-center">

              {/* Foto placeholder */}
              <div style={{ position: 'relative', order: 0 }}>
                {/*
                  ════════════════════════════════════════
                  FOTO SOBRE MÍ — /public/images/carolina-sobre-mi.jpg
                  Medida: 480 × 540 px · Formato: WebP o JPG
                  Reemplaza el div de placeholder por:
                  <div style={{ position:'relative', width:'100%', aspectRatio:'4/4.5',
                    borderRadius:'4px', overflow:'hidden', boxShadow:'0 20px 50px rgba(28,35,51,0.12)' }}>
                    <Image src="/images/carolina-sobre-mi.jpg"
                      alt="Carolina Valencia M." fill style={{ objectFit:'cover' }} />
                  </div>
                  ════════════════════════════════════════
                */}
                <div style={{
                  width: '100%', aspectRatio: '4/4.5', borderRadius: '4px',
                  background: 'linear-gradient(160deg, var(--navy-deep) 0%, var(--sage) 100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.3)',
                  boxShadow: '0 20px 50px rgba(28,35,51,0.12)',
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    480 × 540 px
                  </span>
                </div>
                {/* Accent bar */}
                <div style={{
                  position: 'absolute', bottom: '2rem', right: '-1rem',
                  width: '4px', height: '45%', background: 'var(--sand)', borderRadius: '2px',
                }} />
              </div>

              {/* Content */}
              <div>
                <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Sobre mí</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem,3.5vw,2.8rem)',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}>
                  Ingeniera Industrial que{' '}
                  <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>ingenia crecimiento</em>
                </h2>
                <div className="divider" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink-60)', marginBottom: '1rem' }}>
                  Más de 20 años en empresas líderes: Colgate Palmolive, Kimberly Clark, Italcol y Laskin.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--ink-60)', marginBottom: '2rem' }}>
                  Mi formación en Ingeniería Industrial me enseñó a identificar causas raíz antes de proponer soluciones.
                  Eso es exactamente lo que traigo a cada cliente: claridad, foco y resultados medibles.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { icon: '🔍', title: 'Diagnóstico profundo', body: 'Identifico las palancas precisas antes de proponer cualquier solución.' },
                    { icon: '📊', title: 'Resultados medibles', body: 'Cada estrategia tiene un número en el P&L. Sin impacto tangible, no es estrategia.' },
                    { icon: '♻️', title: 'Crecimiento sostenible', body: 'Crecer en ventas sin rentabilidad no es estrategia. Es aplazar el problema.' },
                  ].map(item => (
                    <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.1rem', flexShrink: 0, paddingTop: '0.1rem' }}>{item.icon}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.2rem' }}>{item.title}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-60)', lineHeight: 1.6 }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/sobre-mi" className="btn btn-primary">
                  Conoce mi trayectoria →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DiagnosticoCTA />

        {/* CTA final */}
        <section style={{ background: 'var(--ink)', paddingBlock: 'var(--space-section)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(107,158,149,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="wrap--narrow wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div className="eyebrow eyebrow--light" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>Hablemos</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,4vw,3.5rem)',
              fontWeight: 600,
              color: 'var(--white)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}>
              ¿Lista para convertir tu{' '}
              <em style={{ color: 'var(--sand)', fontStyle: 'italic' }}>experiencia en resultados?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem' }}>
              Una conversación de 30 minutos. Sin compromiso. Solo claridad sobre qué palanca activar primero.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.875rem' }}>
              <Link href="/contacto" className="btn btn-cta">
                📅 Agenda una sesión estratégica
              </Link>
              <a href="mailto:carovalenciam@outlook.com" className="btn btn-ghost">
                carovalenciam@outlook.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
