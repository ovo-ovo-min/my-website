"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/projects", label: "项目" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          贾而比
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full transition-colors",
                pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-overlay",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-overlay transition-colors"
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-base rounded-xl transition-colors",
                    pathname === link.href
                      ? "text-accent bg-accent/10 font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-overlay",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


