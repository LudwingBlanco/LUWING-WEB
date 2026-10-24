import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

const img = (slug: string, file: string, size: 800 | 1600 = 800) =>
  asset(`work/${slug}/${file}-${size}.webp`);

export const previewUrls: Record<Project["preview"], string> = {
  kalle: "kalle17.co",
  tinta: "tintanegra.studio",
  casa: "casacacao.co",
  arce: "arcedelgado.com",
  valentina: "valentinaruiz.co",
  pulso: "pulso.fit",
};

type MiniProps = { slug: string; loading: "eager" | "lazy" };

function Kalle({ slug, loading }: MiniProps) {
  return (
    <>
      <div className="k-top">
        <span>Envío gratis desde $250.000</span>
        <span>Bucaramanga · Colombia</span>
      </div>
      <header className="k-nav">
        <div className="k-logo">
          KALLE <span>17</span>
        </div>
        <nav className="k-links">
          <span>Tienda</span>
          <span>Drops</span>
          <span>Nosotros</span>
        </nav>
        <div className="k-bag">Bolsa (2)</div>
      </header>
      <section className="k-hero">
        <div>
          <div className="k-kicker">Drop 04 — 18 de octubre</div>
          <h1 className="k-title">
            Noche
            <br />
            de barrio
          </h1>
          <p className="k-sub">
            Seis piezas de edición corta, algodón pesado y corte recto. Sin reposición.
          </p>
          <span className="k-btn">Ver el drop</span>
        </div>
        <figure className="k-heroimg">
          <img src={img(slug, "2")} alt="" loading={loading} />
        </figure>
      </section>
      <div className="k-strip">
        <span>Envíos a todo Colombia</span>
        <span>Cambios en 30 días</span>
        <span>Hecho en Bucaramanga</span>
      </div>
      <section className="k-products">
        <div className="k-phead">
          <h2>Del drop 04</h2>
          <span>Ver todo</span>
        </div>
        <div className="k-grid">
          {[
            { n: "Camiseta Pescaíto", p: "$89.000", t: "Algodón 240 g", f: "1" },
            { n: "Hoodie Cabecera", p: "$189.000", t: "Felpa 480 g", f: "3" },
            { n: "Gorra Girón", p: "$69.000", t: "Bordado 3D", f: "1" },
          ].map((x) => (
            <article className="k-card" key={x.n}>
              <div className="k-img">
                <img src={img(slug, x.f)} alt="" loading={loading} />
              </div>
              <div className="k-meta">
                <b>{x.n}</b>
                <span>{x.p}</span>
              </div>
              <div className="k-tagline">{x.t}</div>
            </article>
          ))}
        </div>
      </section>
      <footer className="k-foot">
        <span>Kalle 17 © 2026</span>
        <span>Bucaramanga, CO</span>
      </footer>
    </>
  );
}

function Tinta({ slug, loading }: MiniProps) {
  return (
    <>
      <header className="t-nav">
        <div className="t-logo">Tinta Negra</div>
        <nav className="t-links">
          <span>Estilos</span>
          <span>Artistas</span>
          <span>Cuidados</span>
        </nav>
        <span className="t-res">Reservar</span>
      </header>
      <section className="t-hero">
        <div className="t-copy">
          <div className="t-kick">Estudio de tatuaje · Bucaramanga</div>
          <h1 className="t-title">
            Tinta que
            <br />
            no se borra.
          </h1>
          <p className="t-sub">
            Blackwork, fine line y composición japonesa. Dos artistas, agenda limitada y
            un solo criterio: que la pieza dure.
          </p>
          <span className="t-link">Agendar una cita</span>
        </div>
        <figure className="t-heroimg">
          <img src={img(slug, "1")} alt="" loading={loading} />
          <figcaption>Blackwork · 12 horas</figcaption>
        </figure>
      </section>
      <div className="t-gal">
        {[
          { f: "2", c: "Fine line" },
          { f: "3", c: "Sesión" },
          { f: "1", c: "Japonés" },
        ].map((x) => (
          <figure key={x.c}>
            <img src={img(slug, x.f)} alt="" loading={loading} />
            <figcaption>{x.c}</figcaption>
          </figure>
        ))}
      </div>
      <div className="t-artists">
        <div className="t-artist">
          <b>Maleja Ríos</b>
          <span>Blackwork</span>
        </div>
        <div className="t-artist">
          <b>Sebas Ortiz</b>
          <span>Fine line</span>
        </div>
      </div>
      <footer className="t-foot">
        <span>Calle 35 #12-08 · Bucaramanga</span>
        <span>Mar a sáb · 10:00 – 19:00</span>
      </footer>
    </>
  );
}

function Casa({ slug, loading }: MiniProps) {
  return (
    <>
      <header className="c-nav">
        <div className="c-logo">Casa Cacao</div>
        <nav className="c-links">
          <span>Carta</span>
          <span>Nosotros</span>
          <span>Visítanos</span>
        </nav>
        <span className="c-pedir">Pedir</span>
      </header>
      <section className="c-hero">
        <div>
          <div className="c-kick">Chocolatería artesanal · Floridablanca</div>
          <h1 className="c-title">
            Cacao de Santander,
            <br />
            hecho a mano.
          </h1>
          <p className="c-sub">
            Trabajamos con cacao de pequeños productores. Barras, bebidas y postres
            hechos cada mañana en el taller.
          </p>
          <span className="c-btn">Ver la carta</span>
        </div>
        <figure className="c-img">
          <img src={img(slug, "1")} alt="" loading={loading} />
        </figure>
      </section>
      <section className="c-menu">
        <h2>De la casa</h2>
        {[
          ["Chocolate 70%", "Barra de 90 g, origen Santander", "$12.000"],
          ["Mocaccino de cacao", "Espresso, cacao y leche vaporizada", "$9.500"],
          ["Torta de cacao", "Porción, receta de la abuela", "$8.000"],
        ].map(([name, desc, price]) => (
          <div className="c-row" key={name}>
            <div>
              <b>{name}</b>
              <small>{desc}</small>
            </div>
            <span>{price}</span>
          </div>
        ))}
      </section>
      <footer className="c-info">
        <span>
          <b>Abierto ahora</b> · 8:00 – 20:00
        </span>
        <span>Cra 33 #48-12 · Floridablanca</span>
      </footer>
    </>
  );
}

function Arce({ slug, loading }: MiniProps) {
  return (
    <>
      <header className="a-nav">
        <div className="a-logo">Arce &amp; Delgado</div>
        <nav className="a-links">
          <span>Áreas</span>
          <span>Equipo</span>
          <span>Artículos</span>
        </nav>
        <span className="a-cta">Consulta</span>
      </header>
      <section className="a-hero">
        <div>
          <div className="a-kick">Abogados · Santander</div>
          <h1 className="a-title">Criterio jurídico para decisiones importantes.</h1>
          <p className="a-side">
            Acompañamos empresas y familias en asuntos corporativos, laborales y de
            familia.
            <b>Primera conversación sin costo.</b>
          </p>
        </div>
        <figure className="a-img">
          <img src={img(slug, "1")} alt="" loading={loading} />
        </figure>
      </section>
      <div className="a-stats">
        {[
          ["20", "Años de práctica"],
          ["3", "Áreas de trabajo"],
          ["48 h", "Respuesta a consultas"],
        ].map(([big, small]) => (
          <div className="a-stat" key={small}>
            <b>{big}</b>
            <span>{small}</span>
          </div>
        ))}
      </div>
      <section className="a-areas">
        {[
          ["Corporativo", "Constitución, contratos y gobierno corporativo."],
          ["Laboral", "Contratación, despidos y cumplimiento normativo."],
          ["Familia", "Sucesiones, custodia y acuerdos de convivencia."],
        ].map(([name, text]) => (
          <div className="a-area" key={name}>
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
      <footer className="a-foot">
        <span>Arce &amp; Delgado Abogados</span>
        <span>Bucaramanga · Colombia</span>
      </footer>
    </>
  );
}

function Valentina({ slug, loading }: MiniProps) {
  return (
    <>
      <header className="v-nav">
        <div className="v-logo">Valentina Ruiz</div>
        <nav className="v-links">
          <span>Proyectos</span>
          <span>Estudio</span>
          <span>Contacto</span>
        </nav>
      </header>
      <section className="v-hero">
        <div className="v-kick">
          <span>Arquitectura · Bucaramanga</span>
          <span>Obra 2019 — 2026</span>
        </div>
        <h1 className="v-title">
          Espacios que se habitan <em>despacio.</em>
        </h1>
        <figure className="v-heroimg">
          <img src={img(slug, "2")} alt="" loading={loading} />
        </figure>
        <div className="v-cap">
          <span>Casa Cacique · 2025</span>
          <span>320 m² · Santander</span>
        </div>
      </section>
      <section className="v-grid">
        {[
          { f: "1", n: "Torre Hunza", y: "2026", t: "Comercial" },
          { f: "3", n: "Edificio Norte", y: "2024", t: "Corporativo" },
        ].map((x) => (
          <div className="v-proj" key={x.n}>
            <figure>
              <img src={img(slug, x.f)} alt="" loading={loading} />
            </figure>
            <div>
              <b>{x.n}</b>
              <span>
                {x.t} · {x.y}
              </span>
            </div>
          </div>
        ))}
      </section>
      <footer className="v-foot">
        <span>Valentina Ruiz Arquitectura</span>
        <span>hola@valentinaruiz.co</span>
      </footer>
    </>
  );
}

function Pulso({ slug, loading }: MiniProps) {
  return (
    <>
      <header className="p-nav">
        <div className="p-logo">PULSO</div>
        <nav className="p-links">
          <span>Clases</span>
          <span>Horarios</span>
          <span>Planes</span>
        </nav>
        <span className="p-cta">Primera gratis</span>
      </header>
      <section className="p-hero">
        <div>
          <div className="p-kick">Entrenamiento funcional · Cabecera</div>
          <h1 className="p-title">
            Entrena
            <br />
            con <span>intención.</span>
          </h1>
          <p className="p-sub">
            Grupos de seis personas, un entrenador y una progresión real. Sin filas, sin
            espejos de más.
          </p>
        </div>
        <figure className="p-img">
          <img src={img(slug, "1")} alt="" loading={loading} />
          <span className="p-badge">Cupos limitados</span>
        </figure>
      </section>
      <section className="p-sched">
        <div className="p-sched-head">
          <span>Hoy · jueves</span>
          <span>Ver semana</span>
        </div>
        {[
          ["06:00", "Fuerza", "4 cupos", "Reservar"],
          ["18:30", "Movilidad", "2 cupos", "Reservar"],
        ].map(([time, name, spots, action]) => (
          <div className="p-row" key={time}>
            <time>{time}</time>
            <b>{name}</b>
            <small>{spots}</small>
            <span>{action}</span>
          </div>
        ))}
      </section>
      <footer className="p-foot">
        <span>Pulso Studio</span>
        <span>Cra 36 #52-14 · Bucaramanga</span>
      </footer>
    </>
  );
}

const previews = {
  kalle: Kalle,
  tinta: Tinta,
  casa: Casa,
  arce: Arce,
  valentina: Valentina,
  pulso: Pulso,
};

type Props = {
  project: Project;
  variant?: "desktop" | "mobile";
  eager?: boolean;
};

export function ProjectPreview({ project, variant = "desktop", eager = false }: Props) {
  const Mini = previews[project.preview];
  const loading = eager ? "eager" : "lazy";

  return (
    <div className="pv-wrap" aria-hidden="true">
      <div
        className={`pv ${variant === "mobile" ? "is-mobile" : ""}`}
        style={
          {
            "--pv-bg": project.palette.bg,
            "--pv-fg": project.palette.fg,
            "--pv-accent": project.palette.accent,
          } as CSSProperties
        }
      >
        <Mini slug={project.slug} loading={loading} />
      </div>
    </div>
  );
}
