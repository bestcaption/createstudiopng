import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "createstudio.png@gmail.com";

export function Contact() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden py-32 md:py-44 grain">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-sand blob"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] text-foreground md:text-7xl text-balance">
            Cuéntanos sobre <span className="italic text-muted-foreground">tu marca</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
            Una conversación honesta sobre dónde está tu marca y a dónde puede llegar con la
            estrategia adecuada.
          </p>

          <div className="mt-16 flex flex-col items-center gap-10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-4 rounded-full border border-border bg-background/80 px-8 py-5 backdrop-blur-xl transition-all hover:border-foreground/30 hover:bg-background"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                <Mail size={18} strokeWidth={1.5} />
              </span>
              <span className="font-display text-2xl text-foreground md:text-3xl">
                {CONTACT_EMAIL}
              </span>
            </a>

            <div className="grid gap-8 text-sm sm:grid-cols-3 sm:gap-12">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Respuesta</div>
                <p className="mt-2 text-foreground">En menos de 24 horas laborables</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Plazas</div>
                <p className="mt-2 text-foreground italic">Limitadas cada trimestre</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</div>
                <a
                  href="https://www.instagram.com/createstudio.png/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-foreground hover:text-muted-foreground"
                >
                  @createstudio.png
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
