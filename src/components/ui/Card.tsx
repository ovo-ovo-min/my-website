import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-bg-primary overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.06)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
