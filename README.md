# Ludwing Blanco — Portafolio

Sitio de portafolio y servicios de diseño y desarrollo web para Ludwing Blanco (Bucaramanga, Colombia). Reconstruido desde el HTML original como una aplicación React de varias páginas, con dirección de arte propia, animaciones cuidadas y seis casos de estudio conceptuales.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router 7 (`BrowserRouter`)
- Tipografías autoalojadas con Fontsource: Bricolage Grotesque, Instrument Serif e Instrument Sans
- Sin librerías de animación: CSS, IntersectionObserver y un poco de JavaScript

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

```bash
npm run build     # genera /dist
npm run preview   # sirve /dist localmente
npm run typecheck # comprobación de TypeScript
```

## Antes de publicar

Casi todo lo editable está en **`src/lib/site.ts`**. Los campos vacíos se muestran a propósito como marcadores entre corchetes; no se inventaron datos de contacto.

1. **Contacto**
   - `whatsapp`: número con indicativo, sin `+` ni espacios. Ej.: `573001234567`.
   - `email`: correo real.
   - `instagram`, `linkedin`: URLs completas.
   - `domain`: dominio final, sin barra al final. Ej.: `https://ludwingblanco.com`.

   Mientras WhatsApp y correo estén vacíos, el formulario **valida y arma el mensaje, pero no lo envía**: muestra el aviso y permite copiarlo. Al configurar al menos un canal, el botón abre WhatsApp o prepara el correo. Nunca se simula un envío exitoso.

2. **Precios**
   - `plans`: nombres, precios de referencia, textos y CTA.
   - El plan Profesional no tiene cifra por diseño; su etiqueta se edita en `priceNote`.
   - `addOns` y `pricingNote` se muestran en la sección de precios.
   - Los valores actuales son referencias, no cotizaciones definitivas.

3. **Proyectos**
   - `src/data/projects.ts`: textos, paletas, tipografías, alcance, imágenes y briefs.
   - Los seis proyectos son **conceptos de diseño**. Están etiquetados como tales en las tarjetas, en la ficha y en el pie. Los briefs están marcados como simulados.
   - Reemplaza los textos, imágenes y briefs por proyectos reales cuando existan. Si añades testimonios reales, cámbialos de “Brief simulado” a “Testimonio” y adjunta la autorización correspondiente.

4. **Legal**
   - `src/pages/Legal.tsx` contiene documentos base de privacidad y términos. **Requieren revisión legal** antes de publicar; el propio documento lo advierte.
   - Ajusta el responsable, el correo y las condiciones reales de pagos, plazos y soporte.

5. **SEO**
   - Actualiza el dominio en `site.domain` y en `public/robots.txt` (sitemap).
   - El `og:image` se resuelve en tiempo de ejecución con el dominio configurado. La imagen base está en `public/work/valentina-ruiz/2-1600.webp`; cámbiala si prefieres otra.
   - Añade un `sitemap.xml` cuando el dominio esté definido.

6. **Imágenes**
   - Las fotografías son de Unsplash y se usaron como material de concepto. La imagen del estudio está marcada como “Imagen de referencia”.
   - Para un lanzamiento real, reemplázalas por fotografía propia o de clientes con permiso.

## Despliegue

El sitio usa rutas reales (`/proyectos/...`, `/legal/...`), así que necesita un fallback de SPA hacia `index.html`.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` ya incluye `/* /index.html 200`.

### Vercel

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` ya incluye el rewrite de SPA.

### Cualquier hosting estático

Sube el contenido de `dist` y configura una regla para que las rutas desconocidas devuelvan `index.html` con estado 200.

## Estructura

```
src/
  components/     Header, Footer, frames, tarjetas, formulario, FAQ, Reveal
  data/           proyectos y casos de estudio
  lib/            configuración del negocio, metadatos, hooks
  pages/          Home, CaseStudy, Legal, NotFound
  sections/       hero, trabajo, servicios, enfoque, sobre mí, proceso, precios, FAQ, contacto
  styles/         los seis mini-sitios de los casos
  index.css       tema, tipografía, componentes, animaciones
public/
  work/           imágenes optimizadas de los proyectos
  _redirects      fallback para Netlify
vercel.json       fallback para Vercel
```

## Accesibilidad y comportamiento

- Navegación por teclado, skip link, foco visible y menú móvil con `Escape`, foco inicial y bloqueo del contenido de fondo.
- `prefers-reduced-motion`: se desactivan animaciones, apariciones y scroll suave.
- Contraste revisado en textos pequeños; se mantiene la jerarquía visual.
- Formulario con etiquetas asociadas, errores descritos, `aria-invalid` y estado anunciado con `aria-live`.
- Sin cookies, analítica ni píxeles en esta versión.
- Probado en Chromium (escritorio, tablet y móvil), sin errores de consola.

## Notas

- El sitio no tiene backend. El formulario construye un mensaje y lo entrega a WhatsApp/correo, o lo copia si no hay canal. Si más adelante quieres envío directo, añade un endpoint (por ejemplo, una función serverless) y conserva el aviso de privacidad.
- Las tarifas de dominio, hosting, correo, licencias y mantenimiento se cotizan aparte, tal como indica la nota de precios.
