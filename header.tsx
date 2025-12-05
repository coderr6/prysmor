"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  theme: "light" | "dark"
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1200] transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div className="absolute inset-0 bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-custom)] transition-all"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo - EASY TO REPLACE */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* OPTION 1: Replace this with your logo image */}
            {/* Uncomment below and add your logo to /public/logo.png */}
            {/* <img src="/logo.png" alt="Prysmor Logo" className="w-10 h-10 object-contain" /> */}

            {/* OPTION 2: Default gradient logo (remove when adding image) */}
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-1)] transition-colors">
              Prysmor<span className="text-[var(--accent-1)]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-full bg-[var(--glass-highlight)] border border-[var(--border-custom)] flex items-center justify-center hover:bg-[var(--border-custom)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-[var(--text-main)]" />
              ) : (
                <Sun className="w-5 h-5 text-[var(--text-main)]" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[var(--glass-highlight)] border border-[var(--border-custom)] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--text-main)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--text-main)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-custom)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors border-b border-[var(--border-custom)] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onToggleTheme()
                setIsMobileMenuOpen(false)
              }}
              className="w-full mt-3 py-3 rounded-lg bg-[var(--glass-highlight)] border border-[var(--border-custom)] text-[var(--text-main)] hover:bg-[var(--border-custom)] transition-colors"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
