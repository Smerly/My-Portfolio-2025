import { Mail, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Ernest Cheung
              </span>
            </h1>
            <div className="relative">
              <p className="text-xl md:text-2xl text-slate-300 mb-4">Full-Stack (Front-End Focused) Developer</p>
              <div className="flex items-center justify-center space-x-4 text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>React</span>
                </div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>NextJS</span>
                </div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Fully immersed in React, Redux, Node in TypeScript. Engineered products from 0 to 1 with multiple start-ups.
            Currently deep in LLM/GPT integration and application development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white group bg-transparent"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Floating Code Snippet */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-left">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-4">ernest-portfolio.tsx</span>
              </div>
              <pre className="text-sm text-slate-300">
                <code>
                  {`const developer = {
  name: "Ernest Cheung",
  focus: "Full-Stack (Front-End Focused)",
  specialties: ["React", "NextJS", "LLM/GPT"],
  experience: "0 to 1 product development",
  status: "Available for opportunities"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
