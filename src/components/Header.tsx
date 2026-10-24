import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrolled } from "@/lib/hooks";

const links = [
  { label: "Proyectos", to: "/#trabajo" },
  { label: "Servicios", to: "/#servicios" },
  { label: "Proceso", to: "/#proceso" },
  { label: "Precios", to: "/#precios" },
];

export function Header() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Las fichas de proyecto empiezan con una banda oscura: el header necesita fondo.
  const solid = location.pathname.startsWith("/proyectos/") || location.pathname.startsWith("/legal/");
  const filled = scrolled || open || solid;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const focusTimer = window.setTimeout(() => {
      document.querySelector<HTMLElement>("#menu-movil a")?.focus({ preventScroll: true });
    }, 80);

    document.documentElement.classList.add("no-scroll");
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.documentElement.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          filled
            ? "border-b border-line/80 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="container-x">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[4.75rem]">
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="Ludwing Blanco — inicio"
          >
            <span className="relative grid size-8 place-items-center overflow-hidden rounded-[3px] bg-ink text-paper-2 transition-transform duration-500 group-hover:rotate-[-6deg]">
              <span className="font-display text-[0.82rem] font-bold leading-none tracking-tight">
                LB
              </span>
              <span className="absolute -right-1 -bottom-1 size-2 bg-cobalt" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[0.98rem] font-semibold tracking-tight">
                Ludwing Blanco
              </span>
              <span className="mt-1 text-[0.62rem] text-mute">diseño + desarrollo web</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="link-line text-[0.9rem] text-ink/80">
                {l.label}
              </Link>
            ))}
            <Link to="/#contacto" className="btn btn-primary !px-4 !py-2.5 !text-[0.86rem]">
              Cotizar proyecto
            </Link>
          </nav>

          <button
            ref={triggerRef}
            type="button"
            className="flex items-center gap-2 text-[0.85rem] md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Cerrar" : "Menú"}</span>
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0.5 h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0.5 h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      </header>

      <div
        id="menu-movil"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-6 pb-10 pt-8 transition-[opacity,transform] duration-300 md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col" aria-label="Navegación móvil">
          {links.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              className="display border-b border-line py-5 text-[2.4rem] first:border-t"
              style={{ transitionDelay: `${i * 40}ms` }}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-6">
          <Link
            to="/#contacto"
            className="btn btn-primary w-full"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Empezar un proyecto
          </Link>
          <p className="text-sm text-mute">
            Bucaramanga, Colombia
            <br />
            Diseño y desarrollo a medida
          </p>
        </div>
      </div>
    </>
  );
}
