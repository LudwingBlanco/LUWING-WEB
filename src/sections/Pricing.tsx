import { Link } from "react-router-dom";
import { addOns, plans, pricingNote } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Pricing() {
  return (
    <section id="precios" className="section border-t border-line">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="kicker">Planes y precios</p>
            <h2 className="display mt-4 max-w-[18ch] text-[clamp(2.1rem,4.6vw,3.9rem)]">
              Referencias claras para empezar.
            </h2>
          </div>
          <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-mute md:pb-2">
            Cada proyecto se cotiza por escrito según su alcance. Estos valores sirven para
            ubicarnos: no son precios cerrados ni incluyen servicios externos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-0">
          {plans.map((plan) => (
            <Reveal key={plan.id} delay={plan.featured ? 60 : 0}>
              <article
                className={`flex h-full flex-col border p-7 sm:p-8 lg:min-h-[540px] ${
                  plan.featured
                    ? "border-ink bg-ink text-paper-2 lg:-my-3 lg:border-2 lg:py-10"
                    : "border-ink/12 bg-paper-2"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display text-[1.65rem]">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full border border-white/25 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-white/70">
                      Más completo
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 border-b border-current/15 pb-6">
                  {plan.price ? (
                    <p className="display text-[1.75rem] leading-tight sm:text-[2rem]">{plan.price}</p>
                  ) : (
                    <p className="display text-[1.75rem] leading-tight sm:text-[2rem]">Según alcance</p>
                  )}
                  <p className={`mt-2 text-[0.78rem] ${plan.featured ? "text-paper-2/55" : "text-mute"}`}>
                    {plan.priceNote}
                  </p>
                </div>

                <p className={`mt-5 text-[0.9rem] leading-relaxed ${plan.featured ? "text-paper-2/75" : "text-ink/70"}`}>
                  {plan.summary}
                </p>

                <ul className="mt-6 grid gap-2.5 text-[0.86rem]">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className={plan.featured ? "text-[#93a4ff]" : "text-cobalt"} aria-hidden="true">
                        +
                      </span>
                      <span className={plan.featured ? "text-paper-2/85" : "text-ink/80"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/?plan=${plan.id}#contacto`}
                  className={`btn mt-8 w-full ${plan.featured ? "btn-light" : "btn-outline"} lg:mt-auto`}
                >
                  {plan.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 border-t border-line pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <h3 className="text-[0.95rem] font-medium">Funcionalidades adicionales</h3>
            <p className="mt-2 max-w-[40ch] text-[0.85rem] leading-relaxed text-mute">
              Se cotizan aparte y se acuerdan antes de ejecutarlas. El precio depende de la
              complejidad, no de una lista fija.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-[0.86rem] sm:grid-cols-2">
            {addOns.map((item) => (
              <li key={item} className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2">
                <span>{item}</span>
                <span className="text-[0.66rem] uppercase tracking-[0.1em] text-ink/60">Aparte</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-[92ch] text-[0.78rem] leading-relaxed text-ink/60">{pricingNote}</p>
      </div>
    </section>
  );
}
