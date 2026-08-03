import logo from "@/assets/logo.png";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Creatê"
      className={`select-none ${invert ? "invert" : ""} ${className}`}
      draggable={false}
    />
  );
}
