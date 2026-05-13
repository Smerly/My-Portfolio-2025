"use client"

import { Mail, Download, ArrowRight, Copy, CopyCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ernestcheung02@gmail.com")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

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
              <p className="text-xl md:text-2xl text-slate-300 mb-2">Full-Stack (Front-End Focused) Developer</p>
              <p className="text-sm md:text-base text-slate-500 mb-4 max-w-2xl mx-auto leading-relaxed">
                Next.js App Router, React, TypeScript, Node.js, REST and GraphQL APIs, PostgreSQL, Docker, AWS, and
                GitHub Actions CI/CD. Tailwind CSS, shadcn, curated datasets, and eval rubrics keep coding agents aligned
                with real repos and production CI.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-400 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>React</span>
                </div>
                <span className="hidden sm:inline text-slate-600">·</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-150"></div>
                  <span>TypeScript</span>
                </div>
                <span className="hidden sm:inline text-slate-600">·</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>Next.js</span>
                </div>
                <span className="hidden sm:inline text-slate-600">·</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
                  <span>Tailwind</span>
                </div>
                <span className="hidden sm:inline text-slate-600">·</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span>Agent data</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Next.js, TypeScript, Tailwind and shadcn, 0-to-1 with startups. LLM products and coding-agent data rooted in
            real repos and CI.
          </p>

          <div className="flex flex-col sm:flex-row gap-16 justify-center mb-16">
            <div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 group"
                onClick={() => window.open("mailto:ernestcheung02@gmail.com?subject=Hello&body=Hi%20there!", "_self")}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size='lg'
                className="w-fit mx-2 px-4 bg-transparent rounded-xl text-slate-300 shadow-lg shadow-blue-500/20"
                onClick={() => {
                  handleCopyEmail()
                }}
              >
                {isCopied ? <CopyCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white group bg-transparent"
              onClick={() => {
                window.open("/resume.pdf", "_blank")
              }}
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
  stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
  also: ["LLM products", "coding-agent datasets", "eval rubrics"],
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
