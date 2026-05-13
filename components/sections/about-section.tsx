import { MapPin, Zap, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a full-stack, front-end-leaning developer shipping products from conception to launch at multiple
                start-ups. I run TypeScript end to end: Next.js server to App Router client, typed APIs and services,
                Tailwind and shadcn, keeping types, UX, and deploys aligned.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I build curated datasets and authoring flows for coding agents: repo-grounded tasks, engineering traces,
                and eval rubrics across debugging, diffs, tests, and tools. With LLM and product work alongside, training
                and evaluation stay tied to real IDEs and CI, not benchmark-only wins.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Location</span>
                  </div>
                  <p className="text-white font-medium">{contactInfo.location}</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Status</span>
                  </div>
                  <p className="text-white font-medium">Available</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Dominican University of California</h4>
                    <p className="text-blue-400 font-medium">B.S. in Applied Computer Science</p>
                    <p className="text-slate-400">Front End Specialization • 2022</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                        Agile Development
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                        UX/UI Design
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                        Entrepreneurship
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
