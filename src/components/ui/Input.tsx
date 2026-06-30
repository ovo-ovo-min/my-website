import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, id, ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-border bg-bg-primary px-4 py-2.5 text-base text-text-primary",
          "placeholder:text-text-tertiary transition-all duration-200",
          "focus:outline-none focus:border-accent focus:ring-[1.5px] focus:ring-accent/30",
          className,
        )}
        {...props}
      />
    </div>
  )
})
Input.displayName = "Input"
export { Input, type InputProps }
