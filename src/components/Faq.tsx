import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance y de la velocidad con la que tengamos contenidos, textos y fotografías. El plazo se acuerda por escrito en la cotización, antes de empezar, para que no haya sorpresas.",
  },
  {
    q: "¿El diseño es personalizado?",
    a: "Sí. Cada proyecto parte de tu negocio, tu público y tu forma de vender. No reutilizo una plantilla cambiando colores: la estructura, la tipografía y el ritmo se definen contigo.",
  },
  {
    q: "¿Incluye dominio y hosting?",
    a: "No. Son servicios externos y se cotizan por separado. Te oriento sobre qué opción tiene sentido para tu proyecto y puedo encargarme de la configuración si lo necesitas.",
  },
  {
    q: "¿Se verá bien en el celular?",
    a: "Sí. Diseño y pruebo en móvil, tablet y escritorio. En Colombia la mayoría de las visitas llegan desde el celular, así que ese es el punto de partida, no una adaptación posterior.",
  },
  {
    q: "¿Cómo son los pagos?",
    a: "La forma de pago se acuerda por escrito en la cotización, normalmente con un anticipo para iniciar y el saldo contra entrega. Las condiciones exactas se definen según el alcance del proyecto.",
  },
  {
    q: "¿Ofreces mantenimiento?",
    a: "Sí, como servicio aparte. Puede incluir actualizaciones, cambios de contenido o soporte puntual. Se cotiza por separado y no es obligatorio para publicar el sitio.",
  },
  {
    q: "¿Puedo pedir cambios después de entregar?",
    a: "Incluyo una ronda de ajustes sobre lo acordado en la propuesta. Los cambios que amplían el alcance se cotizan aparte, siempre antes de ejecutarlos.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Una idea clara de tu negocio y de lo que quieres lograr. Si no tienes textos o fotografías, lo resolvemos en la etapa de estructura y contenido: no necesitas llegar con todo listo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3 className="m-0">
              <button
                type="button"
                id={`${id}-trigger`}
                className="flex w-full items-start justify-between gap-6 py-5 text-left text-[1.02rem] font-medium transition-colors hover:text-cobalt"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
                    isOpen ? "rotate-45 border-cobalt bg-cobalt text-white" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={id}
              role="region"
              aria-labelledby={`${id}-trigger`}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 pr-8 text-[0.95rem] leading-relaxed text-mute">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
