import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";
import { useParallax } from "@/lib/hooks";

const featured = projects.find((p) => p.preview === "valentina") ?? projects[0];
const mobile = projects.find((p) => p.preview === "kalle") ?? projects[0];

const facts = [
  { title: "Diseño a medida", text: "Cada sitio se construye desde cero para tu negocio." },
  { title: "Trato directo", text: "Hablas conmigo de principio a fin, sin intermediarios." },
  { title: "Bucaramanga · Colombia", text: "Trabajo remoto con clientes de todo el país." },
];

export function Hero() {
  const visual = useParallax<HTMLDivElement>(0.055, 55);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(14,21,18,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,21,18,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-24 -z-10 hidden size-[620px] rounded-full opacity-70 blur-3xl lg:block"
        style={{ background: "radial-gradient(circle at center, rgba(32,54,255,0.20), transparent 62%)" }}
        aria-hidden="true"
      />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2.5 text-[0.78rem] text-ink/60">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#1f9d55] opacity-60" />
                <span className="relative size-2 rounded-full bg-[#1f9d55]" />
              </span>
              {site.availability}
            </p>

            <h1 className="display mt-6 text-[clamp(2.85rem,7.2vw,6.4rem)]">
              <span className="mask-line">
                <span style={{ "--d": "0.05s" } as CSSProperties}>Tu negocio</span>
              </span>
              <span className="mask-line">
                <span style={{ "--d": "0.14s" } as CSSProperties}>ya es bueno.</span>
              </span>
              <span className="mask-line">
                <span
                  className="serif text-cobalt text-[0.66em] leading-[1.02]"
                  style={{ "--d": "0.26s" } as CSSProperties}
                >
                  Que tu web lo demuestre.
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink/70 sm:text-[1.14rem]">
              Diseño y desarrollo de sitios web a medida para negocios, comercios y marcas personales.
              Estructura clara, identidad propia y una experiencia que da confianza desde el primer
              clic.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/#contacto" className="btn btn-primary">
                Empezar un proyecto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </Link>
              <Link to="/#trabajo" className="btn btn-outline">
                Ver proyectos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div ref={visual} className="relative mx-auto w-full max-w-[560px] will-change-transform lg:max-w-none">
              <div
                className="absolute -left-5 -top-5 hidden h-full w-full border border-ink/15 sm:block"
                aria-hidden="true"
              />
              <BrowserFrame project={featured} eager className="relative z-10 rotate-[0.5deg]" />

              <div className="absolute -bottom-12 -right-4 z-20 hidden rotate-[4deg] sm:block lg:-right-6">
                <PhoneFrame project={mobile} className="w-[172px] lg:w-[196px]" />
              </div>

              <div className="absolute -left-3 -top-7 z-20 hidden rotate-[-2deg] border border-ink/10 bg-paper-2/95 px-3.5 py-2.5 shadow-[0_10px_30px_-16px_rgba(14,21,18,0.5)] backdrop-blur-sm sm:block lg:-left-6 lg:-top-20">
                <p className="text-[0.58rem] uppercase tracking-[0.14em] text-ink/60">Concepto destacado</p>
                <p className="mt-1 font-display text-[0.82rem] font-semibold">Valentina Ruiz</p>
                <p className="text-[0.62rem] text-mute">Arquitectura · 2026</p>
              </div>

              <p className="mt-3 text-[0.64rem] uppercase tracking-[0.14em] text-ink/60 sm:hidden">
                Concepto destacado · Valentina Ruiz · Arquitectura
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 sm:gap-10 lg:mt-28">
          {facts.map((f) => (
            <div key={f.title}>
              <p className="text-[0.9rem] font-medium">{f.title}</p>
              <p className="mt-1 max-w-[28ch] text-[0.82rem] leading-relaxed text-mute">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
