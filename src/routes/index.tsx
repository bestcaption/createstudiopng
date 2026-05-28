import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Problem } from "@/components/site/Problem";
import { Vision } from "@/components/site/Vision";
import { Metrics } from "@/components/site/Metrics";
import { Cases } from "@/components/site/Cases";
import { Services } from "@/components/site/Services";
import { Packs } from "@/components/site/Packs";
import { Clients } from "@/components/site/Clients";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creatê — Defensores de tu marca" },
      {
        name: "description",
        content:
          "Estudio creativo que humaniza marcas y convierte redes sociales en crecimiento real. Estrategia, branding y contenido cinematográfico.",
      },
      { property: "og:title", content: "Creatê — Defensores de tu marca" },
      {
        property: "og:description",
        content:
          "No hacemos contenido para verte bonito. Creamos marcas que conectan, venden y permanecen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Vision />
      <Metrics />
      <Clients />
      <Cases />
      <Services />
      <Packs />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
