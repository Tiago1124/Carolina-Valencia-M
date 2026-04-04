const ITEMS = [
  'Estrategia Comercial', 'Trade Marketing', 'Marca Personal C-Level',
  'EGC — Empleados Embajadores', 'Crecimiento Rentable', 'P&L & Portafolio',
  'Retail & FMCG', 'Causas Raíz', 'Ghostwriting', 'LinkedIn Estratégico',
];

export default function Strip() {
  return (
    <div className="bg-ink overflow-hidden py-3.5 border-y border-white/5">
      <div className="flex whitespace-nowrap marquee-inner">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-5 shrink-0">
            <span className="text-label font-medium text-white/50 uppercase tracking-widest">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-peach/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
