import { forwardRef } from "react"
import { AboutQuote } from "./about-quote"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

export const AboutSection = forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useLanguage()
  
  return (
    <section
      id="about"
      ref={ref}
      className="flex min-w-full snap-start items-center justify-center px-4 py-20"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 size-full pointer-events-none",
          "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
          "bg-[size:12px_12px]",
          "opacity-30",
        )}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('about.title')}
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('about.subtitle')}
          </p>
        </div>
        <AboutQuote />
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
