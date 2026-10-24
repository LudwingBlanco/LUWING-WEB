import { useEffect, useRef } from "react";

/** Barra de progreso de lectura, escrita por CSS para no re-renderizar. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        el.style.transform = `scaleX(${progress})`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-[2px] bg-transparent" aria-hidden="true">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-cobalt" />
    </div>
  );
}
