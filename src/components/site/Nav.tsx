import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#vision", label: "Visión" },
  { href: "#resultados", label: "Resultados" },
  { href: "#packs", label: "Packs" },
  { href: "#clientes", label: "Clientes" },
  { href: "#casos", label: "Casos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-border/60 bg-background/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-7 w-auto md:h-8" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:gap-3 hover:bg-foreground/90"
        >
          Trabaja con nosotros
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  );
}
