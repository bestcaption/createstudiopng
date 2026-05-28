import { motion } from "framer-motion";

const services = [
  { t: "Gestión de redes sociales", d: "Estrategia, calendario, comunidad y reporting. End-to-end." },
  { t: "Branding", d: "Identidades vivas, no manuales muertos. Marca con propósito." },
  { t: "Estrategia digital", d: "Posicionamiento, embudo y narrativa. La cabeza antes que la mano." },
  { t: "Creación de contenido", d: "Foto, video y diseño con dirección de arte propia." },
  { t: "Reels cinematográficos", d: "Storytelling visual que para el scroll y se queda." },
  { t: "Fotografía & video", d: "Producción in-house con sensibilidad editorial." },
  { t: "Diseño visual", d: "Sistemas de diseño consistentes para web, redes y campañas." },
  { t: "Automatización & growth", d: "Funnels, CRM y datos para escalar sin perder humanidad." },
];

export function Services() {
  return (
    <section id="servicios" className="relative bg-secondary py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Un estudio. Todas las piezas.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Trabajamos como una extensión de tu equipo. Sin briefings infinitos, sin proveedores
            cruzados.
          </p>
        </motion.div>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid cursor-default grid-cols-12 items-center gap-6 py-7 transition-colors hover:bg-background/60 px-2 md:px-6"
            >
              <span className="col-span-1 font-display text-sm text-sand-deep md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-11 font-display text-3xl text-foreground transition-transform group-hover:translate-x-2 md:col-span-5 md:text-4xl">
                {s.t}
              </span>
              <span className="col-span-12 text-sm text-muted-foreground md:col-span-5">{s.d}</span>
              <span className="col-span-12 hidden text-right text-muted-foreground transition-all group-hover:text-foreground md:col-span-1 md:block">
                →
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
