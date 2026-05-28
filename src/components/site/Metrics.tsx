import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  {
    v: 100000,
    suf: "+",
    label: "Seguidores orgánicos",
    note: "Generados en los últimos meses entre nuestros clientes.",
  },
  {
    v: 10000,
    suf: "h+",
    label: "Tiempo de visualización",
    note: "Horas acumuladas en contenido de vídeo de nuestros clientes.",
  },
  {
    v: 300,
    suf: "%",
    label: "Aumento de facturación",
    note: "Clientes que han triplicado su facturación con nuestra estrategia.",
  },
  {
    v: 6.3,
    suf: "",
    label: "Engagement medio",
    note: "Tasa entre 2,50 y 6,30 (lo habitual del mercado es 2 a 3).",
  },
];

export function Metrics() {
  return (
    <section id="resultados" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resultados</span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Transformamos los datos en{" "}
              <span className="italic text-muted-foreground">beneficios reales</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Aceleramos el crecimiento de tu marca con análisis de datos. Lanzamos hipótesis, hacemos
            test A/B y decidimos en base a la analítica.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-10 md:p-12"
            >
              <div className="font-display text-6xl leading-none tracking-tight text-foreground md:text-7xl">
                <Counter to={s.v} suffix={s.suf} />
              </div>
              <div className="mt-6 text-sm font-medium text-foreground">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
