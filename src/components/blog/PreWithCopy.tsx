"use client"

import { useState, useRef } from "react"
import { Check, Copy } from "lucide-react"

export function PreWithCopy({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  async function handleCopy() {
    const code = preRef.current?.querySelector("code")?.textContent || ""
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="relative group">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white/60 opacity-0 transition-all duration-200 hover:bg-white/20 hover:text-white/90 group-hover:opacity-100"
        aria-label="复制代码"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}
