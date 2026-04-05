import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contacto | Agenda tu sesion estrategica',
  description: 'Agenda una sesion estrategica gratuita de 30 minutos con Carolina Valencia M. Sin compromiso. Solo claridad sobre que palanca activar primero.',
};

const includes = [
  { icon: '🔍', title: 'Diagnostico rapido', body: 'Identificamos juntos cual es la palanca mas importante de tu negocio o marca personal en este momento.' },
  { icon: '🎯', title: 'Claridad de prioridades', body: 'Saldras con 3 acciones concretas, ordenadas por impacto, para empezar esta semana.' },
  { icon: '🤝', title: 'Sin presion de venta', body: 'La sesion es para darte valor real. Si hay fit para trabajar juntos, lo veremos naturalmente.' },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#404e66] pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(135,193,182,0.14) 0%, transparent 55%)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c45572]/6 blur-[100px] pointer-events-none" />
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 text-center relative z-10 fade-up">
            <div className="eyebrow justify-center mb-6" style={{ color: '#87c1b6' }}>Hablemos</div>
            <h1 className="font-bold text-white leading-[1.08] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Lista para convertir tu{' '}
              <em className="italic" style={{ color: '#f2aa79' }}>experiencia en resultados?</em>
            </h1>
            <div className="section-rule mx-auto mb-6" />
            <p className="text-white/85 leading-relaxed max-w-xl mx-auto" style={{ fontSize: '1rem', lineHeight: '1.8', fontFamily: 'var(--font-body)' }}>
              Una conversacion de 30 minutos. Sin compromiso. Solo claridad sobre que palanca activar primero en tu negocio o en tu marca personal.
            </p>
          </div>
        </section>

        <section className="bg-[#f8f5f0] section-base">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">

            <div>
              <div className="eyebrow mb-4">La sesion incluye</div>
              <h2 className="font-bold text-[#404e66] mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)' }}>
                30 minutos que pueden cambiar la direccion de tu negocio
              </h2>
              <div className="flex flex-col gap-6 mb-10">
                {includes.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#e8e3dc] flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[0.95rem] font-bold text-[#404e66] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                      <p className="text-[0.86rem] text-[#5a6070] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-[#e8e3dc] p-6 shadow-sm">
                <p className="text-[0.66rem] font-bold tracking-[0.16em] uppercase text-[#87c1b6] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  O escribeme directamente
                </p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:carovalenciam@outlook.com" className="flex items-center gap-3 text-[0.88rem] text-[#404e66] font-semibold hover:text-[#87c1b6] transition-colors group" style={{ fontFamily: 'var(--font-body)' }}>
                    <span className="w-9 h-9 rounded-xl bg-[#87c1b6]/12 group-hover:bg-[#87c1b6]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </span>
                    carovalenciam@outlook.com
                  </a>
                  <a href="https://www.linkedin.com/in/gerentedemercadeo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[0.88rem] text-[#404e66] font-semibold hover:text-[#87c1b6] transition-colors group" style={{ fontFamily: 'var(--font-body)' }}>
                    <span className="w-9 h-9 rounded-xl bg-[#87c1b6]/12 group-hover:bg-[#87c1b6]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    </span>
                    LinkedIn / gerentedemercadeo
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl border border-[#e8e3dc] shadow-sm overflow-hidden">
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/santimurg12?hide_gdpr_banner=1&background_color=f8f5f0&text_color=404e66&primary_color=87c1b6"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { href: 'https://www.linkedin.com/in/gerentedemercadeo', label: 'LinkedIn', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#404e66"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                  { href: 'tel:+57', label: 'Telefono', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#404e66" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                  { href: 'mailto:carovalenciam@outlook.com', label: 'Email', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#404e66" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex flex-col items-center gap-2 bg-white rounded-xl border border-[#e8e3dc] p-4 hover:border-[#87c1b6] hover:shadow-sm transition-all"
                  >
                    {item.icon}
                    <span
                      className="text-[0.62rem] font-bold text-[#404e66]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}