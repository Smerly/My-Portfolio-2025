export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/50">
      <div className="container mx-auto text-center">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Ernest Cheung. Crafted with passion and precision.
        </p>
      </div>
    </footer>
  )
}
