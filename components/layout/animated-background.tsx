export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  )
}
