"use client"
import { useState, useEffect } from "react"
import { Moon, Sun } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"

export function FloatingNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const { language, setLanguage, t } = useLanguage()

  // Initialiser le thème dark au chargement
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
        <button
          onClick={toggleLanguage}
          className="rounded-2xl border backdrop-blur-md px-4 py-5 transition-all duration-300 border-border/50 bg-card/50 hover:bg-card/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/20"
          aria-label="Toggle language"
        >
          <div className="flex items-center gap-2">
            {language === 'en' ? (
              <>
                <svg className="w-5 h-5" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="900" height="600" fill="#ED2939"/>
                  <rect width="600" height="600" fill="#fff"/>
                  <rect width="300" height="600" fill="#002395"/>
                </svg>
                <span className="text-sm font-semibold text-foreground font-open-sans-custom">FR</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
                  <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
                  <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
                  <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
                  <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
                  <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                  <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                  <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                  <rect x="14" y="1" width="4" height="30" transform="rotate(90 16 16)" fill="#b92932"></rect>
                  <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
                  <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                <span className="text-sm font-semibold text-foreground font-open-sans-custom">EN</span>
              </>
            )}
          </div>
        </button>

        <div className="rounded-2xl border backdrop-blur-md px-8 py-5 border-border/50 bg-card/50 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-center gap-10">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-base font-open-sans-custom font-medium text-muted-foreground transition-colors hover:text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base font-open-sans-custom font-medium text-muted-foreground transition-colors hover:text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-open-sans-custom font-medium text-muted-foreground transition-colors hover:text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-open-sans-custom font-medium text-muted-foreground transition-colors hover:text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-2xl border backdrop-blur-md p-5 transition-all duration-300 border-border/50 bg-card/50 hover:bg-card/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/20 dark:[text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-300" />
          ) : (
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </button>
      </div>
    </nav>
  )
}
