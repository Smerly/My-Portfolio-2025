import { Code, Database, Palette, Zap } from "lucide-react"

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const icons = {
    code: Code,
    database: Database,
    palette: Palette,
    zap: Zap,
  }

  const IconComponent = icons[name as keyof typeof icons]

  if (!IconComponent) {
    return <Code className={className} />
  }

  return <IconComponent className={className} />
}
