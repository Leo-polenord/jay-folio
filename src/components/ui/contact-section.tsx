import { forwardRef } from "react"
import { Input } from "./input"
import { Button } from "./button"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { BentoCard, BentoCardWithIcon } from "./bento-card"
import { Mail, MapPin, Download } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { useLanguage } from "@/context/LanguageContext"

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useLanguage()
  
  return (
    <section
      id="contact"
      ref={ref}
      className="flex min-w-full snap-start items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground dark:[text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('contact.subtitle')}
          </p>
        </div>

        <BentoCard className="mb-4 text-center">
          <p className="text-foreground/90 text-lg font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                {t('contact.availability')}
          </p>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 font-open-sans-custom">
              {t('contact.form.title')}
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('contact.form.placeholder.name')}
                    className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    type="email"
                    placeholder={t('contact.form.placeholder.email')}
                    className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  {t('contact.form.message')}
                </Label>
                <Textarea 
                  placeholder={t('contact.form.placeholder.message')}
                  rows={5}
                  className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] resize-none" 
                />
              </div>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:[text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                type="button"
              >
                {t('contact.form.send')}
              </Button>
            </form>
          </BentoCard>

          <div className="flex flex-col gap-4">
            <BentoCardWithIcon
              icon={<Mail className="h-5 w-5 text-foreground" />}
              title={t('contact.email')}
            >
              <a href="mailto:leopaul.jay@outlook.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                leopaul.jay@outlook.com
              </a>
            </BentoCardWithIcon>

            <BentoCardWithIcon
              icon={<MapPin className="h-5 w-5 text-foreground" />}
              title={t('contact.location')}
            >
              <p className="text-muted-foreground text-sm">
                {t('contact.location.value')}
              </p>
            </BentoCardWithIcon>

            <div className="grid grid-cols-2 gap-4">
              <BentoCard hover>
                <h4 className="text-foreground font-semibold font-open-sans-custom mb-4">{t('contact.follow')}</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Leo-polenord" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <SiGithub className="h-5 w-5 text-foreground" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <SiLinkedin className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </BentoCard>

              <BentoCard hover>
                <h4 className="text-foreground font-semibold font-open-sans-custom mb-4">{t('contact.resume')}</h4>
                <a 
                  href="/cv.pdf" 
                  download
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-accent/20 hover:bg-accent/30 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                >
                  <Download className="h-5 w-5 text-foreground" />
                  <span className="text-foreground text-sm">{t('contact.download')}</span>
                </a>
              </BentoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
