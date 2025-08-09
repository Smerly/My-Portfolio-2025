import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Palette,
  Zap,
  ArrowRight,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
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
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
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

      {/* Hero Section */}
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
                <p className="text-xl md:text-2xl text-slate-300 mb-4">Full-Stack MERN Developer</p>
                <div className="flex items-center justify-center space-x-4 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span>React</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <span>Redux</span>
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
              Crafting exceptional digital experiences with modern web technologies. Specialized in complex state
              management, performance optimization, and scalable architectures.
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
  skills: ["React", "TypeScript", "Node.js"],
  passion: "Building amazing user experiences",
  status: "Available for opportunities"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a passionate full-stack developer with a keen eye for detail and a love for creating seamless user
                  experiences. My journey spans both startup environments and established companies, where I've honed my
                  skills in modern web technologies.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Always eager to learn and adapt, I continuously explore new technologies and methodologies to deliver
                  cutting-edge solutions that make a real impact.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-slate-300">Location</span>
                    </div>
                    <p className="text-white font-medium">Alameda, CA</p>
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

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Full-Stack Engineer",
                  company: "Squared",
                  period: "Jan 2023 - Jun 2025",
                  color: "from-blue-500 to-cyan-500",
                  achievements: [
                    "Engineered and optimized React UI Components: Rich Text Editor, Context Menu, 404 page",
                    "Implemented end-to-end features: Github Commit Syncing with workspace via Github Webhooks",
                    "Spearheaded database migrations and orchestrated versioning of MongoDB and Postgres",
                    "Modernized legacy codebase: JavaScript to TypeScript, refactoring Redux implementations",
                  ],
                },
                {
                  title: "Front-End Developer",
                  company: "Co.Lab",
                  period: "Jun 2022 - Aug 2022",
                  color: "from-emerald-500 to-teal-500",
                  achievements: [
                    "Engineered Client-side functionality and design for MacOS application Multitask",
                    "Optimized user experience: reliability and speed by 55% (~1250ms)",
                    "Collaborated with Product Managers and UX/UI designers in Agile/SCRUM environment",
                  ],
                },
                {
                  title: "Front-End React Developer",
                  company: "Omnes Education",
                  period: "Jan 2022 - May 2022",
                  color: "from-purple-500 to-pink-500",
                  achievements: [
                    "Led front-end development for start-up OmniConnX as team lead",
                    "Increased workflow efficiency by 25% under rigorous timeline constraints",
                    "Restructured application to be responsive to mobile devices",
                  ],
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                            {job.title}
                          </CardTitle>
                          <CardDescription
                            className={`text-lg font-medium bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "MunchAI",
                  subtitle: "LLM Integrated Foodie App",
                  description:
                    "AI-powered food discovery app combining GPT-4 with custom LLM behavior, real-time user analysis, and image-based dish insights.",
                  tags: ["NextJS", "TypeScript", "OpenAI GPT-4", "Postgres", "Drizzle ORM"],
                  status: "Current",
                  gradient: "from-emerald-500 to-teal-500",
                  icon: <Zap className="w-6 h-6" />,
                },
                {
                  title: "CryptoTrack",
                  subtitle: "Crypto Currency Tracker",
                  description:
                    "Real-time cryptocurrency tracking application with advanced data visualization, trend analysis, and portfolio management features.",
                  tags: ["D3.js", "TailwindCSS", "JavaScript", "APIs"],
                  gradient: "from-blue-500 to-cyan-500",
                  icon: <Database className="w-6 h-6" />,
                },
                {
                  title: "Multitask",
                  subtitle: "MacOS Desktop Application",
                  description:
                    "Downloadable MacOS application enabling seamless Zoom meeting management from any application context.",
                  tags: ["ElectronJS", "AppleScript", "JavaScript", "MacOS"],
                  gradient: "from-purple-500 to-pink-500",
                  icon: <Code className="w-6 h-6" />,
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white mb-4`}
                      >
                        {project.icon}
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
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white group/btn bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Frontend",
                  icon: <Palette className="w-6 h-6" />,
                  gradient: "from-pink-500 to-rose-500",
                  skills: [
                    "React",
                    "Redux",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "TailwindCSS",
                    "SASS",
                    "HTML",
                    "CSS",
                  ],
                },
                {
                  title: "Backend",
                  icon: <Database className="w-6 h-6" />,
                  gradient: "from-blue-500 to-cyan-500",
                  skills: ["Node.js", "Python", "Flask", "SQLAlchemy", "APIs", "SQL"],
                },
                {
                  title: "Database",
                  icon: <Database className="w-6 h-6" />,
                  gradient: "from-emerald-500 to-teal-500",
                  skills: ["PostgreSQL", "MongoDB", "Firebase", "SQL"],
                },
                {
                  title: "Tools & More",
                  icon: <Code className="w-6 h-6" />,
                  gradient: "from-purple-500 to-indigo-500",
                  skills: ["Git", "Figma", "ElectronJS", "D3.js", "React Native", "Zustand"],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white mb-2`}
                    >
                      {category.icon}
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

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Ready to turn your ideas into reality? I'm always excited to discuss new opportunities and collaborate on
              innovative projects that make a difference.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white font-medium">ernestcheung02@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white font-medium">(510) 813-3250</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Ernest Cheung. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  )
}
