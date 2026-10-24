import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Página no encontrada | Ludwing Blanco",
    description: "La página que buscas no existe o cambió de lugar.",
  });

  return (
    <section className="grid min-h-[80svh] place-items-center pb-20 pt-32">
      <div className="container-x text-center">
        <p className="font-serif text-[clamp(5rem,16vw,12rem)] leading-none text-cobalt">404</p>
        <h1 className="display mt-4 text-[clamp(1.8rem,4vw,2.8rem)]">Esta página no existe.</h1>
        <p className="mx-auto mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-mute">
          Puede que el enlace esté mal escrito o que el proyecto haya cambiado de lugar. Te dejo dos
          caminos cortos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
          <Link to="/#trabajo" className="btn btn-outline">
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
