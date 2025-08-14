import { Code } from "lucide-react"
import { navigationItems } from "@/lib/data"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ernest Cheung
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
