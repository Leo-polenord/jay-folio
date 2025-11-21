import { forwardRef } from "react"
import { ProjectCard } from "./project-card"
import { useLanguage } from "@/context/LanguageContext"

export const ProjectsSection = forwardRef<HTMLElement>((_props, ref) => {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration. Features include product filtering, cart management, and secure checkout.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with Three.js animations, smooth scrolling, and responsive design. Built to showcase creative work.",
      technologies: ["React", "Three.js", "Framer Motion", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps, forecasts, and beautiful data visualizations using Chart.js.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
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
