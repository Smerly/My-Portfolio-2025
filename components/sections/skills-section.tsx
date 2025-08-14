import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/lib/data"
import { Icon } from "@/components/ui/icon"

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white mb-2`}
                  >
                    <Icon name={category.icon} />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
