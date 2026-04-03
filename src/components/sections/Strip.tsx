const items = [
  'Estrategia Comercial',
  'Trade Marketing',
  'Marca Personal C-Level',
  'EGC — Empleados Embajadores',
  'Crecimiento Rentable',
  'P&L & Portafolio',
  'Retail & FMCG',
  'Diagnóstico de Causas Raíz',
  'Ghostwriting',
  'LinkedIn Estratégico',
];

export default function Strip() {
  return (
    <div className="bg-[#404e66] py-3.5 overflow-hidden border-y border-[#87c1b6]/20">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-5 flex-shrink-0"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-white/80">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#87c1b6] opacity-60 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
