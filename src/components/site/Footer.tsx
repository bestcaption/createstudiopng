export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
        <div>
          <div className="font-display text-4xl text-foreground">Creatê</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Defensores de tu marca. Estudio creativo dedicado a humanizar marcas y convertir
            redes en crecimiento real.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <a href="mailto:hola@creatê.studio" className="hover:text-foreground">hola@creatê.studio</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <span className="mt-4 text-xs">© {new Date().getFullYear()} Creatê Studio</span>
        </div>
      </div>
    </footer>
  );
}
