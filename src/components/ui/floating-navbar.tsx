"use client"
import { useState } from "react"
import { Moon, Sun } from 'lucide-react'

export function FloatingNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-3">
      <div className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Navigation Links - Compact */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection("features")}
              className="text-xs font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-xs font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Contact
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="ml-auto rounded-lg border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-300" />
            ) : (
              <Moon className="h-4 w-4 text-blue-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
