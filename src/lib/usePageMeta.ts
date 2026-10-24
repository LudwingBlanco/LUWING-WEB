import { useEffect } from "react";
import { site } from "@/lib/site";

type Meta = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

const DEFAULT_IMAGE = "/work/valentina-ruiz/2-1600.webp";

/** Metadatos por ruta sin añadir dependencias. */
export function usePageMeta({ title, description, image = DEFAULT_IMAGE, type = "website" }: Meta) {
  useEffect(() => {
    const base = site.domain || window.location.origin;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", `${base}${window.location.pathname}`);
    const absolute = image.startsWith("http") ? image : `${base}${image}`;
    setMeta("property", "og:image", absolute);
    setMeta("name", "twitter:image", absolute);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${base}${window.location.pathname}`;
  }, [title, description, image, type]);
}
