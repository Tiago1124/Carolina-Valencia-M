// ════════════════════════════════════════════════
// SECCIÓN DE LOGOS — INSTRUCCIONES DE USO
//
// Para agregar los logos reales de las empresas:
// 1. Guarda las imágenes en /public/images/logos/
// 2. Formato recomendado: SVG (vectorial) o PNG con fondo transparente
// 3. Tamaño recomendado: ~160 × 60 px (máx)
// 4. Nombra los archivos como se indica abajo
// 5. Descomenta la línea con <Image> y comenta/borra el <span>
// ════════════════════════════════════════════════

import Image from 'next/image';

interface Brand {
  name: string;
  file: string;          // nombre del archivo en /public/images/logos/
  width: number;
  height: number;
  role: 'empleada' | 'consultora';
}

const brands: Brand[] = [
  // ── Como Empleada ──────────────────────────────
  { name: 'Colgate Palmolive', file: 'colgate.svg',  width: 140, height: 42, role: 'empleada' },
  { name: 'Kimberly Clark',   file: 'kimberly.svg',  width: 130, height: 42, role: 'empleada' },
  { name: 'Casa Luker',       file: 'casaluker.svg', width: 120, height: 42, role: 'empleada' },
  { name: 'Locatel',          file: 'locatel.svg',   width: 110, height: 42, role: 'empleada' },
  { name: 'Tostao',           file: 'tostao.svg',    width: 100, height: 42, role: 'empleada' },
  { name: 'Totto',            file: 'totto.svg',     width: 100, height: 42, role: 'empleada' },
  // ── Como Consultora ────────────────────────────
  { name: 'Italcol',          file: 'italcol.svg',   width: 110, height: 42, role: 'consultora' },
  { name: 'Laskin',           file: 'laskin.svg',    width: 110, height: 42, role: 'consultora' },
];

export default function BrandsSection() {
  const empleada   = brands.filter((b) => b.role === 'empleada');
  const consultora = brands.filter((b) => b.role === 'consultora');

  return (
    <section className="bg-white section-base border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <p
          className="text-center text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#5a6578] mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Experiencia en empresas líderes
        </p>

        {/* PDF punto 7: diferenciamos empleada vs consultora */}
        <div className="flex flex-col gap-10">
          {/* Como Empleada */}
          <div>
            <p
              className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#87c1b6] mb-5 text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Trayectoria como Ejecutiva
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
              {empleada.map((b) => (
                <div
                  key={b.name}
                  className="opacity-40 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
                  title={b.name}
                >
                  {/* ── REEMPLAZA EL <span> POR EL SIGUIENTE BLOQUE cuando tengas el logo:
                      <Image
                        src={`/images/logos/${b.file}`}
                        alt={`Logo ${b.name}`}
                        width={b.width}
                        height={b.height}
                        className="object-contain"
                      />
                  ── */}
                  <span
                    className="font-display text-[1.15rem] font-bold text-[#404e66] tracking-wide whitespace-nowrap px-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {b.name}
                    {/* ← Reemplaza este <span> por el <Image> comentado arriba */}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Como Consultora */}
          <div>
            <p
              className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#c45572] mb-5 text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Clientes como Consultora
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
              {consultora.map((b) => (
                <div
                  key={b.name}
                  className="opacity-40 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
                  title={b.name}
                >
                  {/* ── Mismo bloque de reemplazo ── */}
                  <span
                    className="font-display text-[1.15rem] font-bold text-[#404e66] tracking-wide whitespace-nowrap px-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
