import { Hero } from "@/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/sections/Work";
import { Services } from "@/sections/Services";
import { Approach } from "@/sections/Approach";
import { About } from "@/sections/About";
import { Process } from "@/sections/Process";
import { Pricing } from "@/sections/Pricing";
import { FaqSection } from "@/sections/FaqSection";
import { Contact } from "@/sections/Contact";
import { usePageMeta } from "@/lib/usePageMeta";

export function Home() {
  usePageMeta({
    title: "Ludwing Blanco — Diseño y desarrollo web a medida en Bucaramanga",
    description:
      "Diseño y desarrollo de sitios web a medida para negocios, comercios y marcas personales en Bucaramanga y toda Colombia. Sin plantillas, trato directo y trabajo verificado.",
    image: "/work/valentina-ruiz/2-1600.webp",
  });

  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Approach />
      <About />
      <Process />
      <Pricing />
      <FaqSection />
      <Contact />
    </>
  );
}
