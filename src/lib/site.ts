/**
 * Ajustes del negocio.
 *
 * Los campos vacíos se muestran en la interfaz como marcadores entre corchetes
 * para que sea evidente qué falta configurar. No se inventan datos de contacto.
 */
export const site = {
  name: "Ludwing Blanco",
  role: "Diseño y desarrollo web",
  city: "Bucaramanga",
  region: "Santander, Colombia",

  /* ── Completar antes de publicar ─────────────────────────────── */
  // Número de WhatsApp con indicativo del país, sin "+" ni espacios. Ej: 573001234567
  whatsapp: "573001696244",
  // Correo de contacto. (También se usa para el enlace "Enviar por correo" del formulario).
  email: "Ludwingblancocas@gmail.com",
  // Dominio final (sin barra al final). Ej: https://ludwingblanco.com
  // En GitHub Pages déjalo vacío: se usa el origen actual y la ruta del repositorio.
  domain: "",

  /* ── Envío del formulario ─────────────────────────────────────── */
  // Opción A — Web3Forms (recomendado para GitHub Pages):
  // 1. Entra a https://web3forms.com
  // 2. Escribe el correo donde quieres recibir los mensajes.
  // 3. Copia la "Access Key" que llega a tu correo y pégala aquí.
  web3formsKey: "02c5c71c-bf68-49f7-bb4e-452de2f19011",
  // Opción B — Formspree:
  // 1. Crea un formulario en https://formspree.io
  // 2. Copia el endpoint completo (ej. https://formspree.io/f/abcdwxyz).
  // Si las dos están configuradas, se usa Web3Forms.
  formspreeEndpoint: "",
  /* ────────────────────────────────────────────────────────────── */

  availability: "Agenda abierta para nuevos proyectos",
  responseNote:
    "Respondo personalmente de lunes a viernes. Si prefieres WhatsApp, el formulario arma el mensaje por ti.",
  locationNote:
    "Bucaramanga y área metropolitana. Trabajo de forma remota con negocios de toda Colombia.",
  yearsExperience: "Formación en ingeniería industrial",
} as const;

export const isConfigured = (value: string) => value.trim().length > 0;

/** Marcador visible para los datos que todavía no existen. */
export const placeholder = (value: string, fallback: string) =>
  isConfigured(value) ? value : `[${fallback}]`;

export function whatsappLink(message: string): string | null {
  const digits = site.whatsapp.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string | null {
  if (!isConfigured(site.email)) return null;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ── Planes ────────────────────────────────────────────────────────
 * Precios de referencia. No son cotizaciones definitivas.
 * El plan Profesional se ajusta según el alcance: edita su etiqueta aquí.
 * ──────────────────────────────────────────────────────────────── */
export type Plan = {
  id: string;
  name: string;
  price: string | null;
  priceNote: string;
  summary: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "esencial",
    name: "Esencial",
    price: "Desde $400.000 COP",
    priceNote: "Pago único por el proyecto",
    summary: "Para tener una presencia clara y profesional cuanto antes.",
    includes: [
      "Landing page de una sola página",
      "Diseño a medida, sin plantillas",
      "Adaptación a móvil, tablet y escritorio",
      "Formulario o botón de WhatsApp",
      "Metadatos y estructura para buscadores",
      "Publicación acompañada",
    ],
    cta: "Cotizar Esencial",
  },
  {
    id: "profesional",
    name: "Profesional",
    price: null,
    priceNote: "Se ajusta a las funciones que necesites",
    summary: "Para negocios que necesitan varias secciones y una identidad más trabajada.",
    includes: [
      "Sitio de varias secciones o páginas",
      "Dirección visual completa",
      "Animaciones y detalles de interacción",
      "SEO técnico y rendimiento",
      "Formulario con envío configurado",
      "Pruebas en dispositivos reales",
    ],
    cta: "Cotizar Profesional",
    featured: true,
  },
  {
    id: "integral",
    name: "Integral",
    price: "Hasta $3.000.000 COP",
    priceNote: "Depende de funcionalidades y alcance",
    summary: "Para proyectos con identidad propia, contenido y funciones a la medida.",
    includes: [
      "Sitio completo con identidad digital",
      "Funcionalidades a medida",
      "Páginas de detalle y contenido",
      "Integraciones con servicios externos",
      "Acompañamiento en la publicación",
      "Documentación de entrega",
    ],
    cta: "Cotizar Integral",
  },
];

export const addOns = [
  "Tienda en línea",
  "Sistema de reservas",
  "Blog o gestor de contenido",
  "Versión en otro idioma",
  "Integración con pagos",
  "Redacción de contenidos",
  "Sesión de fotografía",
  "Mantenimiento mensual",
];

export const pricingNote =
  "Los valores son referencias iniciales para estructurar la oferta, no cotizaciones definitivas. Dominio, hosting, correo, licencias y servicios externos se cotizan por separado. Las funcionalidades adicionales se acuerdan por escrito antes de empezar.";
