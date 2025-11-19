import { ShinyButton } from "./shiny-button"
import { useLanguage } from "@/context/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()
  
  const scrollToProjects = () => {
    const section = document.getElementById("projects")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center px-0 leading-5">
          <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
            <span className="font-open-sans-custom not-italic">Web</span>
            <span className="font-serif italic">folio</span>
          </h1>

          <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide leading-7 text-xl">
            {t('hero.subtitle.part1')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.clean')}</span>{" "}
            {t('hero.subtitle.part2')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.creative')}</span>
          </p>

          <div className="flex justify-center">
            <ShinyButton onClick={scrollToProjects} className="px-8 py-3 text-base">
              {t('hero.cta')}
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
