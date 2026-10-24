export type PreviewKey = "kalle" | "tinta" | "casa" | "arce" | "valentina" | "pulso";

export type ProjectImage = {
  /** Archivo dentro de /public/work/<slug>/ */
  file: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  tagline: string;
  summary: string;
  services: string[];
  status: string;
  preview: PreviewKey;
  palette: {
    bg: string;
    fg: string;
    accent: string;
    soft: string;
    line: string;
  };
  type: { display: string; body: string };
  challenge: string;
  approach: string;
  detail: string;
  goal: string;
  scope: string[];
  features: { title: string; text: string }[];
  images: ProjectImage[];
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "kalle-17",
    name: "Kalle 17",
    sector: "Moda urbana",
    year: "2026",
    tagline: "Drops que se sienten como un estreno.",
    summary:
      "Tienda de streetwear que lanza colecciones cortas y vende por WhatsApp. El sitio debía convertir seguidores de Instagram en pedidos.",
    services: ["Dirección de arte", "E-commerce ligero", "Desarrollo web"],
    status: "Concepto de diseño",
    preview: "kalle",
    palette: {
      bg: "#0B0B0C",
      fg: "#F4F1E8",
      accent: "#FF4A1C",
      soft: "#17171A",
      line: "#2A2A2E",
    },
    type: { display: "Bricolage Grotesque 800", body: "Instrument Sans" },
    challenge:
      "La marca tenía producto y comunidad, pero toda la venta ocurría en mensajes sueltos. Cada drop se anunciaba con una imagen y un enlace en la biografía, y el comprador tenía que preguntar tallas, colores y disponibilidad antes de decidir.",
    approach:
      "Convertimos el lanzamiento en el centro del sitio. Una tipografía enorme y un naranja de señal anuncian la fecha; debajo, el producto aparece con precio, tallas y un solo botón que arma el pedido con la referencia exacta. El resto es silencio: fondo negro y aire para que la prenda cargue el peso visual.",
    detail:
      "El carrito no simula una pasarela de pagos: arma un mensaje con producto, talla y precio, y lo entrega a WhatsApp. Menos pasos, menos fricción y una conversación real con el cliente.",
    goal: "Reducir el paso de 'vi el drop' a 'pedí mi talla' a una sola decisión.",
    scope: [
      "Home con drop activo y cuenta regresiva configurable",
      "Catálogo por colección y categoría",
      "Ficha de producto con tallas y guía de medidas",
      "Pedido por WhatsApp con referencia del producto",
      "Contenido editorial para cada lanzamiento",
      "Navegación móvil pensada para una mano",
    ],
    features: [
      { title: "Escaparate de drop", text: "Una portada que cambia por colección sin tocar el código." },
      { title: "Tallas claras", text: "Guía de medidas y disponibilidad antes de pedir." },
      { title: "Pedido asistido", text: "El botón arma el mensaje completo para WhatsApp." },
      { title: "Rendimiento", text: "Imágenes optimizadas y carga prioritaria del hero." },
    ],
    images: [
      { file: "1", alt: "Camisetas verdes colgadas en percheros de madera", caption: "Producto" },
      { file: "2", alt: "Vitrina de boutique con prendas en tonos neutros", caption: "Retail" },
      { file: "3", alt: "Interior de una tienda de ropa con estanterías y luz cálida", caption: "Espacio" },
    ],
    testimonial: {
      quote:
        "Quería que la tienda se sintiera como el drop: directa, ruidosa y sin vueltas. Que alguien entre, vea su talla y escriba.",
      author: "Equipo Kalle 17",
      role: "Marca de streetwear · Bucaramanga",
    },
  },
  {
    slug: "tinta-negra",
    name: "Tinta Negra",
    sector: "Estudio de tatuaje",
    year: "2025",
    tagline: "El trabajo habla antes que el estudio.",
    summary:
      "Estudio de tatuaje con dos artistas y estilos distintos. Necesitaba una galería que se sintiera como una revista y una solicitud de cita sin llamadas.",
    services: ["Identidad digital", "Galería editorial", "Formulario de citas"],
    status: "Concepto de diseño",
    preview: "tinta",
    palette: {
      bg: "#0B0B0B",
      fg: "#EFE7D6",
      accent: "#C9A227",
      soft: "#161616",
      line: "#2C2A26",
    },
    type: { display: "Instrument Serif", body: "Instrument Sans" },
    challenge:
      "En un estudio de tatuaje la confianza se gana con evidencia. La marca mostraba su trabajo en una cuadrícula de Instagram donde se mezclaban cicatrices, diseños y memes, y pedía cita por mensajes que se perdían entre semana.",
    approach:
      "La obra pasa al frente: imágenes a sangre, marcos finos y una tipografía serif que se lee como un editorial de arte. Cada artista tiene su perfil y su estilo; la solicitud de cita pide referencia, zona del cuerpo y tamaño, para responder con una propuesta en lugar de una pregunta.",
    detail:
      "El dorado aparece solo en acciones y datos clave. El resto es negro y papel: el color no compite con la tinta de las fotografías.",
    goal: "Que la persona llegue a la solicitud de cita ya convencida por el portafolio.",
    scope: [
      "Galería filtrable por estilo y artista",
      "Perfil de cada artista con su agenda",
      "Solicitud de cita con referencias y zona",
      "Guía de cuidados posterior",
      "Página de estudio y ubicación",
      "Optimización de imágenes de alta resolución",
    ],
    features: [
      { title: "Galería curada", text: "Obra agrupada por estilo, no un feed cronológico." },
      { title: "Perfiles", text: "Cada artista con su voz, su agenda y sus piezas." },
      { title: "Solicitud guiada", text: "Campos que evitan el ida y vuelta por mensajes." },
      { title: "Cuidados", text: "Contenido post-sesión que reduce dudas y visitas." },
    ],
    images: [
      { file: "1", alt: "Tatuaje japonés de gran formato en la espalda", caption: "Blackwork" },
      { file: "2", alt: "Tatuaje floral en blanco y negro sobre el antebrazo", caption: "Fine line" },
      { file: "3", alt: "Tatuador trabajando con guantes sobre un brazo", caption: "Sesión" },
    ],
    testimonial: {
      quote:
        "No quería una página de estudio genérica. Quería que la gente viera el trabajo y entendiera cómo es trabajar conmigo.",
      author: "Tinta Negra",
      role: "Estudio de tatuaje · Bucaramanga",
    },
  },
  {
    slug: "casa-cacao",
    name: "Casa Cacao",
    sector: "Chocolatería y café",
    year: "2025",
    tagline: "Una carta que se antoja desde el celular.",
    summary:
      "Chocolatería artesanal y cafetería de barrio. El reto era que la carta, los horarios y el pedido funcionaran en una sola pantalla pequeña.",
    services: ["Sitio de comercio local", "SEO local", "Desarrollo web"],
    status: "Concepto de diseño",
    preview: "casa",
    palette: {
      bg: "#F7EDDF",
      fg: "#2A1A12",
      accent: "#8A4A28",
      soft: "#EEDFCB",
      line: "#D8C2A6",
    },
    type: { display: "Instrument Serif", body: "Instrument Sans" },
    challenge:
      "El negocio vivía del voz a voz y de Google Maps. Su presencia digital era una foto del menú, difícil de leer, sin precios actualizados ni forma de pedir. Los fines de semana el teléfono sonaba para preguntar lo mismo.",
    approach:
      "Partimos de la carta. Una paleta de cacao, papel y crema; fotografía cálida del producto y una estructura que prioriza tres preguntas: qué hay, cuánto cuesta y hasta qué hora atienden. El pedido por WhatsApp queda a un toque desde cualquier plato.",
    detail:
      "Los horarios se muestran con el estado del local en vivo («abierto ahora»), un detalle pequeño que evita viajes en falso y llamadas innecesarias.",
    goal: "Resolver dudas de carta, horario y pedido sin que el cliente tenga que llamar.",
    scope: [
      "Carta digital por categorías y precios",
      "Estado del local según la hora",
      "Ubicación y cómo llegar",
      "Pedido por WhatsApp desde cada producto",
      "Historia del taller de cacao",
      "SEO local y datos estructurados",
    ],
    features: [
      { title: "Carta legible", text: "Tipografía grande, precios claros y categorías cortas." },
      { title: "Abierto ahora", text: "Horario real con estado calculado en el navegador." },
      { title: "Pedido directo", text: "Cada producto arma su propio mensaje." },
      { title: "Búsqueda local", text: "Datos del negocio listos para Google." },
    ],
    images: [
      { file: "1", alt: "Tabletas de chocolate junto a granos de cacao", caption: "Origen" },
      { file: "2", alt: "Chocolate partido en trozos sobre una superficie clara", caption: "Producto" },
      { file: "3", alt: "Interior de cafetería con plantas y mesas de madera", caption: "Espacio" },
    ],
    testimonial: {
      quote:
        "La carta impresa se desactualizaba cada mes. Ahora quiero que la web sea la carta, y que la gente pida desde ahí.",
      author: "Casa Cacao",
      role: "Chocolatería artesanal · Floridablanca",
    },
  },
  {
    slug: "arce-delgado",
    name: "Arce & Delgado",
    sector: "Servicios jurídicos",
    year: "2025",
    tagline: "Orden y criterio desde el primer párrafo.",
    summary:
      "Firma de abogados con tres áreas de práctica. Necesitaba transmitir experiencia sin caer en el tono frío de las páginas corporativas.",
    services: ["Sitio corporativo", "Arquitectura de información", "SEO básico"],
    status: "Concepto de diseño",
    preview: "arce",
    palette: {
      bg: "#0E2133",
      fg: "#E9EFF4",
      accent: "#8DB4D3",
      soft: "#16304A",
      line: "#28465F",
    },
    type: { display: "Instrument Serif", body: "Instrument Sans" },
    challenge:
      "La firma competía con despachos que comunican lo mismo: trayectoria, seriedad y resultados. Su web anterior era un catálogo de servicios sin jerarquía, donde un caso corporativo pesaba igual que una consulta de familia.",
    approach:
      "La estructura hace el trabajo: tres áreas con lenguaje claro, tiempos de respuesta y documentos que el cliente debe traer. El azul profundo y la serif editorial transmiten criterio sin solemnidad. Cada página termina en una consulta con contexto, no en un formulario vacío.",
    detail:
      "Los artículos se presentan como notas de criterio, escritas para resolver una duda concreta. Es la diferencia entre posicionar y publicar por publicar.",
    goal: "Que un cliente potencial entienda su caso y sepa qué necesita antes de la primera reunión.",
    scope: [
      "Home institucional con áreas de práctica",
      "Página de detalle por área",
      "Perfiles del equipo",
      "Notas de criterio y preguntas frecuentes",
      "Formulario de consulta con contexto",
      "Estructura semántica y metadatos",
    ],
    features: [
      { title: "Áreas claras", text: "Cada práctica con alcance, proceso y documentos." },
      { title: "Autoridad sobria", text: "Jerarquía editorial en lugar de adornos." },
      { title: "Consulta útil", text: "El formulario recoge el caso, no solo el correo." },
      { title: "Contenido", text: "Plantilla de artículos para publicar sin depender de nadie." },
    ],
    images: [
      { file: "1", alt: "Biblioteca jurídica con bustos de mármol y libros antiguos", caption: "Tradición" },
      { file: "2", alt: "Estatua de la justicia con balanza", caption: "Criterio" },
      { file: "3", alt: "Oficina moderna con sala de espera y luz natural", caption: "Firma" },
    ],
    testimonial: {
      quote:
        "No queremos parecer un despacho enorme. Queremos que quien nos lea sienta que su caso está en manos de alguien que lo entiende.",
      author: "Arce & Delgado",
      role: "Firma de abogados · Bucaramanga",
    },
  },
  {
    slug: "valentina-ruiz",
    name: "Valentina Ruiz",
    sector: "Arquitectura",
    year: "2026",
    tagline: "Un portafolio que se recorre como una casa.",
    summary:
      "Portafolio de una arquitecta independiente. La obra manda, la información personal aparece cuando el visitante ya quiere hablar.",
    services: ["Portafolio", "Dirección de arte", "Desarrollo web"],
    status: "Concepto de diseño",
    preview: "valentina",
    palette: {
      bg: "#EDE9E1",
      fg: "#1B1B1B",
      accent: "#9A8667",
      soft: "#E2DCD0",
      line: "#CFC7B8",
    },
    type: { display: "Instrument Serif", body: "Instrument Sans" },
    challenge:
      "Los portafolios de arquitectura suelen cometer el mismo error: muchas fotos, poco criterio. La obra se ve, pero no se entiende qué piensa la arquitecta detrás de cada decisión.",
    approach:
      "Construimos un recorrido pausado. Tipografía serif de gran escala, imágenes a sangre y fichas técnicas breves: año, lugar, superficie y una frase sobre la intención del proyecto. La información de contacto aparece al final, cuando ya hay interés.",
    detail:
      "Cada proyecto abre con una frase, no con una galería. La fotografía confirma lo que el texto anticipa.",
    goal: "Convertir visitas en conversaciones sobre proyectos concretos, no en solicitudes genéricas.",
    scope: [
      "Home con proyectos destacados",
      "Ficha de proyecto con datos técnicos",
      "Galería de imágenes por obra",
      "Página de estudio y método",
      "Contacto directo",
      "Carga progresiva de imágenes",
    ],
    features: [
      { title: "Obra primero", text: "Imágenes a sangre con espacio para respirar." },
      { title: "Fichas breves", text: "Datos que un cliente sí necesita." },
      { title: "Ritmo", text: "Scroll pausado, sin animaciones que compitan." },
      { title: "Contacto", text: "Directo, sin formularios largos." },
    ],
    images: [
      { file: "1", alt: "Edificio de arquitectura contemporánea en blanco y gris", caption: "Obra" },
      { file: "2", alt: "Casa moderna iluminada al atardecer con árboles", caption: "Residencial" },
      { file: "3", alt: "Torre corporativa de vidrio vista desde abajo", caption: "Comercial" },
    ],
    testimonial: {
      quote:
        "Mi trabajo no se explica con una cuadrícula de fotos. Quería que la web tuviera el mismo silencio que mis proyectos.",
      author: "Valentina Ruiz",
      role: "Arquitecta · Bucaramanga",
    },
  },
  {
    slug: "pulso",
    name: "Pulso",
    sector: "Entrenamiento",
    year: "2024",
    tagline: "Una marca que se entrena, no que se anuncia.",
    summary:
      "Estudio de entrenamiento funcional con clases limitadas. El sitio debía mostrar horarios reales y llenar cupos sin saturar de texto.",
    services: ["Identidad digital", "Sitio con reservas", "Desarrollo web"],
    status: "Concepto de diseño",
    preview: "pulso",
    palette: {
      bg: "#101010",
      fg: "#F1F1EC",
      accent: "#D8FF3E",
      soft: "#1A1A1A",
      line: "#2B2B2B",
    },
    type: { display: "Bricolage Grotesque 800", body: "Instrument Sans" },
    challenge:
      "El estudio llenaba sus clases por recomendación, pero su sitio era una página de presentación sin horarios ni forma de reservar. Cada interesado tenía que escribir para saber si había cupo.",
    approach:
      "Diseñamos una parrilla de horarios como pieza central: día, hora, cupos y un botón de reserva. La identidad usa negro, blanco y un lima de señal que aparece solo en lo accionable. El resto es fotografía de entrenamiento y tipografía en mayúsculas, sin discursos motivacionales.",
    detail:
      "La reserva abre WhatsApp con la clase, el día y la hora ya escritos. El entrenador recibe el contexto completo y solo confirma.",
    goal: "Que alguien vea un horario disponible y reserve en menos de un minuto.",
    scope: [
      "Parrilla de horarios por día",
      "Reserva por WhatsApp con clase y hora",
      "Página de planes y precios",
      "Perfiles de entrenadores",
      "Galería del espacio",
      "Diseño responsive con foco en móvil",
    ],
    features: [
      { title: "Horarios primero", text: "La información que todos buscan, sin scroll." },
      { title: "Cupos visibles", text: "Disponibilidad clara antes de escribir." },
      { title: "Reserva directa", text: "Mensaje prearmado con clase y horario." },
      { title: "Marca con energía", text: "Tipografía y color al servicio de la acción." },
    ],
    images: [
      { file: "1", alt: "Rack de mancuernas en un gimnasio", caption: "Fuerza" },
      { file: "2", alt: "Mujer entrenando abdominales en el suelo", caption: "Movilidad" },
      { file: "3", alt: "Persona preparando peso muerto con barra", caption: "Rendimiento" },
    ],
    testimonial: {
      quote:
        "La gente no quiere leer sobre entrenar. Quiere saber a qué hora puede venir. Eso es lo que tenía que resolver la página.",
      author: "Pulso",
      role: "Estudio de entrenamiento · Bucaramanga",
    },
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
