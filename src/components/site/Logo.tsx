import logo from "@/assets/logo.png";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Creatê"
      className={`block w-auto max-w-full select-none object-contain ${invert ? "invert" : ""} ${className}`}
      draggable={false}
    />
  );
}
