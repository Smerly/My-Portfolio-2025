import { ProjectsShowcase } from "@/components/projects-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-muted-foreground text-lg">A collection of my projects and work</p>
        </div>
        <ProjectsShowcase />
      </div>
    </main>
  )
}
