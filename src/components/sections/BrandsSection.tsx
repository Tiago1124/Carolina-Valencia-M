'use client';
/*
  LOGOS â€” instrucciones
  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  Guarda los logos en /public/images/logos/ como SVG o PNG transparente.
  TamaÃ±o: mÃ¡ximo 160 Ã— 52 px.

  Para activar cada logo, reemplaza el <span> con:
  <Image src={`/images/logos/${b.file}`} alt={b.name}
    width={140} height={44} className="object-contain" />
  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
*/
const EJECUTIVA  = ['Colgate Palmolive','Kimberly Clark','Casa Luker','Locatel','Tostao','Totto'];
const CONSULTORA = ['Italcol','Laskin'];

function LogoRow({ names, label, color }: { names: string[]; label: string; color: string }) {
  return (
    <div>
      <p className={`text-label font-semibold uppercase tracking-widest text-center mb-5 ${color}`}>
        {label}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
        {names.map((name) => (
          <div
            key={name}
            className="opacity-35 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            {/* Reemplaza este span por <Image> cuando tengas el archivo SVG/PNG */}
            <span className="font-serif text-lg font-semibold text-navy tracking-wide whitespace-nowrap">
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
    <section className="bg-white py-16 border-b border-stone-2">
      <div className="max-w-site mx-auto px-6 lg:px-10 flex flex-col gap-10">
        <LogoRow names={EJECUTIVA}  label="Trayectoria como ejecutiva"  color="text-teal" />
        <div className="w-full h-px bg-stone-2" />
        <LogoRow names={CONSULTORA} label="Clientes como consultora"    color="text-rose" />
      </div>
    </section>
  );
}

