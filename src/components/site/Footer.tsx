import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Defensores de tu marca. Estudio creativo dedicado a humanizar marcas y convertir
            redes en crecimiento real.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <a href="mailto:createstudio.png@gmail.com" className="hover:text-foreground">createstudio.png@gmail.com</a>
          <a href="https://www.instagram.com/createstudio.png/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
          <span className="mt-4 text-xs">© {new Date().getFullYear()} Creatê Studio</span>
        </div>
      </div>
    </footer>
  );
}
