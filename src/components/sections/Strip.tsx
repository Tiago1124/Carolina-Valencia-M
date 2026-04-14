// Strip marquee — single bold band mixing expertise labels + keywords

// Items alternados: expertise (colored, large) + keyword (muted, small caps)
// El separador es un diamante decorativo
const ITEMS: { text: string; type: 'expertise' | 'keyword'; color?: string }[] = [
  { text: 'Estratega de crecimiento',              type: 'expertise', color: '#87c1b6' },
  { text: 'Estrategia Comercial',                  type: 'keyword'  },
  { text: 'Traductora de datos en decisiones',     type: 'expertise', color: '#f2aa79' },
  { text: 'Trade Marketing',                       type: 'keyword'  },
  { text: 'Activadora de equipos comerciales',     type: 'expertise', color: '#e88aaa' },
  { text: 'Marca Personal C-Level',                type: 'keyword'  },
  { text: 'Desarrolladora de marcas',              type: 'expertise', color: '#87c1b6' },
  { text: 'P&L & Portafolio',                      type: 'keyword'  },
  { text: 'Diseñadora de experiencias de canal',   type: 'expertise', color: '#f2aa79' },
  { text: 'Retail & FMCG',                         type: 'keyword'  },
  { text: 'Experta en posicionamiento',            type: 'expertise', color: '#e88aaa' },
  { text: 'Crecimiento Rentable',                  type: 'keyword'  },
];

export default function Strip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden border-y"
      style={{
        background: '#1a1f2e',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div className="py-4">
        <div className="flex whitespace-nowrap marquee-inner" style={{ animation: 'marquee 38s linear infinite' }}>
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              {item.type === 'expertise' ? (
                <span
                  className="px-6 text-[0.92rem] font-bold tracking-wide"
                  style={{ fontFamily: 'var(--font-body)', color: item.color }}
                >
                  {item.text}
                </span>
              ) : (
                <span
                  className="px-5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.text}
                </span>
              )}
              {/* Separator diamond */}
              <svg width="6" height="6" viewBox="0 0 6 6" className="shrink-0 mx-1">
                <rect x="3" y="0" width="4.24" height="4.24" rx="0.4"
                  transform="rotate(45 3 3)"
                  fill={item.type === 'expertise' ? (item.color ?? '#87c1b6') : 'rgba(255,255,255,0.15)'}
                  opacity={item.type === 'expertise' ? '0.55' : '1'}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
