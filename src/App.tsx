import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Home } from "@/pages/Home";
import { CaseStudy } from "@/pages/CaseStudy";
import { Legal } from "@/pages/Legal";
import { NotFound } from "@/pages/NotFound";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        requestAnimationFrame(() =>
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }),
        );
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Header />
      <ScrollManager />
      <main id="contenido" tabIndex={-1} className="grain focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:slug" element={<CaseStudy />} />
          <Route path="/legal/:doc" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
