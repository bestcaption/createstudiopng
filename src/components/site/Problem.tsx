import { motion } from "framer-motion";

const pains = [
  { n: "01", t: "Publican sin estrategia", d: "Calendarios vacíos llenos de posts que nadie recuerda." },
  { n: "02", t: "No conectan con su audiencia", d: "Likes superficiales, cero conversación, cero comunidad." },
  { n: "03", t: "Solo buscan verse bien", d: "Estética sin propósito. Bonito hoy, olvidado mañana." },
  { n: "04", t: "No convierten seguidores en clientes", d: "Crecen los números, pero no las ventas." },
];

export function Problem() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">El problema</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
            La mayoría de marcas hablan{" "}
            <span className="italic text-muted-foreground">al vacío</span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {pains.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background p-10 transition-colors hover:bg-secondary md:p-14"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-sand-deep">{p.n}</span>
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{p.t}</h3>
              </div>
              <p className="mt-6 max-w-md text-muted-foreground">{p.d}</p>
              <div className="mt-10 h-px w-12 bg-foreground/20 transition-all group-hover:w-24 group-hover:bg-foreground" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
