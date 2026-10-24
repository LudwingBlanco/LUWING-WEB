import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    name: "Landing pages",
    value: "Landing page",
    for: "Para un lanzamiento, una campaña o un servicio puntual.",
    text: "Una sola página con un objetivo claro: que el visitante entienda y actúe.",
    items: "Estructura · textos · CTA · medición",
  },
  {
    name: "Sitios corporativos",
    value: "Sitio web completo",
    for: "Para empresas que necesitan verse tan sólidas como son.",
    text: "Servicios, equipo, casos y contacto organizados con jerarquía y criterio.",
    items: "Arquitectura · contenido · SEO técnico",
  },
  {
    name: "Tiendas y catálogos",
    value: "Tienda o catálogo",
    for: "Para negocios que ya venden y quieren vender mejor.",
    text: "Producto, precios y pedido sin fricción, con una experiencia móvil impecable.",
    items: "Catálogo · fichas · pedido por WhatsApp",
  },
  {
    name: "Portafolios y marca personal",
    value: "Portafolio / marca personal",
    for: "Para profesionales creativos que viven de su trabajo.",
    text: "Tu obra al frente y tu criterio detrás. Menos relleno, más proyecto.",
    items: "Dirección de arte · galería · contacto",
  },
  {
    name: "Rediseño web",
    value: "Rediseño de un sitio existente",
    for: "Para sitios que quedaron viejos o no convierten.",
    text: "Conservo lo que funciona, reestructuro lo que estorba y modernizo la imagen.",
    items: "Auditoría · migración · rendimiento",
  },
  {
    name: "Identidad digital",
    value: "Identidad digital",
    for: "Para marcas sin un lenguaje visual coherente.",
    text: "Color, tipografía, componentes y reglas para que todo se vea parte del mismo sistema.",
    items: "Paleta · tipografía · UI kit",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section border-t border-line bg-paper-2/40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="kicker">Servicios</p>
            <h2 className="display mt-4 max-w-[19ch] text-[clamp(2.1rem,4.6vw,3.9rem)]">
              Lo que puedo construir contigo.
            </h2>
          </div>
          <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-mute md:pb-2">
            No vendo páginas sueltas: vendo un sitio que resuelve algo. Elige el punto de partida
            y lo ajustamos a tu caso en la primera conversación.
          </p>
        </div>

        <div className="mt-12 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i * 40, 160)}>
              <Link
                to={`/?servicio=${encodeURIComponent(s.value)}#contacto`}
                className="group relative -mx-3 grid gap-3 border-b border-line px-3 py-6 transition-colors duration-300 hover:bg-ink hover:text-paper-2 md:grid-cols-[1.05fr_1.45fr_auto] md:items-center md:gap-8 md:py-7"
              >
                <div>
                  <h3 className="display text-[1.55rem] sm:text-[1.8rem]">{s.name}</h3>
                  <p className="mt-1 text-[0.78rem] text-mute transition-colors group-hover:text-paper-2/55">
                    {s.for}
                  </p>
                </div>

                <div>
                  <p className="max-w-[46ch] text-[0.93rem] leading-relaxed text-ink/75 transition-colors group-hover:text-paper-2/80">
                    {s.text}
                  </p>
                  <p className="mt-2 text-[0.72rem] text-ink/60 transition-colors group-hover:text-paper-2/65">
                    {s.items}
                  </p>
                </div>

                <span className="hidden size-10 place-items-center rounded-full border border-ink/20 transition-colors group-hover:border-paper-2/40 md:grid">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2 7h9M7.5 3.5 11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
