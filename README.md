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

## Formulario de contacto

El formulario funciona de tres formas, en este orden:

1. **Web3Forms o Formspree configurado:** envía el mensaje por `fetch` y solo muestra “Mensaje enviado” si el servicio responde correctamente. Los mensajes llegan al correo con el que creaste la cuenta.
2. **Sin servicio, con WhatsApp configurado:** abre WhatsApp con el mensaje listo; tú debes pulsar enviar.
3. **Sin ningún canal:** muestra que no se envió y permite copiar el mensaje.

### Opción A — Web3Forms (recomendado para GitHub Pages)

1. Entra a <https://web3forms.com>.
2. Escribe el correo donde quieres recibir los mensajes.
3. Copia la **Access Key** que llega a tu correo.
4. Pégala en `src/lib/site.ts` → `web3formsKey`, o créala como variable de repositorio `VITE_WEB3FORMS_KEY` en GitHub.

La Access Key de Web3Forms está diseñada para ir en el cliente; aun así, puedes restringir el dominio en el panel de Web3Forms.

### Opción B — Formspree

1. Crea un formulario en <https://formspree.io>.
2. Copia el endpoint completo, por ejemplo `https://formspree.io/f/abcdwxyz`.
3. Pégalo en `src/lib/site.ts` → `formspreeEndpoint`, o créalo como variable `VITE_FORMSPREE_ENDPOINT` en GitHub.

Si configuras las dos, se usa Web3Forms. También puedes usar un archivo `.env.local` para desarrollo; `.env.example` muestra las variables. Las variables `VITE_*` se incrustan en el build, así que no pongas ahí secretos reales (API keys privadas, SMTP, etc.).

## Antes de publicar

Casi todo lo editable está en **`src/lib/site.ts`**. Los campos vacíos se muestran a propósito como marcadores entre corchetes; no se inventaron datos de contacto.

1. **Contacto**
   - `whatsapp`: ya configurado con `573001696244` (300 169 6244, Colombia).
   - `email`: ya configurado con `Ludwingblancocas@gmail.com`.
   - `domain`: dominio final, sin barra al final. Ej.: `https://ludwingblanco.com`. En GitHub Pages déjalo vacío: se usa el origen actual y la ruta del repositorio.

   Con WhatsApp configurado, el formulario abre la conversación con el mensaje listo. Nunca se simula un envío exitoso. Para envío directo al correo, configura Web3Forms o Formspree (ver “Formulario de contacto”).

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
   - En GitHub Pages deja `site.domain` vacío: el canonical y `og:url` usan el origen actual y la ruta del repositorio. Si usas un dominio propio, configúralo sin barra final.
   - Actualiza `public/robots.txt` con la URL del sitemap cuando el dominio esté definido.
   - El `og:image` se resuelve en tiempo de ejecución con el dominio configurado. La imagen base está en `public/work/valentina-ruiz/2-1600.webp`; cámbiala si prefieres otra. El `og:image` estático de `index.html` apunta a la URL de GitHub Pages: si usas un dominio propio, actualízalo.
   - Añade un `sitemap.xml` cuando el dominio esté definido.

6. **Imágenes**
   - Las fotografías son de Unsplash y se usaron como material de concepto. La imagen del estudio está marcada como “Imagen de referencia”.
   - Para un lanzamiento real, reemplázalas por fotografía propia o de clientes con permiso.

## Despliegue

El sitio usa rutas reales (`/proyectos/...`, `/legal/...`), así que necesita un fallback de SPA hacia `index.html`.

### GitHub Pages (repositorio `LudwingBlanco/LUWING-WEB`)

El repositorio ya incluye el workflow `.github/workflows/deploy.yml` y el plugin que genera `dist/404.html`.

1. En GitHub, entra a **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.
3. Haz push a `main` (o ejecuta el workflow manualmente desde **Actions**).
4. La primera publicación quedará en `https://ludwingblanco.github.io/LUWING-WEB/`.

El workflow compila con `VITE_BASE=/LUWING-WEB/`, para que los assets, las imágenes y las rutas funcionen dentro del subdirectorio del repositorio. `dist/404.html` es una copia de `index.html`: GitHub Pages la sirve cuando se entra directo a una ruta como `/proyectos/kalle-17`, y React Router renderiza el caso correcto. `.nojekyll` evita que GitHub Pages procese los archivos con Jekyll.

Si más adelante usas un dominio propio, cambia `VITE_BASE` a `/` en el workflow (o elimina la variable) y configura el dominio en **Settings → Pages**.

### Publicar desde GitHub Desktop

1. Abre el repositorio local `LUWING WEB` en GitHub Desktop.
2. Revisa **Changes**. Verás muchas eliminaciones de `node_modules/`, `dist/` y `_legacy/`: es intencional, esos archivos ya no deben vivir en el repositorio. Siguen en tu disco.
3. Escribe un commit, por ejemplo `Conectar WhatsApp, formulario y despliegue en GitHub Pages`.
4. Pulsa **Commit to main** y luego **Push origin**.
5. En GitHub, revisa **Actions → Deploy to GitHub Pages**. La primera vez debe estar activado **Settings → Pages → Source: GitHub Actions**.

### Si la página sale en blanco

Casi siempre significa que GitHub Pages está publicando el `index.html` de la rama (`main`) en vez del build de Vite. Ese HTML carga `/src/main.tsx`, que el navegador no puede ejecutar directamente.

- Ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**, no **Deploy from a branch**.
- Verifica que el workflow **Deploy to GitHub Pages** exista en **Actions** y haya terminado en verde.
- Si no existe, revisa que `.github/workflows/deploy.yml` esté incluido en el commit y en `main`.
- Si el workflow falla, abre el job y revisa el paso rojo; el build local (`npm run build`) ya está verificado.

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

Sube el contenido de `dist` y configura una regla para que las rutas desconocidas devuelvan `index.html` con estado 200. Si el sitio vive en un subdirectorio, compila con `VITE_BASE=/nombre-del-directorio/`.

## Estructura

```
src/
  components/     Header, Footer, frames, tarjetas, formulario, FAQ, Reveal
  data/           proyectos y casos de estudio
  lib/            configuración del negocio, metadatos, rutas de assets, hooks
  pages/          Home, CaseStudy, Legal, NotFound
  sections/       hero, trabajo, servicios, enfoque, sobre mí, proceso, precios, FAQ, contacto
  styles/         los seis mini-sitios de los casos
  index.css       tema, tipografía, componentes, animaciones
public/
  work/           imágenes optimizadas de los proyectos
  .nojekyll       evita el procesamiento de Jekyll en GitHub Pages
  _redirects      fallback para Netlify
.github/
  workflows/      build y deploy a GitHub Pages
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

- El formulario no usa un backend propio: Web3Forms o Formspree reciben el mensaje y lo reenvían al correo configurado. Sin esos servicios, abre WhatsApp con el mensaje listo; sin ningún canal, no simula un envío exitoso.
- Las tarifas de dominio, hosting, correo, licencias y mantenimiento se cotizan aparte, tal como indica la nota de precios.
- `node_modules`, `dist`, `_legacy` y los archivos `*.tsbuildinfo` están en `.gitignore`; no deben subirse al repositorio. GitHub Actions instala y compila desde cero.
