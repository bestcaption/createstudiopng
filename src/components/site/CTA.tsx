import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden bg-foreground py-32 text-background md:py-44 grain">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand-deep/40 blob"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" />
          Plazas limitadas cada trimestre
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 font-display text-5xl leading-[0.98] md:text-8xl text-balance"
        >
          Tu marca merece algo más
          <br />
          que <span className="italic text-sand-deep">publicaciones bonitas</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-lg text-background/70"
        >
          Hablemos 30 minutos. Sin pitch comercial. Solo una conversación honesta sobre dónde
          está tu marca y a dónde puede llegar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:hola@creatê.studio"
            className="group inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:scale-[1.03]"
          >
            Construyamos algo grande
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#casos"
            className="text-sm text-background/70 underline-offset-4 hover:text-background hover:underline"
          >
            o mira lo que hemos hecho
          </a>
        </motion.div>
      </div>
    </section>
  );
}
