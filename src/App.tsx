import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="hero bg-base-200 min-h-[30vh] py-8">
        <div className="hero-content flex-col gap-4 py-0 lg:flex-row-reverse lg:gap-10">
          <img
            src="/assets/images/knitting.png"
            alt="knitting icon"
            className="max-w-xs"
          />
          <div>
            <h1 className="text-4xl font-bold lg:text-5xl">Craft Tracker</h1>
            <p className="py-4">
              Track your crochet and knitting projects easily!
            </p>
            <button className="btn btn-soft btn-secondary">New Project</button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <h2 className="text-2xl font-bold px-3 py-3">Your Projects</h2>
      </div>
      <div className="divider" />
    </>
  )
}

export default App
