const principles = [
  {
    title: "Claridad sobre decoración",
    text: "Si en cinco segundos no se entiende qué haces, el diseño está fallando. El efecto bonito viene después de la frase clara.",
  },
  {
    title: "Estructura antes que estilo",
    text: "Primero el mapa: qué necesita saber el visitante y en qué orden. Después la piel. Así cada sección tiene una razón para existir.",
  },
  {
    title: "Verificar, no suponer",
    text: "Navegación, formularios, enlaces, contraste y velocidad se prueban en dispositivos reales. Publicar no es el final del trabajo, es la prueba.",
  },
];

export function Approach() {
  return (
    <section id="enfoque" className="relative overflow-hidden bg-cobalt text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 size-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,rgba(0,0,0,0.55),transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container-x section relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/55">El enfoque</p>
            <h2 className="display mt-5 max-w-[15ch] text-[clamp(2.4rem,5.2vw,4.6rem)]">
              Una web también es un sistema.
            </h2>
          </div>
          <p className="max-w-[50ch] text-[1.02rem] leading-relaxed text-white/80 lg:pb-2">
            Mi formación en ingeniería industrial me enseñó a mirar un negocio como un proceso:
            entradas, decisiones y salidas. Aplico esa lógica al diseño para que el sitio no sea
            solo atractivo, sino útil para quien lo visita y para quien lo administra.
          </p>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/25 pt-9 md:grid-cols-3 md:gap-10">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-serif text-[1.45rem] leading-tight">{p.title}</h3>
              <p className="mt-3 max-w-[38ch] text-[0.9rem] leading-relaxed text-white/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
