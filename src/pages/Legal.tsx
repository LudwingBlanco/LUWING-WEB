import { Link, useParams } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";
import { placeholder, site } from "@/lib/site";
import { NotFound } from "@/pages/NotFound";

type Doc = {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const docs: Record<string, Doc> = {
  privacidad: {
    title: "Política de privacidad",
    intro:
      "Este documento explica qué datos se recogen en este sitio, para qué se usan y cómo puedes solicitar su eliminación.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "El responsable del tratamiento es Ludwing Blanco, con base en Bucaramanga, Colombia. Puedes escribir a " +
            placeholder(site.email, "correo pendiente de configurar") +
            ".",
        ],
      },
      {
        heading: "Datos que se recogen",
        body: [
          "El formulario de contacto solicita nombre, negocio, un medio de contacto opcional, servicio de interés, presupuesto aproximado y una descripción del proyecto.",
          "El sitio no incluye analítica, píxeles publicitarios ni cookies de seguimiento en esta versión.",
        ],
      },
      {
        heading: "Para qué se usan",
        body: [
          "Únicamente para responder a tu consulta, preparar una propuesta y mantener la comunicación sobre el proyecto.",
          "No se venden ni se usan para envíos masivos. Para entregar el formulario, el sitio puede apoyarse en Web3Forms o Formspree, que reciben el mensaje y lo reenvían al correo del responsable. Esos proveedores aplican sus propias políticas de privacidad.",
        ],
      },
      {
        heading: "Conservación y derechos",
        body: [
          "Los mensajes se conservan mientras dure la conversación comercial y el tiempo necesario para responder compromisos legales.",
          "Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo al correo de contacto.",
        ],
      },
      {
        heading: "Servicios externos",
        body: [
          "El formulario puede usar Web3Forms o Formspree para entregar el mensaje al correo de contacto. WhatsApp se abre solo cuando tú eliges ese canal. Estos servicios tienen sus propias políticas y pueden alojar datos fuera de Colombia.",
        ],
      },
    ],
  },
  terminos: {
    title: "Términos del servicio",
    intro:
      "Estas son las condiciones generales para la contratación de servicios de diseño y desarrollo web. Cada proyecto se rige además por su cotización firmada.",
    sections: [
      {
        heading: "Alcance",
        body: [
          "El alcance de cada proyecto se define por escrito antes de iniciar: páginas, funcionalidades, entregables y número de revisiones.",
          "Cualquier funcionalidad no incluida se considera un adicional y se cotiza aparte.",
        ],
      },
      {
        heading: "Cotizaciones y pagos",
        body: [
          "Los precios publicados son referencias iniciales, no cotizaciones definitivas. Dominio, hosting, correo, licencias y servicios externos se cobran por separado.",
          "La forma de pago y los porcentajes se acuerdan en la propuesta de cada proyecto.",
        ],
      },
      {
        heading: "Plazos y colaboración",
        body: [
          "Los plazos dependen del alcance y de la entrega oportuna de contenidos, accesos y aprobaciones por parte del cliente.",
          "Las fechas se confirman por escrito en la cotización y pueden ajustarse si cambia el alcance.",
        ],
      },
      {
        heading: "Propiedad y uso",
        body: [
          "Al completar el pago, el cliente recibe el derecho de uso del sitio entregado. Las librerías, tipografías y recursos de terceros conservan sus propias licencias.",
          "El código y los archivos fuente se entregan según lo acordado en la propuesta.",
        ],
      },
      {
        heading: "Revisiones y soporte",
        body: [
          "Cada proyecto incluye las rondas de revisión indicadas en su cotización. Los cambios posteriores y el mantenimiento se cotizan aparte.",
        ],
      },
    ],
  },
};

export function Legal() {
  const { doc } = useParams();
  const content = doc ? docs[doc] : undefined;

  usePageMeta({
    title: `${content?.title ?? "Legal"} | Ludwing Blanco`,
    description: content?.intro ?? "Información legal del sitio.",
  });

  if (!content) return <NotFound />;

  return (
    <article className="pb-20 pt-28 sm:pt-32">
      <div className="container-x">
        <Link to="/" className="text-[0.78rem] text-mute transition-colors hover:text-ink">
          ← Volver al inicio
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="kicker">Legal</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)]">{content.title}</h1>
            <p className="mt-5 max-w-[38ch] text-[0.92rem] leading-relaxed text-mute">{content.intro}</p>

            <p className="mt-8 border border-line bg-paper-2 px-4 py-3 text-[0.75rem] leading-relaxed text-ink/60">
              Documento base pendiente de revisión legal antes de publicar. Ajusta los datos de
              contacto y las condiciones a tu operación real.
            </p>
          </div>

          <div className="max-w-[68ch] space-y-9">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[1.15rem] font-semibold">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[0.94rem] leading-relaxed text-ink/70">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <p className="border-t border-line pt-5 text-[0.78rem] text-ink/60">
              Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long" })}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
