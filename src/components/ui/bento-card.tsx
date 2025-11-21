import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function BentoCard({ children, className, hover = false }: BentoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-md p-6",
        "border-border/50 bg-card/50",
        "dark:border-white/10 dark:bg-white/5",
        hover && "hover:bg-card/70 dark:hover:bg-white/10 transition-colors",
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardIconProps {
  icon: ReactNode
  title: string
  children?: ReactNode
}

export function BentoCardWithIcon({ icon, title, children }: BentoCardIconProps) {
  return (
    <BentoCard hover>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-accent/20 dark:bg-white/10">
          {icon}
        </div>
        <h4 className="text-foreground font-semibold font-open-sans-custom">{title}</h4>
      </div>
      {children}
    </BentoCard>
  )
}
