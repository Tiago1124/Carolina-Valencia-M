/*
  LOGOS — Guarda en /public/images/logos/ como SVG o PNG transparente
  Tamaño: máx 160 × 52 px
  Para activar: reemplaza cada <span> por <Image src={...} />
*/
const EJECUTIVA = [
  'Laskin', 'Italcol', 'Tostao', 'Grupo Conboca',
  'Locatel', 'Almacenes Corona', 'Vía Baloto',
  'Casa Luker', 'Kimberly Clark', 'Colgate Palmolive', 'Colombina',
];

const CONSULTORA = ['Totto', 'Ilumno', 'Auros Copias', 'Villa Romana', 'Epex', 'Skin Solutions'];

function LogoRow({ names, label, color }: { names: string[]; label: string; color: string }) {
  return (
    <div>
      <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-center mb-6"
        style={{ color, fontFamily: 'var(--font-body)' }}>
        {label}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
        {names.map((name) => (
          <div key={name}
            className="opacity-35 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
            {/* Reemplaza este span por <Image> cuando tengas el logo */}
            <span className="font-bold text-[#404e66] tracking-wide whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-white py-16 border-b border-[#ede9e2]">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-10 flex flex-col gap-10">
        <LogoRow names={EJECUTIVA}  label="Trayectoria como ejecutiva"  color="#87c1b6" />
        <div className="w-full h-px bg-[#ede9e2]" />
        <LogoRow names={CONSULTORA} label="Clientes como consultora"    color="#c45572" />
      </div>
    </section>
  );
}
