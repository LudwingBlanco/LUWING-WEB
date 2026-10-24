/**
 * Devuelve la ruta pública de un archivo respetando la base de Vite.
 *
 * En GitHub Pages el sitio vive en /LUWING-WEB/, así que una ruta absoluta
 * como "/work/foto.webp" apuntaría a la raíz del dominio y se rompería.
 */
export function asset(path: string) {
  if (/^https?:\/\//i.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
