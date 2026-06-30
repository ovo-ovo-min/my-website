"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent text-white hover:bg-accent-hover active:scale-[0.97]": variant === "primary",
            "border border-border bg-transparent text-text-primary hover:bg-overlay": variant === "outline",
            "bg-transparent text-text-primary hover:bg-overlay": variant === "ghost",
          },
          {
            "px-4 py-1.5 text-sm": size === "sm",
            "px-6 py-2.5 text-base": size === "md",
            "px-8 py-3 text-lg": size === "lg",
          },
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"
export { Button, type ButtonProps }
