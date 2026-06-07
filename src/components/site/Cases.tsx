import { motion } from "framer-motion";

const cases = [
  {
    brand: "Jícales",
    sector: "Hostelería · Taberna",
    result: "Lleno completo fines de semana · Lista de espera abierta",
    quote: "Pasamos de pelearnos por una mesa los viernes a tener reservas con semanas de antelación.",
    color: "from-[oklch(0.95_0.025_75)] to-[oklch(0.88_0.04_70)]",
  },
  {
    brand: "Tecnocasa",
    sector: "Inmobiliaria",
    result: "+650% alcance · Leads cualificados cada semana",
    quote: "Empezamos a recibir contactos serios directamente desde redes. Otro nivel de presencia.",
    color: "from-[oklch(0.93_0.03_60)] to-[oklch(0.82_0.05_55)]",
  },
  {
    brand: "Dehesa Burger's",
    sector: "Restauración · Burgers",
    result: "Comunidad x3 · Aperturas con cola en la puerta",
    quote: "Su contenido hace que la gente quiera venir. Lo notamos cada vez que publican.",
    color: "from-[oklch(0.96_0.015_85)] to-[oklch(0.86_0.035_75)]",
  },
];

export function Cases() {
  return (
    <section id="casos" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Casos de éxito</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
            Marcas que dejaron de ser <span className="italic text-muted-foreground">una más</span>.
          </h2>
        </motion.div>

        <div className="mt-20 space-y-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative grid overflow-hidden rounded-[2rem] border border-border md:grid-cols-5"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${c.color} md:col-span-2 md:aspect-auto`}>
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="font-display text-5xl text-foreground/80 md:text-6xl">{c.brand}</div>
                </div>
                <motion.div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-background/40 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="bg-background p-10 md:col-span-3 md:p-14">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.sector}</div>
                <p className="mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl text-balance">
                  “{c.quote}”
                </p>
                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                  <span className="text-sm font-medium text-foreground">{c.result}</span>
                  <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1">
                    Ver caso →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
