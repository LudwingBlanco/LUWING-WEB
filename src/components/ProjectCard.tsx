import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { BrowserFrame } from "@/components/Frames";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link to={`/proyectos/${project.slug}`} className="group block">
      <div
        className={`relative overflow-hidden border border-ink/10 transition-colors duration-500 ${
          featured ? "p-4 sm:p-6 lg:p-9" : "p-4 sm:p-6"
        }`}
        style={{ backgroundColor: project.palette.soft }}
      >
        <div className="transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.006]">
          <BrowserFrame project={project} />
        </div>
      </div>

      <div className={`mt-5 flex items-start justify-between gap-6 ${featured ? "lg:mt-7" : ""}`}>
        <div>
          <h3 className={`display ${featured ? "text-[1.9rem] sm:text-[2.5rem]" : "text-[1.6rem] sm:text-[1.9rem]"}`}>
            {project.name}
          </h3>
          <p className="mt-1.5 text-[0.82rem] text-mute">
            {project.sector} · {project.year} · <span className="text-ink/60">Concepto</span>
          </p>
        </div>

        <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3.5 10.5 10.5 3.5M10.5 3.5H4.8M10.5 3.5v5.7" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </div>

      <p className={`mt-3 max-w-[60ch] text-[0.92rem] leading-relaxed text-mute ${featured ? "sm:text-[1rem]" : ""}`}>
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.74rem] text-ink/60">
        {project.services.map((s) => (
          <li key={s} className="after:ml-4 after:text-line after:content-['/'] last:after:hidden">
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}
