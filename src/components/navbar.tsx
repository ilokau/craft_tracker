
export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-base-100 border-b">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="text-lg font-semibold">Craft Tracker</div>
        <div className="flex items-center gap-2">
          <a href="#" className="btn btn-ghost btn-sm">Projects</a>
          <a href="#" className="btn btn-ghost btn-sm">New</a>
        </div>
      </div>
    </nav>
  )
}
