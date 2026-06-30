import { cn } from "@/lib/utils"

interface BadgeProps {
  children: string
  variant?: "default" | "accent"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-bg-secondary text-text-secondary",
        variant === "accent" && "bg-accent/10 text-accent",
        className,
      )}
    >
      {children}
    </span>
  )
}
