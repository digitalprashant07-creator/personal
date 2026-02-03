import { cn } from "./utils";

type ShineBorderProps = {
  children: React.ReactNode;
  className?: string;
};

export function ShineBorder({ children, className }: ShineBorderProps) {
  return <div className={cn("magic-border", className)}>{children}</div>;
}
