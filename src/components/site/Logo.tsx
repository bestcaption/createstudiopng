import logo from "@/assets/logo.png";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Creatê"
      className={`h-auto w-auto max-w-none object-contain select-none ${invert ? "invert" : ""} ${className}`}
      draggable={false}
    />
  );
}

