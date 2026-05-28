import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  { v: 12, suf: "M+", label: "Visualizaciones generadas", note: "Reels y contenido viral cuidadosamente diseñado." },
  { v: 340, suf: "%", label: "Crecimiento medio anual", note: "Cuentas de cliente con estrategia Creatê." },
  { v: 87, suf: "", label: "Marcas defendidas", note: "Desde locales emergentes a marcas consolidadas." },
  { v: 4.8, suf: "x", label: "Retorno medio en ventas", note: "Atribuibles a campañas de contenido." },
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
              Datos que se sienten como{" "}
              <span className="italic text-muted-foreground">historias</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            No medimos vanidad. Medimos lo que mueve un negocio: alcance cualificado, comunidad
            activa y ventas reales.
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
