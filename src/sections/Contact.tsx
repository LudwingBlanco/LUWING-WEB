import { ContactForm } from "@/components/ContactForm";
import { isConfigured, mailtoLink, site, whatsappLink } from "@/lib/site";

export function Contact() {
  const wa = whatsappLink("Hola Ludwing, quiero hablar de mi proyecto web.");
  const mail = mailtoLink("Consulta de proyecto web", "Hola Ludwing, quiero hablar de mi proyecto.");

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink text-paper-2">
      <div
        className="pointer-events-none absolute -right-40 top-0 size-[640px] rounded-full opacity-40 blur-3xl"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle,rgba(32,54,255,0.55),transparent 62%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="container-x section relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/55">Contacto</p>
            <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.2rem)]">
              Cuéntame qué necesitas.
            </h2>
            <p className="mt-5 max-w-[38ch] text-[1rem] leading-relaxed text-white/70">
              Te respondo con una propuesta clara: alcance, precio y tiempos. Si todavía no lo
              tienes todo definido, también podemos empezar por ahí.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {wa ? (
                <a href={wa} target="_blank" rel="noreferrer" className="btn btn-light">
                  Escribir por WhatsApp
                </a>
              ) : (
                <span
                  className="btn cursor-not-allowed border border-white/25 text-white/55"
                  title="Configura tu número en src/lib/site.ts"
                  aria-disabled="true"
                >
                  WhatsApp · por configurar
                </span>
              )}
              {mail ? (
                <a href={mail} className="btn btn-on-dark">
                  {site.email}
                </a>
              ) : null}
            </div>

            <dl className="mt-10 space-y-4 border-t border-white/15 pt-6 text-[0.85rem]">
              <div className="flex justify-between gap-6">
                <dt className="text-white/55">Base</dt>
                <dd>Bucaramanga, Colombia</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-white/55">Cobertura</dt>
                <dd className="text-right">Área metropolitana y remoto</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-white/55">Estado</dt>
                <dd className="flex items-center gap-2 text-right">
                  <span className="size-1.5 rounded-full bg-[#3ddc84]" />
                  {site.availability}
                </dd>
              </div>
            </dl>

            <p className="mt-6 max-w-[38ch] text-[0.82rem] leading-relaxed text-white/55">
              {site.responseNote}
            </p>

            {!isConfigured(site.whatsapp) || !isConfigured(site.email) ? (
              <div className="mt-8 border border-white/15 bg-white/[0.03] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/55">
                  Configuración pendiente
                </p>
                <ul className="mt-2 space-y-1 text-[0.78rem] text-white/55">
                  {!isConfigured(site.whatsapp) ? <li>• Número de WhatsApp</li> : null}
                  {!isConfigured(site.email) ? <li>• Correo de contacto</li> : null}
                </ul>
                <p className="mt-3 text-[0.72rem] leading-relaxed text-white/55">
                  Edita <code className="text-white/60">src/lib/site.ts</code>. El formulario nunca
                  simula un envío exitoso.
                </p>
              </div>
            ) : null}
          </div>

          <div className="border border-white/12 bg-white/[0.02] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
