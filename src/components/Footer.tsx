import { Link } from "react-router-dom";
import { mailtoLink, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const wa = whatsappLink("Hola Ludwing, quiero hablar de mi proyecto web.");
  const mail = mailtoLink("Consulta de proyecto web", "Hola Ludwing, quiero hablar de mi proyecto.");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper-2">
      <div className="container-x pt-14 pb-8">
        <div className="flex flex-col gap-10 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.16em] text-white/55">
              Diseño y desarrollo web · Bucaramanga
            </p>
            <p className="display mt-4 text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.9]">
              Ludwing Blanco<span className="text-cobalt">.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:gap-14">
            <div>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.14em] text-white/55">Navegación</p>
              <ul className="space-y-2 text-white/75">
                <li><Link to="/#trabajo" className="link-line">Proyectos</Link></li>
                <li><Link to="/#servicios" className="link-line">Servicios</Link></li>
                <li><Link to="/#proceso" className="link-line">Proceso</Link></li>
                <li><Link to="/#precios" className="link-line">Precios</Link></li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.14em] text-white/55">Contacto</p>
              <ul className="space-y-2 text-white/75">
                <li>
                  {wa ? (
                    <a href={wa} target="_blank" rel="noreferrer" className="link-line">
                      WhatsApp
                    </a>
                  ) : (
                    <span className="text-white/55" title="Configura el número en src/lib/site.ts">
                      [WhatsApp sin configurar]
                    </span>
                  )}
                </li>
                <li>
                  {mail ? (
                    <a href={mail} className="link-line">
                      {site.email}
                    </a>
                  ) : (
                    <span className="text-white/55" title="Configura el correo en src/lib/site.ts">
                      [correo sin configurar]
                    </span>
                  )}
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.14em] text-white/55">Legal</p>
              <ul className="space-y-2 text-white/75">
                <li><Link to="/legal/privacidad" className="link-line">Privacidad</Link></li>
                <li><Link to="/legal/terminos" className="link-line">Términos</Link></li>
                <li>
                  <button
                    type="button"
                    className="link-line cursor-pointer text-left"
                    onClick={() => {
                      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
                    }}
                  >
                    Volver arriba
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.75rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ludwing Blanco · Bucaramanga, Colombia</p>
          <p>
            Sitio diseñado y desarrollado por Ludwing Blanco. Los proyectos presentados son
            conceptos de diseño.
          </p>
        </div>
      </div>
    </footer>
  );
}
