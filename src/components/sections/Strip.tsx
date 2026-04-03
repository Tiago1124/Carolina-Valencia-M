const items = [
  'Estrategia Comercial', 'Trade Marketing', 'Marca Personal C-Level',
  'EGC — Empleados Embajadores', 'Crecimiento Rentable', 'P&L & Portafolio',
  'Retail & FMCG', 'Diagnóstico de Causas Raíz', 'Ghostwriting', 'LinkedIn Estratégico',
];

export default function Strip() {
  return (
    <div className="bg-[var(--navy-dark)] py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-5 flex-shrink-0">
            <span className="text-sm font-medium text-white/70 tracking-wide">{item}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--peach)]/50 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
