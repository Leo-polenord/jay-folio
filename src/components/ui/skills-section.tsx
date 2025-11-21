import { BentoCard } from "./bento-card"
import { useLanguage } from "@/context/LanguageContext"
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiThreedotjs,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiGit,
  SiVite,
  SiDocker,
  SiGithubactions
} from "react-icons/si"
import { Lightbulb, Users, BookOpen, Target, Zap, MessageSquare, GraduationCap, Palette } from "lucide-react"

const frontendSkills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiThreedotjs, name: "Three.js", color: "#000000" },
  { icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
]

const backendSkills = [
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiSharp, name: "C#", color: "#239120" },
  { icon: SiDotnet, name: "ASP.NET Core", color: "#512BD4" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
]

const toolsSkills = [
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
]

const softSkills = [
  { icon: Lightbulb, name: "skill.problemSolving", description: "skill.problemSolving.desc" },
  { icon: Target, name: "skill.attention", description: "skill.attention.desc" },
  { icon: Users, name: "skill.teamwork", description: "skill.teamwork.desc" },
  { icon: BookOpen, name: "skill.learning", description: "skill.learning.desc" },
  { icon: Zap, name: "skill.agile", description: "skill.agile.desc" },
  { icon: MessageSquare, name: "skill.communication", description: "skill.communication.desc" },
]

interface SkillCardProps {
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>
  name: string
  color: string
}

function SkillIcon({ icon: Icon, name, color }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="p-3 rounded-xl bg-accent/10 border border-border dark:bg-white/5 dark:border-white/10 group-hover:bg-accent/20 dark:group-hover:bg-white/10 group-hover:border-accent dark:group-hover:border-white/20 transition-all duration-300">
        <Icon size={32} color={color} />
      </div>
      <span className="text-xs text-muted-foreground font-open-sans-custom">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="skills" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground dark:[text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('skills.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <BentoCard className="flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-open-sans-custom">
                {t('skills.professional')}
              </h3>
              <div className="space-y-5">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg bg-accent/10 border border-border dark:bg-white/5 dark:border-white/10 group-hover:bg-accent/20 dark:group-hover:bg-white/10 group-hover:border-accent dark:group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold text-lg font-open-sans-custom">
                        {t(skill.name)}
                      </h4>
                      <p className="text-muted-foreground text-base mt-1">
                        {t(skill.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-open-sans-custom">
                {t('skills.beyond')}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 border border-border dark:bg-white/5 dark:border-white/10 group-hover:bg-accent/20 dark:group-hover:bg-white/10 group-hover:border-accent dark:group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-lg font-open-sans-custom">
                      {t('beyond.education')}
                    </h4>
                    <p className="text-muted-foreground text-base mt-1">
                      {t('beyond.education.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 border border-border dark:bg-white/5 dark:border-white/10 group-hover:bg-accent/20 dark:group-hover:bg-white/10 group-hover:border-accent dark:group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <Palette className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-lg font-open-sans-custom">
                      {t('beyond.design')}
                    </h4>
                    <p className="text-muted-foreground text-base mt-1">
                      {t('beyond.design.desc')}
                    </p>
                  </div>
                </div>

                </div>
            </BentoCard>
          </div>

          <div className="flex flex-col gap-4">
            <BentoCard>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-open-sans-custom">
                {t('skills.frontend')}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {frontendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>

            <BentoCard>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-open-sans-custom">
                {t('skills.backend')}
              </h3>
              <div className="grid grid-cols-4 gap-6">
                {backendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>

            <BentoCard>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-open-sans-custom">
                {t('skills.tools')}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {toolsSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
