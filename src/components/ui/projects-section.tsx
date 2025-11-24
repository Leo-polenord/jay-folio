import { forwardRef } from "react"
import { ProjectCard } from "./project-card"
import { useLanguage } from "@/context/LanguageContext"

export const ProjectsSection = forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: "AutoPro",
      description:
        "AutoPro is a modern garage showcase built with Next.jsand TypeScript. It features a filterable vehicle catalog, online appointment requests, and an admin dashboard powered by Supabase.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Shadcn UI",
        "Supabase",
        "PostgreSQL",
      ],
      liveUrl: "https://autopro.leo-polenord.com",
      githubUrl: "https://github.com/Leo-polenord/autopro",
      showLiveDemo: false,
    },
    {
      title: "CTVR",
  description: "School project for managing buses and bus accidents in a fictional company, featuring complete role management, device geolocation, and quote preview.",
  technologies: ["Flask",  "React", "TypeScript", "Shadcn UI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Leo-polenord/ctvr",
      showLiveDemo: false,
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with Three.js animations, smooth scrolling, and responsive design. Built to showcase creative work.",
      technologies: ["React", "Three.js", "Motion", "Vite"],
      liveUrl: "https://leo-polenord.github.io/Webfolio/",
      githubUrl: "https://github.com/Leo-polenord/Webfolio",
      showLiveDemo: true,
    },
    {
      title: "WeatherReact",
      description: "Real-time weather application allowing users to check current weather conditions and forecasts using OpenWeatherMap API.",
      technologies: ["React", "TypeScript", "OpenWeatherMap API", "Shadcn UI", "Vite"],
      liveUrl: "https://pasdelinkyet.com",
      githubUrl: "https://github.com/Leo-polenord/WeatherReact",
      showLiveDemo: false,
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="flex min-w-full snap-start items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground dark:[text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('projects.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
