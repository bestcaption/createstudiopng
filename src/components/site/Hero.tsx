import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden grain pt-40 pb-28 md:pt-52 md:pb-40">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sand blob"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full bg-sand-deep blob"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex w-full justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" />
            Agencia creativa · Est. Creatê
          </span>
        </motion.div>

        <h1 className="font-display text-center text-[14vw] leading-[0.95] tracking-tight text-foreground md:text-[9rem]">
          {"Defensores".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="italic text-muted-foreground"
          >
            de tu marca.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground text-balance md:text-xl"
        >
          No hacemos contenido para verte bonito. Creamos marcas que{" "}
          <span className="text-foreground">conectan</span>,{" "}
          <span className="text-foreground">venden</span> y{" "}
          <span className="text-foreground">permanecen</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:scale-[1.02]"
          >
            Trabaja con nosotros
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#resultados"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            Ver resultados
          </a>
        </motion.div>

        {/* Soft scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-24 flex justify-center"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
            <motion.span
              className="h-2 w-1 rounded-full bg-foreground/70"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
