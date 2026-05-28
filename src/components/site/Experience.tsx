import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.6]);

  return (
    <section ref={ref} className="relative overflow-hidden py-40 md:py-56">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div style={{ scale, opacity }} className="mx-auto max-w-5xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Una forma distinta de trabajar
          </span>
          <h2 className="mt-8 font-display text-5xl leading-[0.98] text-foreground md:text-8xl text-balance">
            No trabajamos con clientes.
            <br />
            <span className="italic text-muted-foreground">
              Construimos marcas con personas.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {[
            { t: "Aliado estratégico", d: "Pensamos con ti. No para ti." },
            { t: "Cercanía humana", d: "Personas reales, no tickets." },
            { t: "Comunicación constante", d: "Estás dentro del proceso, siempre." },
          ].map((b) => (
            <div key={b.t} className="bg-background p-8 text-center md:p-10">
              <h3 className="font-display text-2xl text-foreground">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
