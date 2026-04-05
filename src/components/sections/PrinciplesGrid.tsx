'use client';

const principles = [
  { title: 'Causas raíz, no síntomas', body: 'La mayoría de las intervenciones de marketing atacan el síntoma. Yo busco por qué bajaron las ventas antes de recomendar cualquier cosa.' },
  { title: 'Foco sobre amplitud', body: 'Hacer 20 cosas a medias no es estrategia. Prefiero hacer 3 cosas con excelencia que sean capaces de mover el número que importa.' },
  { title: 'P&L primero, creatividad después', body: 'La creatividad es una herramienta al servicio del resultado. Una idea brillante que no mueve el P&L no es una estrategia. Es arte.' },
  { title: 'Ejecución sobre planificación', body: 'Los planes perfectos que nunca se ejecutan valen cero. Prefiero un plan del 80% que se ejecute con disciplina al plan perfecto que queda en el papel.' },
];

export default function PrinciplesGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {principles.map((p, i) => (
        <div
          key={i}
          className="rounded-xl p-7 border transition-colors card-hover"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(135,193,182,0.4)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
        >
          <h3 className="text-[1rem] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            {p.title}
          </h3>
          <p className="text-[0.88rem] text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {p.body}
          </p>
        </div>
      ))}
    </div>
  );
}
