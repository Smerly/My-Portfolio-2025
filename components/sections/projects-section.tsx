import { AlertCircle, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { Icon } from "@/components/ui/icon"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white mb-4`}
                    >
                      <Icon name={project.icon} />
                    </div>
                    {project.status && (
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white group/btn bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                      View Project
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                        </TooltipTrigger>
                        <TooltipContent className="absolute z-[99999] w-fit min-w-56 bg-slate-800 border-slate-700 text-white shadow-2xl px-3 py-2 rounded-md"
                          style={{
                            position: "absolute",
                            zIndex: 99999,
                            top: "-40px",
                            right: "0px",
                          }}
                          sideOffset={5}>
                          <p className="text-center">This is a private repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
