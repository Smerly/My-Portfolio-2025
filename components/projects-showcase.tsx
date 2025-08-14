import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  isPrivate: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://mystore.com",
    isPrivate: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: "https://mytasks.com",
    isPrivate: false,
  },
  {
    id: "3",
    title: "AI Chat Assistant",
    description: "An intelligent chat assistant powered by machine learning algorithms.",
    technologies: ["Python", "FastAPI", "OpenAI", "React"],
    githubUrl: "https://github.com/username/ai-chat",
    isPrivate: true,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with forecasts and interactive maps.",
    technologies: ["Vue.js", "D3.js", "Weather API", "Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://myweather.com",
    isPrivate: false,
  },
]

export function ProjectsShowcase() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </div>
                {project.isPrivate && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AlertCircle className="h-4 w-4 text-amber-500 ml-2 flex-shrink-0" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a private repo</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  )
}
