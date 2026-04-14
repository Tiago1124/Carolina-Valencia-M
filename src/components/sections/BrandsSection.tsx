/*
  LOGOS — Guarda en /public/images/logos/ como SVG o PNG con fondo transparente
  Tamaño recomendado: máx 160 × 52 px
  Nombres de archivo sugeridos (todos en minúsculas, sin espacios):
    laskin.png, italcol.png, tostao.png, grupo-conboca.png,
    locatel.png, almacenes-corona.png, via-baloto.png,
    casa-luker.png, kimberly-clark.png, colgate-palmolive.png, colombina.png,
    totto.png, ilumno.png, auros-copias.png, villa-romana.png, epex.png, skin-solutions.png

  Para activar cada logo, reemplaza el <span> de texto por:
    <Image
      src="/images/logos/nombre-empresa.png"
      alt="Nombre Empresa"
      width={140}
      height={48}
      className="object-contain max-h-[48px] w-auto"
    />
*/
import Image from 'next/image';

const EJECUTIVA: { name: string; logo?: string }[] = [
  { name: 'Laskin' },
  { name: 'Italcol' },
  { name: 'Tostao' },
  { name: 'Grupo Conboca' },
  { name: 'Locatel' },
  { name: 'Almacenes Corona' },
  { name: 'Vía Baloto' },
  { name: 'Casa Luker' },
  { name: 'Kimberly Clark' },
  { name: 'Colgate Palmolive' },
  { name: 'Colombina' },
];

const CONSULTORA: { name: string; logo?: string }[] = [
  { name: 'Totto' },
  { name: 'Ilumno' },
  { name: 'Auros Copias' },
  { name: 'Villa Romana' },
  { name: 'Epex' },
  { name: 'Skin Solutions' },
];

function LogoRow({ items, label, color }: { items: { name: string; logo?: string }[]; label: string; color: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 justify-center mb-8">
        <span className="h-px w-8 opacity-30" style={{ background: color }} />
        <p
          className="text-[0.62rem] font-bold tracking-[0.22em] uppercase"
          style={{ color, fontFamily: 'var(--font-body)' }}
        >
          {label}
        </p>
        <span className="h-px w-8 opacity-30" style={{ background: color }} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
        {items.map(({ name, logo }) => (
          <div
            key={name}
            className="opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            {logo ? (
              <Image
                src={logo}
                alt={name}
                width={140}
                height={48}
                className="object-contain max-h-[44px] w-auto"
              />
            ) : (
              <span
                className="font-bold text-[#404e66] tracking-wide whitespace-nowrap select-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}
              >
                {name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-white py-14 border-b border-[#ede9e2]">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-10 flex flex-col gap-10">
        <LogoRow items={EJECUTIVA}  label="Trayectoria como ejecutiva"  color="#87c1b6" />
        <div className="w-full h-px bg-[#ede9e2]" />
        <LogoRow items={CONSULTORA} label="Clientes como consultora"    color="#c45572" />
      </div>
    </section>
  );
}
