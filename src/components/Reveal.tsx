import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retardo en milisegundos. */
  delay?: number;
  /** `curtain` revela recortando desde abajo; `up` sube suavemente. */
  variant?: "up" | "curtain";
};

/**
 * Entrada discreta al entrar en pantalla, una sola vez por elemento.
 * Con `prefers-reduced-motion` el contenido aparece sin animación.
 *
 * En la variante `curtain` el recorte se aplica a un hijo para no afectar
 * la intersección observada (un clip-path en el propio elemento lo haría
 * invisible para IntersectionObserver).
 */
export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  if (variant === "curtain") {
    return (
      <div ref={ref} className={`reveal-mask ${className}`} style={style}>
        <div className="reveal-curtain">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
