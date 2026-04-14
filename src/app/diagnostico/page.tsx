import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diagnóstico Gratuito | ¿Cuánto vale tu experiencia?',
  description:
    'Diagnóstico gratuito de marca personal en 3 minutos. Descubre en qué punto está tu marca y qué palanca activar primero. Sin datos de tarjeta.',
};

export default function DiagnosticoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#404e66] pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(242,170,121,0.1)_0%,transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="eyebrow justify-center mb-5" style={{ color: '#f2aa79' }}>
              <span className="w-6 h-px bg-[#f2aa79] inline-block" />
              Diagnóstico gratuito
            </div>
            <h1
              className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Cuánto vale tu{' '}
              <em className="italic text-[#f2aa79]">experiencia</em>{' '}
              en el mercado digital?
            </h1>
            <p
              className="text-[1rem] text-white/80 leading-relaxed max-w-xl mx-auto mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              En 3 minutos descubres exactamente en qué punto está tu marca personal y qué palanca debes activar primero.{' '}
              <strong className="text-white">Sin datos de tarjeta. Sin compromisos.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#formulario" className="btn-cta text-[0.85rem]">
                🎯 Comenzar diagnóstico →
              </a>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-white section-base border-b border-[#e6e6e6]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: '6 preguntas estratégicas',
                  body: 'Sobre tu presencia actual, visibilidad, narrativa y oportunidades que estás dejando ir.',
                  icon: '📝',
                },
                {
                  num: '02',
                  title: 'Diagnóstico personalizado',
                  body: 'Recibes un perfil exacto de dónde estás: Marca Invisible, Marca en Construcción o Marca con Autoridad.',
                  icon: '📊',
                },
                {
                  num: '03',
                  title: 'Plan de acción',
                  body: 'Los 3 pasos prioritarios para activar la primera palanca de crecimiento. Concreto, no teórico.',
                  icon: '🚀',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="text-center p-6 rounded-md bg-[#f8f6f3] border border-[#e6e6e6] card-hover"
                >
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <span
                    className="font-display text-[2rem] font-bold text-[#87c1b6]/20 block leading-none mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-[0.92rem] font-bold text-[#404e66] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[0.8rem] text-[#5a6578] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tally Form Embed — PDF punto 8 */}
        <section id="formulario" className="bg-[#f8f6f3] section-base">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="eyebrow justify-center mb-4">El formulario</div>
              <h2
                className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#404e66]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Comienza tu diagnóstico ahora
              </h2>
            </div>

            {/* ════════════════════════════════════════════
                INTEGRACIÓN TALLY — https://tally.so/r/XxYeEe
                El iframe de Tally se incrusta aquí.
                Para personalizar el estilo del formulario:
                1. Ve a tally.so → tu formulario → Share → Embed
                2. Copia el código iframe que genera Tally
                3. Reemplaza el iframe de abajo con ese código
                ════════════════════════════════════════════ */}
            <div className="bg-white rounded-md border border-[#e6e6e6] shadow-sm overflow-hidden">
              <iframe
                src="https://tally.so/embed/XxYeEe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Diagnóstico gratuito de marca personal"
                className="w-full"
                style={{ minHeight: '500px' }}
              />
            </div>

            <p
              className="text-center text-[0.72rem] text-[#5a6578] mt-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              ¿Problemas con el formulario?{' '}
              <a
                href="https://tally.so/r/XxYeEe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#87c1b6] hover:underline font-bold"
              >
                Ábrelo directamente aquí →
              </a>
            </p>
          </div>
        </section>

        {/* Profiles preview */}
        <section className="bg-white section-base">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="eyebrow mb-5">Los 3 perfiles</div>
            <h2
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#404e66] mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿En cuál te reconoces?
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Marca Invisible',
                  icon: '🌑',
                  desc: 'Tienes la experiencia pero nadie lo sabe. LinkedIn vacío, sin sistema de contenido, dependes del boca a boca para conseguir oportunidades.',
                  score: '0–30%',
                  color: '#c45572',
                  action: 'Necesitas empezar desde cero con estructura',
                },
                {
                  title: 'Marca en Construcción',
                  icon: '🌓',
                  desc: 'Tienes algunas bases pero sin consistencia ni sistema. Publicas de vez en cuando, sin estrategia clara ni propuesta de valor definida.',
                  score: '31–60%',
                  color: '#f2aa79',
                  action: 'Necesitas sistema, narrativa y consistencia',
                },
                {
                  title: 'Marca con Autoridad',
                  icon: '🌕',
                  desc: 'Presencia digital activa, narrativa clara y flujo de oportunidades inbound. Eres referente en tu sector.',
                  score: '61–100%',
                  color: '#87c1b6',
                  action: 'Necesitas optimizar y escalar lo que funciona',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-md p-6 border card-hover"
                  style={{ borderColor: p.color + '30', background: p.color + '08' }}
                >
                  <span className="text-3xl block mb-3">{p.icon}</span>
                  <h3
                    className="font-display text-[1.1rem] font-bold text-[#404e66] mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="text-[0.62rem] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full mb-3 inline-block"
                    style={{ background: p.color + '20', color: p.color, fontFamily: 'var(--font-body)' }}
                  >
                    Score: {p.score}
                  </span>
                  <p
                    className="text-[0.8rem] text-[#5a6578] leading-relaxed mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.desc}
                  </p>
                  <p
                    className="text-[0.75rem] font-bold italic"
                    style={{ color: p.color, fontFamily: 'var(--font-body)' }}
                  >
                    → {p.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA after diagnosis */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Ya tienes tu diagnóstico?
            </h2>
            <p
              className="text-[0.95rem] text-white/65 mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              El diagnóstico te dice dónde estás. La sesión estratégica te dice exactamente cómo llegar a donde quieres.
            </p>
            <Link href="/contacto" className="btn-cta">
              📅 Agendar sesión estratégica gratuita
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
