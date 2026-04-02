const testimonials = [
  {
    quote:
      'Completamente transformó nuestro ROI en medios pagados y construyó campañas estratégicas y escalables. Regularmente alcanzamos más de 5x en retorno sobre la inversión publicitaria.',
    author: 'Chris Corsini',
    role: 'CEO',
    company: '',
    // ── FOTO: /public/images/testimonials/chris.jpg · 80×80 px circular ──
    photo: null,
  },
  {
    quote:
      'Carolina es una de las mejores estrategas de crecimiento con las que he trabajado. Define métricas y metas con claridad y desarrolla estrategias creativas y efectivas para alcanzarlas.',
    author: 'Anna Rehermann',
    role: 'Directora',
    company: 'Growth Hacking Asia',
    photo: null,
  },
  {
    quote:
      'Es un placer trabajar con Carolina. Ella y su equipo son muy estructurados y organizados, y entienden tu negocio con rapidez sorprendente.',
    author: 'Thomas Kriebernegg',
    role: 'CEO',
    company: 'App Radar',
    photo: null,
  },
  {
    quote:
      'Carolina es una rockstar del marketing digital. Al principio era escéptico, pero no solo lo logró, sino que superó nuestras expectativas.',
    author: 'Shadan Khan',
    role: 'Director',
    company: 'IMI Mobile',
    photo: null,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#ede9e4] section-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="eyebrow justify-center mb-4">Testimonios</div>
          <h2
            className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[#404e66]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo que dicen quienes han trabajado conmigo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-md p-6 flex flex-col gap-4 card-hover border border-[#e6e6e6] relative"
            >
              {/* Quote mark */}
              <span
                className="font-display text-[3rem] leading-none text-[#87c1b6]/30 absolute top-3 left-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                "
              </span>

              <p
                className="text-[0.83rem] text-[#6b6b6b] leading-relaxed pt-5 flex-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#e6e6e6]">
                {/* ── FOTO: /public/images/testimonials/[nombre].jpg · 44×44 px ── */}
                <div className="w-10 h-10 rounded-full bg-[#87c1b6]/20 flex items-center justify-center flex-shrink-0 text-[0.6rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>
                  {t.author.split(' ').map(w => w[0]).join('').slice(0,2)}
                </div>
                <div>
                  <p className="text-[0.8rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>
                    {t.author}
                  </p>
                  <p className="text-[0.7rem] text-[#6b6b6b]" style={{ fontFamily: 'var(--font-body)' }}>
                    {t.role}{t.company ? ` · ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
