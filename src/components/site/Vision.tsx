import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    k: "Humanizamos",
    t: "Marcas que respiran",
    d: "Le devolvemos rostro, voz y propósito a las empresas. Personas hablando con personas.",
  },
  {
    k: "Acercamos",
    t: "Empresas a personas",
    d: "Construimos puentes emocionales entre lo que haces y a quién le importa.",
  },
  {
    k: "Construimos",
    t: "Comunidades reales",
    d: "No audiencias. Tribus que defienden, comparten y vuelven.",
  },
  {
    k: "Convertimos",
    t: "Redes en crecimiento",
    d: "Estrategia + contenido + datos. Las redes como motor de negocio, no como vitrina.",
  },
];

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="vision" ref={ref} className="relative bg-foreground py-32 text-background md:py-44">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -top-20 right-10 h-[320px] w-[320px] rounded-full bg-sand-deep/40 blob"
      />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-background/60">Nuestra visión</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl text-balance">
            Defendemos marcas como si fueran{" "}
            <span className="italic text-sand-deep">nuestras</span>.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-background/70">
            Creatê es el aliado estratégico que combina creatividad, datos y sensibilidad para
            transformar tu presencia digital en un activo de negocio.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.article
              key={p.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-background/10 bg-background/[0.03] p-10 backdrop-blur transition-all hover:border-background/30 hover:bg-background/[0.06]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-sand-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" />
                {p.k}
              </div>
              <h3 className="mt-6 font-display text-4xl leading-tight md:text-5xl">{p.t}</h3>
              <p className="mt-5 max-w-md text-background/60">{p.d}</p>
              <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-sand-deep/20 blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
