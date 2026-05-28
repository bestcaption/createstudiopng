import { motion } from "framer-motion";

const packs = [
  {
    name: "Essential",
    tagline: "Presencia que genera negocio",
    price: "300€",
    iva: "363€ con IVA",
    highlight: false,
    features: [
      "Contenido estratégico",
      "Categorización por objetivos: autoridad, confianza, comunidad, venta y humanización",
      "Analítica básica e informes simplificados",
      "Diseño gráfico profesional, edición de vídeo, storytelling, copywriting",
      "Soporte con IA y tecnología",
    ],
    extra: "Incluye: curso propio de generación de contenido & guías prácticas (gratis)",
  },
  {
    name: "Culture",
    tagline: "Nuestro pack más solicitado",
    price: "500€",
    iva: "605€ con IVA",
    highlight: true,
    inherits: "El pack Essential, más:",
    features: [
      "1 sesión de fotografía y vídeo mensual estratégica (contenido por objetivos)",
      "Estrategia TikTok",
      "Estadísticas avanzadas (datos pro con Metricool)",
      "Auditoría mensual estratégica (qué funciona, qué no, qué debe repetirse)",
    ],
  },
  {
    name: "Legacy",
    tagline: "Legado que lidera tu mercado",
    price: "700€",
    iva: "847€ con IVA",
    highlight: false,
    inherits: "Todo lo anterior, más:",
    features: [
      "Sistema de contenido omnicanal + contenido evergreen",
      "Arquitectura de contenidos: series temáticas, pilares, narrativas mensuales, campañas",
      "Creación de embudos de venta",
      "Gestión canal de WhatsApp (comunidad)",
      "Gestión de mensajes y atención al cliente",
    ],
  },
];

export function Packs() {
  return (
    <section id="packs" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Packs</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
            Tres formas de <span className="italic text-muted-foreground">crecer con nosotros</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Modelos de colaboración mensual diseñados para acompañar marcas en cada etapa: desde la
            presencia estratégica hasta el liderazgo de mercado.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {packs.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] border p-10 transition-all ${
                p.highlight
                  ? "border-foreground bg-foreground text-background shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)] md:-translate-y-4"
                  : "border-border bg-background hover:border-foreground/40"
              }`}
            >
              {p.highlight && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-sand-deep px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
                  Más solicitado
                </span>
              )}

              <div>
                <div className={`font-display text-3xl italic ${p.highlight ? "text-sand" : "text-sand-deep"}`}>
                  {p.name}
                </div>
                <p className={`mt-2 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl tracking-tight">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                  /mes
                </span>
              </div>
              <div className={`mt-1 text-xs ${p.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                {p.iva}
              </div>

              {p.inherits && (
                <div
                  className={`mt-8 border-t pt-6 text-sm italic ${
                    p.highlight ? "border-background/20 text-sand" : "border-border text-sand-deep"
                  }`}
                >
                  {p.inherits}
                </div>
              )}

              <ul className={`mt-6 flex-1 space-y-4 text-sm ${p.highlight ? "text-background/85" : "text-foreground/85"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                        p.highlight ? "bg-sand-deep" : "bg-foreground"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {p.extra && (
                <p
                  className={`mt-8 rounded-2xl px-4 py-3 text-xs italic ${
                    p.highlight ? "bg-background/10 text-background/80" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {p.extra}
                </p>
              )}

              <a
                href="#contacto"
                className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                Empezar con {p.name}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          ¿Necesitas algo a medida? Diseñamos planes personalizados bajo demanda.
        </p>
      </div>
    </section>
  );
}
