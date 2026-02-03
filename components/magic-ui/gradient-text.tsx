import { cn } from "./utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-indigo-400 to-sky-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
