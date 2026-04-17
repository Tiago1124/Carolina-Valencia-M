import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre mí | Trayectoria y Experiencia',
  description:
    'Ingeniera Industrial con más de 20 años en marketing y estrategia comercial. Trayectoria en Colgate Palmolive, Kimberly Clark, Casa Luker, Italcol, Laskin y más.',
};

// PDF página 4 — trayectoria correcta, sin años, orden dado por Carolina
const EJECUTIVA = [
  { company: 'Laskin Dermocosmética',  role: 'Gerente de Mercadeo y Ventas' },
  { company: 'Italcol',                role: 'Directora de Marketing y Trade Marketing' },
  { company: 'Tostao',                 role: 'Gerente de Mercadeo y Canales B2B' },
  { company: 'Grupo Conboca',          role: 'Gerente de Marketing y Trade Marketing' },
  { company: 'Locatel',                role: 'Directora de Marketing y Trade Marketing' },
  { company: 'Almacenes Corona',       role: 'Gerente de Marketing y Trade Marketing' },
  { company: 'Vía Baloto',             role: 'Directora de Marketing y Trade Marketing' },
  { company: 'Casa Luker',             role: 'Gerente de Marca Senior' },
  { company: 'Kimberly Clark',         role: 'Gerente de Trade Marketing y Gerente de Marca Senior' },
  { company: 'Colgate Palmolive',      role: 'Ejecutiva de Ventas y Trade Marketing' },
  { company: 'Colombina',              role: 'Asistente de Ventas y Mercadeo' },
];

const CONSULTORA = ['Totto', 'Ilumno', 'Auros Copias', 'Villa Romana', 'Epex', 'Skin Solutions'];

// PDF página 5 — sin Employee Advocacy, sin Marketing B2B
const SKILLS = [
  'Estrategia Comercial',
  'Trade Marketing',
  'Branding & Portafolio',
  'P&L Management',
  'Marketing B2C',
  'FMCG & Retail',
  'Marca Personal C-Level',
  'AI Marketing',
  'Marketing Full Funnel',
  'Thought Leadership',
  'Desarrolladora de Marcas',
  'Estratega de Crecimiento',
  'Experta en Posicionamiento',
  'Traductora de Datos en Decisiones',
  'Activadora de Equipos Comerciales',
  'Diseñadora de Experiencias de Canal',
];

// PDF página 3 — principios más contundentes, formato impactante
const PILLARS = [
  {
    num: '01',
    title: 'Diagnóstico profundo',
    body: 'Identifico las palancas precisas que mueven el negocio antes de proponer cualquier solución. Las causas raíz, no los síntomas.',
    color: '#87c1b6',
  },
  {
    num: '02',
    title: 'Ejecución con resultados medibles',
    body: 'Cada estrategia tiene un número detrás. Sin impacto tangible en el P&L, no es estrategia.',
    color: '#c45572',
  },
  {
    num: '03',
    title: 'Crecimiento sostenible',
    body: 'Crecer en ventas sin rentabilidad no es una estrategia. Es aplazar el problema. Construyo sistemas que duran.',
    color: '#f2aa79',
  },
];

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#253347] text-white pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#87c1b6]/8 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#c45572]/6 blur-[90px] pointer-events-none" />

          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#87c1b6]" />
                <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                  Sobre mí
                </span>
              </div>
              <h1 className="font-bold text-white leading-[1.08] mb-6"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
                Ingeniera Industrial que{' '}
                <em className="italic" style={{ color: '#87c1b6' }}>ingenia crecimiento</em>
              </h1>
              <div className="w-10 h-0.5 bg-[#f2aa79] mb-6" />
              <p className="text-white/80 leading-relaxed mb-8 max-w-lg"
                style={{ fontSize: '1.05rem', lineHeight: '1.85', fontFamily: 'var(--font-body)' }}>
                Ingeniera Industrial de formación. Estratega de marketing por vocación. He operado en consumo masivo y retail, en multinacionales y empresas familiares. Todo ese recorrido lo pongo al servicio de quienes acompaño.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/servicios" className="btn-cta">Ver servicios</Link>
                <Link href="/contacto" className="btn-outline-light">Hablemos</Link>
              </div>
            </div>

            {/*
              FOTO HERO — sobre-mi
              Archivo: /public/images/foto-personal.jpg
              Medida: 480 × 580 px · Formato: WebP o JPG
            */}
            <div className="w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="aspect-[4/4.8] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/foto-personal.jpg" alt="Carolina Valencia M."
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* PDF página 3 — principios más contundentes */}
        <section className="bg-white py-24">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#87c1b6]" />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                Mi filosofía
              </span>
            </div>
            <h2 className="font-bold text-[#1a1f2e] mb-14"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Tres principios que guían mi trabajo
            </h2>

            {/* Layout horizontal — más contundente */}
            <div className="grid lg:grid-cols-3 gap-0 border border-[#e8e3dc] rounded-xl overflow-hidden">
              {PILLARS.map((p, i) => (
                <div key={i}
                  className={`p-10 flex flex-col gap-4 ${i < 2 ? 'border-b lg:border-b-0 lg:border-r border-[#e8e3dc]' : ''}`}>
                  <span className="font-bold text-[3.5rem] leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: p.color, opacity: 0.25 }}>
                    {p.num}
                  </span>
                  <h3 className="font-bold text-[#1a1f2e]"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                  <div className="w-8 h-0.5 rounded" style={{ background: p.color }} />
                  <p className="text-[#6b7280] leading-relaxed" style={{ fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trayectoria — PDF página 4: sin años, orden de Carolina */}
        <section className="bg-[#f8f5f0] py-24">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#87c1b6]" />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                Trayectoria
              </span>
            </div>
            <h2 className="font-bold text-[#1a1f2e] mb-12"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Más de 20 años construyendo <em className="italic text-[#87c1b6]">resultados reales</em>
            </h2>

            {/* Como ejecutiva */}
            <p className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Como ejecutiva
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
              {EJECUTIVA.map((item) => (
                <div key={item.company}
                  className="bg-white border border-[#e8e3dc] rounded-lg p-5 hover:border-[#87c1b6] transition-colors group">
                  <p className="font-bold text-[#1a1f2e] mb-1.5 group-hover:text-[#404e66] transition-colors"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
                    {item.company}
                  </p>
                  <p className="text-[#6b7280] text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Como consultora */}
            <p className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#c45572] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Como consultora
            </p>
            <div className="flex flex-wrap gap-3">
              {CONSULTORA.map((name) => (
                <span key={name}
                  className="bg-white border border-[#e8e3dc] rounded-full px-5 py-2.5 font-bold text-[#404e66] hover:border-[#c45572] transition-colors"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills — PDF p5: sin Employee Advocacy ni Marketing B2B */}
        <section className="bg-[#404e66] py-24">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#87c1b6]" />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6]" style={{ fontFamily: 'var(--font-body)' }}>
                Áreas de expertise
              </span>
              <span className="w-8 h-px bg-[#87c1b6]" />
            </div>
            <h2 className="font-bold text-white mb-10"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Lo que sé hacer bien
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
              {SKILLS.map((s) => (
                <span key={s}
                  className="border border-white/20 text-white/70 rounded-full px-5 py-2 text-sm font-medium hover:border-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {s}
                </span>
              ))}
            </div>
            <Link href="/servicios" className="btn-cta inline-block">
              Ver mis servicios →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
