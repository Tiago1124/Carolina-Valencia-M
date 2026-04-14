import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import BlogSubscribe from '@/components/sections/BlogSubscribe';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Strip from '@/components/sections/Strip';
import BrandsSection from '@/components/sections/BrandsSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import DiagnosticoCTA from '@/components/sections/DiagnosticoCTA';
import Link from 'next/link';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Carolina Valencia M. | Estrategia Comercial & Marca Personal en Colombia',
  description:
    'Consultoría de estrategia comercial y marketing para empresas FMCG y retail. Construcción de marca personal para ejecutivos C-Level. +20 años de experiencia.',
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

        {/* ── Sobre mí mini ── */}
        <section className="bg-white py-[clamp(5rem,10vw,8rem)]">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Foto */}
              <div className="relative">
                <div className="relative w-full aspect-[4/4.5] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/2.webp"
                    alt="Carolina Valencia M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-8 -right-2 w-1 h-2/5 bg-peach rounded-full" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-teal" />
                  <span className="text-label font-semibold uppercase tracking-widest text-teal">Sobre mí</span>
                </div>
                <h2 className="font-serif font-semibold text-ink leading-tight mb-4" style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>
                  Ingeniera Industrial que{' '}
                  <em className="italic text-teal">ingenia crecimiento</em>
                </h2>
                <div className="w-10 h-0.5 bg-peach mb-5" />
                <p className="text-lead text-muted leading-relaxed mb-3">
                  Más de 20 años de trayectoria en empresas como Colgate Palmolive, Kimberly Clark, Italcol, Laskin y más.
                </p>
                <p className="text-body text-muted leading-relaxed mb-7">
                  Mi formación en Ingeniería Industrial me enseñó a identificar causas raíz antes de proponer soluciones.
                  Eso es lo que traigo a cada cliente: claridad, foco y resultados medibles.
                </p>

                <ul className="flex flex-col gap-4 mb-8">
                  {[
                    { icon: '🔍', title: 'Diagnóstico profundo', body: 'Identifico las palancas precisas antes de proponer cualquier solución.' },
                    { icon: '📊', title: 'Resultados medibles',  body: 'Cada estrategia tiene un número en el P&L. Sin impacto, no es estrategia.' },
                    { icon: '♻️', title: 'Crecimiento sostenible', body: 'Crecer en volumen sin rentabilidad es aplazar el problema.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3.5 items-start">
                      <span className="text-lg shrink-0 pt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-small font-semibold text-ink mb-0.5">{item.title}</p>
                        <p className="text-small text-muted leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sobre-mi"
                  className="text-label font-bold uppercase tracking-widest bg-navy text-white rounded px-6 py-3 hover:bg-ink transition-colors inline-block"
                >
                  Conoce mi trayectoria →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DiagnosticoCTA />

        {/* ── CTA Final ── */}
        <section className="bg-navy py-[clamp(5rem,10vw,8rem)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(135,193,182,0.06),transparent)] pointer-events-none" />
          <div className="max-w-narrow mx-auto px-6 text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-teal" />
              <span className="text-label font-semibold uppercase tracking-widest text-teal">Hablemos</span>
              <span className="w-8 h-px bg-teal" />
            </div>
            <h2 className="font-serif font-semibold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>
              ¿Listo/a para convertir tu{' '}
              <em className="italic text-peach">experiencia en resultados?</em>
            </h2>
            <p className="text-lead text-white/70 leading-relaxed mb-9 max-w-md mx-auto">
              Una conversación de 30 minutos. Sin compromiso. Solo claridad sobre qué palanca activar primero.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contacto"
                className="text-label font-bold uppercase tracking-widest bg-peach text-ink rounded-full px-7 py-3.5 hover:bg-[#e89563] transition-colors shadow-[0_4px_20px_rgba(242,170,121,0.35)]"
              >
                📅 Agenda una sesión estratégica
              </Link>

              <a
                href="mailto:carovalenciam@outlook.com"
                className="text-label font-semibold uppercase tracking-widest border border-white/20 text-white/70 rounded px-7 py-3.5 hover:border-white/50 hover:text-white transition-colors"
              >
                carovalenciam@outlook.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <BlogSubscribe />
      <Footer />
    </>
  );
}