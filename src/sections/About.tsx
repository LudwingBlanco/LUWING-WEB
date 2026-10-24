import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const facts = [
  { label: "Formación", value: "Ingeniería industrial" },
  { label: "Enfoque", value: "Diseño, contenido y desarrollo en un solo proceso" },
  { label: "Herramientas", value: "React, TypeScript, Tailwind CSS, Figma" },
  { label: "Cobertura", value: "Bucaramanga y trabajo remoto en Colombia" },
];

export function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="kicker">Quién está detrás</p>
            <h2 className="display mt-4 max-w-[14ch] text-[clamp(2.1rem,4.2vw,3.4rem)]">
              No hablas con una agencia. Hablas conmigo.
            </h2>

            <div className="mt-9 border border-ink/12 bg-paper-2 p-6">
              <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-ink/60">
                    Ficha del estudio
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] font-semibold">Ludwing Blanco</p>
                  <p className="text-[0.8rem] text-mute">Diseño y desarrollo web</p>
                </div>
                <span className="grid size-14 place-items-center rounded-[3px] border border-ink/15 bg-ink font-display text-[1.1rem] font-bold text-paper-2">
                  LB
                </span>
              </div>

              <dl className="grid gap-2.5 pt-5 text-[0.8rem]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Base</dt>
                  <dd>Bucaramanga, Colombia</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Modalidad</dt>
                  <dd>Remoto y presencial</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60">Estado</dt>
                  <dd className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#1f9d55]" />
                    {site.availability}
                  </dd>
                </div>
              </dl>
            </div>

            <Reveal variant="curtain" className="mt-5">
              <img
                src="/work/_studio/desk.webp"
                alt="Espacio de trabajo moderno con luz natural"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <p className="mt-2 text-[0.72rem] text-ink/60">
                Imagen de referencia · Trabajo desde Bucaramanga, con clientes en todo el país.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-[62ch] space-y-5 text-[1.02rem] leading-relaxed text-ink/75">
              <p>
                Soy Ludwing Blanco. Llegué al diseño web desde la ingeniería industrial, y eso marca
                cómo trabajo: antes de elegir una tipografía, entiendo el negocio, quién decide y
                qué necesita ver una persona para confiar.
              </p>
              <p>
                No trabajo con plantillas ni entrego una maqueta para que otro la programe. Diseño y
                construyo el sitio completo, lo pruebo en pantallas reales y te explico qué se puede
                ajustar después.
              </p>
              <p>
                Trabajo con negocios pequeños y medianos que necesitan una presencia seria sin pagar
                los precios de una agencia grande. Trato directo, alcances claros y un resultado que
                puedes mantener sin depender de mí para cada cambio.
              </p>
            </div>

            <dl className="mt-11 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">{f.label}</dt>
                  <dd className="mt-1.5 text-[0.92rem] leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="mt-12 border-l-2 border-cobalt pl-6">
              <p className="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug">
                «Una buena web no grita que eres bueno. Lo deja claro.»
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
