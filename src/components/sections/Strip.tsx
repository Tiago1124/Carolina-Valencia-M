const items = [
  'Estrategia Comercial', 'Trade Marketing', 'Marca Personal C-Level',
  'EGC — Empleados Embajadores', 'Crecimiento Rentable', 'P&L & Portafolio',
  'Retail & FMCG', 'Diagnóstico de Causas Raíz', 'Ghostwriting', 'LinkedIn Estratégico',
];

export default function Strip() {
  return (
    <div style={{
      background: 'var(--ink)',
      paddingBlock: '0.875rem',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingInline: '1.25rem', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
            }}>
              {item}
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--sand)', opacity: 0.5, flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
