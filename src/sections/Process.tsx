import { Link } from "react-router-dom";

const steps = [
  {
    title: "Diagnóstico",
    text: "Conozco el negocio, el público y el objetivo real del sitio. Reviso lo que ya existe para no empezar de cero sin necesidad.",
    output: "Brief y alcance por escrito",
    kind: "Punto de partida",
  },
  {
    title: "Estructura y contenido",
    text: "Defino páginas, jerarquía y qué dice cada sección. Ajustamos los textos hasta que se entiendan sin explicaciones extra.",
    output: "Mapa del sitio y guion de contenidos",
    kind: "Definición",
  },
  {
    title: "Dirección visual",
    text: "Paleta, tipografía, componentes y ritmo. Una identidad que se reconoce y que no se parece a la del negocio de al lado.",
    output: "Sistema visual y prototipo navegable",
    kind: "Dirección de arte",
  },
  {
    title: "Desarrollo",
    text: "Construyo el sitio con código limpio, animaciones cuidadas y foco en móvil. Sin librerías de más ni efectos que estorben.",
    output: "Sitio funcional en entorno de pruebas",
    kind: "Construcción",
  },
  {
    title: "Pruebas y publicación",
    text: "Navegación, formularios, enlaces, contraste, teclado y velocidad. Configuramos dominio y hosting y publicamos.",
    output: "Checklist de pruebas y sitio en línea",
    kind: "Cierre",
  },
];

export function Process() {
  return (
    <section id="proceso" className="section border-t border-line bg-paper-2/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="kicker">Proceso</p>
            <h2 className="display mt-4 max-w-[15ch] text-[clamp(2.1rem,4.4vw,3.6rem)]">
              De la idea a la publicación, sin saltos.
            </h2>
            <p className="mt-6 max-w-[38ch] text-[0.95rem] leading-relaxed text-mute">
              Cinco etapas, un solo responsable y decisiones documentadas. Sabes en qué punto está
              tu proyecto y qué falta para avanzar.
            </p>

            <div className="mt-9 hidden items-center gap-4 lg:flex">
              <span className="font-display text-[2.2rem] leading-none text-cobalt">05</span>
              <span className="text-[0.72rem] uppercase tracking-[0.14em] text-ink/60">
                etapas
                <br />
                con entregables
              </span>
            </div>

            <Link to="/#contacto" className="btn btn-outline mt-8 hidden lg:inline-flex">
              Hablemos de tu proyecto
            </Link>
          </div>

          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="lg:sticky"
                style={{ top: `${104 + i * 14}px`, zIndex: i + 1 }}
              >
                <article className="border border-ink/12 bg-paper p-6 shadow-[0_26px_50px_-38px_rgba(14,21,18,0.65)] sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-[0.8rem] font-semibold tracking-wide text-cobalt">
                      Etapa 0{i + 1}
                    </span>
                    <span className="text-[0.66rem] uppercase tracking-[0.12em] text-ink/60">
                      {step.kind}
                    </span>
                  </div>

                  <h3 className="display mt-3 text-[1.6rem] sm:text-[1.85rem]">{step.title}</h3>
                  <p className="mt-2 max-w-[54ch] text-[0.92rem] leading-relaxed text-mute">
                    {step.text}
                  </p>

                  <p className="mt-5 border-t border-line pt-3 text-[0.78rem] text-ink/60">
                    <span className="text-ink/60">Recibes: </span>
                    {step.output}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
