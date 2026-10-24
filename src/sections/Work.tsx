import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function Work() {
  const [first, ...rest] = projects;

  return (
    <section id="trabajo" className="section border-t border-line">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="kicker">Trabajo seleccionado</p>
            <h2 className="display mt-4 max-w-[17ch] text-[clamp(2.2rem,4.8vw,4.1rem)]">
              Cada marca merece su propio lenguaje.
            </h2>
          </div>
          <div className="md:pb-2">
            <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-mute">
              Seis conceptos completos: estrategia, dirección de arte, diseño de interfaz y
              desarrollo. Cada uno resuelve un problema distinto con una identidad propia.
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.14em] text-ink/60">
              06 conceptos · 2024 — 2026
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-16 lg:gap-y-20">
          <Reveal className="md:col-span-2">
            <ProjectCard project={first} featured />
          </Reveal>

          {rest.map((project, i) => {
            const last = i === rest.length - 1;
            return (
              <Reveal
                key={project.slug}
                delay={(i % 2) * 90}
                className={last ? "md:col-span-2" : undefined}
              >
                <ProjectCard project={project} featured={last} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
