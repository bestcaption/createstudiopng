import { motion } from "framer-motion";

const clients = [
  "Dreambeach Festival",
  "Jícales Taberna",
  "Aua Pure Water",
  "The Mountains Hotel",
  "Álvaro Automóviles",
  "Cafetería El Arco",
  "Sôlace",
  "Brain On Academy",
  "Jose Raposo",
  "Dehesa Burger's",
  "KGfit Club Deportivo",
  "Tu marca aquí · Sé nuestro próximo triunfo",
];

export function Clients() {
  return (
    <section id="clientes" className="relative isolate overflow-hidden bg-foreground py-32 text-background md:py-44 grain">
      <motion.div
        aria-hidden
        className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-sand-deep/30 blob"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-sand/20 blob"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-background/60">Clientes</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl text-balance">
            Algunas <span className="italic text-sand">empresas</span> que han confiado en nuestro trabajo.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-background/15 bg-background/15 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex aspect-[5/3] items-center justify-center bg-foreground p-6 text-center transition-colors hover:bg-background/5"
            >
              <span className="font-display text-xl text-background/80 transition-colors group-hover:text-background md:text-2xl">
                {c}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 max-w-xl text-sm text-background/60">
          Marcas de hostelería, moda, bienestar, deporte, hospitality y eventos confían en Creatê
          para construir presencia, comunidad y ventas.
        </p>
      </div>
    </section>
  );
}
