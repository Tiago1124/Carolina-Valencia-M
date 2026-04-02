import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Strip from '@/components/sections/Strip';
import BrandsSection from '@/components/sections/BrandsSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import DiagnosticoCTA from '@/components/sections/DiagnosticoCTA';
import Testimonials from '@/components/sections/Testimonials';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carolina Valencia M. | Estrategia Comercial & Marca Personal en Colombia',
  description:
    'Consultoría de estrategia comercial y marketing para empresas que quieren crecer con rentabilidad. Construcción de marca personal para ejecutivos C-Level. +20 años en FMCG y retail.',
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

        {/* About mini — points to /sobre-mi */}
        <section className="bg-white section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-5">Sobre mí</div>
              <h2
                className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#404e66] leading-tight mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ingeniera Industrial que{' '}
                <em className="text-[#87c1b6] italic">ingenia crecimiento</em>
              </h2>
              <p
                className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mb-6 max-w-md"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Más de 20 años en empresas líderes como Colgate Palmolive, Kimberly Clark, Italcol y Laskin. Mi formación como Ingeniera Industrial me enseñó a identificar causas raíz antes de proponer soluciones. Eso es exactamente lo que traigo a cada cliente.
              </p>
              <Link href="/sobre-mi" className="btn-primary">
                Conoce mi trayectoria →
              </Link>
            </div>

            {/* ── FOTO SOBRE MÍ (homepage) ──────────────────────────────
                Archivo: /public/images/carolina-sobre-mi.jpg
                Medida recomendada: 480 × 540 px
                Formato: WebP o JPG
                Encuadre: retrato profesional 3/4, ambiente de trabajo
                ──────────────────────────────────────────────────────── */}
            <div className="w-full aspect-[4/4.5] max-w-[400px] mx-auto bg-gradient-to-br from-[#404e66] to-[#87c1b6] rounded-md flex items-center justify-center text-white/60 gap-2 flex-col">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-center px-6" style={{ fontFamily: 'var(--font-body)' }}>
                Foto Carolina<br />480 × 540 px
              </p>
            </div>
          </div>
        </section>

        <DiagnosticoCTA />
        <Testimonials />

        {/* Final CTA — PDF punto 9 & 10 */}
        <section className="bg-[#404e66] text-white section-base relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(135,193,182,0.08)_0%,transparent_70%)]" />
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="eyebrow justify-center text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Hablemos</div>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Lista para convertir tu{' '}
              <em className="text-[#f2aa79] italic">experiencia en resultados?</em>
            </h2>
            <p
              className="text-[0.95rem] text-white/60 leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Una conversación de 30 minutos. Sin compromiso. Solo claridad sobre qué palanca activar primero en tu negocio o en tu marca personal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Calendly / Google Calendar — PDF punto 9 */}
              <Link href="/contacto" className="btn-cta text-[0.85rem]">
                📅 Agenda una sesión estratégica
              </Link>
              <a
                href="mailto:carovalenciam@outlook.com"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#404e66] text-[0.82rem]"
              >
                carovalenciam@outlook.com
              </a>
            </div>
            {/* PDF punto 10: cierre con redes */}
            <div className="flex justify-center gap-5 mt-8 pt-8 border-t border-white/10">
              <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#87c1b6] transition-colors text-[0.75rem] font-bold tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                LinkedIn →
              </a>
              <a href="mailto:carovalenciam@outlook.com" className="text-white/50 hover:text-[#f2aa79] transition-colors text-[0.75rem] font-bold tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Email →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
