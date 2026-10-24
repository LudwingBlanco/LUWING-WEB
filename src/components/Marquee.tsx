const items = [
  "Sitios a medida",
  "Tiendas y catálogos",
  "Portafolios",
  "Identidad digital",
  "SEO técnico",
  "Rendimiento",
  "Diseño responsive",
  "Acompañamiento",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="marquee border-y border-line bg-paper-2/60 py-4" aria-hidden="true">
      <div className="marquee-track items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink/70">{item}</span>
            <span className="text-cobalt" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
