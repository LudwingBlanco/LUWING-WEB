import { Link } from "react-router-dom";
import { Faq } from "@/components/Faq";
import { whatsappLink } from "@/lib/site";

export function FaqSection() {
  const wa = whatsappLink("Hola Ludwing, tengo una pregunta sobre un proyecto web.");

  return (
    <section id="faq" className="section border-t border-line bg-paper-2/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="kicker">Preguntas frecuentes</p>
            <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.5rem)]">
              Antes de escribirme.
            </h2>
            <p className="mt-5 max-w-[36ch] text-[0.92rem] leading-relaxed text-mute">
              Las condiciones de cada proyecto se confirman por escrito en la cotización. Aquí
              están las respuestas que más se repiten.
            </p>

            <div className="mt-8 border border-line bg-paper p-5">
              <p className="text-[0.92rem] font-medium">¿Tu duda no está aquí?</p>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mute">
                Escríbeme y la resolvemos sin compromiso.
              </p>
              {wa ? (
                <a href={wa} target="_blank" rel="noreferrer" className="btn btn-primary mt-4 !py-2.5 !text-[0.85rem]">
                  Preguntar por WhatsApp
                </a>
              ) : (
                <Link to="/#contacto" className="btn btn-primary mt-4 !py-2.5 !text-[0.85rem]">
                  Ir al formulario
                </Link>
              )}
            </div>
          </div>

          <Faq />
        </div>
      </div>
    </section>
  );
}
