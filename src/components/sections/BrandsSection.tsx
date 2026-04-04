'use client';
// ══════════════════════════════════════════════════════════
// LOGOS — instrucciones
// Guarda en /public/images/logos/ como SVG o PNG transparente
// Tamaño: máx 160×52 px
// Para activar: reemplaza cada <span> por <Image src={...} />
// ══════════════════════════════════════════════════════════

const ejecutiva = [
  { name: 'Colgate Palmolive', file: 'colgate.svg' },
  { name: 'Kimberly Clark',   file: 'kimberly.svg' },
  { name: 'Casa Luker',       file: 'casaluker.svg' },
  { name: 'Locatel',          file: 'locatel.svg' },
  { name: 'Tostao',           file: 'tostao.svg' },
  { name: 'Totto',            file: 'totto.svg' },
];

const consultora = [
  { name: 'Italcol',  file: 'italcol.svg' },
  { name: 'Laskin',   file: 'laskin.svg' },
];

function BrandRow({ brands }: { brands: typeof ejecutiva }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem 3.5rem' }}>
      {brands.map((b) => (
        <div key={b.name} style={{ opacity: 0.38, filter: 'grayscale(1)', transition: 'all 0.3s', cursor: 'default' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.filter = 'grayscale(0)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.38'; (e.currentTarget as HTMLElement).style.filter = 'grayscale(1)'; }}>
          {/* Reemplaza este span por <Image> cuando tengas el logo */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--navy-deep)',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}>
            {b.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section style={{ background: 'var(--white)', paddingBlock: 'clamp(3.5rem,7vw,6rem)', borderBottom: '1px solid var(--parchment-3)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Como ejecutiva */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--sage)', textAlign: 'center', marginBottom: '1.5rem',
            }}>
              Trayectoria como Ejecutiva
            </p>
            <BrandRow brands={ejecutiva} />
          </div>

          {/* Separador */}
          <div style={{ width: '100%', height: '1px', background: 'var(--parchment-3)' }} />

          {/* Como consultora */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--rose)', textAlign: 'center', marginBottom: '1.5rem',
            }}>
              Clientes como Consultora
            </p>
            <BrandRow brands={consultora} />
          </div>

        </div>
      </div>
    </section>
  );
}
