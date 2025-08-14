import { Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((job, index) => {
              // Direct company-based color mapping
              const getGradientColors = (company: string) => {
                switch (company) {
                  case "Meridian":
                    return "#10b981, #14b8a6" // emerald to teal
                  case "Squared":
                    return "#14b8a6, #a855f7" // teal to purple
                  case "Co.Lab":
                    return "#3b82f6, #eab308" // blue to yellow
                  case "Omnes Education":
                    return "#6366f1, #3b82f6" // indigo to blue
                  default:
                    return "#64748b, #94a3b8" // fallback gray
                }
              }

              const gradientColors = getGradientColors(job.company)
              console.log(`${job.company}: ${gradientColors}`) // Debug log

              return (
                <Card
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          style={{
                            background: `linear-gradient(to right, ${gradientColors})`,
                          }}
                        >
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                            {job.title}
                          </CardTitle>
                          <CardDescription
                            className="text-lg font-medium"
                            style={{
                              background: `linear-gradient(to right, ${gradientColors})`,
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              color: "transparent",
                            }}
                          >
                            {job.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
