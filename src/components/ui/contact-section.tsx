import { forwardRef } from "react"
import { Input } from "./input"
import { Button } from "./button"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { BentoCard, BentoCardWithIcon } from "./bento-card"
import { Mail, MapPin, Download } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      className="flex min-w-full snap-start items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            Get in Touch
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            Let's work together on your next project
          </p>
        </div>

        <BentoCard className="mb-4 text-center">
          <p className="text-white/90 text-lg font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Available for freelance opportunities and collaborations
          </p>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 font-open-sans-custom">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  Message
                </Label>
                <Textarea 
                  placeholder="Tell me..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] resize-none" 
                />
              </div>
              <Button
                className="w-full bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                type="button"
              >
                Send Message
              </Button>
            </form>
          </BentoCard>

          <div className="flex flex-col gap-4">
            <BentoCardWithIcon
              icon={<Mail className="h-5 w-5 text-white" />}
              title="Email"
            >
              <a href="mailto:leopaul.jay@outlook.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                leopaul.jay@outlook.com
              </a>
            </BentoCardWithIcon>

            <BentoCardWithIcon
              icon={<MapPin className="h-5 w-5 text-white" />}
              title="Location"
            >
              <p className="text-gray-300 text-sm">
                France
              </p>
            </BentoCardWithIcon>

            <div className="grid grid-cols-2 gap-4">
              <BentoCard hover>
                <h4 className="text-white font-semibold font-open-sans-custom mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Leo-polenord" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <SiGithub className="h-5 w-5" color="white" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <SiLinkedin className="h-5 w-5" color="white" />
                  </a>
                </div>
              </BentoCard>

              <BentoCard hover>
                <h4 className="text-white font-semibold font-open-sans-custom mb-4">Resume</h4>
                <a 
                  href="/cv.pdf" 
                  download
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Download className="h-5 w-5 text-white" />
                  <span className="text-white text-sm">My CV</span>
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
