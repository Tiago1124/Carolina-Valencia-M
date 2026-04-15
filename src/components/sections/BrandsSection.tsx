/*
  LOGOS — ya están en /public/images/logos/
  Archivos disponibles:
    laskin.png, italcol.png, tostao.png, grupo-conboca.png,
    locatel.png, corona.png, via-baloto.png, casa-luker.png,
    kimberly-clark.png, colgate-palmolive.png, colombina.png,
    totto.png, auros.png, skin-solutions.png
  
  Faltan (quedan como texto hasta que tengas el archivo):
    ilumno.png, epex.png
*/
import Image from 'next/image';

const EJECUTIVA: { name: string; logo?: string }[] = [
  { name: 'Laskin',             logo: '/images/logos/laskin.png'            },
  { name: 'Italcol',            logo: '/images/logos/italcol.png'           },
  { name: 'Tostao',             logo: '/images/logos/tostao.png'            },
  { name: 'Grupo Conboca',      logo: '/images/logos/grupo-conboca.png'     },
  { name: 'Locatel',            logo: '/images/logos/locatel.png'           },
  { name: 'Almacenes Corona',   logo: '/images/logos/corona.png'            },
  { name: 'Vía Baloto',         logo: '/images/logos/via-baloto.png'        },
  { name: 'Casa Luker',         logo: '/images/logos/casa-luker.png'        },
  { name: 'Kimberly Clark',     logo: '/images/logos/kimberly-clark.png'    },
  { name: 'Colgate Palmolive',  logo: '/images/logos/colgate-palmolive.png' },
  { name: 'Colombina',          logo: '/images/logos/colombina.png'         },
];

const CONSULTORA: { name: string; logo?: string }[] = [
  { name: 'Totto',              logo: '/images/logos/totto.png'             },
  { name: 'Ilumno',             logo: '/images/logos/ilumno.png'            },
  { name: 'Auros Copias',       logo: '/images/logos/auros.png'             },
  { name: 'Villa Romana',       logo: '/images/logos/villa-romana.png'      },
  { name: 'Epex',               logo: '/images/logos/epex.png'               },
  { name: 'Skin Solutions',     logo: '/images/logos/skin-solutions.png'    },
];

function LogoRow({
  items,
  label,
  color,
}: {
  items: { name: string; logo?: string }[];
  label: string;
  color: string;
}) {
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
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
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
        <LogoRow items={EJECUTIVA}  label="Trayectoria como ejecutiva" color="#87c1b6" />
        <div className="w-full h-px bg-[#ede9e2]" />
        <LogoRow items={CONSULTORA} label="Clientes como consultora"   color="#c45572" />
      </div>
    </section>
  );
}
