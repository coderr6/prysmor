"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-1 z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
