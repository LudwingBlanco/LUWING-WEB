import type { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, projects } from "@/data/projects";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { usePageMeta } from "@/lib/usePageMeta";
import { NotFound } from "@/pages/NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const p = project;

  const theme = {
    "--case-accent": p.palette.accent,
    "--case-line": p.palette.line,
  } as CSSProperties;

  return <CaseContent key={p.slug} project={p} next={next} theme={theme} />;
}

function CaseContent({
  project: p,
  next,
  theme,
}: {
  project: (typeof projects)[number];
  next: (typeof projects)[number];
  theme: CSSProperties;
}) {
  usePageMeta({
    title: `${p.name} — Caso de estudio | Ludwing Blanco`,
    description: p.summary,
    image: asset(`work/${p.slug}/1-1600.webp`),
    type: "article",
  });

  return (
    <article style={theme}>
      <header className="relative pb-20 pt-24 sm:pt-28" style={{ background: p.palette.bg, color: p.palette.fg }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-x relative">
          <Link
            to="/#trabajo"
            className="inline-flex items-center gap-2 text-[0.78rem] opacity-60 transition-opacity hover:opacity-100"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M12 7H3M6.5 3.5 3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Volver a proyectos
          </Link>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p
                className="text-[0.7rem] uppercase tracking-[0.18em]"
                style={{ color: p.palette.accent }}
              >
                {p.sector} · {p.year}
              </p>
              <h1
                className="mt-3 text-[clamp(2.8rem,7.5vw,6rem)] leading-[0.95]"
                style={{
                  fontFamily: p.type.display.includes("Serif")
                    ? "var(--font-serif)"
                    : "var(--font-display)",
                  fontWeight: p.type.display.includes("Serif") ? 400 : 700,
                  letterSpacing: p.type.display.includes("Serif") ? "-0.015em" : "-0.045em",
                }}
              >
                {p.name}
              </h1>
              <p className="mt-4 max-w-[42ch] text-[1.02rem] leading-relaxed opacity-80">{p.tagline}</p>
            </div>

            <dl
              className="grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-5 text-[0.8rem]"
              style={{ borderColor: p.palette.line }}
            >
              <div>
                <dt className="opacity-65">Sector</dt>
                <dd className="mt-1 opacity-90">{p.sector}</dd>
              </div>
              <div>
                <dt className="opacity-65">Año</dt>
                <dd className="mt-1 opacity-90">{p.year}</dd>
              </div>
              <div>
                <dt className="opacity-65">Estado</dt>
                <dd className="mt-1 opacity-90">{p.status}</dd>
              </div>
              <div>
                <dt className="opacity-65">Rol</dt>
                <dd className="mt-1 opacity-90">Diseño y desarrollo</dd>
              </div>
              <div className="col-span-2">
                <dt className="opacity-65">Servicios</dt>
                <dd className="mt-1 opacity-90">{p.services.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="container-x relative z-10 -mt-10 sm:-mt-14">
        <Reveal variant="curtain">
          <BrowserFrame project={p} eager />
        </Reveal>
        <div className="mt-3 flex items-center justify-between gap-4 text-[0.72rem] text-ink/60">
          <span>Home · vista de escritorio</span>
          <span>Proyecto conceptual · {p.year}</span>
        </div>
      </div>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="kicker">Caso de estudio</p>
              <h2 className="display mt-4 max-w-[15ch] text-[clamp(1.9rem,3.6vw,2.7rem)]">
                Un problema concreto, una dirección clara.
              </h2>
              <p className="mt-5 max-w-[38ch] text-[0.95rem] leading-relaxed text-mute">{p.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="border border-ink/15 px-2.5 py-1 text-[0.72rem] text-ink/60"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[64ch] space-y-10">
              <div>
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                  <span style={{ color: p.palette.accent }}>01 </span>
                  El reto
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink/75">{p.challenge}</p>
              </div>
              <div>
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                  <span style={{ color: p.palette.accent }}>02 </span>
                  La dirección
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink/75">{p.approach}</p>
              </div>
              <blockquote className="border-l-2 pl-5" style={{ borderColor: p.palette.accent }}>
                <p className="font-serif text-[1.35rem] leading-snug text-ink/85">{p.detail}</p>
              </blockquote>
              <div className="border-t border-line pt-5">
                <p className="text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">Objetivo</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{p.goal}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-paper-2/40">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex justify-center">
              <PhoneFrame project={p} />
            </div>

            <div>
              <p className="kicker">Interfaz</p>
              <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.7rem)]">
                Pensado primero para el pulgar.
              </h2>
              <p className="mt-4 max-w-[44ch] text-[0.95rem] leading-relaxed text-mute">
                La versión móvil no es una copia reducida: cambia el orden, prioriza la acción y
                elimina lo que estorba en una pantalla pequeña.
              </p>

              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {p.features.map((f) => (
                  <div key={f.title} className="border-t border-line pt-3">
                    <h3 className="text-[0.92rem] font-medium">{f.title}</h3>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mute">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="kicker">Sistema visual</p>
              <h2 className="display mt-4 max-w-[14ch] text-[clamp(1.9rem,3.4vw,2.6rem)]">
                Una identidad, no una decoración.
              </h2>
              <p className="mt-4 max-w-[34ch] text-[0.9rem] leading-relaxed text-mute">
                Color y tipografía con reglas claras para que el sitio siga siendo coherente cuando
                crezca.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">Paleta</p>
                <div className="mt-3 grid grid-cols-5 overflow-hidden border border-ink/10">
                  {[
                    ["Fondo", p.palette.bg],
                    ["Texto", p.palette.fg],
                    ["Acento", p.palette.accent],
                    ["Suave", p.palette.soft],
                    ["Línea", p.palette.line],
                  ].map(([label, color]) => (
                    <div key={label} className="aspect-square" style={{ background: color }} title={color} />
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-[0.72rem] text-ink/60">
                  {[
                    ["Fondo", p.palette.bg],
                    ["Texto", p.palette.fg],
                    ["Acento", p.palette.accent],
                    ["Suave", p.palette.soft],
                    ["Línea", p.palette.line],
                  ].map(([label, color]) => (
                    <li key={label} className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <span
                          className="inline-block size-2.5 border border-ink/15"
                          style={{ background: color }}
                        />
                        {label}
                      </span>
                      <code className="text-[0.68rem] uppercase text-ink/60">{color}</code>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">Tipografía</p>
                <div className="mt-3 border border-ink/10 bg-paper-2 p-5">
                  <p
                    className="text-[3.2rem] leading-none"
                    style={{
                      fontFamily: p.type.display.includes("Serif")
                        ? "var(--font-serif)"
                        : "var(--font-display)",
                      fontWeight: p.type.display.includes("Serif") ? 400 : 800,
                    }}
                  >
                    Aa
                  </p>
                  <p className="mt-3 font-display text-[0.95rem] font-semibold">{p.type.display}</p>
                  <p className="text-[0.78rem] text-mute">Titulares y nombres</p>
                  <div className="mt-4 border-t border-line pt-3">
                    <p className="text-[1.15rem]">Aa Bb Cc</p>
                    <p className="mt-1 text-[0.78rem] text-mute">{p.type.body} · textos y datos</p>
                  </div>
                </div>

                <p className="mt-6 text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">Alcance</p>
                <ul className="mt-3 space-y-1.5 text-[0.82rem] text-ink/70">
                  {p.scope.slice(0, 4).map((s) => (
                    <li key={s} className="flex gap-2">
                      <span style={{ color: p.palette.accent }}>+</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line pb-16 pt-14 sm:pb-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Dirección de arte</p>
              <h2 className="display mt-3 text-[clamp(1.8rem,3.2vw,2.4rem)]">Imagen y encuadre</h2>
            </div>
            <p className="max-w-[38ch] text-[0.85rem] leading-relaxed text-mute">
              Fotografía al servicio del mensaje: producto, oficio y el lugar donde ocurre todo.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <Reveal variant="curtain">
              <figure>
                <img
                  src={asset(`work/${p.slug}/${p.images[0].file}-1600.webp`)}
                  alt={p.images[0].alt}
                  width={1600}
                  height={1067}
                  loading="lazy"
                  className="aspect-[21/9] w-full object-cover"
                />
                <figcaption className="mt-2 text-[0.72rem] text-ink/60">{p.images[0].caption}</figcaption>
              </figure>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {p.images.slice(1).map((image, i) => (
                <Reveal key={image.file} delay={i * 80} variant="curtain">
                  <figure>
                    <img
                      src={asset(`work/${p.slug}/${image.file}-800.webp`)}
                      srcSet={`${asset(`work/${p.slug}/${image.file}-800.webp`)} 800w, ${asset(`work/${p.slug}/${image.file}-1600.webp`)} 1600w`}
                      sizes="(min-width: 640px) 45vw, 92vw"
                      alt={image.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption className="mt-2 text-[0.72rem] text-ink/60">{image.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2/60 py-14 sm:py-16">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="kicker">Alcance del proyecto</p>
              <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {p.scope.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-line pb-3 text-[0.9rem]">
                    <span className="text-cobalt" aria-hidden="true">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[34ch]">
              {p.testimonial ? (
                <>
                  <p className="font-serif text-[1.35rem] leading-snug">«{p.testimonial.quote}»</p>
                  <p className="mt-4 text-[0.78rem] text-ink/60">
                    {p.testimonial.author} · {p.testimonial.role}
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-ink/60">
                    Brief simulado · proyecto conceptual
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="kicker">¿Necesitas algo así?</p>
              <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.8rem)]">
                Tu proyecto puede ser el siguiente.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/#contacto" className="btn btn-primary">
                Empezar un proyecto
              </Link>
              <Link to="/#trabajo" className="btn btn-outline">
                Ver más proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Link
        to={`/proyectos/${next.slug}`}
        className="group block border-t"
        style={{ background: next.palette.bg, color: next.palette.fg, borderColor: next.palette.line }}
      >
        <div className="container-x flex items-center justify-between gap-6 py-10">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.16em] opacity-65">Siguiente proyecto</p>
            <p className="display mt-2 text-[clamp(1.8rem,4vw,3rem)]">{next.name}</p>
            <p className="mt-1 text-[0.8rem] opacity-60">
              {next.sector} · {next.year}
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-current/30 transition-transform duration-300 group-hover:translate-x-1">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
