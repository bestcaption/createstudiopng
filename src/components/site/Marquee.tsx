const words = [
  "Estrategia",
  "Humanización",
  "Conexión",
  "Branding",
  "Contenido con propósito",
  "Crecimiento",
  "Cinematográfico",
  "Comunidad",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="border-y border-border/70 bg-background py-6 overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {row.map((w, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-display text-3xl text-muted-foreground md:text-4xl">
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" />
          </span>
        ))}
      </div>
    </section>
  );
}
