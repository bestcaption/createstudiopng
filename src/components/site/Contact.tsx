import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Indícanos tu nombre").max(80),
  email: z.string().trim().email("Email no válido").max(160),
  brand: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1200),
});

const budgets = ["Essential · 300€/mes", "Culture · 500€/mes", "Legacy · 700€/mes", "A medida"];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      brand: String(fd.get("brand") ?? ""),
      budget: selected,
      message: String(fd.get("message") ?? ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa el formulario");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Mensaje enviado. Te respondemos en menos de 24h.");
    form.reset();
    setSelected("");
  };

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

      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
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
          <p className="mt-8 max-w-md text-muted-foreground">
            30 minutos. Sin pitch comercial. Una conversación honesta sobre dónde está tu marca y a
            dónde puede llegar con la estrategia adecuada.
          </p>

          <div className="mt-12 space-y-6 border-t border-border pt-8 text-sm">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
              <a href="mailto:createstudio.png@gmail.com" className="mt-1 block font-display text-2xl text-foreground hover:text-sand-deep">
                createstudio.png@gmail.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Respuesta</div>
              <p className="mt-1 text-foreground">En menos de 24 horas laborables</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Plazas</div>
              <p className="mt-1 text-foreground italic">Limitadas cada trimestre</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={onSubmit}
          className="relative rounded-[2rem] border border-border bg-background/80 p-8 backdrop-blur-xl md:p-12"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Tu nombre" required />
            <Field label="Email" name="email" type="email" placeholder="tu@email.com" required />
          </div>

          <div className="mt-6">
            <Field label="Marca / Empresa" name="brand" placeholder="¿Cómo se llama tu proyecto?" />
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pack de interés
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelected(b === selected ? "" : b)}
                  className={`rounded-full border px-4 py-2 text-xs transition-all ${
                    selected === b
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Cuéntanos tu proyecto
            </label>
            <textarea
              name="message"
              rows={5}
              required
              maxLength={1200}
              placeholder="Dónde está tu marca, qué necesitas y a dónde quieres llegar."
              className="mt-3 w-full resize-none rounded-2xl border border-border bg-background/60 px-5 py-4 font-sans text-base text-foreground placeholder:text-muted-foreground/70 focus:border-foreground/60 focus:outline-none"
            />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs italic text-muted-foreground">
              Al enviar aceptas que te respondamos al email indicado.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Enviando…" : "Enviar mensaje"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-full border border-border bg-background/60 px-5 py-3.5 font-sans text-base text-foreground placeholder:text-muted-foreground/70 focus:border-foreground/60 focus:outline-none"
      />
    </label>
  );
}
