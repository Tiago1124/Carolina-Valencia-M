import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contacto | Agenda tu sesión estratégica',
  description:
    'Agenda una sesión estratégica gratuita de 30 minutos con Carolina Valencia M. Sin compromiso. Solo claridad sobre qué palanca activar primero.',
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#404e66] pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(135,193,182,0.12)_0%,transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="eyebrow justify-center text-[#87c1b6] mb-5" style={{ color: '#87c1b6' }}>Hablemos</div>
            <h1
              className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Lista para convertir tu{' '}
              <em className="italic text-[#f2aa79]">experiencia en resultados?</em>
            </h1>
            <p
              className="text-[1rem] text-white/65 leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Una conversación de 30 minutos. Sin compromiso. Solo claridad sobre qué palanca activar primero en tu negocio o en tu marca personal.
            </p>
          </div>
        </section>

        {/* Calendly + info */}
        <section className="bg-[#f8f6f3] section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">

            {/* Info */}
            <div>
              <div className="eyebrow mb-5">La sesión incluye</div>
              <h2
                className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#404e66] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                30 minutos que pueden cambiar la dirección de tu negocio
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: '🔍', title: 'Diagnóstico rápido', body: 'Identificamos juntos cuál es la palanca más importante de tu negocio o marca personal en este momento.' },
                  { icon: '🎯', title: 'Claridad de prioridades', body: 'Saldrás con 3 acciones concretas, ordenadas por impacto, para empezar esta semana.' },
                  { icon: '🤝', title: 'Sin presión de venta', body: 'La sesión es para darte valor real. Si hay fit para trabajar juntos, lo veremos naturalmente.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-[0.9rem] font-bold text-[#404e66] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.title}
                      </h3>
                      <p className="text-[0.82rem] text-[#5a6578] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-md border border-[#e6e6e6] p-5">
                <p className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#87c1b6] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                  O escríbeme directamente
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:carovalenciam@outlook.com"
                    className="flex items-center gap-3 text-[0.85rem] text-[#404e66] font-bold hover:text-[#87c1b6] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="w-8 h-8 rounded-full bg-[#87c1b6]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </span>
                    carovalenciam@outlook.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gerentedemercadeo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[0.85rem] text-[#404e66] font-bold hover:text-[#87c1b6] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="w-8 h-8 rounded-full bg-[#87c1b6]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    </span>
                    LinkedIn / gerentedemercadeo
                  </a>
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
                CALENDLY / GOOGLE CALENDAR — INTEGRACIÓN
                
                OPCIÓN A: CALENDLY (recomendado — más sencillo)
                ─────────────────────────────────────────────
                1. Crea una cuenta gratis en calendly.com
                2. Configura un tipo de evento "Sesión Estratégica 30 min"
                3. Ve a Share → Embed → Inline
                4. Copia la URL de tu calendario (ej: calendly.com/carolina-valencia/sesion)
                5. Reemplaza "TU_URL_CALENDLY" abajo por esa URL
                6. El iframe ya está configurado con el tamaño correcto
                
                OPCIÓN B: GOOGLE CALENDAR (Appointment Scheduling)
                ─────────────────────────────────────────────────────
                1. Ve a calendar.google.com
                2. Crea un "Appointment Schedule" (necesitas Google Workspace o Gmail)
                3. Configura disponibilidad y duración (30 min)
                4. Copia el link de reserva que genera Google
                5. Usa ese link en href del botón de abajo
                
                NOTA: Si usas Calendly, el iframe se incrusta directamente.
                Si usas Google Calendar, solo tendrás un botón de enlace.
                ════════════════════════════════════════════════════════════ */}
            <div>
              <div className="bg-white rounded-md border border-[#e6e6e6] shadow-sm overflow-hidden">
                {/* 
                  ── REEMPLAZA ESTE BLOQUE CON EL EMBED DE CALENDLY: ──
                  
                  <iframe
                    src="https://calendly.com/TU_URL_CALENDLY/sesion-estrategica?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f6f3&text_color=404e66&primary_color=87c1b6"
                    width="100%"
                    height="700"
                    frameBorder={0}
                    title="Agenda una sesión estratégica"
                  />
                  
                  ── O SI USAS GOOGLE CALENDAR, BORRA EL IFRAME Y DEJA SOLO: ──
                  <div className="p-10 text-center">
                    <a href="TU_LINK_GOOGLE_CALENDAR" target="_blank" className="btn-cta">
                      📅 Ver disponibilidad y agendar
                    </a>
                  </div>
                */}

                {/* Placeholder visible hasta que configures Calendly */}
                <div className="p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[460px] bg-[#f8f6f3]">
                  <span className="text-5xl">📅</span>
                  <div>
                    <h3
                      className="font-display text-[1.2rem] font-bold text-[#404e66] mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Agenda tu sesión estratégica
                    </h3>
                    <p className="text-[0.82rem] text-[#5a6578] mb-5 leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
                      Configura tu cuenta de Calendly y reemplaza este bloque con el embed. Ver instrucciones en el código.
                    </p>
                  </div>
                  {/* Botón de respaldo directo a email */}
                  <a
                    href="mailto:carovalenciam@outlook.com?subject=Quiero%20agendar%20una%20sesión%20estratégica&body=Hola%20Carolina%2C%20me%20gustaría%20agendar%20una%20sesión%20estratégica%20gratuita%20de%2030%20minutos."
                    className="btn-cta"
                  >
                    📧 Escribirme para agendar
                  </a>
                  <p className="text-[0.68rem] text-[#5a6578] italic" style={{ fontFamily: 'var(--font-body)' }}>
                    Mientras configuras Calendly, puedes escribirte por email o LinkedIn
                  </p>
                </div>
              </div>

              {/* PDF punto 10: cierre con accesos rápidos */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/gerentedemercadeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 bg-white rounded-md border border-[#e6e6e6] p-3 hover:border-[#87c1b6] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#404e66"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  <span className="text-[0.6rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>LinkedIn</span>
                </a>
                <a
                  href="tel:+57"
                  className="flex flex-col items-center gap-1.5 bg-white rounded-md border border-[#e6e6e6] p-3 hover:border-[#87c1b6] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#404e66" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="text-[0.6rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>Teléfono</span>
                </a>
                <a
                  href="mailto:carovalenciam@outlook.com"
                  className="flex flex-col items-center gap-1.5 bg-white rounded-md border border-[#e6e6e6] p-3 hover:border-[#87c1b6] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#404e66" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span className="text-[0.6rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
