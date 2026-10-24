import { useEffect, useId, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isConfigured, mailtoLink, plans, site, whatsappLink } from "@/lib/site";

const services = [
  "Landing page",
  "Sitio web completo",
  "Tienda o catálogo",
  "Portafolio / marca personal",
  "Rediseño de un sitio existente",
  "Identidad digital",
  "No estoy seguro todavía",
];

const budgets = [
  "Aún no lo sé",
  "Hasta $400.000 COP",
  "$400.000 – $1.500.000 COP",
  "$1.500.000 – $3.000.000 COP",
  "Más de $3.000.000 COP",
];

type Fields = {
  name: string;
  business: string;
  contact: string;
  service: string;
  budget: string;
  description: string;
};

const initial: Fields = {
  name: "",
  business: "",
  contact: "",
  service: "",
  budget: budgets[0],
  description: "",
};

type Status =
  | { kind: "idle" }
  | { kind: "error"; text: string }
  | { kind: "config"; text: string }
  | { kind: "whatsapp"; text: string }
  | { kind: "copied"; text: string };

export function ContactForm() {
  const [params] = useSearchParams();
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [message, setMessage] = useState("");
  const planParam = params.get("plan");
  const plan = plans.find((p) => p.id === planParam || p.name.toLowerCase() === planParam?.toLowerCase());
  const [selectedPlan, setSelectedPlan] = useState(plan?.name ?? "");
  const uid = useId();

  useEffect(() => {
    const requested = params.get("servicio");
    if (requested && services.includes(requested)) {
      setFields((f) => ({ ...f, service: requested }));
    }
  }, [params]);

  useEffect(() => {
    setSelectedPlan(plan?.name ?? "");
  }, [plan]);

  const set = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: event.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setStatus({ kind: "idle" });
    setMessage("");
  };

  const buildMessage = (data: Fields) => {
    const lines = [
      `Hola Ludwing, soy ${data.name.trim()}${data.business.trim() ? ` de ${data.business.trim()}` : ""}.`,
      "",
      `Servicio de interés: ${data.service || "Por definir"}`,
      selectedPlan ? `Plan de interés: ${selectedPlan}` : "",
      `Presupuesto aproximado: ${data.budget}`,
      data.contact.trim() ? `Contacto: ${data.contact.trim()}` : "",
      "",
      "Sobre el proyecto:",
      data.description.trim(),
    ].filter(Boolean);
    return lines.join("\n");
  };

  const validate = (data: Fields) => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (data.name.trim().length < 2) next.name = "Escribe tu nombre para saber con quién hablo.";
    if (data.description.trim().length < 20)
      next.description = "Cuéntame un poco más: al menos 20 caracteres sobre lo que necesitas.";
    return next;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const el = event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
      setStatus({ kind: "error", text: "Revisa los campos marcados. Tu mensaje no se envió." });
      return;
    }

    const text = buildMessage({ ...fields, service: fields.service || "Por definir" });
    setMessage(text);

    const wa = whatsappLink(text);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      setStatus({
        kind: "whatsapp",
        text: "Abrimos WhatsApp con tu mensaje listo. Envíalo desde la aplicación para que me llegue.",
      });
      return;
    }

    const mail = mailtoLink(`Consulta de ${fields.name}`, text);
    if (mail) {
      setStatus({
        kind: "config",
        text: "No hay WhatsApp configurado. Puedes enviar el mismo mensaje por correo con el botón de abajo.",
      });
      return;
    }

    setStatus({
      kind: "config",
      text: "Este formulario todavía no tiene un canal de envío configurado, así que tu mensaje no se envió. Puedes copiarlo y enviármelo cuando el contacto esté activo.",
    });
  };

  const copy = async () => {
    const text = message || buildMessage({ ...fields, service: fields.service || "Por definir" });
    try {
      await navigator.clipboard.writeText(text);
      setStatus({ kind: "copied", text: "Mensaje copiado. Pégalo en WhatsApp o en tu correo." });
    } catch {
      setStatus({ kind: "error", text: "No se pudo copiar automáticamente. Selecciona el texto del resumen y cópialo." });
    }
  };

  const mail = mailtoLink(
    `Consulta de ${fields.name || "proyecto"}`,
    message || buildMessage({ ...fields, service: fields.service || "Por definir" }),
  );

  const hasChannel = isConfigured(site.whatsapp) || isConfigured(site.email);

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {selectedPlan ? (
        <div className="flex items-center justify-between gap-3 rounded-[3px] border border-cobalt/50 bg-cobalt/10 px-4 py-2.5 text-sm">
          <span>
            Plan de interés: <strong className="font-medium">{selectedPlan}</strong>
          </span>
          <button
            type="button"
            className="text-xs text-white/60 underline underline-offset-4 hover:text-white"
            onClick={() => {
              setSelectedPlan("");
              setMessage("");
            }}
          >
            Quitar
          </button>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label className="field-label" htmlFor={`${uid}-name`}>
            <span>Nombre *</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            className="field-input"
            value={fields.name}
            onChange={set("name")}
            autoComplete="name"
            placeholder="Cómo te llamas"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            required
          />
          {errors.name ? (
            <p id={`${uid}-name-error`} className="field-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label className="field-label" htmlFor={`${uid}-business`}>
            <span>Negocio o marca</span>
          </label>
          <input
            id={`${uid}-business`}
            name="business"
            className="field-input"
            value={fields.business}
            onChange={set("business")}
            autoComplete="organization"
            placeholder="Opcional"
          />
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor={`${uid}-contact`}>
          <span>Correo o WhatsApp para responderte</span>
        </label>
        <input
          id={`${uid}-contact`}
          name="contact"
          className="field-input"
          value={fields.contact}
          onChange={set("contact")}
          placeholder="Opcional, pero ayuda a responderte"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label className="field-label" htmlFor={`${uid}-service`}>
            <span>Servicio de interés</span>
          </label>
          <select
            id={`${uid}-service`}
            name="service"
            className="field-input"
            value={fields.service}
            onChange={set("service")}
          >
            <option value="">Por definir</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="field-label" htmlFor={`${uid}-budget`}>
            <span>Presupuesto aproximado</span>
          </label>
          <select
            id={`${uid}-budget`}
            name="budget"
            className="field-input"
            value={fields.budget}
            onChange={set("budget")}
          >
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor={`${uid}-description`}>
          <span>Descripción del proyecto *</span>
        </label>
        <textarea
          id={`${uid}-description`}
          name="description"
          className="field-input min-h-32 resize-y"
          value={fields.description}
          onChange={set("description")}
          placeholder="Qué hace tu negocio, qué necesitas y para cuándo."
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? `${uid}-description-error` : undefined}
          required
        />
        {errors.description ? (
          <p id={`${uid}-description-error`} className="field-error">
            {errors.description}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-light">
          {hasChannel ? "Preparar mensaje" : "Revisar mensaje"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
        <p className="text-[0.78rem] leading-relaxed text-white/55">
          {hasChannel
            ? "No se envía nada automáticamente: revisas el mensaje antes de enviarlo."
            : "Sin canal configurado, no se simula un envío exitoso."}
        </p>
      </div>

      <div aria-live="polite" className="min-h-6 text-sm">
        {status.kind !== "idle" ? (
          <p className={status.kind === "error" ? "text-[#ff9a8a]" : "text-white/70"}>{status.text}</p>
        ) : null}
      </div>

      {message ? (
        <div className="field">
          <label className="field-label" htmlFor={`${uid}-message`}>
            <span>Mensaje preparado</span>
          </label>
          <textarea
            id={`${uid}-message`}
            readOnly
            value={message}
            className="field-input min-h-28 resize-y text-[0.82rem] leading-relaxed"
            onFocus={(event) => event.currentTarget.select()}
          />
        </div>
      ) : null}

      {status.kind === "config" || status.kind === "copied" ? (
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-on-dark !py-2.5 !text-[0.85rem]" onClick={copy}>
            Copiar mensaje
          </button>
          {mail ? (
            <a href={mail} className="btn btn-on-dark !py-2.5 !text-[0.85rem]">
              Enviar por correo
            </a>
          ) : null}
        </div>
      ) : null}

      <p className="text-[0.72rem] leading-relaxed text-white/55">
        Al escribirme aceptas que use tus datos únicamente para responder a esta consulta. No comparto
        tu información con terceros. *
      </p>
    </form>
  );
}
