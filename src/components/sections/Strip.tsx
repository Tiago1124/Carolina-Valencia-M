// Strip marquee — keywords + expertise labels más prominentes

const KEYWORDS = [
  'Estrategia Comercial', 'Trade Marketing', 'Marca Personal C-Level',
  'EGC — Empleados Embajadores', 'Crecimiento Rentable', 'P&L & Portafolio',
  'Retail & FMCG', 'Causas Raíz', 'Ghostwriting', 'LinkedIn Estratégico',
];

// Etiquetas de expertise — resaltadas diferente
const EXPERTISE = [
  'Desarrolladora de marcas',
  'Estratega de crecimiento',
  'Experta en posicionamiento',
  'Traductora de datos en decisiones',
  'Activadora de equipos comerciales',
  'Diseñadora de experiencias de canal',
];

export default function Strip() {
  return (
    <div className="overflow-hidden border-y border-white/5" style={{ background: '#1a1f2e' }}>

      {/* Row 1 — keywords (subtle) */}
      <div className="py-3 border-b border-white/5">
        <div className="flex whitespace-nowrap marquee-inner">
          {[...KEYWORDS, ...KEYWORDS].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-5 shrink-0">
              <span className="text-[0.68rem] font-semibold text-white/40 uppercase tracking-[0.14em]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {item}
              </span>
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(242,170,121,0.35)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — expertise labels (prominent, reverse direction) */}
      <div className="py-3.5">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 24s linear infinite reverse' }}>
          {[...EXPERTISE, ...EXPERTISE].map((item, i) => (
            <div key={i} className="flex items-center gap-5 px-6 shrink-0">
              <span
                className="text-[0.8rem] font-bold tracking-wide whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: i % 3 === 0 ? '#87c1b6' : i % 3 === 1 ? '#f2aa79' : '#e88aaa',
                }}
              >
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full shrink-0 opacity-40"
                style={{ background: i % 3 === 0 ? '#87c1b6' : i % 3 === 1 ? '#f2aa79' : '#e88aaa' }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
